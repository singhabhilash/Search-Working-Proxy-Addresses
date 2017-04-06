// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import {
  requestFullProxySearchDispatcher,
  toggleSelectedType
} from '../actions';
import { connect } from 'react-redux';

const HomePage = (
  {
    workingProxyArray,
    isSearching,
    requestFullProxySearch,
    selectedType,
    toggleSelectedType
  }) => (
    <Home
      requestFullProxySearch={requestFullProxySearch}
      workingProxyArray={workingProxyArray}
      isSearching={isSearching}
      selectedType={selectedType}
      toggleSelectedType={toggleSelectedType}
    />
  );

const mapStateToProps = (state) => ({
  workingProxyArray: state.main.urlArray,
  isSearching: state.main.isSearching,
  selectedType: state.main.selectedType
});

const mapDispatchToProps = (dispatch) => ({
  requestFullProxySearch: () => { dispatch(requestFullProxySearchDispatcher()) },
  toggleSelectedType: () => { dispatch(toggleSelectedType()) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HomePage);
