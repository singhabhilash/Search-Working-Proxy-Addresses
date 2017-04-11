import * as actionTypes from '../../app/constants/actionTypes';
import expect from 'expect';
import reducer from '../../app/reducers/main';

const initialState = {
  urlArray: [],
  isSearching: false,
  selectedType: 'full',
  currentSearchType: ''
};

describe('main reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle REQUEST_SEARCH', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.REQUEST_SEARCH,
        currentSearchType: 'full',
      })
    ).toEqual({
      urlArray: [],
      isSearching: false,
      currentSearchType: 'full',
      selectedType: 'full',
    });
  });
});