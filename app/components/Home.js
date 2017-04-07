// @flow
import React, { Component } from 'react';
let Halogen = require('halogen');
import styles from './Home.css';
import FullSearch from './FullSearch';
import QuickSearch from './QuickSearch';
import Results from './Results';

const Home = ({
  requestFullProxySearch,
  workingProxyArray,
  isSearching,
  selectedType,
  toggleSelectedType,
  requestQuickProxySearch,
  stopSearching,
  currentSearchType
}) => {
  const classFull = selectedType === 'full' ? styles.selected : null;
  const classQuick = selectedType === 'quick' ? styles.selected : null;
  return (
    <div className={styles.wrap}>
      <div className={styles.options}>
        <FullSearch
          classFull={classFull}
          selectedType={selectedType}
          toggleSelectedType={toggleSelectedType}
          requestFullProxySearch={requestFullProxySearch}
          stopSearching={stopSearching}
          isSearching={isSearching}
          currentSearchType={currentSearchType}
        />
        <QuickSearch
          selectedType={selectedType}
          toggleSelectedType={toggleSelectedType}
          requestQuickProxySearch={requestQuickProxySearch}
          stopSearching={stopSearching}
          classQuick={classQuick}
          currentSearchType={currentSearchType}
        />
      </div>
      <Results 
        workingProxyArray={workingProxyArray}
      />
    </div>
  );
}

export default Home;