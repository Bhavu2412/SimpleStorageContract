require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("./tasks/block-number");
require("hardhat-gas-reporter");
require("solidity-coverage");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: process.env.REACT_APP_SEPOLIA_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: process.env.REACT_APP_HARDHAT_URL,
      chainId: 31337,
      // no account required
    },
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    // gasPrice: 21,
    coinmarketcap: process.env.COIN_M_C,
    url: process.env.REACT_APP_SEPOLIA_URL,
    outputFile: "gas-report.txt",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
  },
  solidity: "0.8.24",
};
