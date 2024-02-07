// useWeb3 hook
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const useWeb3 = () => {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [account, setAccount] = useState(null);
    const [network, setNetwork] = useState(null);

    // Connect to Ethereum blockchain and set up the provider, signer, and account
    useEffect(() => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
            setProvider(provider);

            provider.getSigner().getAddress().then((address) => {
                setAccount(address);
                setSigner(provider.getSigner());
            }).catch(() => {
                console.log('No account connected');
            });

            provider.getNetwork().then((network) => {
                setNetwork(network);
            });
        } else {
            console.log('Ethereum object not found. Install MetaMask.');
        }

        // Listen for account changes
        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length > 0) {
                setAccount(accounts[0]);
            } else {
                setAccount(null);
            }
        });

        // Listen for network changes
        window.ethereum.on('chainChanged', (_) => {
            window.location.reload();
        });
    }, []);

    // Function to request account access
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                setSigner(provider.getSigner());
            } catch (error) {
                console.error('Failed to connect wallet:', error);
            }
        } else {
            console.log('Ethereum object not found. Install MetaMask.');
        }
    };

    return { provider, signer, account, network, connectWallet };
};

export default useWeb3;
