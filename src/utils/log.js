const fs = require('fs')
const utils = require('../main.js')
module.exports = (message = String) => {
    var content = `${utils.getDate()} | ${message}\n`
    fs.writeFile(`./logs/log.log`, content, { flag: 'a+' }, err => {})
}