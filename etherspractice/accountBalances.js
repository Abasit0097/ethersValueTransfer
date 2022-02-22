const etheres = require('ethers');

const network = 'http://127.0.0.1:8545/';

const provider = etheres.getDefaultProvider(network);

const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
const signer = new etheres.Wallet(privateKey, provider);

const tx = {
    to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    value: etheres.utils.parseEther('1000')
}



async function Balance() {
    const getBalance = await provider.getBalance('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')
    console.log("balance =", getBalance.toString())

    const sendTransaction = await signer.sendTransaction(tx)
    console.log("transaction =", sendTransaction)

    const a = await provider.getGasPrice();
    console.log("gasPrice =", a.toString())

    const b = await provider.getBlockNumber();
    console.log("block# =", b.toString())
}


Balance()