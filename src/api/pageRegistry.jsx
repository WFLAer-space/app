import { useEffect } from 'react';
import { usePages } from '../context/PageContext';
import { defaultPageStyles } from '../config/pageStyles';

export function registerPage(config) {
  // Validate required fields
  if (!config.title || !config.path || !config.component) {
    throw new Error('Page registration requires title, path, and component');
  }

  // Merge with default styles
  const fullConfig = {
    ...defaultPageStyles,
    ...config,
    layout: {
      ...defaultPageStyles.layout,
      ...config.layout,
    },
  };

  function PageRegistration() {
    const { registerPage } = usePages();
    
    useEffect(() => {
      registerPage(fullConfig);
    }, []);
    
    return null;
  }
  
  return PageRegistration;
}

// Helper to create consistent page layouts
export function createPageLayout({ children, config }) {
  const {
    maxWidth = '7xl',
    padding = 'md',
    spacing = 'md',
  } = config.layout;

  const paddingClasses = {
    none: '',
    sm: 'space-y-4',
    md: 'space-y-6',
    lg: 'space-y-8',
  };

  return (
    <div className={`h-full flex flex-col ${paddingClasses[spacing]}`}>
      {/* Page Header */}
      {config.layout.header && (
        <div className="flex-shrink-0 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {config.layout.header.title}
          </h1>
          {config.layout.header.description && (
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {config.layout.header.description}
            </p>
          )}
          {config.layout.header.actions && (
            <div className="mt-4 flex items-center gap-3">
              {config.layout.header.actions}
            </div>
          )}
        </div>
      )}

      {/* Page Content */}
      <div className={`
        flex-1
        mx-auto w-full
        ${maxWidth === 'full' ? '' : `max-w-${maxWidth}`}
      `}>
        {children}
      </div>
    </div>
  );
} 