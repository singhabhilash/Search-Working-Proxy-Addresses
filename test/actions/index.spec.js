import * as actionTypes from '../../app/constants/actionTypes';
import * as actions from '../../app/actions/index';
import expect from 'expect';

describe('actions', () => {
  it('should create request search action', () => {
    const searchType = 'quick';
    const expectedAction = {
      type: actionTypes.REQUEST_SEARCH,
      currentSearchType: searchType
    };
    expect(actions.requestSearch(searchType)).toEqual(expectedAction);
  });

  it('should create create search started action', () => {
    const expectedAction = {
      type: actionTypes.SEARCH_STARTED,
      isSearching: true
    };
    expect(actions.searchStarted()).toEqual(expectedAction);
  });

  it('should create searchFinished action', () => {
    const expectedAction = {
      type: actionTypes.SEARCH_FINISHED,
      isSearching: false
    };
    expect(actions.searchFinished()).toEqual(expectedAction);
  });

  it('should create foundResult action', () => {
    const workingUrl = 'http://0.0.0.0:3128';
    const expectedAction = {
      type: actionTypes.FOUND_RESULT,
      result: workingUrl
    };
    expect(actions.foundResult(workingUrl)).toEqual(expectedAction);
  });

  it('should create stopSearching action', () => {
    const expectedAction = {
      type: actionTypes.STOP_SEARCHING,
    };
    expect(actions.stopSearching()).toEqual(expectedAction);
  })
});