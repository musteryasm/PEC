require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { NODE_URL, PRIVATE_KEY } = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: NODE_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
