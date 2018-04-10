pragma solidity 0.4.21;


import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";
import "./external/SafeMathUint256.sol";
import "./lib/Set.sol";


/**
 * @title {Set}
 * @author Felix Feng
 * @dev Implementation of the basic {Set} token.
 */
contract SetToken is StandardToken, DetailedERC20("", "", 18), Set {
  using SafeMathUint256 for uint256;

  uint256 public totalSupply;
  address[] public components;
  uint[] public units;
  mapping(address => bool) internal isComponent;


  struct PartialRedeemStatus {
    uint unredeemedBalance;
    bool isRedeemed;
  }

  // Mapping of token address -> user address -> partialRedeemStatus
  mapping(address => mapping(address => PartialRedeemStatus)) public unredeemedComponents;

  event LogPartialRedemption(
    address indexed _sender,
    uint indexed _quantity
  );

  modifier hasSufficientBalance(uint quantity) {
    // Check that the sender has sufficient components
    // Since the component length is defined ahead of time, this is not 
    // an unbounded loop
    require(balances[msg.sender] >= quantity);
    _;
  }

  modifier preventRedeemReEntrancy(address sender, uint quantity) {
    // To prevent re-entrancy attacks, decrement the user's Set balance
    balances[sender] = balances[sender].sub(quantity);

    // Decrement the total token supply
    totalSupply = totalSupply.sub(quantity);
    _;
  }

  /**
   * @dev Constructor Function for the issuance of an {Set} token
   * @param _components address[] A list of component address which you want to include
   * @param _units uint[] A list of quantities in gWei of each component (corresponds to the {Set} of _components)
   */
  function SetToken(address[] _components, uint[] _units) public {
    // There must be component present
    require(_components.length > 0);

    // There must be an array of units
    require(_units.length > 0);

    // The number of components must equal the number of units
    require(_components.length == _units.length);

    for (uint i = 0; i < _units.length; i++) {
      // Check that all units are non-zero. Negative numbers will underflow
      uint currentUnits = _units[i];
      require(currentUnits > 0);

      // Check that all addresses are non-zero
      address currentComponent = _components[i];
      require(currentComponent != address(0));

      // add component to isComponent mapping
      isComponent[currentComponent] = true;
    }

    // As looping operations are expensive, checking for duplicates will be
    // on the onus of the application developer

    // NOTE: It will be the onus of developers to check whether the addressExists
    // are in fact ERC20 addresses

    components = _components;
    units = _units;
  }

  /**
   * @dev Function to convert component into {Set} Tokens
   *
   * Please note that the user's ERC20 component must be approved by
   * their ERC20 contract to transfer their components to this contract.
   *
   * @param quantity uint The quantity of component desired to convert in Wei
   */
  function issue(uint quantity) public returns (bool success) {
    // Transfers the sender's components to the contract
    // Since the component length is defined ahead of time, this is not 
    // an unbounded loop
    for (uint i = 0; i < components.length; i++) {
      address currentComponent = components[i];
      uint currentUnits = units[i];

      // Transfer value is defined as the currentUnits (in GWei)
      // multiplied by quantity in Wei divided by the units of gWei.
      // We do this to allow fractional units to be defined
      uint transferValue = currentUnits.fxpMul(quantity, 10**9);

      // Protect against the case that the gWei divisor results in a value that is
      // 0 and the user is able to generate Sets without sending a balance
      assert(transferValue > 0);

      assert(ERC20(currentComponent).transferFrom(msg.sender, this, transferValue));
    }

    // If successful, increment the balance of the user’s {Set} token
    balances[msg.sender] = balances[msg.sender].add(quantity);

    // Increment the total token supply
    totalSupply = totalSupply.add(quantity);

    LogIssuance(msg.sender, quantity);

    return true;
  }

  /**
   * @dev Function to convert {Set} Tokens into underlying components
   *
   * The ERC20 components do not need to be approved to call this function
   *
   * @param quantity uint The quantity of Sets desired to redeem in Wei
   */
  function redeem(uint quantity)
    public
    hasSufficientBalance(quantity)
    preventRedeemReEntrancy(msg.sender, quantity)
    returns (bool success)
  {
    for (uint i = 0; i < components.length; i++) {
      address currentComponent = components[i];
      uint currentUnits = units[i];

      // Transfer value is defined as the currentUnits (in GWei)
      // multiplied by quantity in Wei divided by the units of gWei.
      // We do this to allow fractional units to be defined
      uint transferValue = currentUnits.fxpMul(quantity, 10**9);

      // Protect against the case that the gWei divisor results in a value that is
      // 0 and the user is able to generate Sets without sending a balance
      assert(transferValue > 0);

      // The transaction will fail if any of the components fail to transfer
      assert(ERC20(currentComponent).transfer(msg.sender, transferValue));
    }

    LogRedemption(msg.sender, quantity);

    return true;
  }

  /**
   * @dev Function to withdraw a portion of the component tokens of a Set
   *
   * This function should be used in the event that a component token has been
   * paused for transfer temporarily or permanently. This allows users a
   * method to withdraw tokens in the event that one token has been frozen
   *
   * @param quantity uint The quantity of Sets desired to redeem in Wei
   * @param excludedComponents address[] The list of tokens to exclude
   */
  function partialRedeem(uint quantity, address[] excludedComponents)
    public
    hasSufficientBalance(quantity)
    preventRedeemReEntrancy(msg.sender, quantity)
    returns (bool success)
  {
    // Excluded tokens should be less than the number of components
    // Otherwise, use the normal redeem function
    require(excludedComponents.length < components.length);

    for (uint i = 0; i < components.length; i++) {
      bool isExcluded = false;

      // Transfer value is defined as the currentUnits (in GWei)
      // multiplied by quantity in Wei divided by the units of gWei.
      // We do this to allow fractional units to be defined
      uint transferValue = units[i].fxpMul(quantity, 10**9);

      // Protect against the case that the gWei divisor results in a value that is
      // 0 and the user is able to generate Sets without sending a balance
      assert(transferValue > 0);

      // This is unideal to do a doubly nested loop, but the number of excludedComponents
      // should generally be a small number
      for (uint j = 0; j < excludedComponents.length; j++) {
        address currentExcluded = excludedComponents[j];

        // Check that excluded token is indeed a component in this contract
        assert(isComponent[currentExcluded]);

        // If the token is excluded, add to the user's unredeemed component value
        if (components[i] == currentExcluded) {
          // Ensures there are no duplicates
          bool currentIsRedeemed = unredeemedComponents[components[i]][msg.sender].isRedeemed;
          assert(currentIsRedeemed == false);

          unredeemedComponents[components[i]][msg.sender].unredeemedBalance += transferValue;

          // Mark redeemed to ensure no duplicates
          unredeemedComponents[components[i]][msg.sender].isRedeemed = true;

          isExcluded = true;

        }
      }

      if (isExcluded == false) {
        // The transaction will fail if any of the components fail to transfer
        assert(ERC20(components[i]).transfer(msg.sender, transferValue));  
      }
    }

    // Mark all excluded components not redeemed
    for (uint k = 0; k < excludedComponents.length; k++) {
      address currentExcludedToUnredeem = excludedComponents[k];
      unredeemedComponents[currentExcludedToUnredeem][msg.sender].isRedeemed = false;
    }

    LogPartialRedemption(msg.sender, quantity);

    return true;
  }

  function redeemExcluded(uint quantity, address excludedComponent)
    public
    returns (bool success)
  {
    // Check there is enough balance
    uint remainingBalance = unredeemedComponents[excludedComponent][msg.sender].unredeemedBalance;
    require(remainingBalance >= quantity);

    // To prevent re-entrancy attacks, decrement the user's Set balance
    unredeemedComponents[excludedComponent][msg.sender].unredeemedBalance = remainingBalance.sub(quantity);

    assert(ERC20(excludedComponent).transfer(msg.sender, quantity));

    return true;
  }

  function componentCount() public view returns(uint componentsLength) {
    return components.length;
  }

  function getComponents() public view returns(address[]) {
    return components;
  }

  function getUnits() public view returns(uint[]) {
    return units;
  }
}
