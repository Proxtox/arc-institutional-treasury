const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("InstitutionalTreasury", function () {
  let treasury;
  let owner1, owner2, user;

  beforeEach(async function () {
    [owner1, owner2, user] = await ethers.getSigners();
    const Treasury = await ethers.getContractFactory("InstitutionalTreasury");
    treasury = await Treasury.deploy([owner1.address, owner2.address], 2);
    await treasury.deployed();
  });

  it("Should allow scheduling payments by owners", async function () {
    await treasury.connect(owner1).schedulePayment(user.address, 100, 3600);
    // Event emission test would go here in full version
  });
});