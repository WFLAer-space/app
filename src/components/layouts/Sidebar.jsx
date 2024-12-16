import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
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
import { routes } from '../../config/routes';
import { THEME_CONFIG, TRANSITION_CLASSES, combineStyles } from '../../config/theme';

function Sidebar({ onClose, isMobile }) {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme, toggleTheme } = useApp();
  const styles = THEME_CONFIG[theme];

  // Don't allow collapse on mobile
  const handleCollapse = () => {
    if (!isMobile) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div 
      className={combineStyles(
        'h-full flex flex-col border-r',
        styles.background,
        styles.border,
        TRANSITION_CLASSES,
        !isMobile && isCollapsed ? 'w-16' : 'w-64',
        'overflow-hidden'
      )}
    >
      {/* Logo Section */}
      <div className={combineStyles(
        'h-16 flex items-center justify-between px-4 border-b',
        styles.border,
        'flex-shrink-0'
      )}>
        <div className={!isMobile && isCollapsed ? 'hidden' : 'flex items-center gap-3'}>
          <span className={combineStyles('text-xl font-semibold', styles.text)}>
            Menu
          </span>
        </div>
        <button
          onClick={isMobile ? onClose : handleCollapse}
          className={combineStyles(
            'p-2 rounded-md',
            styles.textSecondary,
            styles.card.hover,
            TRANSITION_CLASSES
          )}
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
      <nav className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="px-2 py-4 space-y-1">
          {routes.map((route) => {
            const isActive = location.pathname === route.path;
            const Icon = route.icon || HomeIcon;

            return (
              <Link
                key={route.path}
                to={route.path}
                className={combineStyles(
                  'flex items-center gap-3 px-3 py-2 rounded-md',
                  isActive ? styles.card.background : 'transparent',
                  isActive ? styles.text : styles.textSecondary,
                  !isActive && styles.card.hover,
                  'relative group',
                  TRANSITION_CLASSES
                )}
              >
                <div className={combineStyles(
                  'relative z-10 transition-transform duration-200',
                  'group-hover:scale-110',
                  isActive ? 'scale-105' : ''
                )}>
                  <Icon className={combineStyles(
                    'w-5 h-5 flex-shrink-0',
                    isActive ? 'stroke-2' : 'stroke-[1.5]',
                    theme === 'dark' ? 'drop-shadow-[0_0_3px_rgba(255,255,255,0.1)]' : 'drop-shadow-[0_0_3px_rgba(0,0,0,0.05)]'
                  )} />
                </div>
                {(!isMobile && !isCollapsed) && (
                  <span className="relative z-10">{route.name}</span>
                )}
                {isActive && (
                  <div className={combineStyles(
                    'absolute inset-0 rounded-md opacity-10',
                    theme === 'dark' ? 'bg-white' : 'bg-black'
                  )} />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Theme Switch */}
      <div className={combineStyles(
        'px-4 py-3 border-t',
        styles.border,
        'flex-shrink-0',
        !isMobile && isCollapsed ? 'hidden' : ''
      )}>
        <div className="flex items-center justify-between">
          <span className={styles.textSecondary}>
            {theme === 'dark' ? '深色模式' : '浅色模式'}
          </span>
          <button
            onClick={toggleTheme}
            className={combineStyles(
              'p-2 rounded-lg',
              styles.card.background,
              styles.card.hover,
              'relative group',
              TRANSITION_CLASSES
            )}
            aria-label="Toggle theme"
          >
            <div className="relative z-10 transition-transform duration-200 group-hover:scale-110">
              {theme === 'dark' ? (
                <SunIcon className={combineStyles(
                  'w-5 h-5',
                  styles.textSecondary,
                  'stroke-2',
                  'drop-shadow-[0_0_3px_rgba(255,255,255,0.1)]'
                )} />
              ) : (
                <MoonIcon className={combineStyles(
                  'w-5 h-5',
                  styles.textSecondary,
                  'stroke-2',
                  'drop-shadow-[0_0_3px_rgba(0,0,0,0.05)]'
                )} />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Copyright info */}
      <div className={combineStyles(
        'flex justify-center px-4 py-2',
        styles.textSecondary,
        !isMobile && isCollapsed ? 'hidden' : ''
      )}>
        © WFLAer.space 2024
      </div>
    </div>
  );
}

export default Sidebar; 