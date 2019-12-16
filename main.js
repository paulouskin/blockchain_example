const { Block } = require('./src/block');
const { Blockchain } = require('./src/blockchain');
const { Transaction } = require('./src/transaction');

let ivanCoin = new Blockchain(3);
let miningAddress = "somewhere in Belarus";
ivanCoin.createTransaction(new Transaction("address 1", "address 2", "100"));
ivanCoin.minePendingTransactions(miningAddress);
console.log("My balance : " + ivanCoin.getBalanceOfAddress(miningAddress));
ivanCoin.createTransaction(new Transaction("address 2", "address 1", "60"));
ivanCoin.minePendingTransactions(miningAddress);
console.log("My balance : " + ivanCoin.getBalanceOfAddress(miningAddress));