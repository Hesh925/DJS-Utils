const config = require('../config.json');

/** Is bot owner
 ** Checks to see if message author is bot owner
 * @param {object} message 
 * @param {string} ownerID
 * @returns {boolean} True if bot owner false if not
 */
module.exports = (message, ownerID) => {
    const owner = ownerID || config.Owner
    if (message.author.id === owner) return true;
    else return false;
};