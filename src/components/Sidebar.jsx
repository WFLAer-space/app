import { Link, useLocation } from 'react-router-dom';
import { usePages } from '../context/PageContext';
import { useTheme } from '../context/ThemeContext';
import { 
  HomeIcon, 
  ChartBarIcon, 
  InformationCircleIcon,
  Bars3Icon,
  ChevronLeftIcon,
  XMarkIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

// Map of page paths to their icons
const pageIcons = {
  '/': HomeIcon,
  '/dashboard': ChartBarIcon,
  '/about': InformationCircleIcon,
};

function Sidebar({ onClose, isMobile }) {
  const { pages } = usePages();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isDark, setIsDark } = useTheme();

  // Don't allow collapse on mobile
  const handleCollapse = () => {
    if (!isMobile) {
      setIsCollapsed(!isCollapsed);
    }
  };

  // Remove duplicate pages by path
  const uniquePages = Array.from(new Map(pages.map(page => [page.path, page])).values());

  return (
    <div 
      className={`
        bg-white dark:bg-black h-full flex flex-col border-r border-gray-200 dark:border-gray-800
        transition-all duration-300 ease-in-out relative
        ${!isMobile && isCollapsed ? 'w-16' : 'w-64'}
        overflow-hidden
      `}
    >
      {/* Logo Section */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100 dark:border-gray-800 flex-shrink-0">
        <div className={`flex items-center gap-3 ${!isMobile && isCollapsed ? 'hidden' : 'flex'}`}>
          <span className="text-xl font-semibold text-gray-700 dark:text-white">Menu</span>
        </div>
        <button
          onClick={isMobile ? onClose : handleCollapse}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          title={isCollapsed ? "Expand menu" : "Collapse menu"}
        >
          {isMobile ? (
            <XMarkIcon className="w-5 h-5" />
          ) : isCollapsed ? (
            <Bars3Icon className="w-5 h-5" />
          ) : (
            <ChevronLeftIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto overflow-x-hidden">
        <div className="px-2 space-y-1">
          {uniquePages.map((page) => {
            const isActive = location.pathname === page.path;
            const IconComponent = pageIcons[page.path] || null;
            
            return (
              <Link
                key={page.path}
                to={page.path}
                onClick={isMobile ? onClose : undefined}
                className={`
                  flex items-center gap-3
                  transition-all duration-200 ease-in-out
                  rounded-md
                  ${!isMobile && isCollapsed ? 'justify-center w-10 mx-auto' : 'pr-4 pl-3'}
                  py-2.5
                  ${isActive 
                    ? 'bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white'}
                  group relative
                `}
                title={!isMobile && isCollapsed ? page.title : ''}
              >
                {IconComponent && (
                  <IconComponent 
                    className={`
                      w-5 h-5 flex-shrink-0
                      ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'}
                    `} 
                  />
                )}
                {(!isCollapsed || isMobile) && (
                  <span className="text-sm truncate">
                    {page.title}
                  </span>
                )}
                
                {/* Tooltip for collapsed state */}
                {!isMobile && isCollapsed && (
                  <div className="
                    absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs
                    rounded-md opacity-0 group-hover:opacity-100 transition-opacity
                    pointer-events-none whitespace-nowrap z-50 shadow-lg
                  ">
                    {page.title}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Theme Switch */}
      <div className={`
        px-4 py-3 border-t border-gray-100 dark:border-gray-800 flex-shrink-0
        ${!isMobile && isCollapsed ? 'hidden' : ''}
      `}>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </span>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400
                     hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Version info */}
      <div className={`
        px-4 py-2 text-xs text-gray-400 dark:text-gray-500
        ${!isMobile && isCollapsed ? 'hidden' : ''}
      `}>
        Version 1.0.0
      </div>
    </div>
  );
}

export default Sidebar; 