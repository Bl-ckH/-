const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS"] });

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const event = require(`./events/${file}`);
  client.on(event.name, event.execute);
}

client.login(''); // TOKEN durch deinen Bot-Token ersetzen