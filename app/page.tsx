"use client"
import EmreSvg from "@/components/EmreSvg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0.85 }}
        animate={{ opacity: [0.95, 0.55, 0.95] }}
        transition={{ 
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="radial-overlay" />
      <motion.div 
        initial={{ scale: 2, rotate: "6deg" }}
        animate={{ 
          scale: 1.2,
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
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <EmreSvg delay={0.3} />
        </main>
      </div>
    </>
  );
}
