# Next.js Employee Management System

A modern Employee Management System built with **Next.js 15**, **React 19**, **TypeScript**, and **Bootstrap 5**.

This project is intended as a learning project while following production-level project structure and best practices.

---

## Technology Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Bootstrap 5
- Axios
- React Context API
- ESLint

---

## Features

### Authentication

- Login page
- JWT Authentication
- Logout
- Protected Routes
- Auth Context

### Dashboard

- Home Dashboard
- Responsive Layout
- Header
- Sidebar
- Footer

### Employee Module

- Employee List
- Search Employees
- Add Employee
- Edit Employee
- Delete Employee
- View Employee Details

### Shared Components

- Buttons
- Input Controls
- Loader
- Alert Messages
- Modal Dialogs

### API Integration

- Axios
- Request Interceptors
- Response Interceptors
- Global Error Handling

---

## Project Structure

```
src
│
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── home
│   └── api
│
├── components
│   ├── auth
│   ├── common
│   └── shared
│
├── context
│
├── hooks
│
├── services
│
├── lib
│
├── styles
│
├── types
│
└── public
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Move to project folder

```bash
cd nextjs-employee-management
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## Available Scripts

Start development server

```bash
npm run dev
```

Create production build

```bash
npm run build
```

Start production server

```bash
npm run start
```

Run lint

```bash
npm run lint
```

---

## Environment Variables

Create a `.env.local` file.

```text
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

---

## Authentication Flow

```
User
   │
   ▼
Login Page
   │
   ▼
Auth Service
   │
   ▼
Backend API
   │
   ▼
JWT Token
   │
   ▼
Auth Context
   │
   ▼
Protected Pages
```

---

## Folder Responsibilities

### app

Contains application routes, layouts, pages, and API routes.

### components

Reusable UI components.

### services

Business logic and API calls.

### context

Global application state.

### hooks

Reusable custom React hooks.

### lib

Axios configuration, constants, helper functions.

### styles

Application-specific stylesheets.

### types

Shared TypeScript interfaces and types.

---

## Development Roadmap

### Phase 1

- Project Setup
- Bootstrap Integration
- Login Page
- Home Page

### Phase 2

- Reusable Components
- Routing
- Forms
- Validation

### Phase 3

- Authentication
- JWT
- Protected Routes
- Logout

### Phase 4

- Employee CRUD
- Search
- Pagination
- API Integration

### Phase 5

- Server Components
- Middleware
- Server Actions
- Deployment

---

## Best Practices

- TypeScript throughout the application
- Reusable components
- Separation of concerns
- Environment-based configuration
- API calls through service layer
- Context for authentication
- Responsive UI using Bootstrap
- Consistent folder structure
- Clean code principles

---

## Future Enhancements

- Role-based access control
- Dark mode
- User profile
- File upload
- Dashboard charts
- Unit testing
- End-to-end testing
- Docker support
- CI/CD pipeline
- Deployment to Vercel

---

## Learning Objectives

This project is designed to help understand:

- Next.js App Router
- React Components
- React Hooks
- TypeScript
- Context API
- Authentication
- API Integration
- Routing
- Server Components
- Client Components
- Production project structure
