import { Database } from "bun:sqlite";

const db = new Database("db.sqlite", { create: true });

const users = db.query(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT,
        lastName TEXT,
        email TEXT
    );`
);

users.run();

const insertUsers = db.query(`
    INSERT INTO users (firstName, lastName, email)
    VALUES
        ('John', 'Doe', 'john_doe@mail.com'),
        ('Jane', 'Doe', 'jane_doe@mail.com'),
        ('Alice', 'Smith', 'alice_smith@mail.com'),
        ('Bob', 'Smith', 'bob_smith@mail.com');
`);


insertUsers.run();