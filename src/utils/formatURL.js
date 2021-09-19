const utils = require("../main");

module.exports = (URL) => {
	if (utils.notNull(URL)) {
		if ((URL.toLowerCase()).startsWith("https://" || "http://")) {
			return URL;
		} else {
			var fURL = `https://${ URL }`;
		}
		return fURL;
	} else return null;
};