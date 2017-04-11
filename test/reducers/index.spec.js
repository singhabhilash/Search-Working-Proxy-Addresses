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

  it('should handle SEARCH_STARTED', () => {
    expect(
      reducer({
        urlArray: [],
        isSearching: false,
        currentSearchType: 'full',
        selectedType: 'full',
      }, {
        type: actionTypes.SEARCH_STARTED,
        isSearching: true
      })
    ).toEqual({
      urlArray: [],
      isSearching: true,
      currentSearchType: 'full',
      selectedType: 'full',
    });
  });

  it('should handle FOUND_RESULT', () => {
    expect(
      reducer({
        urlArray: [],
        isSearching: true,
        currentSearchType: 'full',
        selectedType: 'full',
      }, {
        type: actionTypes.FOUND_RESULT,
        result :'http://0.0.0.0:3128'
      })
    ).toEqual({
      urlArray: ['http://0.0.0.0:3128'],
      isSearching: true,
      currentSearchType: 'full',
      selectedType: 'full'
    });
  });

  it('should handle SEARCH_FINISHED', () => {
    expect(
      reducer({
        urlArray: ['http://0.0.0.0:3128'],
        isSearching: true,
        currentSearchType: 'full',
        selectedType: 'full',
      }, {
        type: actionTypes.SEARCH_FINISHED,
        isSearching: false
      })
    ).toEqual({
      urlArray: ['http://0.0.0.0:3128'],
      isSearching: false,
      currentSearchType: '',
      selectedType: 'full'
    });
  });

  it('should handle TOGGLE_SELECTED_TYPE', () => {
    expect(
      reducer(
        initialState,
        {
          type: actionTypes.TOGGLE_SELECTED_TYPE
        }
      )
    ).toEqual({
      urlArray: [],
      isSearching:false,
      currentSearchType: '',
      selectedType: 'quick'
    });
  });

  it('should handle STOP_SEARCHING', () => {
    expect(
      reducer({
        urlArray: ['http://0.0.0.0:3128'],
        isSearching: true,
        currentSearchType: 'full',
        selectedType: 'full'
      }, {
        type: actionTypes.STOP_SEARCHING
      })
    ).toEqual({
      urlArray: ['http://0.0.0.0:3128'],
      isSearching: false,
      currentSearchType: '',
      selectedType: 'full',
    });
  });
});