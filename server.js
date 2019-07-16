import express from 'express';

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.json(`<h2>Welcome </h2>`)
  });

  server.all('*', (req, res) => {
    res.json(`
      Sorry, no such route, try again!
    `);
  });

export default server;