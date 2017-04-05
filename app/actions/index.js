import request from 'request';
import requestPromise from 'request-promise';
const receiveOkUrl = (url) => ({
  type: 'RECEIVE_OK_URL',
  url: url
});

var workingProxy = [];



export const requestProxySearch = () => (dispatch) => {
  let iter = new checkProxy();
  iter.startSearching();
}
