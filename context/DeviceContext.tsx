"use client"
import { createContext, useContext, useEffect, useState } from 'react';

interface DeviceContextType {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(isMobile);
    };

    // İlk yüklemede kontrol et
    checkIsMobile();

    // Ekran boyutu değiştiğinde kontrol et
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.addEventListener('change', checkIsMobile);

    return () => mediaQuery.removeEventListener('change', checkIsMobile);
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </DeviceContext.Provider>
  );
}

export function useDevice() {
  const context = useContext(DeviceContext);
  if (context === undefined) {
    throw new Error('useDevice must be used within a DeviceProvider');
  }
  return context;
} 