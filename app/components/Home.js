// @flow
import React, { Component } from 'react';
let Halogen = require('halogen');
import styles from './Home.css';

const Home = ({
  requestFullProxySearch,
  workingProxyArray,
  isSearching,
  selectedType,
  toggleSelectedType
}) => {
  const classFull = selectedType === 'full' ? styles.selected : null;
  const classQuick = selectedType === 'quick' ? styles.selected : null;
  return (
    <div className={styles.wrap}>
      <div className={styles.options}>

        <div className={styles.search + ' ' + classFull}
          onClick={() => { if (selectedType !== 'full') toggleSelectedType(); }}
        >
          <h2 className={styles.styleH2}>Full Search</h2>
          <p className={styles.stylePara}>Full search based on the parameters below. Takes ~8 mins at default settings</p>
          {
            classFull !== null && <button>Search</button>
          }
        </div>

        <div className={styles.search + ' ' + classQuick}
          onClick={() => { if (selectedType !== 'quick') {console.log('sinside fi'); toggleSelectedType()}; console.log('click quick', selectedType) }}
        >
          <h2 className={styles.styleH2}>Quick Search</h2>
          <p className={styles.stylePara}>Searches only working proxies stored in the database.</p>
          {
            classQuick !== null && <button>Search</button>
          }
        </div>

      </div>




      <div className={styles.results}>
        <p style={{ color: 'rgba(255, 255, 255, .5)' }}>Search Results</p>
        {
          isSearching &&
          <Halogen.BeatLoader color={'white'} size="12px" />
        }
        {
          workingProxyArray.map((url, index) => {
            return <div style={{ display: 'flex', width: '300px', padding: '12px', paddingLeft: '30px', margin: '12px', borderLeft: '2px solid rgba(255, 255, 255, .5)', background: 'rgba(0, 0, 0, .2)' }} key={index}>{url}</div>
          })
        }
      </div>
    </div>
  );
}

export default Home;