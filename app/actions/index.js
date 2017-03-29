import request from 'request';
import requestPromise from 'request-promise';
const receiveOkUrl = (url) => ({
  type: 'RECEIVE_OK_URL',
  url: url
});

var workingProxy = [];

function checkProxy() {
  this.currentPosition = 0;
  this.elementsLength = 256;
  this.baseUrl = 'http://172.16.';
  
  this.startSearching = function() {
    this.currentPosition = 0;
    setInterval(
      this.calc256.bind(this),
      1000
    );
  }
  
  this.calc256 = function() {
    if(this.currentPosition > this.elementsLength) return;
    
    var n = this.currentPosition;
    
    for(var i = 0; i < 256; i++) {
      
      var proxyUrl = this.baseUrl + this.currentPosition.toString() + '.' + i.toString() + ':3128';
      var proxiedRequest = request.defaults({proxy: proxyUrl});
      proxiedRequest.get('http://google.com', function(err, res) {
        if(res && res.statusCode === 200) {
          workingProxy.push(res.request.host + ':' + res.request.port);
          console.log(workingProxy);
        }
      });
    }
    this.currentPosition++;
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', this.currentPosition);
  }
}

var iter = new checkProxy();
iter.startSearching();


export const requestProxySearch = () => (dispatch) => {
  let iter = new checkProxy();
  iter.startSearching();
}
