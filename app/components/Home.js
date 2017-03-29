// @flow
import React, { Component } from 'react';
import styles from './Home.css';

const Home = ({ requestProxySearch, workingProxyArray, state }) => {
  return (
    <div>
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
      </div>
      <button onClick={() => requestProxySearch()}>start search</button>
      <button onClick={() => console.log(state)}>Console state</button>
    </div>
  );
}

export default Home;