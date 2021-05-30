/** Not UND or NULL
 ** Checks to see if object is null or undefined
 * @param {object} object 
 * @returns {boolean}
 */
module.exports = (object) => {
    if (object === undefined || null) return false
    else return true
}