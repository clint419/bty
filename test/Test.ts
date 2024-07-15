import { expect } from "chai";
import { ethers } from "hardhat";


describe("Test", function () {
  const tester: string = "0x52F182434910DB60FE2b75a4C1924218E9EC1D93";

  before(async function () {
    const test = await ethers.getContractFactory("Test");
    this.testContract =  await test.deploy(tester);
  })

  it("Test deploy", async () => {
    const result = this.ctx.testContract;
    console.log(await result.getAddress());
    console.log(await result.SWORD());
    console.log(await result.owner());
    const ll = await result.setTester(tester);
    console.log(ll.toJSON());
    expect(await result.owner()).equal("0xB9FCDb62FEB9521D69c57195bf808e9CE24c2B30");
    expect(await result.SWORD()).equal(10n);
    expect(await result.getTester()).equal(tester);
  });

  it("Test owner", async () => {
    const result = this.ctx.testContract
    expect(await result.owner()).equal("0xB9FCDb62FEB9521D69c57195bf808e9CE24c2B30");
  });

  it("Test constant", async () => {
    const result =  this.ctx.testContract
    expect(await result.SWORD()).equal(10n);
  });
});
