require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const privateKey = process.env.PRIVATE_KEY;
const projectId = process.env.PROJECT_ID;

if (privateKey.error) {
  throw privateKey.error;
}

if (projectId.error) {
  throw projectId.error;
}

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey],
      gasPrice: 8000000000,
    },
    mainnet: {
      url: `https://arbitrum-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
