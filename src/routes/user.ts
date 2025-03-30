import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../_middleware/validate-request';
import { userService } from '../../users/users.service';
import Joi from 'joi'

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createSchema, create);
// router.put('/:id', updateSchema, update);
// router.delete('/:id', _delete);

export default router;

async function getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const users = await userService.getAll();
        res.json(users);
    } catch (error) {
        next(error);
    }
}

async function getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const user = await userService.getById(Number(req.params.id));
        res.json(user);
    } catch (error) {
        next(error);
    }
}

async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        await userService.create(req.body);
        res.json({ message: 'User created' });
    } catch (error) {
        next(error);
    }
}

function createSchema(req: Request, res: Response, next: NextFunction): void {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
    });
    validateRequest(req, next, schema);
}

// function updateSchema(req: Request, res: Response, next: NextFunction): void {
//     const schema  = Joi.object({
//         title: Joi.string().empty(''),
//         firstName: Joi.string().empty(''),
//         lastName: Joi.string().empty(''),
//         role: Joi.number().valid(Roles.Admin, Roles.User).empty(''),
//         email: Joi.string().email().empty(''),
//         password: Joi.string().min(6).empty(''),
//         confirmPassword: Joi.string().valid(Joi.ref('password')).empty(''),
//     }).with('password', 'confirmPassword');
//     validateRequest(req, next, schema);
// }