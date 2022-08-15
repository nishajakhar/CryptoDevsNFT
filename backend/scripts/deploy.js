// Import ethers from Hardhat package
const { ethers } = require("hardhat");

// Replace address of your whitelist contract
const WHITELIST_CONTRACT_ADDRESS = "0xBd28d3D193b10443C6456F96ec92f24450BecA8a";
// URL to extract Metadata for a Crypto Dev NFT
const METADATA_URL = "https://nft-collection-sneh1999.vercel.app/api/";

async function main() {

  // Whitelist Contract
  // const whitelistContract = await ethers.getContractFactory("Whitelist");
  // const deployedWhitelistContract = await whitelistContract.deploy(10);
  // console.log("Whitelist Contract Address:", deployedWhitelistContract.address);

  // After you deploy Whitelist, We need to pass its address to CryptoDevs
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(METADATA_URL, WHITELIST_CONTRACT_ADDRESS);
  console.log("Whitelist Contract Address:", deployedCryptoDevsContract.address);

}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
