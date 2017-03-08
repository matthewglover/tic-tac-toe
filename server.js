const Boom = require('boom');
const {
  createServer,
  setConnection,
  registerPlugins,
  addRoutes,
  startServer } = require('@matthewglover/hapi-wrapper');


const routeOptions = {
  setStaticRoutes: true,
  path: '/public/{param*}',
  handler: {
    directory: {
      path: './dist/public',
      listing: false,
    },
  },
};

const routes = [
  {
    method: 'GET',
    path: '/{params*}',
    handler(req, reply) {
      reply.file('dist/public/index.html');
    },
  },
  {
    method: 'GET',
    path: '/public/index.html',
    handler(req, reply) {
      reply(Boom.notFound());
    },
  },
];

const port = process.env.PORT || 4000;

createServer()
  .then(setConnection({ port }))
  .then(registerPlugins())
  .then(addRoutes(routes, routeOptions))
  .then(startServer)
  /* eslint-disable no-console */
  .then(server => console.log(`Server running at: ${server.info.uri}`))
  .catch(err => console.log(err));
