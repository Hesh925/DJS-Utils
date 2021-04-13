var now = new Date()
const date = require('date-and-time');
module.exports = () => {
    let DATE = date.format(now, 'MM/DD/YYYY hh:MM:ss A')
    return DATE;
}