const config = require("../config.json");

module.exports = (message, ownerID) => {
	const owner = ownerID || config.Owner;
	if (message.author.id === owner) return true;
	else return false;
};