const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({ presence: {
    status: 'idle'},
  disableMentions: 'everyone' });
const { Player } = require('discord-player');

const player = new Player(client);
client.player = player;
client.config = require('./config/bot.json');
client.emotes = require('./config/emojis.json');
client.filters = require('./config/filters.json');
client.commands = new discord.Collection();
fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir('./player-events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./player-events/${file}`);
        let eventName = file.split(".")[0];
        client.player.on(eventName, event.bind(null, client));
    });
});

fs.readdir('./commands/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});
client.on("ready", async () => {
  console.log(`${client.user.tag} is ready`)
  const statusgame = [
    `${client.guilds.cache.size} servers`,
    `${client.channels.cache.size} channels`,
    `${client.users.cache.size} users`,
    `Run Tkm!help`,
    `Helping you!!!`,
    `Lmao`,
    `Just use tkm!help for more info`,
    `Say HI! to you`,
    `Note: I will love you if you using my bot 3>`,
    `My music from tkm!play`
  ];
  let index = 0;
  setInterval(() => {
    if (index === statusgame.lenth) index = 0;
    const status = statusgame[index];
    client.user.setActivity(status,
    {type: "WATCHING"});
                         
     index++;
    if (index === 10) index = 0;
  }, 15000)
});
require('./server')();
client.login(Not PubLic Code);
