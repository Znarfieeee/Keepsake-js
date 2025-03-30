import 'reflect-metadata';
import express, { Application } from 'express';
import cors from 'cors';
import { initializeDatabase } from './db';
import userRoutes from './routes/user-router'; // Ensure this path is correct

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Register routes
app.use('/api/users', userRoutes); // Register the user-router here

// Start the server
const PORT = process.env.PORT || 3000;

initializeDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
        process.exit(1);
    });