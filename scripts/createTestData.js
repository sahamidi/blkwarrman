const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const warrantyAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS"; // replace with actual deployed contract address
  const Warranty = await hre.ethers.getContractAt("Warranty", warrantyAddress);

  console.log("Inserting test data...");

  // Create a few sample warranties
  await Warranty.createWarranty(
    Math.floor(Date.now() / 1000),                    // startDate in seconds
    Math.floor(Date.now() / 1000) + 31536000,         // endDate (1 year later in seconds)
    "123-456-789"                                     // productSerialNumber
  );
  console.log("Test warranty 1 created.");

  await Warranty.createWarranty(
    Math.floor(Date.now() / 1000),                    // startDate in seconds
    Math.floor(Date.now() / 1000) + 63072000,         // endDate (2 years later in seconds)
    "987-654-321"                                     // productSerialNumber
  );
  console.log("Test warranty 2 created.");

  console.log("All test data inserted.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });