// Header component
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import WalletConnectButton from '../WalletConnectButton/WalletConnectButton'; // Adjust path as necessary
import logo from '../../public/images/logo.png'; // Adjust path as necessary
import styles from './header.css'; // This path assumes you are using CSS modules

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="NFT Marketplace Logo" className={styles.logo} />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/marketplace" className={styles.navLink}>Marketplace</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink}>About</Link>
          </li>
        </ul>
      </nav>
      <WalletConnectButton />
    </header>
  );
};

export default Header;
