module.exports = (client, guild, channel, message) => {
	client.guilds.cache.get(guild).channels.cache.get(channel).send(message);
};