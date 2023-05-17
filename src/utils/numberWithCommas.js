module.exports = (x) => {
    var parts = x.toString().split(".");
    // eslint-disable-next-line prefer-named-capture-group
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};