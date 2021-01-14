const path = require("path");
const fs = require("fs");
const solc = require("solc");

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf8");

let compilerInput = {
  language: "Solidity",
  sources: {
    "Lottery.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
console.log("Compiling contract");

let compiledContract = JSON.parse(solc.compile(JSON.stringify(compilerInput)));

console.log("Contract Compiled");

console.log(compiledContract)
const interface = compiledContract.contracts["Lottery.sol"]["Lottery"].abi;
const bytecode =
  compiledContract.contracts["Lottery.sol"]["Lottery"].evm.bytecode.object;

module.exports = {
  interface,
  bytecode,
};