// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import { requestFullProxySearchDispatcher } from '../actions';
import { connect } from 'react-redux';

const HomePage = ({ workingProxyArray, isSearching, requestFullProxySearch }) => (
  <Home
    requestFullProxySearch={requestFullProxySearch}
    workingProxyArray={workingProxyArray}
    isSearching={isSearching}
  />
);

const mapStateToProps = (state) => ({
  workingProxyArray: state.main.urlArray,
  isSearching: state.main.isSearching
});

const mapDispatchToProps = (dispatch) => ({
  requestFullProxySearch: () => { dispatch(requestFullProxySearchDispatcher()) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HomePage);
