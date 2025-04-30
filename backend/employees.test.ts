import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Employee } from './employeemodel';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterEach(async () => {
  await Employee.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Employee Model Test', () => {
  it('creates and saves a user successfully', async () => {
    const employeeData = { name: '', email: '' };
  });
});
