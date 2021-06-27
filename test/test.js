/* eslint-disable no-unused-vars */
const utils = require('../src/main');
const fs = require("fs")
const returns = require('./returns.json')

utils.log("penis")

/*JSON.stringify(returns, (key, value) => {
    for (let i = 0; i < 10; i++) {
        console.log(i,value.lURL[i].url);
    }
})

/*
var keys = Object.keys(returns);
for (var i = 0, length = keys.length; i < length; i++) {
    console.log(returns[keys])
}

if (utils.lengthenURL("https://google.com") === returns.lURL.httpGoogle) {
    console.log("Test returned True")
}

fs.readFile("./returns.json", function (err, data) {
    var pData = JSON.parse(data);
    console.log(pData);
});
*/
