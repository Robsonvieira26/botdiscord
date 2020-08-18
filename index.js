const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Estou Pronto!');
	client.user.setActivity('Ajustando o nivel de sarcasmo');
	client.user.setUsername('TARS');
});

client.on("guildCreate",guild =>{
	console.log(`Bot adicionado no servidor  ${guild.name}`);
})

client.on("guildDelete",guild =>{
	console.log(`Bot Removido do servidor  ${guild.name}`);
})

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Ocorreu um erro ao tentar executar esse comando!');
	}
});

client.login(token);