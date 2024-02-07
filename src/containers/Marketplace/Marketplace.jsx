// Marketplace component
import React, { useState, useEffect } from 'react';
import NFTCard from '../../components/NFTCard/NFTCard'; // Adjust the path as necessary
import styles from './marketplace.css'; // Adjust the path as necessary

// Placeholder function for fetching NFT data
// Replace this with actual data fetching from your backend or blockchain
const fetchNFTs = () => {
  return Promise.resolve([
    {
      id: 1,
      title: 'NFT #1',
      image: 'https://via.placeholder.com/150',
      creator: 'Creator Name',
      price: '0.5'
    },
    {
      id: 2,
      title: 'NFT #2',
      image: 'https://via.placeholder.com/150',
      creator: 'Creator Name',
      price: '1.0'
    }
    // Add more NFTs as needed
  ]);
};

const Marketplace = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    fetchNFTs().then(data => setNfts(data));
  }, []);

  return (
    <div className={styles.marketplace}>
      <h1>Marketplace</h1>
      <div className={styles.nftGrid}>
        {nfts.map(nft => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
