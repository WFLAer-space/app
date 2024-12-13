import { registerPage, createPageLayout } from '../api/pageRegistry.jsx';
import { defaultPageStyles } from '../config/pageStyles';

function HomePage() {
  const config = {
    title: 'Home',
    path: '/',
    layout: {
      header: {
        title: 'Welcome to Our Platform',
        description: 'A modern, modular React application with dynamic page registration',
        actions: (
          <button className={defaultPageStyles.components.button.primary}>
            Get Started
          </button>
        ),
      },
    },
  };

  return createPageLayout({
    config,
    children: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={defaultPageStyles.components.card}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Easy Navigation
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Use the sidebar to navigate between different pages of the application.
            Fully responsive and mobile-friendly design.
          </p>
        </div>
        
        <div className={defaultPageStyles.components.card}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Dark Mode Support
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Toggle between light and dark themes with our built-in theme switcher.
            Your preference is saved automatically.
          </p>
        </div>

        <div className={defaultPageStyles.components.card}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Modular Design
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Add new pages easily using our page registration system.
            Consistent styling across all pages.
          </p>
        </div>

        <div className={defaultPageStyles.components.card}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Modern Stack
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Built with React, Tailwind CSS, and modern best practices.
            Fast development with Vite.
          </p>
        </div>
      </div>
    ),
  });
}

export const HomePageRegistration = registerPage({
  title: 'Home',
  path: '/',
  component: HomePage,
});

export default HomePage; 