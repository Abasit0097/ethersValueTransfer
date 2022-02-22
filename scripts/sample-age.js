// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");
//const { ether } = require("ethers");

const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Age = await hre.ethers.getContractFactory("ages");
  const age = await Age.deploy();

  //const age = await Age.attach('0x5FbDB2315678afecb367f032d93F642f64180aa3');

  //const[ addr1, addr2] =await ethers.getSigners();
  //console.log("addr1 =", addr1.address)

  //const reading = await age.getAge()
  //console.log("age =", reading.toString());


  await age.deployed();

  console.log("Age deployed to:", age.address);
/* 
  const txt1 = await age.connect(addr2).setAge(
    //to:age.address,
    '2',{
    value: ethers.utils.parseEther('1')
  })
  console.log("sender address =",txt1.from)

  const txt2 = await age.getAge();
  console.log("age = ",txt2.toString())

  const balance = await ethers.provider.getBalance(age.address)
  console.log("contract Balance = ", ethers.utils.formatEther(balance)) */
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
