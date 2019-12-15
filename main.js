const { Block } = require('./block');
const { Blockchain } = require('./blockchain');

let ivanCoin = new Blockchain(2);
console.log("Mining block 1 ...");
ivanCoin.addBlock(new Block(1,Date.now(), {amount : 4}));
console.log("Mining block 2 ...");
ivanCoin.addBlock(new Block(2,Date.now(), {amount : 5}));
