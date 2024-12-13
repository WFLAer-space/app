# Page Creation Guide

This guide explains how to create and register new pages in our modular website architecture.

## Table of Contents

1. [Basic Structure](#basic-structure)
2. [Step-by-Step Guide](#step-by-step-guide)
3. [Page Registration](#page-registration)
4. [Adding Icons](#adding-icons)
5. [Styling Guidelines](#styling-guidelines)
6. [Best Practices](#best-practices)

## Basic Structure

Each page follows this basic structure:

```jsx
import { registerPage, createPageLayout } from '../api/pageRegistry.jsx';

function NewPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Page Title</h1>
      {/* Your page content here */}
    </div>
  );
}

export const NewPageRegistration = registerPage({
  title: 'Navigation Title', // Appears in sidebar
  path: '/your-path',        // URL path
  component: NewPage,        // Component to render
});

export default NewPage;
```

## Step-by-Step Guide

1. Create a new file in `src/pages/` directory:
```bash
touch src/pages/NewPage.jsx
```

2. Import required dependencies:
```jsx
import { registerPage, createPageLayout } from '../api/pageRegistry.jsx';
// Import other required components/hooks
```

3. Create your page component:
```jsx
function NewPage() {
  return (
    <div className="space-y-6">
      {/* Your content */}
    </div>
  );
}
```

4. Register the page:
```jsx
export const NewPageRegistration = registerPage({
  title: 'New Page',
  path: '/new-page',
  component: NewPage,
});
```

5. Add the registration to `App.jsx`:
```jsx
import { NewPageRegistration } from './pages/NewPage';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <PageProvider>
          <NewPageRegistration />
          {/* Other registrations */}
        </PageProvider>
      </Router>
    </ErrorBoundary>
  );
}
```

## Page Registration

The `registerPage` function accepts an object with the following properties:

```typescript
{
  title: string;      // The name shown in the sidebar
  path: string;       // The URL path (must start with '/')
  component: React.ComponentType; // The page component
}
```

## Adding Icons

1. Import the icon from Heroicons:
```jsx
import { YourIcon } from '@heroicons/react/24/outline';
```

2. Add it to the pageIcons mapping in `src/components/Sidebar.jsx`:
```jsx
const pageIcons = {
  '/': HomeIcon,
  '/your-path': YourIcon,  // Add your icon here
};
```

## Styling Guidelines

Use these common style patterns for consistency:

### Layout Containers
```jsx
// Page container
<div className="space-y-6">

// Card container
<div className="bg-white p-6 rounded-lg shadow-sm">

// Grid layout
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
```

### Typography
```jsx
// Page title
<h1 className="text-3xl font-bold text-gray-900">

// Section title
<h2 className="text-xl font-semibold text-gray-900">

// Regular text
<p className="text-gray-600">

// Small text
<span className="text-sm text-gray-500">
```

### Interactive Elements
```jsx
// Button
<button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">

// Link
<a className="text-blue-500 hover:text-blue-600">
```

## Best Practices

1. **Naming Conventions**
   - Use PascalCase for component names (e.g., `NewPage`)
   - Use kebab-case for URL paths (e.g., `/new-page`)
   - Use descriptive names that reflect the page's purpose

2. **Component Organization**
   - Keep components focused and single-purpose
   - Break down complex pages into smaller components
   - Place shared components in `src/components/`

3. **State Management**
   - Use local state for component-specific data
   - Use context for shared state when needed
   - Keep state as close as possible to where it's used

4. **Performance**
   - Lazy load heavy components
   - Optimize images and assets
   - Use proper React hooks dependencies

5. **Accessibility**
   - Use semantic HTML elements
   - Include proper ARIA attributes
   - Ensure keyboard navigation works
   - Maintain proper heading hierarchy

## Example Page

Here's a complete example of a dashboard page:

```jsx
import { registerPage, createPageLayout } from '../api/pageRegistry.jsx';

function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Total Views</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">1,234</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Active Users</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">123</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Total Pages</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">15</p>
        </div>
      </div>
    </div>
  );
}

export const DashboardPageRegistration = registerPage({
  title: 'Dashboard',
  path: '/dashboard',
  component: DashboardPage,
});

export default DashboardPage;
```

Remember to maintain consistency with the existing design system and follow established patterns when creating new pages.