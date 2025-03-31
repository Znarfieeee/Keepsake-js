import { getManager } from 'typeorm';
import { User } from '../src/entity/user'; // Corrected casing
// ...existing code...

export const userService = {
    getAll,
    getById,
    create,
    update,
    // delete: _delete,
};

async function update(id: number, params: { 
    email?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
}): Promise<User> {
    const entityManager = getManager(); // Get the EntityManager

    // Find the user by ID
    const user = await entityManager.findOne(User, { where: { id } });
    if (!user) throw new Error('User not found');

    // Check if the email is being updated and already exists
    if (params.email && params.email !== user.email) {
        const emailExists = await entityManager.findOne(User, { where: { email: params.email } });
        if (emailExists) {
            throw new Error(`Email "${params.email}" is already registered`);
        }
    }

    // Merge the updated fields into the user object
    Object.assign(user, params);

    // Save the updated user to the database
    return await entityManager.save(user);
}


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