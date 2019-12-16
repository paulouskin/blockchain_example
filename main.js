const { Blockchain } = require('./src/blockchain');
const { Transaction } = require('./src/transaction');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('71d72eeff6ecef7e0c1108cd60c13eeb6fb169f751c9ea83873ddc39aecfa72e');
const myWalletAddress = myKey.getPublic('hex');
let ivanCoin = new Blockchain(3);
const tx1 = new Transaction(myWalletAddress, 'public key of recipient', 10);
tx1.signTransaction(myKey);
ivanCoin.addTransaction(tx1);
ivanCoin.minePendingTransactions(myWalletAddress);
console.log("current balance : " + ivanCoin.getBalanceOfAddress(myWalletAddress) + "; chain valid: " + ivanCoin.isChainValid());
