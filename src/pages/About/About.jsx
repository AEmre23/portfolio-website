// Dependencies
import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
// Components
import GoBack from "../../utils/goback";
import GoTop from "../../components/goTop";
import Introduction from "./components/Introduction";
import Experiences from "./components/Experiences";
import Abilities from "./components/Abilities";
import Education from "./components/Education";
import Buttons from "./components/Buttons";
// Functions
import { calculateRelativeDate } from "../../functions/calculateRelativeDate";

const About = ({ setScreen }) => {
  const { t } = useTranslation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const isInViewFor1 = useInView(ref1, { once: true });
  const isInViewFor2 = useInView(ref2, { once: true });
  const isInViewFor3 = useInView(ref3, { once: true });
  const isInViewFor4 = useInView(ref4, { once: true });
  const isInViewFor5 = useInView(ref5, { once: true });
  const language = i18next.language; // tr, en

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 1, opacity: { delay: 1 } }}
      className="text-white relative py-12 m:pt-36 min-h-screen flex justify-center items-center overflow-clip"
    >
      <m.div className="w-8/12 max-w-[1025px] m:w-11/12 space-y-12">
        <Introduction
          t={t}
          ref1={ref1}
          isInViewFor1={isInViewFor1}
          durationText={calculateRelativeDate({
            day: 1,
            month: "Jan",
            year: 2022,
            language,
          })}
        />
        <Experiences t={t} ref2={ref2} isInViewFor2={isInViewFor2} />
        <Abilities t={t} ref3={ref3} isInViewFor3={isInViewFor3} />
        <Education t={t} ref4={ref4} isInViewFor4={isInViewFor4} />
        <Buttons
          t={t}
          ref5={ref5}
          isInViewFor5={isInViewFor5}
          setScreen={setScreen}
        />
      </m.div>
      <GoBack width="75" height="75" setScreen={setScreen} />
      <GoTop />
    </m.div>
  );
};

export default About;
