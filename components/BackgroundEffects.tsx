"use client"
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useAnimation } from "@/context/AnimationContext";
import { useEffect } from "react";

const BackgroundEffects = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { hasViewedHomeAnimation, setHasViewedHomeAnimation } = useAnimation();

  useEffect(() => {
    if (isHomePage && !hasViewedHomeAnimation) {
        setTimeout(() => {
            setHasViewedHomeAnimation(true);
        }, 5000);
    }
  }, [isHomePage, hasViewedHomeAnimation, setHasViewedHomeAnimation]);

  const shouldAnimate = isHomePage && !hasViewedHomeAnimation;

  return (
    <>
      <motion.div 
        initial={shouldAnimate ? { opacity: 0.85 } : false}
        animate={{ opacity: [0.95, 0.55, 0.95] }}
        transition={{ 
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="radial-overlay" />
      <motion.div 
        initial={shouldAnimate ? { scale: 2, rotate: "6deg" } : {}}
        animate={{ 
          scale: shouldAnimate ? 1.2 : 1,
          rotate: ["4deg", "4.5deg", "4deg"]
        }}
        transition={{ 
          scale: { duration: 5, ease: "easeOut" },
          rotate: { 
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