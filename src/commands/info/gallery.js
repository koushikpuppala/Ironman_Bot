const Command = require('../Command.js');
const ReactionMenu = require('../ReactionMenu.js');
const { MessageEmbed } = require('discord.js');
const art = [
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/6.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/A.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/All.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Av.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Avengers.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Balls.gif',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Ears%20Circle.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/End.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Eye.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Fall.gif',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/fire.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Fly.gif',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Heart.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/I%20Love%20You.gif',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Infity.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Ironman.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Last%20But%20One.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Love.gif',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Magic.gif',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Mind.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Motion.gif',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Musics.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Pic.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Power.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Reality.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Rose.gif',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Sign.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Soul.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Sound.gif',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Space.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Splash.gif',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Stones.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Thanos.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/Time.png',
    'https://raw.githubusercontent.com/koushikpuppala5/Ironman_Bot/master/data/images/War.png'
];

module.exports = class GalleryCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'gallery',
            aliases: ['art'],
            usage: 'gallery',
            description: 'Displays a gallery of Ironman\'s Support Server\'s arts.',
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