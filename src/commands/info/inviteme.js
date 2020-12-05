const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = class InviteMeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'inviteme',
            aliases: ['invite', 'invme', 'im'],
            usage: 'inviteme',
            description: 'Generates a link you can use to invite Ironman to your own server.',
            type: client.types.INFO
        });
    }
    run(message) {
        const embed = new MessageEmbed()
            .setTitle('Invite Me')
            .setThumbnail('https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Ironman.png')
            .setDescription(oneLine `
        Click [here](https://discord.com/oauth2/authorize?client_id=757514337475756053&scope=bot&permissions=470248574)
        to invite me to your server!
      `)
            .addField('Other Links',
                '**[Support Server](https://discord.gg/SgCABjZ3cy) | ' +
                '[Repository](https://github.com/koushikpuppala/Ironman_Bot)**'
            )
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
    }
};