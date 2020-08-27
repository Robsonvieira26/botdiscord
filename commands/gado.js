module.exports = {
  name: 'gado',
  description: 'muuuuuuu!',
  execute(message, args) {
    const chose = Math.floor(Math.random() * 2);
    switch (chose) {
      case 0:
        message.channel.send(
          `${message.author} a gente ja sabe que você é gado!`
        );
        break;

      case 1:
        message.channel.send(
          `Vou falar sua lingua ${message.author} Muuuuuuuuuuuuuuuuuuuuuuu!`
        );
        break;
      default:
        message.channel.send('Ei isso não era pra acontecer! 😕');
        break;
    }
  },
};
