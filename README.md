# Rest API Templates Monorepo

This monorepo is a collection of server templates for building RESTful APIs with basic CRUD (Create, Read, Update, Delete) functionality. The goal is to provide a starting point for various projects that require a server to handle database operations, with each template written in a different language or framework.

## Overview

The monorepo contains multiple folders, each representing a separate server template. Each template is designed to be self-contained, with its own set of dependencies, setup instructions, and documentation.

The templates currently included are:

- **Bun, Elysia, Drizzle, SQLite**: A server template built with Bun, Elysia, Drizzle ORM, and SQLite database.

More server templates will be added to the monorepo over time, covering different languages, frameworks, and database systems.

## Getting Started

To get started with any of the server templates, follow these steps:

1. Navigate to the desired server template folder within the monorepo.
2. Follow the setup instructions provided in the template's README file to install the required dependencies.
3. Run the server using the provided commands.
4. Interact with the API using tools like Postman, curl, or a web browser.

Each server template's README will provide detailed instructions on how to set up the environment, run the server, and use the available API endpoints.

## Contributing

Contributions are welcome! If you'd like to add more server templates to this monorepo, please follow these steps:

1. Fork the repository.
2. Create a new branch for your server template: `git checkout -b my-server-template`.
3. Add your server template files to a new directory within the monorepo.
4. Create a README file for your server template, describing the setup process, usage instructions, and available API endpoints.
5. Commit your changes: `git commit -m "Add my-server-template"`.
6. Push to the branch: `git push origin my-server-template`.
7. Open a pull request on the main repository.

## License

This project is licensed under the [MIT License](LICENSE).
