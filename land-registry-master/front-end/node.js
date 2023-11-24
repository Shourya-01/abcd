var net = require('net');
var Web3 = require('web3');
//var web3 = new Web3('/home/cslab6/Downloads/geth-linux-amd64-1.10.8-26675454/blockchain/node2geth.ipc', net);
var web3 = new Web3('http://127.0.0.1:8551');
web3.eth.getAccounts(console.log);
console.log("Welcome to Land Registry System");