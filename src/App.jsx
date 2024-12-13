import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PageContainer from './components/PageContainer';
import { PageProvider } from './context/PageContext';
import ErrorBoundary from './components/ErrorBoundary';
import { HomePageRegistration } from './pages/HomePage.jsx';
import { DashboardPageRegistration } from './pages/DashboardPage.jsx';
import { AboutPageRegistration } from './pages/AboutPage.jsx';
import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <PageProvider>
            <HomePageRegistration />
            <DashboardPageRegistration />
            <AboutPageRegistration />
            <div className="flex h-screen bg-gray-50 overflow-hidden">
              {/* Mobile Overlay */}
              {isMobile && isMobileMenuOpen && (
                <div 
                  className="fixed inset-0 bg-gray-800/50 z-20"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              )}
              
              {/* Sidebar */}
              <div className={`
                ${isMobile 
                  ? 'fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out'
                  : 'relative'
                }
                ${isMobile && !isMobileMenuOpen ? '-translate-x-full' : 'translate-x-0'}
              `}>
                <Sidebar 
                  onClose={() => setIsMobileMenuOpen(false)}
                  isMobile={isMobile}
                />
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col overflow-hidden">
                <PageContainer 
                  onMenuClick={() => setIsMobileMenuOpen(true)}
                  isMobile={isMobile}
                />
              </div>
            </div>
          </PageProvider>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App; 