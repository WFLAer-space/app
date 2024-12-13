# Modular React Website

A modern, modular React website with dynamic page registration and a clean, responsive design.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8)
![Vite](https://img.shields.io/badge/Vite-5.1.0-646cff)

## Features

- 🎯 Dynamic page registration system
- 🎨 Clean, modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🧩 Modular architecture
- 🛣️ React Router integration
- ⚡ Fast development with Vite
- 🛡️ Error boundary protection

## Quick Start

1. Clone the repository:
```bash
git clone <repository-url>
cd modular-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
modular-website/
├── docs/
│   └── PAGE_CREATION.md
├── src/
│   ├── api/
│   │   └── pageRegistry.js
│   ├── components/
│   │   ├── ErrorBoundary.jsx
│   │   ├── PageContainer.jsx
│   │   └── Sidebar.jsx
│   ├── context/
│   │   └── PageContext.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── DashboardPage.jsx
│   │   └── AboutPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Documentation

### Creating New Pages

Our website uses a modular page system that makes it easy to add new pages. See the [Page Creation Guide](docs/PAGE_CREATION.md) for detailed instructions.

Quick example:
```jsx
import { registerPage, createPageLayout } from '../api/pageRegistry.jsx';

function NewPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900">
        New Page
      </h1>
      {/* Your content here */}
    </div>
  );
}

export const NewPageRegistration = registerPage({
  title: 'New Page',
  path: '/new-page',
  component: NewPage,
});

export default NewPage;
```

### Key Concepts

1. **Page Registration**
   - Pages are registered using the `registerPage` API
   - Each page gets automatically added to the sidebar navigation
   - Routing is handled automatically

2. **Styling**
   - Uses Tailwind CSS for styling
   - Consistent design system
   - Responsive by default

3. **Error Handling**
   - Built-in error boundary
   - Graceful error recovery
   - Development-friendly error messages

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Best Practices

1. **Component Organization**
   - Keep components in appropriate directories
   - Use meaningful file names
   - Follow the established pattern for page registration

2. **Styling**
   - Use Tailwind CSS classes
   - Follow the existing color scheme
   - Maintain responsive design patterns

3. **Code Quality**
   - Keep components focused and single-purpose
   - Use semantic HTML elements
   - Follow React best practices

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Heroicons for the beautiful icon