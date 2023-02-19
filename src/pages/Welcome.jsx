// Dependencies
import { useState, useEffect } from 'react'
import { motion as m } from 'framer-motion'
// Components
import arrow from '../assets/arrow.png'
import SwitchLang from '../utilities/switchLang'

const Welcome = ({ setScreen }) => {
  const [animateTitle, setAnimateTitle] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('lang') === 'tr') setAnimateTitle(false)
  }, []);

  return (
    <m.div
      key={screen}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .6}}
      exit={{ y: "-100vh"}}
      className="fixed flex-col gap-12 cursor-default font-poppins text-white font-semibold h-screen w-screen flex justify-center items-center"
    >
      <div className="h-[120px] m:h-[70px] overflow-hidden relative">
        <div className={`${animateTitle ? 'top-0' : '-top-[120px] m:-top-[80px]'} relative text-8xl m:text-[55px] text-center duration-300`}>
          <div className="">WELCOME</div>
          <div className="mt-8">HOŞGELDİNİZ</div>
        </div>
      </div>
      <img
        onClick={() => setScreen("hero")}
        className="w-16 h-16 m:w-12 m:h-12 animate-bounce cursor-pointer duration-300 hover:drop-shadow-[3px_1px_5px_#ffff] "
        src={arrow}
        alt="arrow-icon"
      />
      <SwitchLang 
        change={animateTitle}
        setChange={setAnimateTitle}
      />
    </m.div>
  )
}

export default Welcome
