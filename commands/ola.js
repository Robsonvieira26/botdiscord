module.exports = {
  name: 'ola',
  cooldown: 5,
  aliases: ['oi', 'hello', 'hi'],
  description: 'mensagens de ola',
  execute(message, args) {
    const chose = Math.floor(Math.random() * 5);
    switch (chose) {
      case 0:
        message.channel.send('"Mensagem_generica_de_ola.txt"');
        break;
      case 1:
        message.channel.send('Oi! Como vai você?');
        break;
      case 2:
        message.channel.send('Você de novo aqui??');
        message.react('🤬');
        break;
      case 3:
        message.channel.send(
          `Ola! ${message.author.username} como vai a vida?`
        );
        break;
      case 4:
        message.channel.send('Oi casado! :hearts:');
        message.react('😏');
        break;
      default:
        message.channel.send('Ei isso não era pra acontecer! 😕');
        break;
    }
  },
};
