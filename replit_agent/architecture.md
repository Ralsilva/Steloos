# Architecture Overview - Steloos

## 1. Overview

Steloos is a fullstack web application that serves as a children's stories platform with multilingual support (Portuguese and English). It focuses on stories with themes like peace, love, wisdom, and spiritual values. The application follows a modern client-server architecture with a clear separation between frontend, backend, and database layers.

## 2. System Architecture

The system follows a three-tier architecture:

1. **Frontend**: React-based SPA (Single Page Application) with localization support
2. **Backend**: Express.js API server
3. **Database**: PostgreSQL database accessed via Drizzle ORM

### High-Level Architecture Diagram

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│             │     │             │     │             │
│   Client    │────▶│   Server    │────▶│  Database   │
│  (React)    │     │ (Express.js)│     │ (PostgreSQL)│
│             │◀────│             │◀────│             │
└─────────────┘     └─────────────┘     └─────────────┘
```

## 3. Key Components

### 3.1 Frontend

- **Technology Stack**: React, TypeScript, TailwindCSS, shadcn/ui components
- **Build Tool**: Vite
- **State Management**: React Query for server state and data fetching
- **Routing**: wouter for lightweight client-side routing
- **Internationalization**: i18next with React support for multilingual content

The frontend is organized into:
- `/client/src/components`: Reusable UI components
- `/client/src/pages`: Individual page components
- `/client/src/lib`: Utility functions and shared logic
- `/client/src/hooks`: Custom React hooks

The UI is built using shadcn/ui components (based on Radix UI primitives) with a custom theme defined in TailwindCSS. The application supports both Portuguese and English languages, with route translation (e.g., `/estorias` in Portuguese and `/stories` in English).

### 3.2 Backend

- **Technology Stack**: Express.js, TypeScript, Node.js
- **API Endpoints**: RESTful API structure
- **Data Access**: Drizzle ORM for database operations
- **Middleware**: Custom caching middleware for performance optimization

The backend is organized into:
- `/server/index.ts`: Main server entry point
- `/server/routes.ts`: API route definitions
- `/server/storage.ts`: Data access layer
- `/server/db.ts`: Database connection and configuration
- `/server/cache.ts`: Caching middleware
- `/server/translations`: Translation utilities

The server implements caching for API responses to improve performance, with a configurable TTL (Time To Live) for cached data.

### 3.3 Database

- **Database**: PostgreSQL (via Neon Serverless)
- **ORM**: Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations
- **Main Entities**:
  - Users: Authentication and user management
  - Categories: Story categories
  - Stories: Content with multilingual support
  - Testimonials: User feedback and testimonials
  - Newsletter subscribers: Email subscription management

The database schema supports multilingual content with separate fields for Portuguese and English content (e.g., `title` and `title_en`).

## 4. Data Flow

### 4.1 Request-Response Cycle

1. **Client Request**: 
   - Client makes a request to the server (API call or page load)
   - For API calls, React Query is used to fetch data

2. **Server Processing**:
   - Express.js routes the request to the appropriate handler
   - Caching middleware checks if the response is cached
   - If cached, returns cached response; otherwise, continues processing
   - Storage layer queries the database via Drizzle ORM

3. **Database Interaction**:
   - Drizzle ORM executes queries against PostgreSQL
   - Returns results to the storage layer

4. **Response Creation**:
   - Server formats data and sends response
   - Response is cached for future requests with the same parameters
   - Performance metrics are logged

5. **Client Rendering**:
   - React components consume the data and render the UI
   - i18next handles translation based on the selected language

### 4.2 Data Localization Flow

The application supports both Portuguese and English content:

1. User selects language preference (stored in localStorage)
2. Frontend requests use the appropriate API routes based on language
3. Server queries the database, selecting either default fields (Portuguese) or English fields (`*_en`)
4. Response data is formatted based on the requested language
5. React components render content in the chosen language

## 5. External Dependencies

### 5.1 UI Components
- **@radix-ui**: Headless UI components for accessibility
- **shadcn/ui**: Component library built on Radix UI
- **TailwindCSS**: Utility-first CSS framework
- **Lucide Icons**: Icon library

### 5.2 State Management and Data Fetching
- **TanStack Query**: Data fetching, caching, and state management
- **React Hook Form**: Form handling with Zod validation
- **Zod**: Schema validation library

### 5.3 Database and Services
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **Drizzle ORM**: Database ORM for TypeScript
- **Node-cache**: In-memory caching for API responses

### 5.4 Build and Development
- **Vite**: Frontend build tool
- **TypeScript**: Type safety across the stack
- **ESBuild**: JavaScript bundler

## 6. Deployment Strategy

The application is configured for deployment on Replit, with support for development and production environments:

### 6.1 Development Mode
- Frontend served by Vite dev server with HMR (Hot Module Replacement)
- Backend runs with `tsx` for TypeScript execution
- Both development servers run concurrently with `npm run dev`

### 6.2 Production Build
- Frontend assets built with Vite and output to `/dist/public`
- Backend code bundled with ESBuild to `/dist`
- Static assets served by Express.js from the `/dist/public` directory
- Application started with `npm run start` in production mode

### 6.3 Environment Configuration
- Environment variables for database connection and other settings
- Separate configurations for development and production environments
- Replit-specific configuration in `.replit` file

### 6.4 Database Management
- Schema migrations managed with Drizzle Kit
- Data seeding scripts in `/server/data` directory
- Translation scripts for multilingual content

## 7. Performance Considerations

- **Server-side Caching**: API responses cached to reduce database load
- **Static Asset Optimization**: Vite optimizes asset bundling
- **Lazy Loading**: Code splitting for improved initial load time
- **Database Query Optimization**: Efficient ORM usage
- **Response Compression**: Express middleware for compressing responses

## 8. Future Considerations

- **Authentication System**: The schema includes user tables, suggesting future auth implementation
- **Admin Dashboard**: Admin functionality is present but may need further development
- **Progressive Web App**: Could be enhanced with service workers
- **Image Optimization**: Unsplash image integration suggests potential for improved media handling
- **Analytics Integration**: Logging suggests potential for usage tracking and analytics