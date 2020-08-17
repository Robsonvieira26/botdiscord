const Discord = require("discord.js");
module.exports = {
	name: 'hello-there',
	description: 'Star wars reference!',
	execute(message, args) {
    //message.reply('General Kenobi');
    const gif = new Discord.MessageAttachment('https://i.imgur.com/3V0v8UH.gif');
    if (gif) {
      return message.channel.send(gif);
    }
	},
};