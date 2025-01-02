"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '@/context/LoadingContext';

export default function Loading() {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-nav-beige/80 z-50 flex items-center justify-center"
        >
          <div className="scaling-dots">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 