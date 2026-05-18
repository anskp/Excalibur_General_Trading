# Excalibur (Next.js + Tailwind + Shadcn UI)

This is a modern web application built with [Next.js](https://nextjs.org/), leveraging a robust tech stack designed for scalability, type safety, and beautiful user interfaces.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) & [React Query](https://tanstack.com/query/latest)
- **Validation:** [Zod](https://zod.dev/) & React Hook Form
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Install the project dependencies:
```bash
npm install
```

2. Set up your environment variables. Create a `.env` file in the root directory based on `.env.example` (if provided) and configure your database connection string and NextAuth secrets.

3. Initialize the Prisma database:
```bash
# Push the schema to your database
npm run db:push

# Generate the Prisma Client
npm run db:generate
```

### Development Server

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running.

## 🛠️ Available Scripts

The following standard npm scripts are available in the project:

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the application for production (configured for standalone output).
- `npm run start`: Runs the production server using the standalone build.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run db:push`: Pushes the current Prisma schema state to the database without creating a migration.
- `npm run db:generate`: Generates the Prisma Client based on the schema.
- `npm run db:migrate`: Creates and applies database migrations.
- `npm run db:reset`: Resets the database, applying all migrations from scratch.
