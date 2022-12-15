truffle init
truffle dashboard
truffle init
truffle dashboard
web3.eth.sendTransaction({from: accounts[0], to: "0x6E4297Cb60b0d1BaA1Faef90050B479626B1634a", value: 1e15}) // your wallet or any other thing
truffle migrate --network dashboard - compiling Truffle
truffle migrate --network goerli -> deploy on goerli
npm i @truffle/hdwallet-provider
truffle migrate --reset
npm i dotenv
truffle console --network development
migrate -> deployment
let token = await MyToken.deployed()
token.awardItem(accounts[1], "blablabla");
ewentualnie token.awardItem(accounts[1], "blablabla". {gas: 8000000}); // i podaje ile tam gazu chce zeby zlapalo jak nie lapie

DEBUGG:

debug 0xe4d8c0d90ef9bd4311f94984f5c5278a56c33db1f13aab4a62cc7d025a69645b (tutaj dajesz transakcje ktora chcesz debuggowac)
help -> prints commands