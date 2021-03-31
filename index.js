
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
});

client.on('message', message => {
 
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
 

            
        if (command === 'cargos') 
        client.commands.get('cargos').execute(message, args, Discord, client, channel);
        // if (command === '4p')      
        //     client.commands.get('4p').execute(message, args, Discord, client, channel);
    

});

client.login(token);
