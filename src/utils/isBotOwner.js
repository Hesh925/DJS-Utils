const config = require('../config.json');

module.exports = (message) => {
    if (message.author.id === config.Owner) return true;
    else return false;
};