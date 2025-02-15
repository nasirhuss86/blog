# Bloggy

Bloggy is a full-stack blogging platform built using React (frontend),
Cloudflare Workers (backend), TypeScript, Zod for validation, 
Prisma as the ORM with connection pooling, and Postgres as the database. 
It supports authentication using JWT and includes an admin panel for deleting blogs.

## Features
- User authentication with JWT
- Create, read, and delete blogs
- Admin panel for deleting user blogs
- Responsive UI built with React and Tailwind CSS
- Backend powered by Cloudflare Workers and Prisma
- Validation using Zod

## Tech Stack
- **Frontend:** React, TypeScript, React Router, Tailwind CSS
- **Backend:** Cloudflare Workers, Hono framework
- **ORM:** Prisma with Accelerate extension
- **Database:** Postgres
- **Validation:** Zod

## Prerequisites
- Node.js (v18 or later)
- Cloudflare account with Workers enabled
- Postgres database

## Installation
### Clone the repository
```bash
git clone <repository-url>
cd blog-master
```

### Install dependencies
#### Frontend
```bash
cd frontend
npm install
```
#### Backend
```bash
cd ../backend
npm install
```

## Configuration
1. Create a `.env` file in the `backend` directory with the following:
```
DATABASE_URL=<your_database_url>
JWT_SECRET=<your_jwt_secret>
```
2. Update `wrangler.toml` with your Cloudflare account details.

## Running the Project
### Backend
```bash
cd backend
npm run dev
```
### Frontend
```bash
cd ../frontend
npm run dev
```

## Deployment
### Backend (Cloudflare Workers)
```bash
cd backend
npx wrangler deploy
```
### Frontend (Vercel or Netlify)
- Push the frontend directory to a GitHub repository
- Connect the repository to Vercel or Netlify and deploy

## Admin Panel
- The admin panel is accessible by users with admin privileges
- Admins can delete any user's blog posts

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## Acknowledgements
- React and React Router
- Cloudflare Workers
- Prisma ORM
- Tailwind CSS
- Zod Validation Library

