import React, { Component } from 'react';
let Halogen = require('halogen');
import styles from './Home.css';

const FullSearch = ({
  classFull,
  selectedType,
  toggleSelectedType,
  requestFullProxySearch,
  stopSearching,
  isSearching,
  currentSearchType
}) => {
  return (
    <div className={styles.search + ' ' + classFull}
      onClick={() => { if (selectedType !== 'full') toggleSelectedType(); }}
    >
      <h2 className={styles.styleH2}>Full Search</h2>
      <p className={styles.stylePara}>Full search based on the parameters below. Takes ~8 mins at default settings</p>
      <div className={styles.flexContainer}>
        {
          (classFull !== null || (isSearching === true && currentSearchType === 'full')) &&
          <button onClick={
            (e) => {
              e.preventDefault();
              console.log('button clicked');
              requestFullProxySearch('full');
            }
          }>Search</button>
        }
        {
          isSearching &&
          <button onClick={() => { stopSearching(); console.log('stop click', stopSearching) }}>Stop</button>
        }
        {
          isSearching && currentSearchType === 'full' &&
          <Halogen.BeatLoader color={'white'} size="12px" />
        }
      </div>
    </div>
  )
}

export default FullSearch;