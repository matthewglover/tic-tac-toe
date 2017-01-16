const {
  createServer,
  setConnection,
  registerPlugins,
  addRoutes,
  startServer } = require('@matthewglover/hapi-wrapper');

const routeOptions = {
  setStaticRoutes: true,
  path: '/{param*}',
  handler: {
    directory: {
      path: './dist',
      listing: false,
    },
  },
};

const port = process.env.PORT || 4000;

createServer()
  .then(setConnection({ port }))
  .then(registerPlugins())
  .then(addRoutes([], routeOptions))
  .then(startServer)
  /* eslint-disable no-console */
  .then(server => console.log(`Server running at: ${server.info.uri}`))
  .catch(err => console.log(err));
