function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full w-full min-h-[200px]">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-4 border-gray-200 dark:border-gray-800"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-blue-500 border-t-transparent"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner; 