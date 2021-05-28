const urlLengthener = require("url-lengthener")
const formatURL = require("./formatURL")
module.exports = (URL) => {
    let lengthened_url = urlLengthener.lengthen(formatURL(URL));
    return lengthened_url
}