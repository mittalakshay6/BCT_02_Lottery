const { reporters } = require("mocha");
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile.js");

const provider = new HDWalletProvider(
  "slush hungry cliff logic record purse finish liquid review apart crystal number",
  "https://rinkeby.infura.io/v3/0df63af4ef61477684b9fead205bc2b3"
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy from account ", accounts[0]);
    // console.log( await web3.eth.getBlock('latest'))
    const result = await new web3.eth.Contract(interface)
    .deploy({data: '0x' + bytecode, arguments: ["Hi There!"]})
    .send({gas: '10000000', from: accounts[0]});

    console.log("Contract deployed to ", result.options.address);
};
deploy();