"use client"
import { motion } from "framer-motion";

function TextReveal({ children, className }: { children: React.ReactNode, className: string }) {
  return (
    <div className={className}>
      {children!.toString().split(" ").map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: i / 35,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default TextReveal;
