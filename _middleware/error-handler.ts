
import { Request, Response, NextFunction } from 'express';

export function errorHandler(
    err: String | Error,
    req: Request,
    res: Response,
    next: NextFunction
): Response<any> | void {
    switch(true) {
        case typeof err === 'string': {
            const is404 = err.toLowerCase().endsWith('not found')
            const statusCode = is404 ? 404:400
            return res.status(statusCode).json({message:err})
        }
        default: {
            const error = err as Error
            return res.status(500).json({message: error.message})
        }
    }
}