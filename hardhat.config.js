require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");




const { ALCHEMY_API_KEY, PRIVATE_KEY, POLYGONSCAN_API_KEY } = process.env;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  paths: {
    artifacts: './src/artifacts',
  },

  networks: {
    hardhat: {
      chainId: 1337
    },
    polygon_mumbai: {
      url: process.env.ALCHEMY_API_KEY,
      accounts: [process.env.PRIVATE_KEY]
    }
    
  },

  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
  
  solidity: "0.8.20"
};
