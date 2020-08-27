module.exports = {
  name: 'teste',
  description: 'Testando',
  execute(message, args) {
    message.channel.send(`Ta Testndo ${message.author}`);
  },
};
