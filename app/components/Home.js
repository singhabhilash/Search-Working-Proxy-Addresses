// @flow
import React, { Component } from 'react';
let Halogen = require('halogen');
import styles from './Home.css';

const devProxyArray = [
  '0.0.0.0.:8080',
  '0.0.0.0.:8080',
  '0.0.0.0.:8080',
  '0.0.0.0.:8080',
  '0.0.0.0.:8080'
];

const Home = ({
  requestFullProxySearch,
  workingProxyArray,
  isSearching,
  selectedType,
  toggleSelectedType,
  requestQuickProxySearch
}) => {
  const classFull = selectedType === 'full' ? styles.selected : null;
  const classQuick = selectedType === 'quick' ? styles.selected : null;
  workingProxyArray = devProxyArray;
  return (
    <div className={styles.wrap}>
      <div className={styles.options}>

        <div className={styles.search + ' ' + classFull}
          onClick={() => { if (selectedType !== 'full') toggleSelectedType(); }}
        >
          <h2 className={styles.styleH2}>Full Search</h2>
          <p className={styles.stylePara}>Full search based on the parameters below. Takes ~8 mins at default settings</p>
          <div className={styles.flexContainer}>
            {
              classFull !== null &&
              <button onClick={
                (e) => {
                  e.preventDefault();
                  console.log('button clicked');
                  requestFullProxySearch();
                }
              }>Search</button>
            }
            {
              isSearching && selectedType==='full' &&
              <Halogen.BeatLoader color={'white'} size="12px" />
            }
          </div>
        </div>

        <div className={styles.search + ' ' + classQuick}
          onClick={() => { if (selectedType !== 'quick') toggleSelectedType() }}
        >
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
              isSearching && selectedType==='quick' &&
              <Halogen.BeatLoader color={'white'} size="12px" />
            }
          </div>
        </div>

      </div>

      <div className={styles.results}>
        <p style={{ color: 'rgba(255, 255, 255, .5)' }}>Search Results</p>
        {
          workingProxyArray.map((url, index) => {
            return <div className={styles.resultItem} key={index}>{url}</div>
          })
        }
      </div>
    </div >
  );
}

export default Home;