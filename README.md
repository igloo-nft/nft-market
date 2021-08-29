This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

# The Stack

- Ethereum Layer - Polygon
- Web application framework - Next.js
- Solidity development environment - Hardhat
- File Storage - IPFS
- Ethereum Web Client Library - Ethers.js

# Setting up localhost

1. To spin up a local network, open your terminal and run the following command, This should create a local network with 19 accounts:

```
$ npx hardhat node
```

2. Next, keep the node running and open a separate terminal window to deploy the contract. In a separate window, run the following command:

```
$ npx hardhat run scripts/deploy.js --network localhost
```
