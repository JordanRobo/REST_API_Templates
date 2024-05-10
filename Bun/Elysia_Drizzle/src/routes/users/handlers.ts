import { eq } from "drizzle-orm";
import db from '../../db/db';
import { NotFoundError } from 'elysia';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

const users = sqliteTable( 'users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    firstName: text('firstname'),
    lastName: text('lastname'),
    email: text('email'),
});

export async function getUsers() {
    try {
        return await db.select().from(users);
    } catch (error: unknown) {
        console.log(`Error getting users: ${error}`);
    }
};

export async function getUser (id: number) {
    try {
        const user = await db.select().from(users).where(eq(users.id, id));
        
        if (!user) {
            throw new NotFoundError('User not found');
        }

        return user;
    } catch (error: unknown) {
        console.log(`Error getting user: ${error}`);
    }
};

export async function createUser(options: { firstName: string, lastName: string, email: string }) {
    try {
        const { firstName, lastName, email } = options;

        return await db.insert(users).values({ firstName, lastName, email });
    } catch (error: unknown) {
        console.log(`Error creating user: ${error}`);
    }
}

export async function updateUser(id: number, options: { firstName?: string, lastName?: string, email?: string}) {
    try {
        const { firstName, lastName, email } = options;

        return await db.update(users).set({ firstName, lastName, email }).where(eq(users.id, id));
    } catch (error: unknown) {
        console.log(`Error updating user: ${error}`);
    }
}

export async function deleteUser( id: number) {
    try {
        const user = await db.select().from(users).where(eq(users.id, id));

        return await db.delete(users).where(eq(users.id, id));
    } catch (error: unknown) {
        console.log(`Error deleting user: ${error}`);
    }
}