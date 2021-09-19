const urlLengthener = require("url-lengthener");
const utils = require("../main");

module.exports = (URL) => {
	const fURL = utils.formatURL(URL);
	if (utils.notNull(fURL)){
		const lengthenedURL = urlLengthener.lengthen(fURL);
		return lengthenedURL;
	} else return null;
};