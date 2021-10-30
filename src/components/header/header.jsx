import React from 'react';
import styles from './header.module.css'
import { ImYoutube, ImSearch } from 'react-icons/im'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <ImYoutube className={styles.icon} />
        <h1>Youtube</h1>
      </div>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="seach"
          placeholder="Seach..."
        />

        <button className={styles.searchButton}>
          <ImSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;