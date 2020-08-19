const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Lista de todos os comandos',
	aliases: ['commands','ajuda','h'],
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
      data.push('Aqui estão todos os meus comandos:');
     //console.log(commands.map(command => command.name))
      //data.push(commands.map(command => command.name).join('\n'));
    
      var totalCommands =commands.map(command => command.name)
			for(var i=0; i<totalCommands.length; i++){
				data.push(`\`${prefix}${totalCommands[i]}\``);
			}


      data.push(`\nVocê pode mandar \`${prefix}help [command name]\` para obter as informações de um comando especifico!`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('Eu enviei a você um DM com todos os meus comandos!');
				})
				.catch(error => {
					console.error(`Não foi possível enviar ajuda na DM para ${message.author.tag}.\n`, error);
					message.reply('Parece que não posso mandar um DM para você!');
				});
		}

		const name = args.shift().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');;
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('Este não é um comando válido!');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Apelido:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Descrição:** ${command.description}`);
		if (command.usage) data.push(`**Uso:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} segundo(s)`);

		message.channel.send(data, { split: true });
	},
};