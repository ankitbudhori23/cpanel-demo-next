const { startServer } = require('next/dist/server/lib/start-server');

startServer({
  dir: __dirname,
  port: parseInt(process.env.PORT, 10) || 3000,
  hostname: '0.0.0.0',
  isDev: false,
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
