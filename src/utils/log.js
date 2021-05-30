const fs = require('fs')
const utils = require('../main.js')
/** Log
 ** Log message to log.log
 * @param {string} message Message to log
 * @returns {boolean} True if successful
 */
module.exports = (message) => {
    if (utils.notNull(message)) {
        var content = `${utils.getDate()} | ${message}\n`
        fs.writeFile(`./log/client.log`, content, {
            flag: 'a+'
        }, err => {
            if (err) return false
            else return true
        })
    } else return false
}