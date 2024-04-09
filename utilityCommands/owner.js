const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const youtubeLink = 'https://youtube.com/@WhiteDeath_WDG_?si=Ph20XJ385D0emCPj';
        const InstagramLink = 'https://www.instagram.com/_th._om._as_/';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 🤖 Myself Thomas aka WDG. I am a discord bot developer and web developer. I love playing games, watching movies and building different webserver applications. You will get faster replies on instagram than other social media. Feel free to contact me!\n ❤️ [WDG GAMING](${youtubeLink})\n 💙 [Atstreak](${InstagramLink})`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};
