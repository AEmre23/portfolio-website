"use client"
import { createContext, useContext, useState } from "react";

type AnimationContextType = {
  hasViewedHomeAnimation: boolean;
  setHasViewedHomeAnimation: (value: boolean) => void;
};

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasViewedHomeAnimation, setHasViewedHomeAnimation] = useState(false);

  return (
    <AnimationContext.Provider value={{ hasViewedHomeAnimation, setHasViewedHomeAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
}; 