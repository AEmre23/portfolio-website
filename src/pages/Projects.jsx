import React, { useState, useRef } from 'react'
import GoBack from '../utilities/goback'
import { motion as m, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import gokce from '../assets/gokce.PNG'
import sloth from '../assets/sloth.PNG'
import blog from '../assets/blog.PNG'
import pop from '../assets/pop.PNG'
import country from '../assets/country.PNG'
import ArrowDown from '../components/arrowDown'

const Projects = ({ setScreen }) => {
  const { t } = useTranslation()
  const [showingProject, setShowingProject] = useState("")

  const projectInfo = [
    {
      title: t('Project-1'),
      description: t('Project-1-1'),
      linksite: "https://gokcecbsharita.net/",
      image: gokce,
    },
    {
      title: t('Project-2'),
      description: t('Project-2-1'),
      linksite: "https://slothbedding.com/",
      image: sloth,
    },
    {
      title: t('Project-3'),
      description: t('Project-3-1'),
      linksite: "https://emre-blog.vercel.app/",
      linkcode: "https://github.com/AEmre23/my-blog",
      image: blog,
    },
    {
      title: t('Project-4'),
      description: t('Project-4-1'),
      linksite: "https://popup-generator-emre.vercel.app/",
      linkcode: "https://github.com/AEmre23/popup-generator",
      image: pop,
    },
    {
      title: t('Project-5'),
      description: t('Project-5-1'),
      linksite: "https://countries-info-app-opal.vercel.app/",
      linkcode: "https://github.com/AEmre23/countries-info-app",
      image: country,
    },
  ]

  return (
  <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ x: "-100vw" }}
      transition={{ duration: 1, opacity: { delay: 1 } }}
      className=""
  >
    <m.div
      className="text-white relative  flex items-center py-32 m:py-0 m:pb-8 px-16 m:px-6 justify-center"
    >
      <div className="w-11/12 m:w-full relative flex m:flex-col-reverse gap-24 ">
        <div className="w-full flex flex-col gap-24 m:gap-20 pt-8">
          {projectInfo.map((item, index) => (
            <EachProject
              key={index}
              index={index}
              title={item.title}
              description={item.description}
              codeButton={item.linkcode}
              linksite={item.linksite}
              linkcode={item.linkcode}
              setShowingProject={setShowingProject}
              image={item.image}
            />
          ))}
        </div>
        <div id='image' className={`${showingProject ? "opacity-100" : "opacity-0 m:opacity-100"} duration-300 bg-gray-100 m:mb-24 rounded-lg w-full h-full mt-24 m:mt-0 sticky m:relative top-1/2 -translate-y-1/2 m:top-44 m:translate-y-[0]`}>
          <img className="w-full h-auto object-cover rounded-lg shadow-[0px_0px_20px_#ffff]" src={showingProject} />
        </div>
      </div>
      </m.div>
      <div className="w-screen text-white text-center space-y-4 pb-12 justify-center flex flex-col items-center gap-12">
        <div className="font-bold text-xl m:px-4 m:leading-relaxed m:pt-8">{t('Project-6')} <a className="underline" target='_blank' href='https://github.com/AEmre23?tab=repositories'>{t('Project-7')}</a></div>
        <div onClick={()=> setScreen("contact")} className="hover:bg-gray-100 bg-neutral-900 duration-300 hover:text-black text-2xl cursor-pointer p-3 border-2 border-yellow-50 text-yellow-100 rounded-lg w-64">
          {t('Project-8')}
        </div>
      </div>
      <div  className="text-yellow-500 fixed top-8 right-8 cursor-pointer shake hover:scale-110">
        <GoBack width="75" height="75" setScreen={setScreen} />
      </div>
    </m.div>
  )
}

const EachProject = ({ title, description, codeButton, linksite, linkcode, image, setShowingProject, index }) => {
  const [isHovering, setIsHovering] = useState(false)
  const ref = useRef(null)
  const { t } = useTranslation()
  const isInView = useInView(ref, { once: true })
  let isMobile = false

  window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
  if (mobileCheck()) isMobile = true
  
  const handleOnMouseEnter = () => {
    if (!isMobile) {
      setIsHovering(true)
      setShowingProject(image)
    }
  }
  const handleOnMouseLeave = () => {
    if (!isMobile) {
      setIsHovering(false)
      setShowingProject("")
    }
  }

  return (
    <div
      ref={ref}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className={`${index % 2 !== 0 ? "border-2 border-yellow-100" : ""} p-8 m:p-4 rounded-xl duration-300 bg-neutral-900 cursor-default flex flex-col justify-center gap-12 m:gap-10`}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    >

      <div className="text-bold text-6xl text-yellow-50 m:text-4xl leading-normal">{title}</div>
      <div className="text-semibold text-gray-400 text-xl m:text-base leading-normal">{description}.</div>
      <div className={`${isHovering ? "opacity-100" : "m:opacity-100 opacity-0"} duration-300 flex gap-6 m:gap-3 items-center`}>
        <a
          target='_blank'
          href={linksite}
          className="border-2 border-white p-4 m:p-2 rounded-md text-lg m:text-sm transition duration-300 font-semibold hover:border-black hover:bg-white hover:text-black"
        >
          {t('Project-9-1')}
        </a>
        {isMobile ?
          <div
            onClick={() => { setShowingProject(image);document.documentElement.scrollTop = 0 }}
            className="border-2 border-white p-4 m:p-2 rounded-md text-lg m:text-sm transition duration-300 font-semibold hover:border-black hover:bg-white hover:text-black"
          >
            {t('Project-9-2')}
          </div>
          : null}
        {codeButton
          ?
          <a
            target='_blank'
            href={linkcode}
            className="p-4 m:p-2 rounded-md text-lg m:text-sm transition duration-300 font-semibold hover:text-yellow-100 hover:outline hover:outline-yellow-100"
          >
            {t('Project-9-3')}
          </a>
          : null
        }
      </div>  
    </div>
  )
}


export default Projects
