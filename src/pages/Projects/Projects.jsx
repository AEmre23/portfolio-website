// Dependencies
import React, { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";
// Components
import GoBack from "../../utils/goback";
import GoTop from "../../components/goTop";
import Footer from "./components/Footer";
import EachProject from "./components/EachProject";
// Functions
import { getProjectInfos } from "../../functions/getProjectInfos";

const Projects = ({ setScreen }) => {
  const [showingProject, setShowingProject] = useState("");
  const { t } = useTranslation();
  const projectInfo = getProjectInfos(t);

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
      <div className="text-white relative  flex items-center py-32 m:py-0 m:pb-8 px-16 m:px-6 justify-center">
        <div className="w-11/12 m:w-full relative flex m:flex-col-reverse gap-24">
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
                disabled={item.disabled}
              />
            ))}
          </div>
          <div
            id="image"
            className={`${
              showingProject ? "opacity-100" : "opacity-0 m:opacity-100"
            } duration-300 bg-gray-100 m:mb-24 rounded-lg w-full h-full mt-24 m:mt-0 sticky m:relative top-1/2 -translate-y-1/2 m:top-44 m:translate-y-0`}
          >
            <img
              className="w-full h-auto object-cover rounded-lg shadow-[0px_0px_20px_#ffff]"
              src={showingProject}
            />
          </div>
        </div>
      </div>
      <Footer t={t} setScreen={setScreen} />
      <GoBack width="75" height="75" setScreen={setScreen} />
      <GoTop />
    </m.div>
  );
};

export default Projects;
