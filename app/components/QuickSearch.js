import React, { Component } from 'react';
let Halogen = require('halogen');
import styles from './Home.css';

const QuickSearch = ({
  classQuick,
  selectedType,
  toggleSelectedType,
  requestQuickProxySearch,
  stopSearching,
  isSearching
}) => {
  return (
    <div className={styles.search + ' ' + classQuick} onClick={() => { if (selectedType !== 'quick') toggleSelectedType() }}>
      <h2 className={styles.styleH2}>Quick Search</h2>
      <p className={styles.stylePara}>Searches only working proxies stored in the database.</p>

      <div className={styles.flexContainer}>
        {
          classQuick !== null &&
          <button onClick={
            (e) => {
              e.preventDefault();
              requestQuickProxySearch();
            }
          }>Search</button>
        }
        {
          isSearching && currentSearchType === 'quick' &&
          <Halogen.BeatLoader color={'white'} size="12px" />
        }
      </div>
    </div>
  )
}

export default QuickSearch;