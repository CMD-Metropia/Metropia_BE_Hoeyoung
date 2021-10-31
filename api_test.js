
var request = require('request');

var url = 'http://swopenAPI.seoul.go.kr/api/subway/'

//요청인자

var KEY = encodeURIComponent('key'); //인증키 넣어야함
var TYPE = encodeURIComponent('xml');
var SERVICE = encodeURIComponent('realtimeStationArrival');
var START_INDEX = 0;
var END_INDEX = 5;
var statnNm = encodeURIComponent('구로');


url += KEY + '/' + TYPE + '/' + SERVICE + '/' + START_INDEX + '/' + END_INDEX + '/' + statnNm;

console.log(url);

request({
  url: url, 
  method: 'GET'
}, function(error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Body:',  response.body);
});
