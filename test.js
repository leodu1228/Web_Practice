


const request = require('request');
request('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-7CE95033-7D86-4A56-BE51-7D55FDF753EB&format=JSON', 
        (error, response, body)=>{
    console.log('原始格式，JSON 格式的字串----------')
    console.log(body);
    console.log('轉成 JS 物件--------------------')
    console.log(JSON.parse(body))}
    );