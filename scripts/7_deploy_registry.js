async function main() {
  // const Registry = await ethers.getContractFactory('FantomTokenRegistry');
  // const contract = await Registry.deploy();

  // await contract.deployed();

  // console.log('FantomTokenRegistry deployed to', contract.address);

  const tokenRegistry = await ethers.getContractAt('FantomTokenRegistry', '0x7faFca7587E1D288e8Ea72131B3e4348bb27154b');
  await tokenRegistry.add('0x2d3d8878229419F5A1486C772021D020e6FF7Ed7');

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
