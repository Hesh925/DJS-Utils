const { EmbedBuilder } = require('discord.js');
const numberWithCommas = require('./numberWithCommas.util.js');
module.exports = {
	embed(videoData) {
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
			.setTimestamp()
			.setFooter({ text: `Requested by: ${ interaction.user.username }`,  iconURL: interaction.user.displayAvatarURL({ dynamic: true })});
		interaction.editReply({ embeds: [ embed ] });
	}
};
