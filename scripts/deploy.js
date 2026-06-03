const hre = require("hardhat");

async function main() {
  const InstitutionalTreasury = await hre.ethers.getContractFactory("InstitutionalTreasury");
  const treasury = await InstitutionalTreasury.deploy(["0xYourOwner1", "0xYourOwner2"], 2);
  await treasury.deployed();
  console.log("InstitutionalTreasury deployed to:", treasury.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});