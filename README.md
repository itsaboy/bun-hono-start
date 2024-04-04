# Bun, Hono, React Template

This project consists of a Vite-based client application using React for the frontend, and a Hono server for the backend. It's set up to use Bun for dependency management and script execution.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your system to manage dependencies and run scripts.

# How to Use This Project as a Template

This project is designed to serve as a starting point for your own projects. It is set up as a template repository on GitHub, which simplifies the process of creating a new repository based on this template.

## Using the GitHub Template Repository

To start a new project based on this template:

1. Navigate to the original repository page on GitHub.
2. Click the "Use this template" button.
3. Follow the prompts to create a new repository based on this template. You'll be able to choose the owner, name, description, and visibility of your new repository.

This method will copy the repository's content into a new repository under your control, without carrying over the original git history. It's the simplest way to start with a clean slate.

## Optional Methods

While using the GitHub template feature is recommended, you can also manually download or clone the project if you prefer:

### Downloading as a ZIP File

- Navigate to the main page of the repository on GitHub.
- Click the "Code" button, then select "Download ZIP."
- Unzip the file on your local machine and begin working on your project.

### Cloning and Pushing to a New Repository (Not Recommended)

If you wish to manually clone and push to a new repository:

Clone the repository (this will include the git history, which is not necessary if you use the template feature):

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git YourProjectName
```

Follow the steps to remove the git history, initialize a new repository, and push to a new remote as detailed below.

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

# Installation

Navigate into the project directory:

```bash
cd <project-directory>
```

Install dependencies with Bun:

```bash
bun install
```

Do this in the root directory and inside both the `/client` and `/server` folders.

### Development

To start the Vite development server for the frontend, run:

```bash
bun run dev
```

For the backend, to start the Hono server:

```bash
bun run start
```

Note: Starting the server before the frontend has been build will cause a 404 error in the browser.

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

## Some Info

This project template assumes that you will have a .env file in the `/server` folder that defines the `PORT` variable used by `process.env` inside the `index.js` file.

If there happens to be any errors after initializing this template, you may need to delete all the `bun.lockb` files (one in root, server, and client), then reinstall dependencies in each directory with:

```bash
bun install
```

Don't want to use React? While in root, delete the `/client` folder with:

```bash
rm -rf client
```

Then create a new Vite frontend to your specifications with:

```bash
bun create vite@latest
```

## Acknowledgments

- React documentation: https://reactjs.org/docs/getting-started.html
- Vite documentation: https://vitejs.dev/guide/
- Hono documentation: https://honojs.dev/
- Bun documentation: https://bun.sh/docs/getting-started