import { Global, Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Global()
@Module({
  providers: [
    {
      provide: 'MONGO',
      useFactory: async () => {
        const uri =
          'mongodb://root:root@localhost:27017/?authSource=admin&readPreference=primary';
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db('aires');
        return database;
      },
    },
  ],
  exports: ['MONGO'],
})
export class DatabaseModule {}
