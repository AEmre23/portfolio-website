"use client"
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useAnimation } from "@/context/AnimationContext";
import { useDevice } from "@/context/DeviceContext";
import { useEffect } from "react";

const BackgroundEffects = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { hasViewedHomeAnimation, setHasViewedHomeAnimation } = useAnimation();
  const { isMobile } = useDevice();

  useEffect(() => {
    if (isHomePage && !hasViewedHomeAnimation) {
      const delay = isMobile ? 1000 : 5000;
      setTimeout(() => {
        setHasViewedHomeAnimation(true);
      }, delay);
    }
  }, [isHomePage, hasViewedHomeAnimation, setHasViewedHomeAnimation, isMobile]);

  const shouldAnimate = isHomePage && !hasViewedHomeAnimation;

  return (
    <>
      <motion.div 
        initial={shouldAnimate ? { opacity: 0.85 } : false}
        animate={{ opacity: [0.95, 0.55, 0.95] }}
        transition={{ 
          duration: isMobile ? 4 : 3,
          ease: "linear",
          repeat: Infinity,
        }}
        className="radial-overlay" />
      <motion.div 
        initial={shouldAnimate ? { scale: isMobile ? 1.5 : 2, rotate: "4deg" } : { scale: 1.2, rotate: "4deg"}}
        animate={{ 
          scale: 1.2,
          rotate: isMobile ? "4deg" : ["4deg", "4.75deg", "4deg"]
        }}
        transition={{ 
          scale: shouldAnimate ? { duration: isMobile ? 2 : 5, ease: "easeOut" } : { duration: 0.3 },
          rotate: isMobile ? {} : { 
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            times: [0, 0.5, 1],
          }
        }}
        className="grid-pattern" />
    </>
  );
};

export default BackgroundEffects; 