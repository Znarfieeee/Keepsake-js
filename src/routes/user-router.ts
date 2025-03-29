//User Creation
import { Router } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/user';

const router = Router();

// User creation route
router.post('/users', async (req, res) => {
    try {
        const { email, title, firstName, lastName, passwordHash, role } = req.body;

        const userRepository = getRepository(User);
        const newUser = userRepository.create({ email, title, firstName, lastName, passwordHash, role });
        const savedUser = await userRepository.save(newUser);

        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

export default router;
