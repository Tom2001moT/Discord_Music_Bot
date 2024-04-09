const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'animecommands',
  description: 'Display a list of available anime-related commands!',
  execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('Anime Commands')
      .setDescription(`__**✅ List Of Availabe Interations**__\n\n▶️ __**Section 1 :**__\n  blush, cuddle, dance, slap, bonk, bully, hug, confused, kiss, pat, happy, smile.\n\n▶️ __**Section 2 :**__\n yes, highfive, wink, wave, thinking, sad, cry, stare, bored, scream, nervous, kill.\n`)
      
      .setImage(`https://images.wallpapersden.com/image/download/pokemon-4k-cool_bG1mbGiUmZqaraWkpJRobWllrWdpZWU.jpg`);
    message.reply({ embeds: [embed] });
  },
};
