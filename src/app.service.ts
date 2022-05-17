import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class AppService {
  constructor(@Inject('MONGO') private database: Db) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getServices() {
    const collection = this.database.collection('services');
    const services = await collection.find().toArray();
    console.log(services);
  }
}
