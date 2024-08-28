const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
describe("SimpleStorage", () => {
  let simpleStorage;
  let simpleStorageF;
  beforeEach(async function () {
    simpleStorageF = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageF.deploy();
  });
  it("Should start with Fav number 0", async function () {
    const currentValue = await simpleStorage.retrive();
    const expectedValue = 0;
    assert.equal(currentValue.toString(), expectedValue);
  });
  it("Should change the value to the input", async function () {
    const changeValue = await simpleStorage.changeFav("100");
    const expectedValue = 101;
    const newValue = await simpleStorage.retrive();
    assert.equal(newValue.toString(), expectedValue);
  });
});
