const numberWithCommas = require("./numberWithCommas.js");
module.exports = {
	embed(client, EmbedBuilder, guild, text, videoData) {
		const embed = new EmbedBuilder()
			.setTitle(String(videoData.title))
			.setURL(videoData.url)
			.setAuthor({ name: "Now Playing:"})
			.setDescription(`**Title:** ${ videoData.title }
			**Length:** ${ videoData.duration === null ? "Probably a livestream" : videoData.duration }
			**Views:** ${ numberWithCommas(videoData.views) }
			**Uploaded:** ${ videoData.uploadedAt }`)
			.setImage(videoData.bestThumbnail.url)
			.setColor("1049ed")
			.setTimestamp();
		client.guilds.cache.get(guild).channels.cache.get(text).send({ embed: embed });
	}
};
