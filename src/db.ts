import { DataSource } from 'typeorm';
import { User } from './entity/user';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'mysql', // Ensure this matches your database type (e.g., 'mysql', 'postgres')
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'test',
    entities: [User], // Add all your entities here
    synchronize: true, // Set to false in production to avoid unintended schema changes
    logging: false,
});

export const initializeDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Database connection established');
    } catch (error) {
        console.error('Error during database initialization:', error);
        process.exit(1); // Exit the process if the database connection fails
    }
};