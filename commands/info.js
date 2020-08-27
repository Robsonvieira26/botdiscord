const { prefix } = require('../config.json');
module.exports = {
  name: 'info',
  description: 'Informações sobre mim',
  aliases: ['informacoes', 'inf', 'i', 'whoami', 'about'],
  cooldown: 5,
  execute(message, args) {
    const data = [];
    //args = args.toLowerCase();
    if (args == 'git' || args == 'GIT') {
      data.push(
        'Aqui esta o meu repositório: https://github.com/Robsonvieira26/botdiscord'
      );
    }
    if (!args.length) {
      data.push(
        'Oi eu sou um projeto de bot Open Source.\nFui criado em 18/08/2020'
      );
      data.push(
        `\nVocê pode mandar \`${prefix}info git\` para acessar o meu repositório`
      );
    }

    message.channel.send(data, { split: true });
  },
};
