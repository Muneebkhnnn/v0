# AI Project Builder

A full-stack Next.js app where users can describe an idea in plain text and generate project sessions through an AI chat workflow.

## What This Project Does

- Lets users sign in and manage their own projects.
- Starts a chat-style flow to generate project output.
- Stores projects, messages, and generated fragments in PostgreSQL.
- Tracks usage points.
- Uses background event handling with Inngest.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Prisma + PostgreSQL
- Clerk (authentication)
- Inngest (background jobs)
- Tailwind CSS + Radix UI

## Prerequisites

- Node.js 18+
- npm
- PostgreSQL database (local or hosted)

## 1) Install Dependencies

```bash
npm install
```

## 2) Configure Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DB_NAME"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

GEMINI_API_KEY="your_gemini_api_key"
E2B_API_KEY="your_e2b_api_key"

INNGEST_DEV=1
```

## 3) Start Database (Optional Local Setup)

If you want to run Postgres locally with Docker:

```bash
docker compose up -d
```

This project includes a `docker-compose.yml` with Postgres exposed on port `5433`.

## 4) Run Prisma Migrations

```bash
npx prisma migrate dev
```

## 5) Run the App

```bash
npm run dev
```

Open http://localhost:3000

## 6) Run Inngest Dev Server

In a second terminal:

```bash
npx inngest-cli@latest dev
```

## Useful Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```
`

## Notes

- If auth is not configured, Clerk-protected flows will fail.
- If Inngest is not running, async/event-driven steps will not be processed in local development.
