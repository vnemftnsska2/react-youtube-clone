import React, { useRef } from 'react';
import styles from './header.module.css'
import { ImYoutube, ImSearch } from 'react-icons/im'

const Header = ({ onSearch }) => {
  const searchRef = useRef();

  const handleSearch = () => {
    console.log('????');
    onSearch(searchRef.current.value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e) => {
    if (e.code === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <ImYoutube className={styles.icon} />
        <h1>Youtube</h1>
      </div>
      <input
        className={styles.searchInput}
        type="seach"
        placeholder="Seach..."
        ref={searchRef}
        onKeyPress={onKeyPress}
      />

      <button
        type="submit"
        className={styles.searchButton}
        onClick={onClick}
      >
        <ImSearch />
      </button>
    </header>
  );
};

export default Header;