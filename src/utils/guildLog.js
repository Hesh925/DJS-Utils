const fs = require('fs')
const utils = require('../main.js')
module.exports = (message = String) => {
    var content = `${utils.getDate()} | ${message}\n`
    fs.writeFile(`./log/guild.log`, content, { flag: 'a+' }, err => {})
}