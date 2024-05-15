// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()
// const port = process.env.PORT || 3000

// server.use(middlewares)
// server.use(router)

// server.listen()
const jsonServer = require('json-server');
const db = require('./db.json');
const PORT = process.env.PORT || 3000;

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
