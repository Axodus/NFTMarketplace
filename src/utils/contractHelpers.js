// Contract helper functions
import { ethers } from 'ethers';

// Function to get a generic contract instance
export const getContract = (address, abi, signerOrProvider) => {
  return new ethers.Contract(address, abi, signerOrProvider);
};

// Function to initialize a contract with a signer
export const initContractWithSigner = (address, abi, provider) => {
  const signer = provider.getSigner();
  return getContract(address, abi, signer);
};

// Function to send a transaction to a contract method
export const sendTransaction = async (contract, methodName, args = []) => {
  try {
    const transactionResponse = await contract[methodName](...args);
    await transactionResponse.wait();
    return transactionResponse;
  } catch (error) {
    console.error(`Failed to execute ${methodName}:`, error);
    throw error;
  }
};

// Function to read data from a contract
export const callContract = async (contract, methodName, args = []) => {
  try {
    return await contract[methodName](...args);
  } catch (error) {
    console.error(`Failed to call ${methodName}:`, error);
    throw error;
  }
};

// Example usage of listening to an event
export const listenToEvent = (contract, eventName, callback) => {
  contract.on(eventName, callback);
};

// Example usage:
/*
const provider = new ethers.providers.Web3Provider(window.ethereum);
const contractAddress = "YOUR_CONTRACT_ADDRESS";
const contractABI = YOUR_CONTRACT_ABI;
const contract = initContractWithSigner(contractAddress, contractABI, provider);

// To send a transaction
sendTransaction(contract, 'methodName', [arg1, arg2])
  .then(response => console.log('Transaction successful:', response))
  .catch(error => console.error('Transaction failed:', error));

// To read data
callContract(contract, 'methodName', [arg1])
  .then(data => console.log('Data fetched:', data))
  .catch(error => console.error('Failed to fetch data:', error));

// To listen to an event
listenToEvent(contract, 'EventName', (eventData) => {
  console.log('Event triggered:', eventData);
});
*/
