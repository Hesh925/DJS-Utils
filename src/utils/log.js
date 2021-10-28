const fs = require("fs");
const utils = require("../main.js");
const fileName = "client.log";
const dir = "./log/";

module.exports = (message) => {
	function write() {
		var content = `[ ${ utils.getDate() } ]: "${ message }"`;
		fs.writeFile((dir.concat(fileName)), `${ content }\n`, {
			flag: "a+"
		}, err => {
			if (err) return false;
			else {
				console.log(content);
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