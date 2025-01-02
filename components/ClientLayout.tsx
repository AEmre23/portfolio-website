"use client"
import BackgroundEffects from "@/components/BackgroundEffects";
import { AnimationProvider } from "@/context/AnimationContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { DeviceProvider } from "@/context/DeviceContext";
import EmreSvg from "@/components/EmreSvg";
import Navigation from "@/components/Navigation";
import PageTransitionEffect from "@/components/PageTransitionEffect";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <AnimationProvider>
      <LanguageProvider>
        <DeviceProvider>
          <BackgroundEffects />
          <div className="min-h-screen p-8 pb-20 gap-8 sm:p-20 flex flex-col items-center font-[family-name:var(--font-geist-sans)]">
            <motion.header 
              className="flex flex-col gap-8 items-center justify-center z-50 w-full fixed left-0 right-0"
              initial={false}
              animate={{
                top: isHomePage ? `calc(50% - 265px)` : "0",
              }}
              transition={{
                type: "spring",
                stiffness: 20,
                damping: 15,
                duration: 0.5
              }}
            >
              <motion.div
                animate={{
                  scale: isHomePage ? 1 : 0.5,
                  top: isHomePage ? "0" : "100px"
                }}
                transition={{
                  type: "spring",
                  stiffness: 20,
                  damping: 15
                }}
              >
                <EmreSvg delay={0.7} />
              </motion.div>
              <motion.div className="relative" animate={{ top: isHomePage ? "0" : "-40px" }} transition={{ duration: 1.2, ease: "easeInOut" }}>
                  <Navigation delay={2.5} />
              </motion.div>
            </motion.header>
            <motion.div className={`${isHomePage ? "!top-[600px]" : "!top-[300px]"} duration-1000 relative w-full max-w-xl mx-auto`} >
              <PageTransitionEffect>
                  {children}
              </PageTransitionEffect>
            </motion.div>
          </div>
        </DeviceProvider>
      </LanguageProvider>
    </AnimationProvider>
  );
} 