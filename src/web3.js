import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  //we are in the browser, and metamast is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // preloading from server OR user does not have metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/P9cWIMe0PO6n3SWQcYzE'
  );
  web3 = new Web3(provider);
}

export default web3;
