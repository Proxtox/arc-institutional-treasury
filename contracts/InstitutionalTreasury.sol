// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title InstitutionalTreasury
/// @notice Basic multi-sig style treasury with scheduled payments for Arc
contract InstitutionalTreasury {
    mapping(address => bool) public isOwner;
    uint256 public requiredConfirmations;

    event PaymentScheduled(address indexed to, uint256 amount, uint256 executeAfter);
    event PaymentExecuted(address indexed to, uint256 amount);

    constructor(address[] memory owners, uint256 _required) {
        for (uint i = 0; i < owners.length; i++) {
            isOwner[owners[i]] = true;
        }
        requiredConfirmations = _required;
    }

    function schedulePayment(address to, uint256 amount, uint256 delay) external {
        require(isOwner[msg.sender], "Not authorized");
        emit PaymentScheduled(to, amount, block.timestamp + delay);
    }

    function executePayment(address to, uint256 amount) external {
        require(isOwner[msg.sender], "Not authorized");
        payable(to).transfer(amount);
        emit PaymentExecuted(to, amount);
    }
}