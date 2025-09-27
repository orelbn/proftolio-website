# Copilot Instructions

This is a portfolio website project built with modern web technologies for Cloudflare Workers.

## Tech Stack
- **Runtime**: Bun (use `bunx` for package execution, not `npx`)
- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Backend**: Cloudflare Workers with Hono
- **Database**: Cloudflare D1 (SQLite) with Drizzle ORM
- **Authentication**: Better Auth
- **Build Tool**: Vite
- **Deployment**: Cloudflare Workers/Pages

## Project Structure
- `src/` - Frontend React application
- `worker/` - Cloudflare Workers backend code
- `worker/db/` - Database configuration and schema
- `public/` - Static assets

## Coding Standards
- Use TypeScript for all new code
- Use modern ES6+ features (async/await, destructuring, etc.)
- Use camelCase for variables and functions
- Use PascalCase for React components
- Use function declarations for regular functions, arrow functions for callbacks
- Use template literals for string interpolation
- Use lowercase with dashes for file names (e.g., `hero-section.tsx`, `auth-config.ts`)
- Prettier is configured for formatting - don't worry about formatting rules

## Database Preferences
- Use Drizzle ORM for all database operations
- Schema files are in `worker/db/schema/`
- Always use proper TypeScript types from Drizzle schemas
- For local development, use Wrangler's local D1 database

## Component Library
- Use shadcn/ui for UI components
- Components are in `src/components/ui/`
- Follow shadcn/ui patterns and conventions for component structure
- Install new components using `bunx shadcn@latest add [component-name]`

## Development Workflow
- Use `bun dev` for local development
- Use `bunx` instead of `npx` for running packages
- Use `bunx wrangler` for Cloudflare Workers CLI commands
- Environment configuration is in `wrangler.jsonc`

## Authentication
- Using Better Auth library
- Auth configuration is in `worker/services/better-auth/` and `src/services/better-auth/`
- Follow Better Auth patterns for session management