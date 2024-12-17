# Next.js Project Development Guidelines

## Project Structure

```
src/
├── app/                    # App router pages
├── components/            # Reusable components
│   ├── ui/               # Basic UI components
│   └── layout/           # Layout components
├── lib/                  # Utility functions and configurations
├── styles/               # Global styles and theme configurations
└── types/               # TypeScript type definitions
```

## Development Guidelines

### 1. Theme System
- Use `next-themes` for dark mode implementation
- Theme colors are defined in `tailwind.config.ts`
- Access theme using the `useTheme` hook from next-themes
- Dark mode colors use pure black (#000000) as background

### 2. Responsive Design
- Mobile-first approach
- Use Tailwind's responsive breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

### 3. Component Guidelines
- Use TypeScript for all components
- Follow atomic design principles
- Place reusable UI components in `components/ui`
- Use Lucide React icons exclusively
- Implement proper loading and error states

### 4. Adding New Pages
1. Create a new directory in `app/` for your route
2. Add `page.tsx` for the main content
3. Use layout.tsx for page-specific layouts
4. Include proper metadata exports
5. Follow the existing theme system

### 5. Code Style
- Use TypeScript strict mode
- Follow ESLint configuration
- Use named exports for components
- Implement proper error boundaries
- Write meaningful comments for complex logic

### 6. Performance
- Use Next.js Image component for images
- Implement proper loading states
- Use React Suspense boundaries
- Optimize bundle size

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Tech Stack
- Next.js 15.1.0
- React 19
- TypeScript
- Tailwind CSS
- Lucide React Icons
- next-themes
