# AI Agent Instructions (AGENTS.md)

Welcome, AI Agent! This file provides the essential context, coding standards, and architectural guidelines for the `rafael-domingues` portfolio project. **Please read this document thoroughly before writing any code or proposing architecture changes.**

## 🎯 Project Context
- **Name**: Rafael Domingues - Portfolio
- **Purpose**: A personal web application/portfolio emphasizing a premium, dynamic, and highly animated user interface.
- **Quality Standard**: High emphasis on modularity, readability, visual polish, and **100% test coverage**.

## 🚀 Tech Stack
- **Core**: Next.js 16 (App Router), React 19, TypeScript (Strict).
- **Styling**: Tailwind CSS v4, `lightswind`. Utilities: `clsx`, `tailwind-merge`, Class Variance Authority (`cva`).
- **Animations & Effects**: Framer Motion (`motion`), tsParticles.
- **Testing**: Vitest, React Testing Library (RTL), `@vitest/coverage-v8`.
- **Icons**: Lucide React.

## 🏗️ Architecture & Structure Rules
- **App Router (`/app`)**: Use Next.js App Router conventions. Keep routing files clean; offload complex UI to the `components` directory.
- **Component Modularity (`/components`)**: 
  - Every UI component MUST have its own dedicated folder (e.g., `/components/Hero/index.tsx`).
  - Abstract reusable pieces into smaller sub-components.
- **Logic & Utilities**:
  - `/hooks`: For reusable React hooks (state management, event listeners, etc.).
  - `/lib`: For pure utility functions, API clients, and shared helpers (like the `cn` tailwind merge function).
- **Colocation**: Keep test files (`*.test.tsx`, `*.test.ts`) close to their source files or maintain the existing project pattern for tests.

## 💻 Coding Guidelines
1. **TypeScript**: Strictly type everything. Avoid `any` or `unknown` unless absolutely unavoidable. Use interfaces for component Props.
2. **Component Rendering (Server vs Client)**:
   - Default to React Server Components (RSC).
   - Only add the `"use client"` directive when necessary (e.g., when utilizing `useState`, `useEffect`, `framer-motion`, browser APIs, or event listeners).
3. **Styling & Classes**: 
   - Never concatenate Tailwind classes with simple string templates. Use the provided utility (often `cn` combining `clsx` and `twMerge`) to prevent class conflicts.
   - Use `cva` when creating components with multiple visual variants (e.g., buttons, badges).
4. **Animations**: 
   - Use Framer Motion for complex orchestrations. Guarantee that animations look good on both mobile and desktop breakpoints.

## 🧪 Testing Requirements (CRITICAL)
- **100% Coverage Rule**: Any new feature, hook, utility, or component MUST be accompanied by a robust Vitest test suite.
- **Best Practices**: Use React Testing Library to test behavior and user interactions rather than internal component state. Ensure accessibility features (ARIA roles, testing by text/role) are covered.

---
<!-- BEGIN:nextjs-agent-rules -->
> **Warning**: This version of Next.js has breaking changes — APIs, conventions, and file structure may differ from older training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
