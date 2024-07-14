import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // console.log(hre.network)
  // console.log(deployer)

  const bty = await deploy("Bty", {
    from: deployer,
    log: true,
  });

  console.log(`Bty contract: `, bty.address);
};
export default func;
func.id = "bty"; // id required to prevent reexecution
func.tags = ["Bty"];
