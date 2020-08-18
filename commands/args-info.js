module.exports = {
	name: 'args-info',
	description: 'Teste leitura de argumentos',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === '1') {
      message.channel.send('1');
      if (args[1] === '2'){
      message.channel.send('2');
      var resultado = parseInt(args[0]) + parseInt(args[1]);
      message.channel.send(resultado);
    }
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};