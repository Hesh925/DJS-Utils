module.exports = (string) => {
    input = string + ''
    if (typeof (string) === 'undefined') return "DJS-UTILS: ERROR STRING IS UNDFINED"
    else { return input.split(' ').map(str => str.slice(0, 1).toUpperCase() + str.slice(1)).join(' '); }
};