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
});