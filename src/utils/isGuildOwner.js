const utils = require('../main')
/** Is Guild Owner
 ** Checks if message author is guild owner
 * @param {object} message
 * @param {string} ownerID
 * @returns {boolean} True if guild owner
 */
module.exports = (message) => {
    if (utils.notNull(message)) {
        if (message.author.id === message.guild.ownerID) return true;
        else return false;
    } else return null
};