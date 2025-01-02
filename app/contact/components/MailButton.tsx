"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useDevice } from '@/context/DeviceContext'
import MailIcon from '@/assets/icons/mail'
import CopyIcon from '@/assets/icons/copy'
import CheckIcon from '@/assets/icons/check'
import { CONTACT } from '@/constants'

export default function MailButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { isMobile } = useDevice();
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = linkRef.current;
    if (!element) return;

    const handleTouch = (e: TouchEvent) => {
      if (isMobile && !isExpanded) {
        e.preventDefault();
        setIsExpanded(true);
      }
    };

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (isMobile && isExpanded && linkRef.current && !linkRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
      }
    };

    element.addEventListener('touchstart', handleTouch, { passive: false });
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      element.removeEventListener('touchstart', handleTouch);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobile, isExpanded]);

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile && !isExpanded) {
      e.preventDefault();
    }
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      // Modern Clipboard API'yi dene
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(CONTACT.EMAIL);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } else {
        // Eğer Clipboard API çalışmazsa, kullanıcıya manuel seçim yaptır
        const range = document.createRange();
        const emailElement = e.currentTarget.previousElementSibling;
        if (emailElement) {
          range.selectNodeContents(emailElement);
          const selection = window.getSelection();
          if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
            setIsCopied(true);
            setTimeout(() => {
              selection.removeAllRanges();
              setIsCopied(false);
            }, 2000);
          }
        }
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.a 
      ref={linkRef}
      href={`mailto:${CONTACT.EMAIL}`}
      initial={{ width: '100px' }}
      animate={{ width: isExpanded ? '384px' : '100px' }}
      whileHover={!isMobile ? { width: '384px' } : undefined}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      onHoverStart={() => !isMobile && setIsExpanded(true)}
      onHoverEnd={() => !isMobile && setIsExpanded(false)}
      onClick={handleClick}
      className='border border-gray-400 group hover:border-gray-600 duration-300 rounded-full p-4 flex items-center justify-evenly gap-2 overflow-hidden'
    >
      <MailIcon className={`size-16 duration-300 group-hover:text-social-gmail flex-shrink-0 ${isMobile && isExpanded ? 'text-social-gmail' : ''}`} />
      <AnimatePresence>
        {((!isMobile && isExpanded) || (isMobile && isExpanded)) && (
          <motion.div 
            className='flex items-center gap-2'
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ 
              opacity: { duration: 0.2, delay: 0.3 },
              width: { duration: 0.3, delay: 0.3 }
            }}
          >
            <div className='text-sm font-semibold whitespace-nowrap underline sm:no-underline sm:group-hover:underline'>
              {CONTACT.EMAIL}
            </div>
            <button
              onClick={handleCopy}
              className="p-1 hover:bg-gray-100 rounded-full"
              aria-label="Copy email address"
            >
              <AnimatePresence mode="wait">
                {isCopied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckIcon className="size-6 text-status-success" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CopyIcon title='Copy' className={`size-6 duration-150 hover:text-social-gmail`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
} 