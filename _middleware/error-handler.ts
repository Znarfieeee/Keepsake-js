import { Request, Response, NextFunction } from 'express';

export function errorHandler(
    err: string | Error,
    req: Request,
    res: Response,
    next: NextFunction
): Response<any> | void {
    if (typeof err === 'string') {
        const is404 = err.toLowerCase().endsWith('not found');
        const statusCode = is404 ? 404 : 400;
        return res.status(statusCode).json({ message: err });
    }

    const error = err as Error;
    return res.status(500).json({ message: error.message });
}