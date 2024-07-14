// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.9;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract Bty is ERC20("BTY", "BTY"), Ownable {
    constructor() Ownable(msg.sender) {}

    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }
}
