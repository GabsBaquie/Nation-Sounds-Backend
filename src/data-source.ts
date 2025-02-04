// src/data-source.ts
import * as dotenv from 'dotenv';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Concert } from './entity/Concert';
import { Content } from './entity/Content';
import { Day } from './entity/Day';
import { Notification } from './entity/Notification';
import { POI } from './entity/POI';
import { Program } from './entity/Program';
import { SecurityInfo } from './entity/SecurityInfo';
import { User } from './entity/User';

dotenv.config();

// Ajoutez cette ligne pour vérifier
console.log('DATABASE_URL:', process.env.DATABASE_URL);

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: process.env.NODE_ENV !== "production",
  logging: process.env.NODE_ENV === "development",
  ssl: {
    rejectUnauthorized: false
  },
  entities: [
    User,
    Program,
    Day,
    Concert,
    Notification,
    POI,
    SecurityInfo,
    Content,
  ],
  migrations: [],
  subscribers: [],
});