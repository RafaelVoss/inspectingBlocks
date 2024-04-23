const { ethers } = require("ethers");
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const INFURA_ID = process.env.INFURA_ID;
const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const main = async () => {
    
    const block = await provider.getBlockNumber();

    console.log(`\nBlock Number: ${block}\n`);

    const blockInfo = await provider.getBlock(block);
    const transaction = await provider.getTransaction(blockInfo.transactions[0]);

    // console.log(blockInfo);
    console.log(`\ntransaction hash: ${blockInfo.transactions[0]}\n`);
    console.log(transaction);

    // CODE BELOW ONLY WORKS ON ETHERS JS V5 NOT ON V6
    // const blockWithTransactions = await provider.getBlockWithTransactions(block);
    // console.log(blockWithTransactions);
}

main();