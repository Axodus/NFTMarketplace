// WalletConnectButton component
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import styles from './walletConnectButton.css'; // Adjust the path as necessary

const WalletConnectButton = () => {
  const [userAccount, setUserAccount] = useState(null);
  const [web3Provider, setWeb3Provider] = useState(null);

  // Function to request access to the user's wallet
  const requestAccount = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setUserAccount(accounts[0]);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setWeb3Provider(provider);
      } catch (error) {
        console.error("Failed to connect wallet", error);
      }
    } else {
      console.log('Ethereum object not found, install MetaMask.');
    }
  };

  // Effect hook to automatically connect to the wallet if already authorized
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_accounts' })
        .then(accounts => {
          if (accounts.length > 0) {
            setUserAccount(accounts[0]);
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setWeb3Provider(provider);
          }
        });
    }
  }, []);

  return (
    <button onClick={requestAccount} className={styles.connectButton}>
      {userAccount ? `Wallet Connected: ${userAccount.substring(0, 6)}...${userAccount.substring(userAccount.length - 4)}` : 'Connect Wallet'}
    </button>
  );
};

export default WalletConnectButton;
