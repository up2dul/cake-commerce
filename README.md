<div align="center">
  <h1>🍰 Cake Commerce</h1>
</div>

![App screenshot](/public/cake-commerce-ss.png)

> 🌐 Built with Next.js, TypeScript, and Tailwind CSS for fast, responsive shopping experience

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
  - [1. Prerequisites](#1-prerequisites)
  - [2. Clone the Repository](#2-clone-the-repository)
  - [3. Installation](#3-installation)
  - [4. Environment Variables](#4-environment-variables)
- [Usage](#usage)
  - [Start the development server](#start-the-development-server)
  - [Build for production](#build-for-production)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
  - [Code Quality](#code-quality)
  - [Git Hooks](#git-hooks)
- [Next Steps / Future Improvements](#next-steps--future-improvements)

## Technologies

Some of the technologies used in this project:
- ⚛️ [React](https://react.dev) — The main frontend library
- ▲ [Next.js (App Router)](https://nextjs.org) — React framework with server components
- 🎨 [Tailwind CSS v4](https://tailwindcss.com) — Utility-first CSS framework
- 🔷 [TypeScript](https://typescriptlang.org) — A typed superset of JavaScript
- 🛡️ [Zod](https://zod.dev) — TypeScript-first schema validation with static type inference
- 🐻 [Zustand](https://github.com/pmndrs/zustand) — Lightweight state management
- ✨ [Motion](https://motion.dev) — Animation library for smooth transitions
- 🍞 [Lenis](https://github.com/studio-freight/lenis) — Smooth scrolling library
- 🎯 [Sonner](https://sonner.emilkowal.ski) — Toast notifications
- 🎨 [Phosphor Icons](https://phosphoricons.com) — Beautiful icon library

Some additional development tools:
- 📝 [Biome](https://biomejs.dev) — Code formatter and linter
- 🔤 [Commitlint](https://commitlint.js.org) — Ensure well-formatted commit messages
- 🐶 [Husky](https://typicode.github.io/husky) — Git hooks
- 📋 [Lint Staged](https://github.com/lint-staged/lint-staged) — Run scripts before committing

## Setup Instructions

### 1. Prerequisites

- [Node.js](https://nodejs.org) `>=18.x`
- [pnpm](https://pnpm.io) `>=9.x` (recommended as the package manager)

### 2. Clone the Repository

```bash
git clone https://github.com/up2dul/cake-commerce.git

# or if using ssh
git clone git@github.com:up2dul/cake-commerce.git
```

### 3. Installation

Go to the project directory and install dependencies

```bash
# Go to the project directory
cd cake-commerce

# Install dependencies
pnpm install
```

### 4. Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
API_BASE_URL=https://api-example.com
```

## Usage

### Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for production

```bash
pnpm build
pnpm start
```

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── (main)/              # Main app routes
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx         # Home page
│   │   │   ├── account/         # Account page
│   │   │   ├── shop/            # Shop page
│   │   │   │   └── product/
│   │   │   │       └── [slug]/  # Product detail page
│   │   │   └── _components/     # Shared components
│   │   ├── auth/                # Auth routes
│   │   │   ├── login/
│   │   │   │   └── _components/
│   │   │   └── register/
│   │   │       └── _components/
│   │   ├── actions/             # Server actions
│   │   │   ├── auth.ts          # Auth server actions
│   │   │   └── cart.ts          # Cart server actions
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── not-found.tsx        # 404 page
│   ├── components/
│   │   ├── common/              # Common components
│   │   │   ├── cart-drawer.tsx
│   │   │   ├── cart-item-card.tsx
│   │   │   └── cart-line-edit.tsx
│   │   ├── layout/              # Layout components
│   │   │   ├── navbar.tsx
│   │   │   └── footer.tsx
│   │   └── ui/                  # Reusable UI components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── checkbox.tsx
│   │       ├── textarea.tsx
│   │       ├── field.tsx
│   │       ├── tag.tsx
│   │       └── separator.tsx
│   ├── hooks/                   # Custom React hooks
│   ├── lib/
│   │   ├── api.ts               # API client with error handling
│   │   ├── auth.ts              # Auth utilities
│   │   ├── config.ts            # Configuration
│   │   ├── utils.ts             # Utility functions
│   │   ├── data/                # Data fetching functions
│   │   │   ├── product.ts       # Product data fetching
│   │   │   ├── customer.ts      # Customer data fetching
│   │   │   └── cart.ts          # Cart data fetching
│   │   ├── store/               # Zustand stores
│   │   │   └── cart.ts          # Cart state management
│   │   └── types/               # TypeScript types
│   │       ├── product.ts
│   │       ├── cart.ts
│   │       ├── auth.ts
│   │       └── common.ts
│   ├── assets/                  # Static images and assets
│   └── proxy.ts                 # Proxy configuration
├── public/                      # Static files
├── biome.json                   # Biome configuration
├── commitlint.config.ts         # Commitlint configuration
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
├── pnpm-workspace.yaml         # pnpm workspace config
├── package.json
└── README.md
```

## Development Workflow

### Code Quality

The project uses Biome for automatic code formatting and linting:

```bash
# Format code
pnpm format

# Check code quality
pnpm lint

# Format and lint
pnpm check
```

### Git Hooks

Husky and lint-staged ensure code quality before commits:
- Pre-commit hook runs Biome formatting
- Commit messages are validated with commitlint

## Next Steps / Future Improvements

- [ ] Fix the edit cart line bug
- [ ] Checkout
