"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useAnimation } from "@/context/AnimationContext";
import USAFlag from "@/assets/USA.png";
import TurkeyFlag from "@/assets/Turkey.png";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const { hasViewedHomeAnimation } = useAnimation();
  const isEnglish = language === "en";

  const handleToggle = () => {
    setLanguage(isEnglish ? "tr" : "en");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: hasViewedHomeAnimation ? 2 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: hasViewedHomeAnimation ? 0 : 3 }}
      className="relative w-[80px] h-[40px] bg-neutral-200 select-none rounded-full p-1 cursor-pointer shadow-2xl"
      style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)" }}
      onClick={handleToggle}
    >
      <motion.div
        className="absolute w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center shadow-md"
        animate={{ x: isEnglish ? 0 : 40 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image
          src={isEnglish ? USAFlag : TurkeyFlag}
          alt={isEnglish ? "English" : "Türkçe"}
          width={24}
          height={24}
          className="rounded-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-between px-2">
      </div>
    </motion.div>
  );
};

export default LanguageToggle; 