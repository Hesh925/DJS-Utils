const fs = require("fs");
const utils = require("../main.js");

module.exports = (message) => {
	if (utils.notNull(message)) {
		var content = `${ utils.getDate() } | ${ message }\n`;
		fs.writeFile("./log/guild.log", content, {
			flag: "a+"
		}, err => {
			if (err) return false;
			else return true;
		});
	} else return false;
};