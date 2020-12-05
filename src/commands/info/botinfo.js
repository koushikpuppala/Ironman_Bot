const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const pkg = require(__basedir + '/package.json');
const { owner } = require('../../utils/emojis.json');
const { oneLine, stripIndent } = require('common-tags');

module.exports = class BotInfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'botinfo',
            aliases: ['bot', 'bi'],
            usage: 'botinfo',
            description: 'Fetches Ironman\'s bot information.',
            type: client.types.INFO
        });
    }
    run(message) {
        const botOwner = message.client.users.cache.get(message.client.ownerId);
        const prefix = message.client.db.settings.selectPrefix.pluck().get(message.guild.id);
        const tech = stripIndent `
      Version     :: ${pkg.version}
      Library     :: Discord.js v12.5.1
      Environment :: Node.js v14.15.1
      Database    :: SQLite
    `;
        const embed = new MessageEmbed()
            .setTitle('Ironman\'s Bot Information')
            .setDescription(oneLine `
        Ironman is an closed source, fully customizable Discord bot that is constantly growing.
        It comes packaged with a variety of commands and 
        a multitude of settings that can be tailored to your server's specific needs. 
        It's codebase also serves as a base framework to easily create Discord bots of all kinds.
        It first went live on **Jan 1st, 2021**.
      `)
            .addField('Prefix', `\`${prefix}\``, true)
            .addField('Client ID', `\`${message.client.user.id}\``, true)
            .addField(`Developer ${owner}`, botOwner, true)
            .addField('Tech', `\`\`\`asciidoc\n${tech}\`\`\``)
            .addField(
                'Links',
                '**[Invite Me](https://discord.com/oauth2/authorize?client_id=757514337475756053&scope=bot&permissions=470248574) | ' +
                '[Support Server](https://discord.gg/SgCABjZ3cy) | ' +
                '[Repository](https://github.com/koushikpuppala5/Ironman_Bot)**'
            )
            .setImage('https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Eye.png')
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
    }
};