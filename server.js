const app = require('express')();

app.get('/', (req, res) => res.send('Don\'t you dare to do it. https://www.youtube.com/watch?v=x3qHYvaLN9I \n Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users'));

module.exports = () => {
  app.listen(3000);
}