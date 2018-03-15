var Artone = artifacts.require("./Artone.sol");
var web3 = Artone.web3;
module.exports = function(deployer) {
  const tokenAmount = web3.toBigNumber('2e24'); 
  deployer.deploy(Artone, tokenAmount);
};
