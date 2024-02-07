// Web3 utilities
import { ethers } from 'ethers';

// Function to initialize a Web3 provider
export const initWeb3Provider = () => {
  // This example uses MetaMask's provider. Adjust according to your needs.
  if (typeof window.ethereum !== 'undefined') {
    return new ethers.providers.Web3Provider(window.ethereum);
  } else {
    console.error('Please install MetaMask!');
    return null;
  }
};

// Convert Ether to Wei
export const toWei = (etherValue) => {
  return ethers.utils.parseEther(etherValue.toString());
};

// Convert Wei to Ether
export const toEther = (weiValue) => {
  return ethers.utils.formatEther(weiValue);
};

// Shorten Ethereum addresses
export const shortenAddress = (address, chars = 4) => {
  return `${address.substring(0, chars + 2)}...${address.substring(address.length - chars)}`;
};

// Function to get the current network
export const getCurrentNetwork = async (provider) => {
  const network = await provider.getNetwork();
  return network.name;
};

// Function to request account access and connect wallet
export const connectWallet = async (provider) => {
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  return await signer.getAddress();
};

// Example usage:
/*
const provider = initWeb3Provider();
if (provider) {
  const address = await connectWallet(provider);
  console.log('Wallet address:', address);

  const network = await getCurrentNetwork(provider);
  console.log('Connected network:', network);
}
*/
