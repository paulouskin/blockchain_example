const SHA256 = require('crypto-js/sha256');

class Block {

    constructor(timestamp, transactions, previousHash = ''){
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.nonce + this.timestamp 
            + this.previousHash + JSON.stringify(this.data)).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
    }

    hasValidTransactions() {
        for (const tx of this.transactions) {
            if (!tx.isValid) {
                return false;
            }
        }
        return true;
    }
}

module.exports.Block = Block;
