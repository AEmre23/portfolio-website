import { motion as m } from 'framer-motion'
import SwitchLang from '../utilities/switchLang'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

const Hero = ({ setScreen, homeAnimate, setHomeAnimate }) => {
  const { t } = useTranslation()
  let isMobile = false

  window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
  if(mobileCheck()) isMobile = true

  const containerChild2 = {
    hidden: { y: isMobile ? "100vh"  : "-100vh" },
    show: {
      y: 0,
      transition: {
        duration: .9,
        type: "spring"
      }
    }
  }

  return (
    <m.main
      initial={{ opacity: !homeAnimate ? 0 : 1 }}
      animate={{ opacity: 1 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 1, opacity: { delay: 1 } }}
      className="text-3xl font-poppins h-screen relative overflow-hidden"
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
        className="absolute bottom-8 right-8 m-auto m:left-0 m:right-0 m:bottom-[40%] flex text-right m:text-center flex-col gap-4"
        variants={container3}
        initial={homeAnimate ? "hidden" : "show"}
        animate="show"
      >
        <m.div onClick={() => { setScreen("about"); setHomeAnimate(false)}} variants={containerChild3} className="text-3xl bs:text-4xl text-gray-400 transition-all hover:text-white cursor-pointer">{t('Hero-nav-1')}</m.div>
        <m.div onClick={() => { setScreen("projects"); setHomeAnimate(false)}} variants={containerChild3} className="text-3x bs:text-4xl text-gray-400 transition-all hover:text-white cursor-pointer">{t('Hero-nav-2')}</m.div>
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
