const {Blockchain, Transaction}= require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('Enter your private key here');
const myWalletAddress = myKey.getPublic('hex');

const tesCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
tesCoin.addTransaction(tx1);

tesCoin.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
tesCoin.addTransaction(tx2);

tesCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of eldhose is', tesCoin.getBalanceOfAddress(myWalletAddress));

console.log();
console.log('Blockchain valid?', tesCoin.isChainValid() ? 'Yes' : 'No');