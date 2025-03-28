import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    email!: string;

    @Column()
    title!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    passwordHash!: string;

    @Column()
    role!: string;
}


//User Creation
import { Router } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/user';

const router = Router();

// User creation route
router.post('/users', async (req, res) => {
    try {
        const { passwordHash, role } = req.body;

        const userRepository = getRepository(User);
        const newUser = userRepository.create({ passwordHash, role });
        const savedUser = await userRepository.save(newUser);

        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

export default router;





//User Deletion
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    passwordHash!: string;

    @Column()
    role!: string;

    // Method to delete a user by ID
    static async deleteUserById(userId: number): Promise<void> {
        const userRepository = getRepository(User);
        await userRepository.delete(userId);
    }
}
