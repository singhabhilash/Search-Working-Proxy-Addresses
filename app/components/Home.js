// @flow
import React, { Component } from 'react';

const Home = ({ requestProxySearch, workingProxyArray, state }) => {
  const styleWrap = {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'stretch',
    height: '100vh',
    flexGrow: 1
  };

  const styleOptions = {
    flexBasis: '50%',
  }

  const styleResults = {
    background: 'rgba(0, 0, 0, .1)',
    flexBasis: '50%'
  }

  return (
    <div style={styleWrap}>
      <div className="options" style={styleOptions}>
        <div>
          Full Search
          <button onClick={() => requestProxySearch()}>start search</button>
        </div>

        <div>
          Quick Search
        </div>
      </div>

      <div className="results" style={styleResults}>
      </div>

    </div>
  );
}

export default Home;