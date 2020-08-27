const { prefix } = require('../config.json');
const Discord = require('discord.js');
module.exports = {
  name: 'sudo',
  description: 'install commands',

  cooldown: 5,
  execute(message, args) {
    const data = [];

    if (args == 'git') {
      data.push('Em breve link para instalar o git');
    }
    if (!args.length) {
      data.push(
        'Oi você não me mandou nenhum argumento, não posso te ajudar! :cry: '
      );
    }

    message.channel.send(data, {
      split: true,
    });
  },
};
