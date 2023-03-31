exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: "RANDOM",
            author: { name: 'Help pannel' },
            footer: { text: 'What are you loking at me?' },
            fields: [
                { name: 'Bot', value: '`ping`, `uptime`' },
                { name: 'Music', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`, `volume`' },
            ],
            timestamp: new Date(),
            description: `To use filters, ${client.config.prefix}filter (the filter). Example : ${client.config.prefix}filter 8D.`,
        },
    });

};
