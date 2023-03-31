exports.run = async (client, message) => {
    if (args.length > 0) {
            if (message.deletable) message.delete();
          message.channel.send(args.join(' '))
        }
        else {
          if (message.deletable) message.delete();
          message.reply('You did not send a message to repeat, cancelling command.')
        };
};