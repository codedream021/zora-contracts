async function main() {
  const WRAPPED_FTM = '0x2d3d8878229419F5A1486C772021D020e6FF7Ed7'
  FANTOM_ADDRESS_REGISTRY = '0xcc87F822D277B6e3BF7065483254E9FB8B9F192e';
  const Contract = await ethers.getContractFactory('FantomPriceFeed');
  const contract = await Contract.deploy(
    FANTOM_ADDRESS_REGISTRY,
    WRAPPED_FTM
  );

  await contract.deployed();

  console.log('FantomPriceFeed deployed to', contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
