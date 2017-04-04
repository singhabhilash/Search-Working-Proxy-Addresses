// @flow
import React, { Component } from 'react';

const Home = ({ requestProxySearch, workingProxyArray, state }) => {
  const styleWrap = {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'stretch',
    height: '100vh',
    flexGrow: 1,
  };

  const styleOptions = {
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
  }

  const styleResults = {
    background: 'rgba(0, 0, 0, .1)',
    flexBasis: '50%',
    padding: '20px',
  }

  const styleH2 = {
    fontWeight: '100',
    color: 'rgba(255, 255, 255, .7)',
    marginBottom: '-10px'
  }

  const stylePara = {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, .35)'
  }

  const styleSearchQuick = {
    flexBasis: '35%',
    borderBottom: '1px solid rgba(255, 255, 255, .1)'
  }

  const styleSearchFull = {
    paddingTop: '10%',
    flexBasis: '40%',
  }

  const styleButton = {
    background: 'rgba(255, 255, 255, .1)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    height: '48px',
    fontSize: '18px',
    color: 'white',
    marginTop: '16px',
    padding: '0 32px',
    borderRadius: '2px',
  }

  const styleSeparator = {
    borderBottom: '1px solid rgba(0, 0, 0, .2)',
    width: '100%',
    height: '1px',
    paddingTop: '60px'
  }

  return (
    <div style={styleWrap}>
      <div className="options" style={styleOptions}>
        <div style={styleSearchQuick}>
          <h2 style={styleH2}>Fast Search</h2>
          <p style={stylePara}>Searches only working proxies stored in the database.</p>
          <button style={styleButton} onClick={() => requestProxySearch()}>Search</button>
        </div>
        <div style={styleSearchFull}>
          <h2 style={styleH2}>Full Search</h2>
          <p style={stylePara}>
            Seaches all in the range. Change parameters from below. Beware, setting
            time interval too low will cause too many requests to be sent at once causing
            most of the requests to timeout.
          </p>
          <button style={styleButton} onClick={() => requestProxySearch()}>Search</button>
        </div>
      </div>

      <div className="results" style={styleResults}>
      </div>

    </div>
  );
}

export default Home;