async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const WarrantyFactory = await ethers.getContractFactory("Warranty"); // Changed to WarrantyFactory to avoid redeclaration
    const warranty = await WarrantyFactory.deploy(); // Deploying Warranty contract
    await warranty.deployed();
  
    console.log("Warranty contract deployed to:", warranty.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });