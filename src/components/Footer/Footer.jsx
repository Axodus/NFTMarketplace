// Footer component
import React from 'react';
import styles from './footer.css'; // Adjust the path as necessary

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© {currentYear} NFT Marketplace. All rights reserved.</p>
        <div className={styles.socialLinks}>
          {/* Example social media links - replace with your actual links and icons */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
