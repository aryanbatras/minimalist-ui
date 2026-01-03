import { useState, createContext, useContext, useEffect } from 'react';

const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
 
  const [sideBar, setSideBar] = useState(false);
  
  useEffect(() => {
    if (sideBar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sideBar]);
  
  const toggleSidebar = () => setSideBar(prev => !prev);
  const closeSidebar = () => setSideBar(false);
  
  const value = {
    sideBar,
    setSideBar,
    toggleSidebar,
    closeSidebar
  };
  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within SidebarProvider');
  }
  return context;
}