import { ethers } from "./ethers.js";

console.log(ethers);

const provider =  new ethers.providers.Web3Provider(window.ethereum);

console.log(provider);

await provider.send("eth_requestAccounts", []);

const signer = provider.getSigner();

// send 1 ether to this address : 

//const tx = await signer.sendTransaction({
//    to : "0xe8b415E4973573B33efF5023d5C33C83490CfE79",
//    value: ethers.utils.parseEther("100.0")
//}
//)

const balance = await provider.getBalance(signer.getAddress())
console.log(ethers.utils.formatEther(balance));