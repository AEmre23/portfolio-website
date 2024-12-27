import { useTranslation } from "next-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useAnimation } from "@/context/AnimationContext";

const Navigation = ({ delay }: { delay: number }) => {
  const { hasViewedHomeAnimation } = useAnimation();
  const { t } = useTranslation("common");
  const pathname = usePathname();

  const tabs = [
    { name: t("about"), href: "/about" },
    { name: t("projects"), href: "/projects" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <motion.div 
      initial={ hasViewedHomeAnimation ? { opacity: 0 } : { scale: 1.4, opacity: 0 }}
      animate={ hasViewedHomeAnimation ? { opacity: 1 } : { scale: 1, opacity: 1 }}
      transition={{ 
        duration: 1.5,
        ease: "easeOut",
        delay: hasViewedHomeAnimation ? 0.4 : delay
      }}
      className="flex p-1.5 bg-nav-beige rounded-full gap-6 shadow-lg mx-auto"
    >
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            pathname === tab.href
              ? "bg-white shadow-sm text-black"
              : "text-gray-600 hover:text-black"
          }`}
        >
          {tab.name}
        </Link>
      ))}
    </motion.div>
  );
};

export default Navigation; 