"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useAnimation } from "@/context/AnimationContext";
import { useLanguage } from "@/context/LanguageContext";
import { useDevice } from "@/context/DeviceContext";
import { useRef, useEffect, useState } from "react";

const Navigation = ({ delay }: { delay: number }) => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { hasViewedHomeAnimation } = useAnimation();
  const { isMobile } = useDevice();
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 90, x: 0 });
  const linksRef = useRef<Array<HTMLAnchorElement | null>>([]);

  const tabs = [
    { name: t("about"), href: "/about" },
    { name: t("projects"), href: "/projects" },
    { name: t("contact"), href: "/contact" },
  ];

  useEffect(() => {
    const activeLink = linksRef.current.find((link) => link?.getAttribute('href') === pathname);
    if (activeLink) {
      setIndicatorStyle({
        width: activeLink.offsetWidth,
        x: activeLink.offsetLeft
      });
    } else {
      const firstLink = linksRef.current[0];
      if (firstLink) {
        setIndicatorStyle({ width: firstLink.offsetWidth, x: firstLink.offsetLeft });
      }
    }
  }, [pathname, t]);

  return (
    <motion.nav 
      className="relative bg-nav-beige rounded-full p-1.5 shadow-lg w-fit mx-auto select-none"
      initial={{ 
        opacity: 0,
        scale: isMobile ? 1 : hasViewedHomeAnimation ? 1 : 1.4
      }}
      animate={{ 
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: isMobile ? 0.3 : 1.5,
        ease: "easeOut",
        delay: isMobile ? 0.1 : hasViewedHomeAnimation ? 0.4 : delay
      }}
    >
      {/* Indicator */}
      {!isHomePage && (
        <motion.div
          className="absolute h-9 rounded-full bg-black/10 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{
            width: indicatorStyle.width,
            x: indicatorStyle.x,
            opacity: 1
          }}
          transition={{
            type: "spring",
            stiffness: isMobile ? 400 : 300,
            damping: isMobile ? 40 : 30,
            opacity: { duration: isMobile ? 0.5 : 1.5 }
          }}
        />
      )}
      {/* Navigation Links */}
      <div className="relative flex justify-between px-4">
        {tabs.map((tab, index) => (
          <Link
            key={tab.href}
            href={tab.href}
            ref={(el) => {
              linksRef.current[index] = el;
            }}
            className={`px-4 py-1.5 flex-shrink-0 w-24 sm:w-28 rounded-full text-center font-medium transition-colors relative z-10
              ${pathname === tab.href && !isHomePage ? 'text-black' : 'text-black/60 hover:text-black'}
              ${isHomePage ? 'hover:bg-black/10 hover:backdrop-blur-sm' : 'hover:text-black'} `}
          >
            {tab.name.toLocaleLowerCase()}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation; 