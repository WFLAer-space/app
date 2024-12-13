import { createContext, useReducer } from 'react';

// Separate contexts by domain
export const UserContext = createContext();
export const SettingsContext = createContext();
export const DataContext = createContext();

// Use reducers for complex state
function dataReducer(state, action) {
  switch (action.type) {
    case 'CACHE_DATA':
      return {
        ...state,
        [action.key]: {
          data: action.data,
          timestamp: Date.now()
        }
      };
    // ... other cases
  }
} 