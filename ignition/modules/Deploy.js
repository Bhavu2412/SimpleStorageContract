const { ethers, run, network } = require("hardhat");

async function main() {
  const SSF = await ethers.getContractFactory("SimpleStorage");

  console.log("Deploying...\nPlease wait... \n");
  const SimpleStorage = await SSF.deploy();
  await SimpleStorage.waitForDeployment();

  const contractAddress = await SimpleStorage.getAddress();
  console.log("Contract deployed to :", await SimpleStorage.getAddress());

  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API) {
    await SimpleStorage.waitForDeployment();
    await verify(contractAddress, []);
  }
  const currentValue = await SimpleStorage.retrive();
  console.log("Current value is ->", currentValue);

  const transactionResponse = await SimpleStorage.changeFav(100);
  await transactionResponse.wait(1);

  const updatedValue = await SimpleStorage.retrive();
  console.log("New value is ->", updatedValue);
}

async function verify(contractAddress, args) {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified.");
    } else {
      console.log(e);
    }
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
