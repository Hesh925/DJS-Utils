const fs = require("fs");
const utils = require("../main.js");
const fileName = "music.log";
const dir = "./log/";

module.exports = (message) => {
	function write() {
		var content = `[ ${ utils.getDate() } ]: Playing "${ message }"\n`;
		fs.writeFile((dir.concat(fileName)), content, {
			flag: "a+"
		}, err => {
			if (err) return false;
			else {
				return true;
			}
		});
	}

	if (utils.notNull(message)) {
		if (fs.existsSync(dir)) {
			write();
		} else {
			fs.mkdirSync(dir);
			write();
		}
	} else return false;
};