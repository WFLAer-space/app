import { registerPage, createPageLayout } from '../api/pageRegistry.jsx';
import { defaultPageStyles } from '../config/pageStyles';

function AboutPage() {
  const config = {
    title: 'About',
    path: '/about',
    layout: {
      header: {
        title: 'About Our Platform',
        description: 'Learn about our mission and features',
        actions: (
          <button className={defaultPageStyles.components.button.secondary}>
            Contact Us
          </button>
        ),
      },
    },
  };

  return createPageLayout({
    config,
    children: (
      <div className="space-y-8">
        <div className={defaultPageStyles.components.card}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            We're building a modern, flexible platform that makes it easy to create
            and manage web applications. Our focus is on developer experience,
            performance, and maintainability.
          </p>
        </div>

        <div className={defaultPageStyles.components.card}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Key Features
          </h2>
          <ul className="space-y-3">
            {[
              'Dynamic page registration system',
              'Dark mode support',
              'Responsive design',
              'Modern React practices',
              'Performance optimized',
              'Developer friendly'
            ].map((feature, index) => (
              <li 
                key={index}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
              >
                <svg 
                  className="w-5 h-5 text-blue-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className={defaultPageStyles.components.card}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'Tailwind CSS', 'Vite', 'React Router'].map((tech, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              >
                <span className="text-gray-700 dark:text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  });
}

export const AboutPageRegistration = registerPage({
  title: 'About',
  path: '/about',
  component: AboutPage,
});

export default AboutPage; 