import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { usePages } from '../context/PageContext';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import HomePage from '../pages/HomePage';

function PageContainer({ onMenuClick, isMobile }) {
  const { pages } = usePages();
  const location = useLocation();

  // Find current page title
  const currentPage = pages.find(page => page.path === location.pathname);
  const pageTitle = currentPage?.title || 'Dashboard';

  return (
    <div className="flex-1 bg-gray-50 dark:bg-black">
      <div className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-4 md:px-8 flex items-center gap-4">
        {isMobile && (
          <button
            onClick={onMenuClick}
            className="p-2 -ml-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        )}
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{pageTitle}</h1>
      </div>
      <div className="p-4 md:p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {pages.map((page) => (
                <Route
                  key={page.path}
                  path={page.path}
                  element={<page.component />}
                />
              ))}
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default PageContainer; 