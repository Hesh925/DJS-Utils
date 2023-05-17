const sendEmbed = require("./sendPlayEmbed.js");
module.exports = async (client, EmbedBuilder, DJSVoice, voicePlayer, guildID, textCID, searchFor, nowPlaying, utils, ytsr, ytdl, res) => {
    const connection = await DJSVoice.getVoiceConnection(guildID); // Get connection
    connection.subscribe(voicePlayer); // Create subscription
	
    const searchTerm = String(searchFor).replace(/,/g, " ");
    const filter = await ytsr.getFilters(searchTerm);
    const filter1 = filter.get("Type").get("Video");
    const resp = await ytsr(filter1.url, {limit: 1, pages : 1});
	
    if(resp !== null) {
        const videoData = resp["items"][0];
        nowPlaying["0"] = videoData;

        const resource = DJSVoice.createAudioResource(ytdl(videoData.url, 
            {
                filter: "audioonly", 
                quality: "highestaudio",
                // eslint-disable-next-line no-bitwise
                highWaterMark: 1 << 25 
            }),
        {
            metadata: {
                title:   videoData.title,
                url:     videoData.url,
                guildId: guildID,
                textCId: textCID,
                queuePos: (res !== null ? res.queuePos : 0)
            },
            volume: 0.2
        });
        voicePlayer.play(resource);
        utils.musicLog(videoData.title);
        sendEmbed(client, EmbedBuilder, guildID, textCID, videoData);
    }
	
};