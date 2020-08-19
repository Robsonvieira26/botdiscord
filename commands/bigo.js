module.exports = {
	name: 'bigO',
	description: 'Otimizado',
	execute(message, args) {
		message.channel.send(`Ta otimizado. ${message.author}`);
	},
};