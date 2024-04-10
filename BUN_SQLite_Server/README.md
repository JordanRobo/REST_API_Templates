## Bun, Elysia, Drizzle, SQLite

This template provides a server built with [Bun](https://bun.sh/), a modern JavaScript runtime, [Elysia](https://elysia.deno.dev/), a web framework for Bun, [Drizzle](https://github.com/drizzle-team/drizzle-orm), an ORM for SQL databases, and [SQLite](https://www.sqlite.org/index.html), a self-contained, serverless, zero-configuration, transactional SQL database engine.

### Setup

1. To get started with this template, simply paste this command into your terminal:
   ```bash
   //to-do add template download
   ```
2. Install the dependancies:
   ```bash
   bun install
   ```
3. Initialize the database and seed it with sample data:
   ```bash
   bun migrate
   ```
This command will create a `users` table with columns `id`, `firstName`, `lastName`, and `email`, and insert four sample users.

### Usage

1. Start the development server:
   ```bash
   bun dev
   ```
   The server will be running at `http://localhost:2323`.

2. Interact with the API using tools like Postman, curl, or a web browser. The available endpoint is:
   - `GET /api/users`: Get a list of all users.
   - `GET /api/users/:id`: Get a specific user by ID.
   - `POST /api/users`: Create a new user.
   - `PUT /api/users/:id`: Update an existing user by ID.
   - `DELETE /api/users/:id`: Delete a user by ID.

   For example, to get a list of all users, you can send a `GET` request to `http://localhost:2323/api/users`.

### Configuration

The server configuration, including the database connection details, can be found in the `bun.config.ts` file.

### Dependencies

This server template relies on the following dependencies:

- [Bun](https://bun.sh/): A modern JavaScript runtime.
- [Elysia](https://elysia.deno.dev/): A web framework for Bun.
- [Drizzle](https://github.com/drizzle-team/drizzle-orm): An ORM for SQL databases.
- [SQLite](https://www.sqlite.org/index.html): A self-contained, serverless, zero-configuration, transactional SQL database engine.
