const Discord = require("discord.js");
module.exports = {
	name: 'errou',
	description: 'Big Fausto reference!',
	execute(message, args) {
    //message.reply('General Kenobi');
    const gif = new Discord.MessageAttachment('https://i.imgur.com/K7WSDrQ.jpg');
    if (gif) {
      return message.channel.send(gif);
    }
	},
};