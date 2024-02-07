import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import WalletConnectButton from '../WalletConnectButton/WalletConnectButton'; // Adjust path as necessary
import logo from '../../images/logo/axodus.png'; // Adjust path as necessary
import styles from './header.css'; // This path assumes you are using CSS modules

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          to="/"
          aria-current="page"
          className={styles.logoLink}
        >
          <img
            src={logo}
            alt="NFTKEY"
            className={styles.logo}
          />
        </Link>
        <div className={styles.buttonsContainer}>
          <div className={styles.button}>
            <Link
              to="/price-history"
              className={styles.link}
            >
              Price history
            </Link>
          </div>
          <div className={styles.button}>
            <Link
              to="/collections"
              className={styles.link}
            >
              Collections
            </Link>
          </div>
          <div className={styles.darkModeButton}>
            <WalletConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
