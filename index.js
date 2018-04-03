import mongoose from 'mongoose';
import config from './config/config';
import app from './config/express';
import connectToDb from './config/db';
import router from './server/routes/router';

connectToDb();

app.use('/', router);

app.listen(config.port, () => {
  console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
});

module.exports = app;
