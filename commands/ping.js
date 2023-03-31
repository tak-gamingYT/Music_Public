exports.run = async (client, message) => {
    let msg = await message.reply('Pinging...');
    await msg.edit(`🏓 PONG! \`\`\`Bot Latency : ${Date.now() - msg.createdTimestamp}ms \nAPI Latency : ${client.ws.ping}ms \`\`\``)
};
