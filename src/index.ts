import userRoutes from './routes/user';
import 'reflect-metadata';
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { initializeDatabase } from './db';
import { errorHandler } from '../_middleware/error-handler';
import * as dotenv from 'dotenv';

dotenv.config()
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Register user routes
app.use('/users', userRoutes);

// Global Error Handler
app.use((err: string | Error, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
});

const port = Number(process.env.PORT) || 4000;

initializeDatabase().then(() => {
    app.listen(port, () => console.log(`Server listening on port ${port}`));
}).catch(error => console.log('Database connection error:', error));