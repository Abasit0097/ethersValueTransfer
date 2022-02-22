const ethers = require('ethers')

const network = 'http://127.0.0.1:8545/'

const provider = ethers.getDefaultProvider(network);

const contractAddress = '0x610178dA211FEF7D417bC0e6FeD39F05609AD788'

const abi = [
    'function getAge() external view returns(uint)',
    'function setAge(uint _age, uint amount) external payable',
    'function checkBalance() external view returns(uint)'
]

const privateKey = '0x8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61'

async function abc() {
    const signer = await new ethers.Wallet(privateKey, provider)
    console.log("signer=",  signer)
    
}
abc()

//const contract = new ethers.Contract(contractAddress, abi, signer, );


/*const tx = {
    from: signer.address,
    to: contractAddress,
    value: ethers.utils.parseEther('2'),
    gasPrice: gasPrice,
    gasLimit: ethers.utils.hexlify(1000000)
}*/


/* async function read() {
    const reading = await contract.getAge();
    console.log("reading contract =", reading.toString())

    const writing = await contract.setAge('385', {value: ethers.utils.parseEther('2')});
    console.log("reading contract =", writing.hash)

   // const valueTrans = await signer.sendTransaction(tx);

    const reading2 = await contract.getAge();
    console.log("reading2 contract =", reading2.toString())

    const contractBalance = await contract.checkBalance();
    console.log("contractBalance =", contractBalance.toString())
}

read(); */