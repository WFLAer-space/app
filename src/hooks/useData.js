import { useState, useEffect } from 'react';

const cache = new Map();
const CACHE_TIME = 5 * 60 * 1000; // 5 minutes

export function useData(key) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const cached = cache.get(key);
    if (cached && Date.now() - cached.timestamp < CACHE_TIME) {
      setData(cached.data);
      return;
    }

    fetchData(key).then(newData => {
      cache.set(key, {
        data: newData,
        timestamp: Date.now()
      });
      setData(newData);
    });
  }, [key]);

  return data;
} 