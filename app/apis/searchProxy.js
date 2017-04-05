export default function checkProxy(intervalGap = 1000) {
  this.currentPosition = 0;
  this.elementsLength = 256;
  this.baseUrl = 'http://172.16.';

  this.startSearching = function () {
    this.currentPosition = 0;
    setInterval(
      this.calc256.bind(this),
      intervalGap
    );
  }

  this.calc256 = function () {
    if (this.currentPosition > this.elementsLength) return;

    var n = this.currentPosition;

    for (var port of ['3128', '808', '8080']) {
      for (var i = 0; i < 256; i++) {
        var proxyUrl = this.baseUrl + this.currentPosition.toString() + '.' + i.toString() + ':' + port;
        var proxiedRequest = request.defaults({ proxy: proxyUrl });
        proxiedRequest.get('http://google.com', function (err, res) {
          if (res && res.statusCode === 200 && res.body.substring(0, 300).indexOf('google') > 0) {
            workingProxy.push(res.request.host + ':' + res.request.port);
            console.log(workingProxy);
            console.log(res);
          }
        });
      }
    }
    console.log(this.currentPosition);
    this.currentPosition++;
  }
}