import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect, useCallback, useMemo } from 'react';

import Sidebar from './components/layouts/Sidebar';
import PageContainer from './components/layouts/PageContainer';
import LoadingScreen from './components/common/LoadingScreen';

import { AppProvider, useApp } from './context/AppContext';
import { ToastProvider } from './context/ToastContext';
import { THEME_CONFIG, TRANSITION_CLASSES, combineStyles } from './config/theme';

import ErrorBoundary from './components/common/ErrorBoundary';

const MOBILE_BREAKPOINT = 768;
const RESIZE_DEBOUNCE_DELAY = 150;

const mobileOverlayStyles = "fixed inset-0 bg-gray-800/50 z-20";
const sidebarContainerStyles = {
  base: "transform transition-transform duration-300 ease-in-out",
  mobile: "fixed inset-y-0 left-0 z-30",
  desktop: "relative",
  hidden: "-translate-x-full",
  visible: "translate-x-0"
};

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isThemeLoaded } = useApp();

  const handleResize = useCallback(
    debounce(() => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    }, RESIZE_DEBOUNCE_DELAY),
    []
  );

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel?.();
    };
  }, [handleResize]);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const sidebarContainerClassName = useMemo(() => {
    const baseClasses = `${sidebarContainerStyles.base} ${
      isMobile ? sidebarContainerStyles.mobile : sidebarContainerStyles.desktop
    }`;
    const visibilityClass = isMobile && !isMobileMenuOpen 
      ? sidebarContainerStyles.hidden 
      : sidebarContainerStyles.visible;
    return `${baseClasses} ${visibilityClass}`;
  }, [isMobile, isMobileMenuOpen]);

  const sidebarProps = useMemo(() => ({
    onClose: handleMobileMenuClose,
    isMobile
  }), [handleMobileMenuClose, isMobile]);

  const pageContainerProps = useMemo(() => ({
    onMenuClick: handleMobileMenuToggle,
    isMobile
  }), [handleMobileMenuToggle, isMobile]);

  if (!isThemeLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className={combineStyles(
      'flex h-screen',
      TRANSITION_CLASSES
    )}>
      {isMobile && isMobileMenuOpen && (
        <div 
          className={mobileOverlayStyles}
          onClick={handleMobileMenuClose}
        />
      )}
      
      <div className={sidebarContainerClassName}>
        <Sidebar {...sidebarProps} />
      </div>

      <div className="flex-1 flex flex-col">
        <PageContainer {...pageContainerProps} />
      </div>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <ToastProvider>
          <Router>
            <AppContent />
          </Router>
        </ToastProvider>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App; 