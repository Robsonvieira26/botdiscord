module.exports = {
  name: 'bigo',
  description: 'Otimizado',
  execute(message, args) {
    message.channel.send(`Ta otimizado. ${message.author}`);
  },
};
