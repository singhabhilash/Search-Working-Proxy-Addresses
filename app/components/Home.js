// @flow
import React, { Component } from 'react';
let Halogen = require('halogen')

const Home = ({ requestFullProxySearch, workingProxyArray, isSearching }) => {
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  const styleH2 = {
    fontWeight: '100',
    color: 'rgba(255, 255, 255, .7)',
    marginBottom: '-10px'
  }

  const stylePara = {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, .25)'
  }

  const styleSearchQuick = {
    flexBasis: '30%',
    paddingTop: '10%',
  }

  const styleSearchFull = {
    flexBasis: '50%',
    borderBottom: '1px solid rgba(255, 255, 255, .05)'
  }

  const styleButton = {
    background: 'rgba(255, 255, 255, .1)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    height: '48px',
    fontSize: '18px',
    color: 'white',
    padding: '0 32px',
    borderRadius: '2px',
    marginRight: '24px'
  }

  const styleSeparator = {
    borderBottom: '1px solid rgba(0, 0, 0, .2)',
    width: '100%',
    height: '1px',
    paddingTop: '60px'
  }

  const styleLoader = {
    height: '24px!important',
    width: '24px!important'
  }

  const styleButtonWrap = {
    marginTop: '16px',
    display: 'flex',
    alignItems: 'center',
  }

  console.log('ww', workingProxyArray);

  return (
    <div style={styleWrap}>
      <div className="options" style={styleOptions}>
        <div style={styleSearchFull}>
          <h2 style={styleH2}>Full Search</h2>
          <p style={stylePara}>
            Seaches all in the range. Change parameters from below. Beware, setting
            time interval too low will cause too many requests to be sent at once causing
            most of the requests to timeout.
          </p>
          <button style={styleButton} onClick={() => requestFullProxySearch()}>Search</button>
        </div>

        <div style={styleSearchQuick}>
          <h2 style={styleH2}>Fast Search</h2>
          <p style={stylePara}>Searches only working proxies stored in the database.</p>
          <div style={styleButtonWrap}>
            <button style={styleButton}>Search</button>
          </div>
        </div>
      </div>

      <div className="results" style={styleResults}>
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