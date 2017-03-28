// @flow
import React, { Component } from 'react';
import styles from './Home.css';

const Home = ({ requestProxySearch, workingProxyArray }) => {
  return (
    <div>
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
      </div>
      <button onClick={() => requestProxySearch()}>start search</button>
    </div>
  );
}

export default Home;