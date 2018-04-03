import mongoose from 'mongoose';
import config from './config';

mongoose.Promise = global.Promise;

const connectToDb = async () => {
  const mongoUrl = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.db}`;

  try {
    mongoose.connection.on('connected', function() {
      console.log(`Mongoose default connection open to ${mongoUrl}`);
    });

    mongoose.connection.on('error', () => {
      throw new Error(`unable to connect to database: ${mongoUrl}`);
    });

    mongoose.set('debug', true);

    await mongoose.connect(mongoUrl);

  } catch (err) {
    console.log(err);
  }
}

export default connectToDb;
