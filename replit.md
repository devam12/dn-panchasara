# Professional Chartered Accountant Website

## Overview

This is a full-stack web application for a Chartered Accountant (D N Panchasara) providing professional financial services. The application features a modern, responsive design with a React frontend and Express backend, designed to showcase services, collect client inquiries, and establish professional credibility.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight React router)
- **Tailwind CSS** for styling with custom color scheme
- **shadcn/ui** component library for consistent UI components
- **TanStack Query** for server state management and API calls
- **React Hook Form** with Zod validation for form handling

### Backend Architecture
- **Express.js** server with TypeScript
- **Drizzle ORM** for database operations with PostgreSQL
- **Zod** for runtime validation and schema definitions
- **Session management** with PostgreSQL session store
- **SendGrid** integration for email functionality
- **ESBuild** for production bundling

### Database Design
- **PostgreSQL** database with two main tables:
  - `users`: Basic user authentication (id, username, password)
  - `contact_submissions`: Contact form submissions with comprehensive fields
- **Drizzle ORM** with schema-first approach
- Migration support through drizzle-kit

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Landing section with call-to-action buttons
- **About Section**: Professional credentials and qualifications
- **Services Section**: Comprehensive service offerings with detailed descriptions
- **Testimonials**: Client feedback with star ratings
- **Contact Form**: Multi-field form with validation and submission handling
- **Footer**: Professional footer with contact information and links

### Backend Services
- **Contact API**: Handles form submissions with validation
- **Storage Layer**: Abstracted storage interface with in-memory fallback
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Custom Styling
- **Professional Color Scheme**: Blue and gold color palette
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Custom CSS Variables**: Consistent theming throughout the application

## Data Flow

1. **Client Interaction**: Users interact with the React frontend
2. **Form Submission**: Contact forms are validated client-side and submitted via API
3. **Server Processing**: Express server validates data and stores submissions
4. **Database Storage**: PostgreSQL stores contact submissions and user data
5. **Response Handling**: Success/error messages displayed to users via toast notifications

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Query)
- Express.js with middleware for JSON parsing and static file serving
- Drizzle ORM with PostgreSQL adapter (@neondatabase/serverless)

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI components for accessible, unstyled components
- shadcn/ui for pre-built component library
- Lucide React for consistent iconography

### Development and Build Tools
- Vite for fast development and optimized builds
- TypeScript for type safety across the stack
- ESBuild for production server bundling
- PostCSS for CSS processing

### Potential Integrations
- SendGrid for email notifications (configured but not actively used)
- Replit-specific tooling for development environment

## Deployment Strategy

### Development Environment
- **Replit Configuration**: Configured for Node.js 20 with PostgreSQL 16
- **Development Server**: Vite dev server with hot reload
- **Database**: PostgreSQL database with automatic provisioning
- **Port Configuration**: Application runs on port 5000

### Production Build
- **Frontend Build**: Vite builds optimized static assets
- **Backend Build**: ESBuild creates production server bundle
- **Static File Serving**: Express serves built frontend assets
- **Database Migrations**: Drizzle migrations for schema updates

### Deployment Process
1. Build frontend assets with Vite
2. Bundle backend with ESBuild
3. Run database migrations if needed
4. Start production server

## Recent Changes

✓ Applied consistent blue primary color scheme throughout website
✓ Added smart header behavior (hide on scroll down, show on scroll up)  
✓ Enhanced "D N PANCHASRA & CO." branding with attractive blue gradient text
✓ Removed CA badge from header to focus on firm name
✓ Redesigned footer with professional dark theme and balanced colors
✓ Improved contact form styling with blue focus states
✓ Created cohesive visual hierarchy with proper color contrast

## Changelog

```
Changelog:
- June 24, 2025. Initial setup and basic portfolio structure
- June 24, 2025. Major visual redesign with enhanced CA branding and modern UI
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```