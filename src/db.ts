import { DataSource } from 'typeorm';
import { createConnection } from 'typeorm';
import { User } from './entity/user'; // Correct casing
import dotenv from 'dotenv';

dotenv.config();

export const initializeDatabase = async () => {
    await createConnection({
        type: 'mysql',
        host: process.env.DB_HOST, // Fixed typo in environment variable
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [User],
        synchronize: true,
        logging: true,
    });
    console.log('Database connection established');
};