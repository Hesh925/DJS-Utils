const fs = require('fs')
const utils = require('../main.js')
const fileName = `client.log`
const dir = './log/'
/** Log
 ** Log message to log.log
 * @param {string} message Message to log
 * @returns {boolean} True if successful
 */
module.exports = (message) => {
    function write(message) {
        var content = `[ ${utils.getDate()} ]: "${message}"\n`
        fs.writeFile((dir.concat(fileName)), content, {
            flag: 'a+'
        }, err => {
            if (err) return false
            else {
                console.log(content)
                return true
            }
        })
    }

    if (utils.notNull(message)) {
        if (fs.existsSync(dir)) {
            write(message)
        } else {
            fs.mkdirSync(dir)
            write(message)
        }
    } else return false
}