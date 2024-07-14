// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.9;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract Test is Ownable {
    uint256 public constant SWORD = 10;
    address private tester;
    constructor(address test) Ownable(msg.sender) {
        tester = test;
    }

    function setTester(address test) external onlyOwner {
        tester = test;
    }

    function getTester() external view returns (address) {
        return tester;
    }
}
