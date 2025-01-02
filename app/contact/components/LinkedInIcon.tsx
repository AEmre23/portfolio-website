"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useDevice } from '@/context/DeviceContext'
import LinkedInSvg from '@/assets/icons/linkedin'
import LinkIcon from '@/assets/icons/link'
import { CONTACT } from '@/constants'

export default function LinkedInButton() {
  const [isExpanded, setIsExpanded] = useState(false);
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

  return (
    <motion.a 
      ref={linkRef}
      href={CONTACT.LINKEDIN_URL}
      target='_blank'
      initial={{ width: '100px' }}
      animate={{ width: isExpanded ? '384px' : '100px' }}
      whileHover={!isMobile ? { width: '384px' } : undefined}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      onHoverStart={() => !isMobile && setIsExpanded(true)}
      onHoverEnd={() => !isMobile && setIsExpanded(false)}
      onClick={handleClick}
      className='border border-gray-400 group hover:border-gray-600 duration-300 rounded-full p-4 flex items-center justify-evenly gap-2 overflow-hidden'
    >
      <LinkedInSvg className={`size-16 duration-300 group-hover:text-[#0077b5] flex-shrink-0 ${isMobile && isExpanded ? 'text-[#0077b5]' : ''}`} />
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
              {CONTACT.LINKEDIN_URL.split('www.')[1]}
            </div>
            <LinkIcon className={`size-4 flex-shrink-0 group-hover:text-[#0077b5] ${isMobile && isExpanded ? 'text-[#0077b5]' : ''}`} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
} 