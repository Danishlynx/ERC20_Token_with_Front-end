const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");
async function main() {

// Verify the contract after deploying
await hre.run("verify:verify", {
address: "0x48c1c7C0fa1B5c89B554EC229BB6d804614A28aB",
constructorArguments: ["Nader Dabit Token", "NDT"],
});
}
// Call the main function and catch if there is any error
main()
.then(() => process.exit(0))
.catch((error) => {
console.error(error);
process.exit(1);
});