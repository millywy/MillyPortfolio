# Overview

This is a full-stack web application for Milly Wong's personal website, built with Express.js backend and React frontend using Vite. The project structure follows a modern monorepo approach with shared TypeScript schemas and a clean separation between client and server code. The website showcases personal projects, research, opinions, art commentary, and faith-related content with multiple content sections and interactive features.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript, bundled using Vite
- **Routing**: Wouter for client-side routing with file-based page structure
- **Styling**: Tailwind CSS with shadcn/ui component library, configured for dark theme with custom color variables
- **State Management**: TanStack React Query for server state management
- **Components**: Radix UI primitives with custom styling, organized in modular component structure
- **Build System**: Vite with custom aliases for clean imports (@/, @shared/, @assets/)

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server Setup**: Custom Vite middleware integration for development, with separate production build process
- **Storage**: Abstracted storage interface with in-memory implementation (MemStorage class)
- **API Structure**: RESTful API with /api prefix, currently minimal with placeholder routes
- **Error Handling**: Centralized error middleware with status code handling

## Database & Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Shared TypeScript schema definitions in /shared/schema.ts
- **Validation**: Zod schemas for type-safe data validation
- **Migration**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless driver with environment-based configuration

## Styling & UI System
- **Design System**: shadcn/ui with "new-york" style variant
- **Theme**: Dark theme with custom CSS variables for colors and spacing
- **Typography**: Multiple font families (Inter, DM Sans, Fira Code, etc.) loaded via Google Fonts
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Custom CSS animations and Framer Motion for page transitions

## Content Architecture
- **Pages**: App Router structure with nested routes for different content sections
- **Content Types**: Projects, Research, Opinions (with gated politics section), Art commentary, Ideas, Faith, Extracurriculars
- **Access Control**: Session-based gating for sensitive content (politics section)
- **Data Management**: Static data in /lib/data.ts with structured content objects

## Special Features
- **Protected Content**: Politics section with passcode gate using sessionStorage
- **3D Integration**: Placeholder for future Spline 3D scenes in hero section
- **Form Handling**: Contact form with React Hook Form and validation
- **SEO**: Next.js-style metadata configuration for page optimization

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection for Neon Database
- **drizzle-orm**: TypeScript ORM for database operations
- **express**: Node.js web framework for backend API
- **react**: Frontend UI library with TypeScript support
- **vite**: Build tool and development server

## UI & Styling
- **@radix-ui/***: Comprehensive set of unstyled UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for component styling
- **framer-motion**: Animation library for React components

## Data Management
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form handling with validation
- **@hookform/resolvers**: Form validation resolvers
- **drizzle-zod**: Zod integration for Drizzle schemas

## Development Tools
- **typescript**: Static type checking
- **@replit/***: Replit-specific development plugins and error handling
- **esbuild**: Fast JavaScript bundler for production builds

## Additional Libraries
- **wouter**: Lightweight client-side routing
- **date-fns**: Date utility library
- **clsx**: Conditional CSS class utility
- **nanoid**: Unique ID generation