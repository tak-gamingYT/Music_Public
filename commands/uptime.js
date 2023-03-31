exports.run = async (client, message) => {
let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        return message.channel.send(`\`\`\` My Uptime Is : ${days} Days ${hours} Hours ${minutes} Minutes and ${seconds} Seconds \`\`\``);
};
