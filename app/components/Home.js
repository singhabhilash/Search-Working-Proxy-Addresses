// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import request from 'request';


export default class Home extends Component {
  startSearch() {
    let baseUrl = 'http://172.16.116.';
    for(let i = 0; i < 256; i++) {
      let proxyUrl = baseUrl + i.toString() + ':3128';
      console.log("Requesting " + proxyUrl);
      var proxiedRequest = request.defaults({'proxy': proxyUrl});
      proxiedRequest.get("http://google.com", function(err, resp, body) {
        console.log('received back');
        if(resp !== undefined && resp.statusCode === 200) console.log('working proxy', proxyUrl);
      });
    }
  }

  render() {
    this.startSearch();
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
