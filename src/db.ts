import { createConnection } from 'typeorm';
import { User } from './entity/user';
import dotenv from 'dotenv'

dotenv.config()



export const initializeDatabase = async () => {
    await createConnection({
        type: 'mysql',
        host: process.env.DB_HOS,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME ,
        entities: [User],
        synchronize: true,
        logging: false,
    });
    console.log('Database connection established');
};