const fs = require("fs");
const utils = require("../main.js");
const fileName = "message.log";
const dir = "./log/";

module.exports = (message) => {
	function write() {
		var content = `[ ${ utils.getDate() } ]: ${ message.author.tag } (${ message.channelId }) => "${ message.content }"\n`;
		fs.writeFile((dir.concat(fileName)), content, { flag: "a+" }, err => {
			if (err) return false;
			else return true;
		});
	}

	if (utils.notNull(message)) {
		if (!message.author.bot) {
			if (fs.existsSync(dir)) write();
			else {
				fs.mkdirSync(dir);
				write();
			}
		}
	} else return false;
};
