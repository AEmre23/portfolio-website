"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useDevice } from './DeviceContext';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const { isMobile } = useDevice();

  useEffect(() => {
    const loadingDelay = isMobile ? 0 : 500;
    
    const handleLoad = () => {
      if (isMobile) {
        setIsLoading(false);
      } else {
        requestAnimationFrame(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, loadingDelay);
        });
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [isMobile]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
} 