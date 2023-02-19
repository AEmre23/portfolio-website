// Dependencies
import React from 'react'
import { motion as m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
// Components
import GoBack from '../utilities/goback'

const Contact = ({ setScreen }) => {
  const { t } = useTranslation()

  const contactItem = [
    {
      link:"mailto:aemrea23@gmail.com" ,
      svg: <svg width="80px" height="80px" fill="#ffff" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>gmail</title><path d="M15 2.5H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-1.3 1.25L8.42 8.56a.62.62 0 0 1-.84 0L2.3 3.75zm-12.45 8.5V4.48l5.49 5a1.86 1.86 0 0 0 2.52 0l5.49-5v7.77z"></path></g></svg>
    },
    {
      link:"https://www.linkedin.com/in/ahmet-emre-altunkaya/" ,
      svg: <svg width="80px" height="80px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>linkedin</title><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g></svg>
    },
    {
      link:"https://github.com/AEmre23" ,
      svg: <svg width="80px" height="80px" fill="#ffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg>
    },
    {
      link:"https://gitlab.com/emre.altunkaya" ,
      svg: <svg width="80px" height="80px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>gitlab</title><path fill="#FC6D26" d="M14.975 8.904L14.19 6.55l-1.552-4.67a.268.268 0 00-.255-.18.268.268 0 00-.254.18l-1.552 4.667H5.422L3.87 1.879a.267.267 0 00-.254-.179.267.267 0 00-.254.18l-1.55 4.667-.784 2.357a.515.515 0 00.193.583l6.78 4.812 6.778-4.812a.516.516 0 00.196-.583z"></path><path fill="#E24329" d="M8 14.296l2.578-7.75H5.423L8 14.296z"></path><path fill="#FC6D26" d="M8 14.296l-2.579-7.75H1.813L8 14.296z"></path><path fill="#FCA326" d="M1.81 6.549l-.784 2.354a.515.515 0 00.193.583L8 14.3 1.81 6.55z"></path><path fill="#E24329" d="M1.812 6.549h3.612L3.87 1.882a.268.268 0 00-.254-.18.268.268 0 00-.255.18L1.812 6.549z"></path><path fill="#FC6D26" d="M8 14.296l2.578-7.75h3.614L8 14.296z"></path><path fill="#FCA326" d="M14.19 6.549l.783 2.354a.514.514 0 01-.193.583L8 14.296l6.188-7.747h.001z"></path><path fill="#E24329" d="M14.19 6.549H10.58l1.551-4.667a.267.267 0 01.255-.18c.115 0 .217.073.254.18l1.552 4.667z"></path></g></svg>
    },
  ]

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 1, opacity: { delay: 1 } }}
      className="text-white z-30 relative h-screen m:min-h-screen m:mt-6 w-screen flex flex-col gap-24 m:gap-20 justify-center items-center"
    >
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
        {t('Contact-1')}
      </h1>
      <div className="hoverEffect flex flex-wrap gap-y-8 items-center justify-center">
        {contactItem.map((item, index) => (
          <GetContactSVG
            key={index}
            link={item.link}
          >
            {item.svg}
          </GetContactSVG>
        ))}
      </div>
      <div className="animate-border w-[50vw] m:w-[90vw] rounded-xl from-teal-500 via-red-500 to-yellow-500 bg-[length:400%_400%] p-0.5 bg-gradient-to-r">
        <span className="block px-5 rounded-xl py-3 font-bold text-center text-lg text-white bg-neutral-900">{t('Contact-3')}</span>
      </div>
      <div  className="text-yellow-500 fixed top-8 right-8 cursor-pointer shake hover:scale-110">
        <GoBack width="75" height="75" setScreen={setScreen} />
      </div>
    </m.div>
  )
}

const GetContactSVG = ({ children, link, className }) => {
  return (
    <a href={link} target='_blank'>
      <m.span
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1, type: "spring", stiffness: 600, damping: 10 }}
        className={`${className} hoverEffect flex justify-center items-center w-32`}
      >
        {children}
      </m.span>
    </a>
  )
}

export default Contact
