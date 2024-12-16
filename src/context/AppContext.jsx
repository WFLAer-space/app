import { createContext, useContext, useState, useEffect, useCallback } from 'react';

// 创建上下文
const AppContext = createContext();

// Theme preference management
const THEME_KEY = 'app-theme-preference';

const getInitialTheme = () => {
  // First check localStorage
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    return savedTheme;
  }

  // Then check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  // Default to light theme
  return 'light';
};

// 自定义Hook
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Provider组件
export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => getInitialTheme());
  const [currentPage, setCurrentPage] = useState('/');
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  // Handle system theme change
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      const savedTheme = localStorage.getItem(THEME_KEY);
      // Only update if user hasn't set a preference
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    // Add listener for system theme changes
    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery?.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem(THEME_KEY, theme);
    setIsThemeLoaded(true);
  }, [theme]);

  // Prevent flash of wrong theme
  useEffect(() => {
    // Add a class to indicate theme is loaded
    document.documentElement.classList.add('theme-loaded');
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  }, []);

  const value = {
    theme,
    setTheme,
    toggleTheme,
    currentPage,
    setCurrentPage,
    isThemeLoaded
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}; 