import abi from "./abi.js";

const web3 = new Web3('http://localhost:8545');
let RuneContract = new web3.eth.Contract(abi, "0x2F8281050849075077aB0b2fbAc6630654f6dA0e");

console.log(RuneContract);
console.log(RuneContract.totalSupply())