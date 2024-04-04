# Bun, Hono, React Template

This project consists of a Vite-based client application using React and Tailwind CSS for the frontend, and a Hono server for the backend. It's set up to use Bun for dependency management and script execution.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your system to manage dependencies and run scripts.

### Installing

To use this project as a starting point and push it to a new repository, follow these steps:

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git YourProjectName
```

Navigate into the cloned directory:

```bash
cd YourProjectName
```

Remove the existing git history:

```bash
rm -rf .git
```

Initialize a new git repository:

```bash
git init
```

Add all files to the new repository:

```bash
git add .
```

Commit the files:

```bash
git commit -m "Initial commit"
```

Create a new repository on GitHub (or another hosting service) and push your project:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YourProjectName.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME/YOUR_REPOSITORY_NAME` with the actual username and repository name of this template project, and `YOUR_USERNAME/YourProjectName` with your new project's repository path.

Navigate into the project directory:

```bash
cd <project-directory>
```

Install dependencies with Bun:

```bash
bun install
```

### Development

To start the Vite development server for the frontend, run:

```bash
bun run dev
```

For the backend, to start the Hono server:

```bash
bun run start
```

To watch for changes in the backend and automatically restart the server, use:

```bash
bun run watch
```

### Building for Production

To build the frontend for production, run:

```bash
bun run build
```

This will generate a `dist` folder in your client directory, containing the production-ready static files.

## Structure

- `/client`: Contains the Vite React application with Tailwind CSS.
- `/server`: Contains the Hono server application.
- `bun.lockb`: Generated file for Bun to lock the versions of dependencies.
- `README.md`: This file.

## Some Notes

This project template assumes that you have a .env file in the `/server` folder that defines the `PORT` variable used by `process.env` inside the `index.js` file. Depending on the port number you choose, the proxy set up in the client via `vite.config.js` will need to be changed (default is port 3030).

If there happens to be any errors after initializing this template, you may need to delete all the `bun.lockb` files (one in root, server, and client), then in the root directory run:

```bash
bun install
```

There are some dependencies in the client you may or may not need like `react-router-dom`, `framer-motion`, etc etc. To remove these just run:

```bash
cd client
```

```bash
bun uninstall <dependency>
```

## Acknowledgments

- React documentation: https://reactjs.org/docs/getting-started.html
- Vite documentation: https://vitejs.dev/guide/
- Tailwind CSS documentation: https://tailwindcss.com/docs
- Hono documentation: https://honojs.dev/
- Bun documentation: https://bun.sh/docs/getting-started

