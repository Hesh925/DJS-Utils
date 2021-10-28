const utils = require("../main.js");
module.exports = (client, config) => {
	const types = [ "PLAYING", "STREAMING", "LISTENING", "WATCHING", "COMPETING" ];
	const env = utils.searchArgv("env", true) === "dev" ? "dev" : "prod";
	
	client.user.setActivity((config.envSettings[env].status.status), { type: ( types[config.envSettings[env].status.type] ) } );

	//client.user.setActivity((message ? message : "the waiting game"), { type: ( activity ? types[activity] : "PLAYING" ) } );
};
