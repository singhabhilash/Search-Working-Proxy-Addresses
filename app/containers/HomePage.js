// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import {requestProxySearch} from '../actions';
import { connect } from 'react-redux';

const HomePage = ({requestProxySearch, workingProxyArray}) => (
  <Home
    requestProxySearch={requestProxySearch}
    workingProxyArray={workingProxyArray}
  />
);

const mapStateToProps = (state) => ({
  workingProxyArray: state.workingProxyArray
});

const mapDispatchToProps = (dispatch) => ({
  requestProxySearch: () => {dispatch(requestProxySearch())}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HomePage);
