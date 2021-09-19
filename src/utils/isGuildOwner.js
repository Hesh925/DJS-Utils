const utils = require("../main");

module.exports = (message) => {
	if (utils.notNull(message)) {
		if (message.author.id === message.guild.ownerID) return true;
		else return false;
	} else return null;
};