# My React Project

A modern, scalable React application built with TypeScript, Vite, and a carefully organized architecture for production-ready development.

## 🎯 Overview

This project is a full-featured React application with a robust folder structure, state management, routing, API integration, and internationalization support. It's designed to serve as a foundation for building scalable web applications.

## ✨ Features

- **React 19** - Latest React with modern hooks and optimizations
- **TypeScript** - Full type safety for better developer experience
- **Vite** - Lightning-fast build tool with HMR (Hot Module Replacement)
- **React Router v7** - Client-side routing with dynamic routes
- **Zustand** - Lightweight state management library
- **Axios** - Promise-based HTTP client for API requests
- **Zod** - TypeScript-first schema validation
- **React Compiler** - Optimized compilation for better performance
- **Internationalization (i18n)** - Multi-language support
- **ESLint** - Code quality and style enforcement
- **Tailwind CSS** - Utility-first CSS framework (via app styling)

## 📁 Project Structure

```
src/
├── api/                    # API integration and axios configuration
│   ├── axios.ts           # Axios instance setup
│   └── users.api.ts       # User API endpoints
├── components/            # Reusable React components
│   ├── common/            # Common components (EmptyState, etc.)
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── providers/         # Context/Provider components
│   ├── skeleton/          # Loading skeleton components
│   └── ui/                # UI components (Button, Input, etc.)
├── constants/             # Application constants
│   └── routes.ts          # Route paths and API endpoints
├── hooks/                 # Custom React hooks
│   └── useDebounce.ts     # Debounce hook for input optimization
├── i18n/                  # Internationalization
│   ├── config.ts          # i18n configuration
│   └── en.json            # English language strings
├── pages/                 # Page components (routes)
│   ├── Home.tsx
│   └── About.tsx
├── schemas/               # Data validation schemas
│   └── user.schema.ts     # User data schema (Zod)
├── store/                 # Zustand state management
│   └── index.ts           # Global app store
├── types/                 # TypeScript type definitions
│   └── user.types.ts      # User type definitions
├── utils/                 # Utility functions
│   └── formatDate.ts      # Date formatting utilities
├── App.tsx                # Main application component
├── App.css                # Application styles
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn** >= 1.22.0

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-react-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- **`npm run dev`** - Start the development server with HMR
- **`npm run build`** - Build the application for production
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run preview`** - Preview the production build locally

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| **React** | UI library |
| **TypeScript** | Type safety and better developer experience |
| **Vite** | Modern build tool and dev server |
| **React Router** | Client-side routing |
| **Zustand** | State management |
| **Axios** | HTTP client |
| **Zod** | Schema validation |
| **ESLint** | Code linting |
| **TypeScript ESLint** | TypeScript linting |

## 🔧 Configuration

### Vite Configuration
See `vite.config.ts` for build and dev server configuration.

### TypeScript Configuration
- `tsconfig.json` - Main TypeScript configuration
- `tsconfig.app.json` - App-specific TypeScript settings
- `tsconfig.node.json` - Node/build-related TypeScript settings

### ESLint Configuration
The project uses ESLint with TypeScript support. See `eslint.config.js` for linting rules.

For production applications, consider enabling type-aware lint rules:
```js
tseslint.configs.recommendedTypeChecked
// or for stricter rules:
tseslint.configs.strictTypeChecked
```

## 📚 Development Patterns

### State Management
Use Zustand store (`src/store/index.ts`) for global application state:
```typescript
import { useAppStore } from '../store';

function MyComponent() {
  const { isAuthenticated, user, login } = useAppStore();
  // Use store state and actions
}
```

### API Requests
Use Axios with configured instance (`src/api/axios.ts`):
```typescript
import { axiosInstance } from '../api/axios';

const data = await axiosInstance.get('/users');
```

### Data Validation
Use Zod schemas for runtime validation (`src/schemas/`):
```typescript
import { userSchema } from '../schemas/user.schema';

const validatedUser = userSchema.parse(userData);
```

### Custom Hooks
Create reusable logic in `src/hooks/`:
```typescript
import { useDebounce } from '../hooks/useDebounce';

const debouncedValue = useDebounce(value, 300);
```

### Routing
Define routes in `src/constants/routes.ts` and use with React Router:
```typescript
import { ROUTES } from '../constants/routes';

<Link to={ROUTES.HOME}>Home</Link>
```

## 🌐 Internationalization

The project includes i18n setup. Language strings are defined in `src/i18n/en.json`. Configure additional languages in `src/i18n/config.ts`.

## 🎨 Component Conventions

- **UI Components** - Basic, reusable components in `src/components/ui/`
- **Layout Components** - Page structure components (Navbar, Footer) in `src/components/layout/`
- **Page Components** - Full-page components in `src/pages/`
- **Provider Components** - Context/provider setup in `src/components/providers/`

## 📦 Building for Production

```bash
npm run build
```

The optimized build output will be in the `dist/` directory.

## 🧪 Code Quality

Run ESLint to check code quality:
```bash
npm run lint
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please follow the existing code structure and conventions when adding new features.

## 📞 Support

For issues or questions, please create an issue in the repository.

---

**Happy coding!** 🚀

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
