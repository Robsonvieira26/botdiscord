const Discord = require("discord.js");
module.exports = {
	name: 'edit',
	description: 'null',
	execute(message, args) {
    async function main(){
      const m = await message.channel.send("ping?");
      message.channel.edit("edited");
    }
	},
};