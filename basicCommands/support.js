const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = 'https://discord.gg/2TDD89cxwS';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle('Support server')
            .setDescription(`Click [here](${supportServerLink}) to join our server.\nWe will be there for you anytime ❤️`)
            .setThumbnail(`https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTB5emo1eXVsZ2J1ZW82ZXg4ZXhicTZvdXBmaXRleXZkZXIweTh2cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/43JJ6NdlVDlNAcaCQ4/giphy.gif`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};
