async function main() {
  // const Registry = await ethers.getContractFactory('FantomAddressRegistry');
  // const contract = await Registry.deploy();

  // await contract.deployed();

  // console.log('FantomAddressRegistry deployed to', contract.address);

  const addressRegistry = await ethers.getContractAt('FantomAddressRegistry', '0xcc87F822D277B6e3BF7065483254E9FB8B9F192e');
 
  // await addressRegistry.updateArtion('0xf447e7FCace3bABD58c1ef58F0a5F03637C1A2E5');
  // await addressRegistry.updateAuction('0x7523f5FBE540FAb456eB1712cfdA949894f0DEe4');
  // await addressRegistry.updateMarketplace('0x5cFFEa91d0e19E36a6756FDa4D3173742cBa207b');
  // await addressRegistry.updateBundleMarketplace('0xA8086941a6154B12760244D0BEea60A961Ace003');
  // await addressRegistry.updateNFTFactory('0x2D9fABDA8e7f6aDF40a7cb6fA1Fb49B64f4AD89C');
  // await addressRegistry.updateTokenRegistry('0x7faFca7587E1D288e8Ea72131B3e4348bb27154b');
  await addressRegistry.updatePriceFeed('0x5789d999319639edB246F8165567f35ab0791AAB');
  // await addressRegistry.updateArtFactory('0x448e7412946E2A71f611032B33ce90F40ACe1622');  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
