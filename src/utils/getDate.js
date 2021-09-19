var now = new Date();
const date = require("date-and-time");

module.exports = (format) => {
	const DATE = date.format(now, (format || "MM/DD/YYYY hh:MM:ss A"));
	return DATE;
};