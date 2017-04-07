import React, { Component } from 'react';
import styles from './Home.css';

const Results = ({
  workingProxyArray
}) => {
  return (
    <div className={styles.results}>
      <p style={{ color: 'rgba(255, 255, 255, .5)' }}>Search Results</p>
      {
        workingProxyArray.map((url, index) => {
          return <div className={styles.resultItem} key={index}>{url}</div>
        })
      }
    </div>
  );
}

export default Results;