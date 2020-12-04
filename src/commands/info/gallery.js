const Command = require('../Command.js');
const ReactionMenu = require('../ReactionMenu.js');
const { MessageEmbed } = require('discord.js');
const art = [
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/6.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/A.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/All.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Av.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Avengers.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Balls.gif',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Ear.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Ears%20Circle.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/End.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Eye.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Fall.gif',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/fire.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Fly.gif',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Heart.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/I%20Love%20You.gif',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Infity.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Ironman.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Last%20But%20One.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Love.gif',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Magic.gif',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Mind.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Motion.gif',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Musics.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Pic.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Power.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Reality.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Rose.gif',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Sign.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Soul.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Sound.gif',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Space.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Splash.gif',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Stones.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Thanos.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/Time.png',
    'https://github.com/koushikpuppala5/Avenger_Bot_Star/tree/masters/data/images/War.png'
];

module.exports = class GalleryCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'gallery',
            aliases: ['art'],
            usage: 'gallery',
            description: 'Displays a gallery of Avenger\'s server bot arts.',
            type: client.types.INFO,
            clientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'ADD_REACTIONS']
        });
    }
    run(message) {
        let n = 0;
        const embed = new MessageEmbed()
            .setTitle('Art Gallery')
            .setDescription('All art courtesy of **🌠┊𝑃𝑜𝑤𝑒𝑟𝑠𝑡𝑎𝑟™#4121**.')
            .setImage(art[n])
            .setFooter(
                'Expires after three minutes.\n' + message.member.displayName,
                message.author.displayAvatarURL({ dynamic: true })
            )
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        const json = embed.toJSON();
        const previous = () => {
            (n <= 0) ? n = art.length - 1: n--;
            return new MessageEmbed(json).setImage(art[n]);
        };
        const next = () => {
            (n >= art.length - 1) ? n = 0: n++;
            return new MessageEmbed(json).setImage(art[n]);
        };

        const reactions = {
            '◀️': previous,
            '▶️': next,
            '⏹️': null,
        };

        const menu = new ReactionMenu(
            message.client,
            message.channel,
            message.member,
            embed,
            null,
            null,
            reactions,
            180000
        );

        menu.reactions['⏹️'] = menu.stop.bind(menu);

    }
};