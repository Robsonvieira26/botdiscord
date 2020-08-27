const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
  name: 'info',
  description: 'Informações sobre mim',
  aliases: ['informacoes', 'inf', 'i', 'whoami', 'about'],
  cooldown: 5,
  execute(message, args) {
    const chose = Math.floor(Math.random() * 5);
    switch (chose) {
      case 0:
        colorChose = '#39D222';
        break;
      case 1:
        colorChose = '#99DDC8';
        break;
      case 2:
        colorChose = '#FF4100';
        break;
      case 3:
        colorChose = '#020887';
        break;
      case 4:
        colorChose = '#A600FF';
        break;
      default:
        colorChose = '#FF0000';
        break;
    }

    const infoEmbed = new Discord.MessageEmbed()
      .setColor(colorChose)
      .setTitle('Quem sou Eu?')
      .setAuthor(
        'TARS Bot',
        'https://i.imgur.com/ansb9rs.png',
        'https://github.com/Robsonvieira26/botdiscord'
      )

      .setDescription(
        'Eu sou um bot Open Source.\nCriado para aprender as utilizações da biblioteca discord.js'
      )
      .setThumbnail('https://i.imgur.com/ansb9rs.png')
      .addFields({
        name: 'Informações adicionais',
        value: 'Criado em 18/08/2020',
      });

    message.channel.send(infoEmbed);
  },
};
