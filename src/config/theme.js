// 主题配置
export const THEME_CONFIG = {
  light: {
    // 基础颜色
    background: 'bg-white',
    contentBg: 'bg-white',
    text: 'text-gray-900',
    textSecondary: 'text-gray-500',
    border: 'border-gray-200',

    // 卡片样式
    card: {
      background: 'bg-white',
      hover: 'hover:bg-gray-50',
      border: 'border-gray-200',
      shadow: 'shadow-sm'
    },

    // 按钮样式
    button: {
      primary: 'bg-blue-500 hover:bg-blue-600 text-white',
      secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700',
      outline: 'border border-gray-200 hover:bg-gray-50 text-gray-700'
    },

    // 状态颜色
    status: {
      success: 'text-green-500 bg-green-50',
      warning: 'text-yellow-500 bg-yellow-50',
      error: 'text-red-500 bg-red-50',
      info: 'text-blue-500 bg-blue-50'
    }
  },
  dark: {
    // 基础颜色
    background: 'bg-black',
    contentBg: 'bg-black',
    text: 'text-white',
    textSecondary: 'text-gray-400',
    border: 'border-gray-800',

    // 卡片样式
    card: {
      background: 'bg-black',
      hover: 'hover:bg-gray-900',
      border: 'border-gray-800',
      shadow: 'shadow-none'
    },

    // 按钮样式
    button: {
      primary: 'bg-blue-500 hover:bg-blue-600 text-white',
      secondary: 'bg-gray-900 hover:bg-gray-800 text-gray-200',
      outline: 'border border-gray-800 hover:bg-gray-900 text-gray-200'
    },

    // 状态颜色
    status: {
      success: 'text-green-400 bg-green-900/20',
      warning: 'text-yellow-400 bg-yellow-900/20',
      error: 'text-red-400 bg-red-900/20',
      info: 'text-blue-400 bg-blue-900/20'
    }
  }
};

// 通用过渡效果
export const TRANSITION_CLASSES = 'transition-colors duration-100';

// 获取主题样式的辅助函数
export const getThemeStyle = (theme, path) => {
  return path.split('.').reduce((obj, key) => obj?.[key], THEME_CONFIG[theme]);
};

// 组合样式的辅助函数
export const combineStyles = (...styles) => styles.filter(Boolean).join(' '); 