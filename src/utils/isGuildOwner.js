module.exports = (message) => {
    if (message.author.id === message.guild.ownerID) return true;
    else return false;
};