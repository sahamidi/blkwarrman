async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Warranty = await ethers.getContractFactory("Warranty"); //Change SimpleStorage to Warranty
    const Warranty = await Warranty.deploy(); //Change SimpleStorage to Warranty

    console.log("Warranty deployed to:", Warranty.address); //Change SimpleStorage to Warranty
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });