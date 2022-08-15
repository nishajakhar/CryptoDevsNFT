//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.6;

  import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
  import "@openzeppelin/contracts/access/Ownable.sol";
  import "./IWhitelist.sol";

contract CryptoDevs is ERC721Enumerable, Ownable {


    constructor() {
     
    }
