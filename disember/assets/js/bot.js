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
	}
});


function vm_bot_start(token) {
	bot.login(token);
	alert('vm_bot was started!');
	console.log('bot started');
}