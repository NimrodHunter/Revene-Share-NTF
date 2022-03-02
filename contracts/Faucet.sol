// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

//solhint-disable-line
contract Faucet {

    uint256 private constant maxClaim = 10000;
    mapping(address => uint256) private claimed;

    constructor() {}

    function claim(address token, uint256 amount) internal virtual {
        require(claimed[msg.sender] + amount < maxClaim, "exceed max amount to claim");
        require(_transferToken(token, msg.sender, amount), "out of funds");
        claimed[msg.sender] += amount;
        emit Claimed(msg.sender, token, amount);
    }

    function _transferToken(address token, address to, uint256 amount) internal virtual returns (bool) {
        require(to != address(0), "must be valid address");
        require(amount > 0, "you must send something");
        SafeERC20.safeTransfer(IERC20(token), to, amount);
        return true;
    }

    // Event
    event Claimed(address indexed sender, address indexed token, uint256 indexed amount);
} 