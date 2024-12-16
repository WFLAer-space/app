import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, useEffect, memo } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import LoadingSpinner from '../common/LoadingSpinner';
import { routes } from '../../config/routes';
import { useApp } from '../../context/AppContext';
import { THEME_CONFIG, TRANSITION_CLASSES, combineStyles } from '../../config/theme';

const PageHeader = memo(({ title, onMenuClick, isMobile }) => {
  const { theme } = useApp();
  const styles = THEME_CONFIG[theme];

  return (
    <div className={combineStyles(
      'h-16 border-b px-4 md:px-8 flex items-center gap-4 flex-shrink-0',
      styles.background,
      styles.border,
      TRANSITION_CLASSES
    )}>
      {isMobile && (
        <button
          onClick={onMenuClick}
          className={combineStyles(
            'p-2 -ml-2 rounded-md',
            styles.textSecondary,
            styles.card.hover,
            TRANSITION_CLASSES
          )}
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      )}
      <h1 className={combineStyles('text-xl font-semibold', styles.text)}>
        {title}
      </h1>
    </div>
  );
});

PageHeader.displayName = 'PageHeader';

const PageContent = memo(({ children }) => {
  const { theme } = useApp();
  const styles = THEME_CONFIG[theme];

  return (
    <div className={combineStyles(
      'flex-1 p-4 md:p-8 overflow-y-auto min-h-0 custom-scrollbar',
      styles.contentBg,
      TRANSITION_CLASSES
    )}>
      <div className="max-w-7xl mx-auto">
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>
      </div>
    </div>
  );
});

PageContent.displayName = 'PageContent';

const PageContainer = memo(({ onMenuClick, isMobile }) => {
  const location = useLocation();
  const { setCurrentPage, theme } = useApp();
  const styles = THEME_CONFIG[theme];

  // Find current page title
  const currentRoute = routes.find(route => route.path === location.pathname);
  const pageTitle = currentRoute?.name || 'Dashboard';

  // Update current page in context
  useEffect(() => {
    if (currentRoute) {
      setCurrentPage(currentRoute.path);
    }
  }, [location.pathname, setCurrentPage, currentRoute]);

  return (
    <div className={combineStyles(
      'flex-1 flex flex-col h-screen',
      styles.background,
      TRANSITION_CLASSES
    )}>
      <PageHeader 
        title={pageTitle}
        onMenuClick={onMenuClick}
        isMobile={isMobile}
      />
      <PageContent>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </PageContent>
    </div>
  );
});

PageContainer.displayName = 'PageContainer';

export default PageContainer; 