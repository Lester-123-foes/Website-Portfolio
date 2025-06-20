# Portfolio Application Architecture Guide

## Overview

This is a full-stack portfolio application built with React/TypeScript frontend and Express.js backend. The application currently implements a professional portfolio website showcasing developer skills, projects, and contact information. The architecture is set up to support future expansion with user authentication and database functionality using Drizzle ORM with PostgreSQL.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement with Vite integration
- **Build**: ESBuild for server-side bundling

### Project Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared types and schemas
├── components.json  # shadcn/ui configuration
├── drizzle.config.ts # Database configuration
└── vite.config.ts   # Frontend build configuration
```

## Key Components

### Database Layer
- **Schema**: User authentication schema defined in `shared/schema.ts`
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Migrations**: Configured to output to `./migrations` directory
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

### Frontend Components
- **Portfolio Sections**: Hero, About, Skills, Projects, Contact sections
- **Navigation**: Smooth scrolling navigation with active section tracking
- **UI Components**: Comprehensive component library including forms, dialogs, navigation
- **Hooks**: Custom hooks for scrolling, typing effects, mobile detection, and toast notifications

### Backend Services
- **Routes**: Modular route registration system in `server/routes.ts`
- **Storage**: Interface-based storage system supporting both in-memory and database implementations
- **Middleware**: Request logging, error handling, and development tooling integration

## Data Flow

### Current Implementation
1. **Static Portfolio**: Frontend serves static portfolio content with interactive features
2. **Contact Form**: Form submission with toast notifications (currently client-side only)
3. **Navigation**: Smooth scrolling between sections with active state tracking

### Future Database Integration
1. **User Registration/Login**: API endpoints for user authentication
2. **Session Management**: PostgreSQL-backed session storage
3. **Profile Management**: CRUD operations for user profiles and portfolio data

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui**: Accessible UI primitives

### Development Tools
- **@replit/vite-plugin-cartographer**: Replit integration for development
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting

### UI/UX Libraries
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **embla-carousel-react**: Carousel functionality
- **lucide-react**: Icon library

## Deployment Strategy

### Development Environment
- **Replit Integration**: Configured for Replit development environment
- **Hot Reload**: Vite HMR for frontend, tsx for backend development
- **PostgreSQL**: Integrated PostgreSQL module in Replit

### Production Build
- **Frontend**: Vite build to `dist/public`
- **Backend**: ESBuild bundle to `dist/index.js`
- **Deployment**: Configured for autoscale deployment on port 80
- **Static Assets**: Served from build directory

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Development**: `NODE_ENV=development` for development features
- **Production**: `NODE_ENV=production` for optimized builds

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 20, 2025. Initial setup