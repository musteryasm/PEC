const { ethers } = require("hardhat");

async function main() {
  const NFT = await ethers.getContractFactory("NFT");
  const DeployedNFT = NFT.deploy();
  // await DeployedNFT.deployed();
  console.log("NFT contract address: ", (await DeployedNFT).address);
  const MarketPlace = await ethers.getContractFactory("Marketplace");
  const DeployedMarketPlace = MarketPlace.deploy(1);
  // await DeployedMarketPlace.deployed();
  console.log(
    "MarketPlace contract address: ",
    (await DeployedMarketPlace).address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
