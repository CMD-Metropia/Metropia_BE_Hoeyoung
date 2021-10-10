var request = require('request');
var convert = require('xml-js');

var url = 'http://openapi.tago.go.kr/openapi/service/SubwayInfoService/getKwrdFndSubwaySttnList';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=h0TLLT%2BzNKA6vVq82NFjZwOnmJrhX4dfX9f5D%2FVHKpxu16En%2FjqjYBoLNaIYL3cvIhIJBnv3vansVFO3MDJ4mg%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('subwayStationName') + '=' + encodeURIComponent('구로');

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    /* console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body); */

    //xml을 json으로 변환
    var xml2json = convert.xml2json(body, {compact: true, spaces: 4});
    //console.log(`Response received ${xml2json}`);
    var info = JSON.parse(xml2json);
    for (i in info['response']['body']['items']['item']) {
        console.log('호선 : ' + info['response']['body']['items']['item'][i]['subwayRouteName']['_text']);
        console.log('역 코드 : ' + info['response']['body']['items']['item'][i]['subwayStationId']['_text']);
        console.log('역 이름 : ' + info['response']['body']['items']['item'][i]['subwayStationName']['_text']);
        console.log("");
    }
});