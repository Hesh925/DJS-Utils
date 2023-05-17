const utils = require("../main.js");

module.exports = (arr) => {
    if (utils.notNull(arr)) {
        // eslint-disable-next-line no-undef
        return [ ...new Set(arr) ];
    } else return null;
};