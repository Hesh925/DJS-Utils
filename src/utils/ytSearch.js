/* eslint-disable multiline-comment-style, capitalized-comments, no-undefined */
const ytsr = require("ytsr");

module.exports = async (message) => {
	const searchTerm = (String(message).replace(/,/g, " "));
	if(message !== null || message !== undefined) {
		// if (ytdl.validateURL(searchTerm) || ytdl.validateID(searchTerm)){
		const videoData = await ytsr(searchTerm, {limit: 1, pages : 1});
		return videoData["items"][0];
		// } else return null;
	} else return null;
};

