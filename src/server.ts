// import 'reflect-metadata';
// import express, { Application, Request, Response, NextFunction } from 'express';
// import cors from 'cors';
// import { initializeDatabase } from './src/db';
// import { errorHandler } from './_middleware/error-handler';
// import usersController from './users/users.controller';

// const app: Application = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// // API Routes
// app.use('/users', usersController);

// // Global Error Handler
// app.use((err: string | Error, req: Request, res: Response, next: NextFunction) => {
//     errorHandler(err, req, res, next);
// });

// // Server Port Configuration
// const port: number = process.env.NODE_ENV === 'production' 
//     ? Number(process.env.PORT) || 80 
//     : 4000;

// initializeDatabase().then(() => {
//     app.listen(port, () => console.log(`Server listening on port ${port}`));
// }).catch(error => console.log('Database connection error:', error));