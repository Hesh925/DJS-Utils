
module.exports = (object) => {
    // eslint-disable-next-line no-undefined
    if (object === undefined || null) return false;
    else return true;
};