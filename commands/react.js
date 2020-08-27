const { Emoji } = require('discord.js');

module.exports = {
  name: 'react',
  description: 'Reage a sua mensagem',
  execute(message, args) {
    message.react('😄');
    message.react('🤣');
    message.react('🤬');
    message.react('🤡');
  },
};
