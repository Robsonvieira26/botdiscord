const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
  console.log('Estou Pronto!');
  client.user.setActivity('Ajustando o nível de sarcasmo');
  client.user.setUsername('TARS');
});

client.on('guildCreate', (guild) => {
  console.log(`Bot adicionado no servidor  ${guild.name}`);
});

client.on('guildDelete', (guild) => {
  console.log(`Bot Removido do servidor  ${guild.name}`);
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args
    .shift()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  if (command.guildOnly && message.channel.type === 'dm') {
    return message.reply('Eu não posso executar esse comando em DMs');
  }

  if (command.args && !args.length) {
    let reply = `Você não forneceu nenhum argumento ${message.author}!`;

    if (command.usage) {
      reply += `\nO uso adequado seria: \`${prefix}${command.name} ${command.usage}\``;
    }

    return message.channel.send(reply);
  }

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `Por favor espere ${timeLeft.toFixed(1)}s antes de usar o comando \`${
          command.name
        }\` novamente.`
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('Ocorreu um erro o executar esse comando');
  }
});

client.login(token);
