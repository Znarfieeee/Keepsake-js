// filepath: c:\Users\USER\keepsake-repo\src\routes\user-router.ts
import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/user';

const router = Router();

// User creation route
router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, title, firstName, lastName, passwordHash, role } = req.body;

        // Validate required fields
        if (!email || !passwordHash || !role) {
            res.status(400).json({ error: 'Missing required fields: email, passwordHash, or role' });
            return;
        }

        const userRepository = getRepository(User);

        // Create and save the new user
        const newUser = userRepository.create({ email, title, firstName, lastName, passwordHash, role });
        const savedUser = await userRepository.save(newUser);

        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error creating user:', error);

        // Handle specific database errors (e.g., duplicate email)
        if ((error as any).code === '23505') { // PostgreSQL unique constraint violation
            res.status(400).json({ error: 'Email already exists' });
            return;
        }

        res.status(500).json({ error: 'Failed to create user' });
    }
});

export default router;