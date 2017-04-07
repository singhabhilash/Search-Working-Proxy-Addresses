import request from 'request';
import * as actionTypes from '../constants/actionTypes';

import insertProxyInDatabase from '../apis/db';

const requestSearch = () => ({
  type: actionTypes.REQUEST_SEARCH
});

const searchStarted = () => ({
  type: actionTypes.SEARCH_STARTED,
  isSearching: true
});

const searchFinished = () => ({
  type: actionTypes.SEARCH_FINISHED,
  isSearching: false
});

const foundResult = (workingUrl) => ({
  type: actionTypes.FOUND_RESULT,
  result: workingUrl
});

const stopSearching = () => ({
  type: actionTypes.STOP_SEARCHING
});


export const requestFullProxySearchDispatcher = (intervalGap) => (dispatch, getState) => {
  dispatch(requestSearch());
  const iter = new doFullSearch(intervalGap, dispatch, getState);
  iter.startSearching();
}


function doFullSearch(intervalGap = 1000, dispatch, getState) {
  this.currentPosition = 0;
  this.elementsLength = 256;
  this.baseUrl = 'http://172.16.';
  this.interval = null;



  this.startSearching = function () {
    dispatch(searchStarted());
    this.currentPosition = 0;
    this.interval = setInterval(
      this.calc256.bind(this),
      intervalGap
    );
  }

  this.calc256 = function () {
    if (this.currentPosition > this.elementsLength) {
      dispatch(searchFinished());
      clearInterval(this.interval);
      return;
    };

    var n = this.currentPosition;

    for (var port of ['3128', '808', '8080']) {
      if(getState().main.isSearching === false) {
        dispatch(searchFinished());
        clearInterval(this.interval);
        return;
      }
      for (var i = 0; i < 256; i++) {
        var proxyUrl = this.baseUrl + this.currentPosition.toString() + '.' + i.toString() + ':' + port;
        var proxiedRequest = request.defaults({ proxy: proxyUrl });
        proxiedRequest.get('http://google.com', function (err, res) {
          if (checkSanityRes(res)) {
            let fullUrl = res.request.host + ':' + res.request.port;
            dispatch(foundResult(fullUrl));
            insertProxyInDatabase(fullUrl);
            console.log(fullUrl);
          }
        });
      }
    }
    console.log(this.currentPosition);
    this.currentPosition++;
  }
}


export const requestQuickProxySearchDispatcher = () => (dispatch) => {
  doQuickSearch(arrayProxyUrl, dispatch);
}

function doQuickSearch(arrayProxyUrl, dispatch) {
  for (let url of arrayProxyUrl) {
    let proxiedRequest = request.defaults({ proxy: url });
    proxiedRequest.get('http://google.com', function (err, res) {
      if (checkSanityRes(res)) {
        //Proxy is working, dispatch action
      }
    });
  }
}



function checkSanityRes(res) {
  if (res && res.statusCode === 200 && res.body.substring(0, 300).indexOf('google') > 0)
    return true;
  return false;
}

export const stopSearchingDispatcher = () => (dispatch) => {
  dispatch(stopSearching());
}


/*************************************************************
*
*  UI Actions
*
*************************************************************/

export const toggleSelectedType = () => ({
  type: actionTypes.TOGGLE_SELECTED_TYPE
});
