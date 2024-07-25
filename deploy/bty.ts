import { ethers, upgrades } from "hardhat";

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
}

void main().then(() => console.log("Deployed end!"));
