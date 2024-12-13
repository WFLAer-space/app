import { registerPage, createPageLayout } from '../api/pageRegistry.jsx';
import { defaultPageStyles } from '../config/pageStyles';

function DashboardPage() {
  const config = {
    title: 'Dashboard',
    path: '/dashboard',
    layout: {
      header: {
        title: 'Dashboard Overview',
        description: 'Monitor your key metrics and performance indicators',
        actions: (
          <>
            <button className={defaultPageStyles.components.button.secondary}>
              Export Data
            </button>
            <button className={defaultPageStyles.components.button.primary}>
              Add Widget
            </button>
          </>
        ),
      },
    },
  };

  return createPageLayout({
    config,
    children: (
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={defaultPageStyles.components.card}>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Total Views
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
              1,234
            </p>
          </div>
          
          <div className={defaultPageStyles.components.card}>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Active Users
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
              123
            </p>
          </div>
          
          <div className={defaultPageStyles.components.card}>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Total Pages
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
              15
            </p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className={defaultPageStyles.components.card}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    New user registration
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  2 min ago
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  });
}

export const DashboardPageRegistration = registerPage({
  title: 'Dashboard',
  path: '/dashboard',
  component: DashboardPage,
});

export default DashboardPage; 