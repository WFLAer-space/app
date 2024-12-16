import { memo } from 'react';

const LoadingScreen = memo(() => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-black flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
});

LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen; 