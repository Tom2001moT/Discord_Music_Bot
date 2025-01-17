const { getHistory } = require('./historyUtils');
const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'history',
  description: 'Show the history of played songs',
  execute(message) {
    const history = getHistory();

    if (history.length === 0) {
      return message.reply('The song history is empty.');
    }

    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
     .setAuthor({
          name: 'History!',
          iconURL: 'https://cdn.discordapp.com/attachments/1175488636033175602/1175488720242229450/clock.png?ex=656b6a2e&is=6558f52e&hm=6a03f4358573633ecf29cee2bb85eb5da4cc2ec94e6e79595b499009993a51b2&',
          url: 'https://discord.gg/2TDD89cxwS'
        })
      .setDescription(history.map((song, index) => `${index + 1}. ${song.title} - \n[${song.link}]`).join('\n'));

    message.reply({ embeds: [embed] });
  },
};

