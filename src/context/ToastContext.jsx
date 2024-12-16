import { createContext, useContext, useState, useCallback, useRef, useEffect, memo } from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

const ToastContext = createContext(null);

const TOAST_DURATION = 2000; // 2 seconds
const ANIMATION_DURATION = 300; // 0.3 seconds to match CSS

const toastTypes = {
  success: {
    icon: CheckCircle,
    className: 'bg-green-500 text-white'
  },
  error: {
    icon: AlertCircle,
    className: 'bg-red-500 text-white'
  },
  info: {
    icon: Info,
    className: 'bg-blue-500 text-white'
  }
};

const Toast = memo(({ message, type = 'success', isLeaving }) => {
  const Icon = toastTypes[type]?.icon;

  return (
    <div 
      className={`
        fixed top-0 left-1/2 -translate-x-1/2 z-50
        flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg
        ${isLeaving ? 'animate-toast-slide-out' : 'animate-toast-slide-in'}
        ${toastTypes[type]?.className}
      `}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
});

Toast.displayName = 'Toast';

export function ToastProvider({ children }) {
  const [currentToast, setCurrentToast] = useState(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const timeoutRef = useRef(null);
  const animationTimeoutRef = useRef(null);

  const clearTimeouts = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = null;
    }
  }, []);

  const showToast = useCallback((message, type = 'success') => {
    // Clear any existing timeouts
    clearTimeouts();

    // If there's a current toast, remove it immediately
    if (currentToast) {
      setCurrentToast(null);
    }

    // Show the new toast
    setIsLeaving(false);
    setCurrentToast({ message, type });

    // Set timeout for toast duration
    timeoutRef.current = setTimeout(() => {
      setIsLeaving(true);
      
      // Wait for leave animation to complete
      animationTimeoutRef.current = setTimeout(() => {
        setCurrentToast(null);
      }, ANIMATION_DURATION);
    }, TOAST_DURATION);
  }, [clearTimeouts, currentToast]);

  // Cleanup on unmount
  useEffect(() => {
    return clearTimeouts;
  }, [clearTimeouts]);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {currentToast && createPortal(
        <Toast {...currentToast} isLeaving={isLeaving} />,
        document.body
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
} 