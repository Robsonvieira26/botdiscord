
module.exports = {
  name: 'info',
  description: 'Informações sobre mim',
  execute(message, args, Discord) {
    const infoEmbed = new Discord.MessageEmbed()
    .setColor("#39D222")
    .setTitle('Quem sou Eu?')
    .setAuthor(
      'TARS Bot',
      'https://i.imgur.com/ansb9rs.png',
      'https://github.com/Robsonvieira26/botdiscord'
    )

    .setDescription(
      'Eu sou um bot Open Source.\nCriado para aprender as utilizações da biblioteca discord.js'
    )
    // .setThumbnail('https://i.imgur.com/ansb9rs.png')
    .addFields({
      name: 'Informações adicionais',
      value: 'Criado em 18/08/2020',
      
    });

  message.channel.send(infoEmbed);
  },
};