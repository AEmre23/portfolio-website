import React, { useRef, useState } from "react";
import { mobileCheck } from "../../../functions/mobileChecker";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const EachProject = ({
  title,
  description,
  linksite,
  linkcode,
  image,
  setShowingProject,
  disabled,
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
      className="hover:outline hover:outline-yellow-100 hover:shadow-[0px_0px_20px_#ffff] bs:p-8 p-6 m:p-4 rounded-xl duration-500 bg-neutral-900 cursor-default flex flex-col justify-center gap-12 m:gap-10"
      style={{
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
      }}
    >
      <div
        className={`${
          isHovering ? "text-yellow-200" : "text-yellow-50"
        } text-bold  bs:text-6xl text-5xl duration-500  m:text-4xl leading-normal`}
      >
        {title}
      </div>
      <div className="text-semibold text-gray-400 bs:text-xl text-lg m:text-base leading-normal">
        {description}
      </div>
      <div
        className={`${
          isHovering ? "opacity-100" : "m:opacity-100 opacity-0"
        } duration-300 flex gap-6 m:gap-3 items-center`}
      >
        { disabled ? 
        (
          <>
            <button disabled className="cursor-not-allowed !whitespace-nowrap hover:bg-transparent hover:opacity-30 hover:border-gray-300 hover:text-gray-400 border-gray-300 border-2 bs:p-4 p-3 bs:px-8 px-6 m:px-2 m:p-2 rounded-md bs:text-lg text-base m:text-xs transition duration-300 font-semibold hover:bg-white">{t("Project-9-1")}</button>
            <i className="text-gray-400 m:w-fit text-sm m:text-xs font-medium">{t("General-disabled")}</i> 
          </>
        ) : ( 
          linksite ?
          <a
            target="_blank"
            href={linksite}
            className="!whitespace-nowrap border-2 border-white bs:p-4 p-3 bs:px-8 px-6 m:px-2 m:p-2 rounded-md bs:text-lg text-base m:text-xs transition duration-300 font-semibold hover:border-black hover:bg-white hover:text-black"
          >
            {t("Project-9-1")}
          </a> 
          : 
          <button
          disabled
          className="cursor-not-allowed !whitespace-nowrap hover:bg-transparent hover:opacity-30 hover:border-gray-300 hover:text-gray-400 border-gray-300 border-2 bs:p-4 p-3 bs:px-8 px-6 m:px-2 m:p-2 rounded-md bs:text-lg text-base m:text-xs transition duration-300 font-semibold hover:bg-white"
          >
            {t("Project-16")}
          </button>
         )
        }
        {isMobile ? (
          <div
            onClick={() => {
              setShowingProject(image);
              document.documentElement.scrollTop = 0;
            }}
            className="border-2 whitespace-nowrap border-white p-4 px-6 m:px-2 m:p-2 rounded-md text-lg m:text-xs transition duration-300 font-semibold hover:border-black hover:bg-white hover:text-black"
          >
            {t("Project-9-2")}
          </div>
        ) : null}
        {linkcode ? (
          <a
            target="_blank"
            href={linkcode}
            className="bs:p-4 p-3 bs:px-8 px-6 m:p-2 m:px-2 rounded-md bs:text-lg text-base m:text-xs transition duration-300 font-semibold hover:text-yellow-100 hover:outline hover:outline-yellow-100"
          >
            {t("Project-9-3")}
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default EachProject;
