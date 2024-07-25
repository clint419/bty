import { mine } from "@nomicfoundation/hardhat-network-helpers";
import { ethernal, ethers, upgrades } from "hardhat";

async function main() {
  const Bty = await ethers.getContractFactory("Bty");
  const params = [
    "0xAADb4239dDB696C3a63beAd92ADB6cA30Ea66D3b",
    "0xAADb4239dDB696C3a63beAd92ADB6cA30Ea66D3b",
    "0xAADb4239dDB696C3a63beAd92ADB6cA30Ea66D3b",
    "0xAADb4239dDB696C3a63beAd92ADB6cA30Ea66D3b",
  ];
  const bty = await upgrades.deployProxy(Bty, params);
  await bty.waitForDeployment();
  console.log("Bty token deployed to:", await bty.getAddress());
  await ethernal.push({
    name: "Bty",
    address: await bty.getAddress(),
  });
  await mine(100);
  console.log(await ethers.provider.getBlockNumber());
}
main()
  .then(() => {
    console.log("Deployed end!");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
