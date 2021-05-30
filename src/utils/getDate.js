var now = new Date()
const date = require('date-and-time');
/** Get Date
 ** Returns current date and time
 ** Default format: "MM/DD/YYYY hh:MM:ss"
 * 
 * @param {string} format 
 * @returns {string} Formated date
 */
module.exports = (format) => {
    let DATE = date.format(now, (format || 'MM/DD/YYYY hh:MM:ss A'))
    return DATE;
}