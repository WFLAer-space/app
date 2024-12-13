import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export function PageProvider({ children }) {
  const [pages, setPages] = useState([]);

  const registerPage = (page) => {
    setPages((prev) => [...prev, page]);
  };

  return (
    <PageContext.Provider value={{ pages, registerPage }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePages() {
  return useContext(PageContext);
} 