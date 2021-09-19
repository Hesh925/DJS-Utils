/* eslint-disable no-unused-vars */
const utils = require("../src/main");
const fs = require("fs");
const returns = require("./returns.json");

utils.log("penis");

// JSON.stringify(returns, (key, value) => {
//     For (let i = 0; i < 10; i++) {
//         Console.log(i,value.lURL[i].url);
//     }
// })
// 
// /*
// Var keys = Object.keys(returns);
// For (var i = 0, length = keys.length; i < length; i++) {
//     Console.log(returns[keys])
// }
// 
// If (utils.lengthenURL("https://google.com") === returns.lURL.httpGoogle) {
//     Console.log("Test returned True")
// }
// 
// Fs.readFile("./returns.json", function (err, data) {
//     Var pData = JSON.parse(data);
//     Console.log(pData);
// });
// 
