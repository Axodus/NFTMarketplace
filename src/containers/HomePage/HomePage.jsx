// HomePage component
import React from 'react';
import styles from './homePage.css'; // Adjust the path as necessary
import NFTCard from '../../components/NFTCard/NFTCard'; // Adjust the path as necessary

// Placeholder data for NFTs - replace this with real data fetched from your backend or blockchain
const featuredNFTs = [
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
];

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection}>
        <h1>Welcome to Our NFT Marketplace</h1>
        <p>Discover, collect, and sell extraordinary NFTs</p>
      </section>
      <section className={styles.featuredNFTs}>
        <h2>Featured NFTs</h2>
        <div className={styles.nftGrid}>
          {featuredNFTs.map(nft => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </section>
      {/* Additional sections can be added here */}
    </div>
  );
};

export default HomePage;
