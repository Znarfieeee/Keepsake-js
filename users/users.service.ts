import { getManager } from 'typeorm';
import { User } from '../src/entity/User';

export const userService = {
    getAll,
    getById,
    create,
    // update,
    delete: _delete,
};

// Get all users
async function getAll(): Promise<User[]> {
    const entityManager = getManager(); // Get the EntityManager
    return await entityManager.find(User); // Use the EntityManager to find all users
}

// Get a user by ID
async function getById(id: number): Promise<User> {
    const entityManager = getManager(); // Get the EntityManager
    const user = await entityManager.findOne(User, { where: { id } }); // Use the EntityManager to find a user by ID
    if (!user) throw 'User not found';
    return user;
}

// Create a new user
async function create(params: { 
    email: string;
    firstName: string;
    lastName: string;
}): Promise<void> {
    const entityManager = getManager(); // Get the EntityManager

    // Check if the email is already registered
    if (await entityManager.findOne(User, { where: { email: params.email } })) {
        throw new Error(`Email "${params.email}" is already registered`);
    }

    // Save the new user to the database
    const user = entityManager.create(User, params); // Create a new User instance
    await entityManager.save(user); // Save the user to the database
}

// Delete a user
async function _delete(id: number): Promise<void> {
    const entityManager = getManager();
    const user = await entityManager.findOne(User, { where: { id } });
    
    if (!user) throw 'User not found';
    
    await entityManager.remove(user);
}