// Dependencies
import React, { useState, useRef, useEffect } from "react";
import { motion as m, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
// Components
import GoBack from "../utilities/goback";
import ArrowDown from "../components/goTop";
import { mobileCheck } from "../functions/mobileChecker";
// Assets
import gokce from "../assets/gokce.PNG";
import sloth from "../assets/sloth.PNG";
import blog from "../assets/blog.PNG";
import pop from "../assets/pop.PNG";
import country from "../assets/country.PNG";
import emre from "../assets/emre.PNG";

const Projects = ({ setScreen }) => {
  const { t } = useTranslation();
  const [showingProject, setShowingProject] = useState("");

  const projectInfo = [
    {
      title: t("Project-1"),
      description: t("Project-1-1"),
      linksite: "https://gokcecbsharita.net/",
      image: gokce,
    },
    {
      title: t("Project-2"),
      description: t("Project-2-1"),
      linksite: "https://slothbedding.com/",
      image: sloth,
    },
    {
      title: t("Project-3"),
      description: t("Project-3-1"),
      linksite: "https://emre-blog.vercel.app/",
      linkcode: "https://github.com/AEmre23/my-blog",
      image: blog,
    },
    {
      title: t("Project-4"),
      description: t("Project-4-1"),
      linksite: "https://popup-generator-emre.vercel.app/",
      linkcode: "https://github.com/AEmre23/popup-generator",
      image: pop,
    },
    {
      title: t("Project-10"),
      description: t("Project-10-1"),
      linksite: "https://www.emrealtunkaya.dev/",
      linkcode: "https://github.com/AEmre23/portfolio-website",
      image: emre,
    },
    {
      title: t("Project-5"),
      description: t("Project-5-1"),
      linksite: "https://countries-info-app-opal.vercel.app/",
      linkcode: "https://github.com/AEmre23/countries-info-app",
      image: country,
    },
  ];

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 1, opacity: { delay: 1 } }}
      className="text-white"
    >
      <m.div className="text-white relative  flex items-center py-32 m:py-0 m:pb-8 px-16 m:px-6 justify-center">
        <div className="w-11/12 m:w-full relative flex m:flex-col-reverse gap-24 ">
          <div className="w-full flex flex-col gap-24 m:gap-20 pt-8">
            {projectInfo.map((item, index) => (
              <EachProject
                key={index}
                title={item.title}
                description={item.description}
                linksite={item.linksite}
                linkcode={item.linkcode}
                setShowingProject={setShowingProject}
                image={item.image}
              />
            ))}
          </div>
          <div
            id="image"
            className={`${
              showingProject ? "opacity-100" : "opacity-0 m:opacity-100"
            } duration-300 bg-gray-100 m:mb-24 rounded-lg w-full h-full mt-24 m:mt-0 sticky m:relative top-1/2 -translate-y-1/2 m:top-44 m:translate-y-[0]`}
          >
            <img
              className="w-full h-auto object-cover rounded-lg shadow-[0px_0px_20px_#ffff]"
              src={showingProject}
            />
          </div>
        </div>
      </m.div>
      <div className="w-screen text-white text-center space-y-4 pb-12 justify-center flex flex-col items-center gap-12">
        <div className="font-bold text-xl m:px-4 m:leading-relaxed m:pt-8">
          {t("Project-6")}{" "}
          <a
            className="underline"
            target="_blank"
            href="https://github.com/AEmre23?tab=repositories"
          >
            {t("Project-7")}
          </a>
        </div>
        <div
          onClick={() => setScreen("contact")}
          className="hover:bg-gray-100 font-bold bg-neutral-900 duration-300 hover:text-black text-xl cursor-pointer p-3 border-2 border-white text-yellow-50 rounded-lg w-64"
        >
          {t("Project-8")}
        </div>
      </div>
      <div className="text-yellow-500 fixed top-8 right-8 cursor-pointer shake">
        <GoBack width="75" height="75" setScreen={setScreen} />
      </div>
      <ArrowDown />
    </m.div>
  );
};

const EachProject = ({
  title,
  description,
  linksite,
  linkcode,
  image,
  setShowingProject,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef(null);
  const { t } = useTranslation();
  const isInView = useInView(ref, { once: true });
  let isMobile = false;

  if (mobileCheck()) isMobile = true;

  const handleOnMouseEnter = () => {
    if (!isMobile) {
      setIsHovering(true);
      setShowingProject(image);
    }
  };
  const handleOnMouseLeave = () => {
    if (!isMobile) {
      setIsHovering(false);
      setShowingProject("");
    }
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className="hover:outline hover:outline-yellow-100 hover:shadow-[0px_0px_20px_#ffff] p-8 m:p-4 rounded-xl duration-500 bg-neutral-900 cursor-default flex flex-col justify-center gap-12 m:gap-10"
      style={{
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
      }}
    >
      <div
        className={`${
          isHovering ? "text-yellow-200" : "text-yellow-50"
        } text-bold text-6xl duration-500  m:text-4xl leading-normal`}
      >
        {title}
      </div>
      <div
        className={`text-semibold text-gray-400 text-xl m:text-base leading-normal`}
      >
        {description}
      </div>
      <div
        className={`${
          isHovering ? "opacity-100" : "m:opacity-100 opacity-0"
        } duration-300 flex gap-6 m:gap-3 items-center`}
      >
        <a
          target="_blank"
          href={linksite}
          className="border-2 border-white p-4 px-8 m:px-2 m:p-2 rounded-md text-lg m:text-xs transition duration-300 font-semibold hover:border-black hover:bg-white hover:text-black"
        >
          {t("Project-9-1")}
        </a>
        {isMobile ? (
          <div
            onClick={() => {
              setShowingProject(image);
              document.documentElement.scrollTop = 0;
            }}
            className="border-2 border-white p-4 px-6 m:px-2 m:p-2 rounded-md text-lg m:text-xs transition duration-300 font-semibold hover:border-black hover:bg-white hover:text-black"
          >
            {t("Project-9-2")}
          </div>
        ) : null}
        {linkcode ? (
          <a
            target="_blank"
            href={linkcode}
            className="p-4 px-6 m:p-2 m:px-2 rounded-md text-lg m:text-xs transition duration-300 font-semibold hover:text-yellow-100 hover:outline hover:outline-yellow-100"
          >
            {t("Project-9-3")}
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Projects;
