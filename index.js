
const { prefix, token, channel } = require('./config.json');


const Discord = require('discord.js');
 
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
 
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.on('ready', () => {
    console.log('bot is online!');
    client.user.setActivity('Test Features TARS');
	client.user.setUsername('TARS');
});

client.on('message', message => {
 
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
 

        if(message.author.id=="482962029531889694")  
        if (command === 'cargos') 
        client.commands.get('cargos').execute(message, args, Discord, client, channel);
        if (command === 'info') 
        client.commands.get('info').execute(message, args, Discord);


        

});

client.login(token);
