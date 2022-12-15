const steth = artifacts.require("StETHERC4626");
// const address = require("./3_migrate_erc20")

module.exports = function (deployer) {
deployer.deploy(steth, "0xc943b293eaCC0545a9022754A12Fc04DA8D8fE58");
};

// deployer.deploy(steth, address);

// development address -> 0x04aF71744A6fb7720b2295AeEc3e248B87fC42Ff