/**
 * Capitalize a string
 * @param {string} string
 * @returns {string} Capitalized string
 */
module.exports = (string) => {
    
    input = string + ''
    if (typeof (string) === 'undefined') {
        console.error("[DJS-UTILS][ERROR] STRING IS UNDFINED")
        return undefined
    }
    else { return input.split(' ').map(str => str.slice(0, 1).toUpperCase() + str.slice(1)).join(' '); }
};