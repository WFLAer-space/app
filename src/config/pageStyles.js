export const defaultPageStyles = {
  layout: {
    maxWidth: '7xl',
    padding: 'md',
    spacing: 'md',
    header: {
      title: '',
      description: '',
      actions: null,
    },
  },
  // Common component styles
  components: {
    card: 'bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6',
    button: {
      primary: 'px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600',
      secondary: 'px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700',
    },
    input: 'w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white',
  },
}; 