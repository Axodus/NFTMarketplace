// NFTCard component
import React from 'react';
import styles from './nftCard.css'; // Adjust the path as necessary

const NFTCard = ({ nft }) => {
  return (
    <div className={styles.card}>
      <img src={nft.image} alt={nft.title} className={styles.nftImage} />
      <div className={styles.cardBody}>
        <h5 className={styles.nftTitle}>{nft.title}</h5>
        <p className={styles.nftCreator}>Creator: {nft.creator}</p>
        <p className={styles.nftPrice}>Price: {nft.price} ETH</p>
        <button className={styles.buyButton}>Buy Now</button>
      </div>
    </div>
  );
};

export default NFTCard;
