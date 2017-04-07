// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import {
  requestFullProxySearchDispatcher,
  toggleSelectedType,
  requestQuickProxySearchDispatcher,
  stopSearchingDispatcher,
} from '../actions';
import { connect } from 'react-redux';

const HomePage = (
  {
    workingProxyArray,
    isSearching,
    requestFullProxySearch,
    selectedType,
    toggleSelectedType,
    requestQuickProxySearch,
    stopSearching,
    currentSearchType
  }) => (
    <Home
      requestFullProxySearch={requestFullProxySearch}
      workingProxyArray={workingProxyArray}
      isSearching={isSearching}
      selectedType={selectedType}
      toggleSelectedType={toggleSelectedType}
      requestQuickProxySearch={requestQuickProxySearch}
      stopSearching={stopSearching}
      currentSearchType={currentSearchType}
    />
  );

const mapStateToProps = (state) => ({
  workingProxyArray: state.main.urlArray,
  isSearching: state.main.isSearching,
  selectedType: state.main.selectedType,
  currentSearchType: state.main.currentSearchType,
});

const mapDispatchToProps = (dispatch) => ({
  requestFullProxySearch: (type) => { dispatch(requestFullProxySearchDispatcher(1000, type)) },
  toggleSelectedType: () => { dispatch(toggleSelectedType()) },
  requestQuickProxySearch: () => { dispatch(requestQuickProxySearchDispatcher()) },
  stopSearching: () => { dispatch(stopSearchingDispatcher()) },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HomePage);
