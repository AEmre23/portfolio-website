import { motion as m } from 'framer-motion'
import SwitchLang from '../utilities/switchLang'
import { useTranslation } from 'react-i18next'

const Hero = ({ setScreen, homeAnimate, setHomeAnimate }) => {
  const { t } = useTranslation()

  return (
    <m.main
      initial={{ opacity: !homeAnimate ? 0 : 1 }}
      animate={{ opacity: 1 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 1, opacity: { delay: 1 } }}
      className="text-3xl font-poppins relative h-screen overflow-hidden"
    >
      <m.div
        variants={container1}
        initial={homeAnimate ? "hidden" : "show"}
        animate="show"
        className="absolute left-8 bottom-8 m:top-14 m:left-4 cursor-grab active:cursor-grabbing w-fit h-fit flex flex-col gap-4"
        drag
        dragConstraints={{ right:5,left:5,top:5,bottom:5 }}
      >
        <m.h1 variants={containerChild1} className="text-8xl bs:text-9xl m:text-6xl font-bold text-yellow-400">Emre</m.h1>
        <m.h2 variants={containerChild1} className="text-8xl bs:text-9xl m:text-6xl font-bold text-yellow-500">Altunkaya</m.h2>
      </m.div>
      <m.div
        className="absolute top-8 right-8 m:top-[unset] m:bottom-20  flex text-right flex-col cursor-grab active:cursor-grabbing gap-4"
        drag
        dragConstraints={{ right:5,left:5,top:5,bottom:5}}
        variants={container2}
        initial={homeAnimate ? "hidden" : "show"}
        animate="show"
      >
        <m.div variants={containerChild2} className="text-6xl bs:text-7xl m:text-5xl font-bold text-yellow-400">Web</m.div>
        <m.div variants={containerChild2} className="text-4xl bs:text-5xl m:text-3xl font-bold text-yellow-400">Developer</m.div>
      </m.div>
      <m.div
        className="absolute bottom-8 right-8 m:bottom-[40%] m:right-[32%] transform m:translate-x-full m:translate-y-full flex text-right m:text-center flex-col gap-4"
        variants={container3}
        initial={homeAnimate ? "hidden" : "show"}
        animate="show"
      >
        <m.div onClick={() => { setScreen("about"); setHomeAnimate(false)}} variants={containerChild3} className="text-3xl bs:text-4xl text-gray-400 transition-all hover:text-white cursor-pointer">{t('Hero-nav-1')}</m.div>
        <m.div variants={containerChild3} className="text-3x bs:text-4xl text-gray-700 transition-all cursor-not-allowed">{t('Hero-nav-2')}</m.div>
        <m.div onClick={() => { setScreen("contact"); setHomeAnimate(false)}} variants={containerChild3} className="text-3xl bs:text-4xl text-gray-400 transition-all hover:text-white cursor-pointer">{t('Hero-nav-3')}</m.div>
    </m.div>
    <div className="absolute top-5 left-3 m:right-2 m:left-[unset] text-sm duration-300 opacity-20 hover:opacity-90">
      <SwitchLang />
    </div>
  </m.main>
  )
}

  const container1 = {
    hidden: { delay:1, x: "-100%" },
    show: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: .6,
        duration: .2,
        type: "spring"
      }
    }
  }

  const containerChild1 = {
    hidden: { x: "-100vw" },
    show: {
      x: 0,
      transition: {
        duration: .7,
        type: "spring"
      }
    }
  }

  const container2 = {
    hidden: { delay:1, x: 500 },
    show: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: .6,
        duration: .2,
        delay:1.3,
        type: "spring"
      }
    }
  }

  const containerChild2 = {
    hidden: { y: "-100vh" },
    show: {
      y: 0,
      transition: {
        duration: .9,
        type: "spring"
      }
    }
  }
  
  const container3 = {
    hidden: { delay:1, x: 500 },
    show: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: .6,
        duration: .2,
        delay:2.7,
        type: "spring"
      }
    }
  }

  const containerChild3 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: .7,
        type: "spring"
      }
    }
  }
export default Hero
