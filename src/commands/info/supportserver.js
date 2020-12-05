const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class SupportServerCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'supportserver',
            aliases: ['support', 'ss'],
            usage: 'supportserver',
            description: 'Displays the invite link to Ironman\'s Discord Support Server.',
            type: client.types.INFO
        });
    }
    run(message) {
        const embed = new MessageEmbed()
            .setTitle('Support Server')
            .setThumbnail('https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Eye.png')
            .setDescription('Click [here](https://discord.gg/SgCABjZ3cy) to join the Avenger\'s Support Server!')
            .addField('Other Links',
                '**[Invite Me](https://discord.com/oauth2/authorize?client_id=775412494235729960&permissions=470248535&scope=bot) | ' +
                '[Repository](https://github.com/koushikpuppala5/Ironman_Bot)**'
            )
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
    }
};