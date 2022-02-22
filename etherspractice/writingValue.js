//this code writes to the contract and sends ethers as well

const ethers = require('ethers');

const network = 'http://127.0.0.1:8545/';
const provider = new ethers.providers.JsonRpcProvider(network);

const signer = provider.getSigner('0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc')

const contractAddress = '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318';

const abi = [
    'function getAge() external view returns(uint)',
    'function setAge(uint _age) external payable',
    'function checkBalance() external view returns(uint)'
]

const contract = new ethers.Contract(contractAddress, abi, signer);

async function write() {

    const txt0 = await contract.getAge();
    console.log("age before =", txt0.toString())

    const txt1 = await contract.setAge('10',
        {
            value: ethers.utils.parseEther('500')
        })
    console.log("transaction=", txt1.hash)

    const txt2 = await contract.getAge();
    console.log("age after =", txt2.toString())

    const txt3 = await contract.checkBalance();
    console.log("contract balance =", ethers.utils.formatEther(txt3));


}
write();

















/*const pvtKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'

const signer = new ethers.Wallet(pvtKey, provider);
console.log(signer)

const receiver = '0x70997970c51812dc3a010c7d01b50e0d17dc79c8';

const amount = '1000';

const tx = {
    to: receiver,
    value: ethers.utils.parseEther(amount)
}

 async function send() {
    const send = await signer.sendTransaction(tx);
    console.log("trnx= ", send.hash)

    const balance =await provider.getBalance('0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc')
    console.log("balance  =", balance.toString())
}
send()
 */