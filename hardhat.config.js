require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Custom task to print account addresses
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
      console.log(account.address);
  }
});

module.exports = {
    solidity: "0.8.27",
    networks: {
        amoy: {
            url: "https://rpc-amoy.polygon.technology/",
            accounts: [`0x${process.env.PRIVATE_KEY}`] // Load private key from .env file
        }
    }
};