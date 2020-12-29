const { MessageEmbed } = require('discord.js');
const { fail } = require('../utils/emojis.json');

module.exports = (client, guild) => {

    client.logger.info(`Ironman has left ${guild.name}`);
    const serverLog = client.channels.cache.get(client.LeaveID);
    if (serverLog)serverLog.send(new MessageEmbed()
        .setTitle(`Ironamn left the server ${fail}`)
        .setDescription(guild.name)
        .setThumbnail(guild.iconURL())
        .setColor(0xFF0000)
        .addField("Owner", guild.owner.user.tag)
        .addField("Member Count", guild.memberCount)
        .setFooter(guild.id)
        .setTimestamp()
        );

    client.db.settings.deleteGuild.run(guild.id);
    client.db.users.deleteGuild.run(guild.id);

    if (guild.job) guild.job.cancel(); // Cancel old job

};