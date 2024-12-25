import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrations: ['migrations/**'],
  entities: [
    __dirname + '/post/entities/post.entity.ts',
    __dirname + '/users/entities/user.entity.ts',
  ],
  synchronize: true,
  logging: true,
});
// console.log('Entities:', AppDataSource.options.entities);
