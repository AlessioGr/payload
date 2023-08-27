/* eslint-disable @typescript-eslint/no-var-requires */
import type { ConnectOptions } from 'mongoose';
import mongoose from 'mongoose';
import type { Connect } from '@alessiogr/payloadtest/database';
import type { MongooseAdapter } from './index.js';

export const connect: Connect = async function connect(
  this: MongooseAdapter,
  payload,
) {
  if (this.url === false) {
    return;
  }

  if (!payload.local && typeof this.url !== 'string') {
    throw new Error('Error: missing MongoDB connection URL.');
  }

  let urlToConnect = this.url;
  let successfulConnectionMessage = 'Connected to MongoDB server successfully!';

  const connectionOptions: ConnectOptions & { useFacet: undefined } = {
    autoIndex: true,
    ...this.connectOptions,
    useFacet: undefined,
  };

  if (process.env.NODE_ENV === 'test') {
    if (process.env.PAYLOAD_TEST_MONGO_URL) {
      urlToConnect = process.env.PAYLOAD_TEST_MONGO_URL;
    } else {
      connectionOptions.dbName = '@alessiogr/payloadtestmemory';

      const { MongoMemoryServer } = (await import('mongodb-memory-server')).default;
      const getPort = (await import('get-port')).default;

      const port = await getPort();
      this.mongoMemoryServer = await MongoMemoryServer.create({
        instance: {
          dbName: '@alessiogr/payloadtestmemory',
          port,
        },
      });

      urlToConnect = this.mongoMemoryServer.getUri();
      successfulConnectionMessage = 'Connected to in-memory MongoDB server successfully!';
    }
  }

  try {
    this.connection = (
      await mongoose.connect(urlToConnect, connectionOptions)
    ).connection;

    if (process.env.PAYLOAD_DROP_DATABASE === 'true') {
      this.payload.logger.info('---- DROPPING DATABASE ----');
      await mongoose.connection.dropDatabase();
      this.payload.logger.info('---- DROPPED DATABASE ----');
    }
    this.payload.logger.info(successfulConnectionMessage);
  } catch (err) {
    this.payload.logger.error(
      `Error: cannot connect to MongoDB. Details: ${err.message}`,
      err,
    );
    process.exit(1);
  }
};
