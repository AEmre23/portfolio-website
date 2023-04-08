// Dependencies
import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
// Components
import GoBack from "../utilities/goback";
import ArrowDown from "../components/goTop";
// Assets
import Circle from "../utilities/circle";
import Skills from "../components/skills";
import pp from "../assets/pp.png";
// Functions
import { calculateRelativeDate } from "../functions/calculateRelativeDate";

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
      exit={{ x: "-100vw" }}
      transition={{ duration: 1 }}
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
      <div className="text-yellow-500 fixed top-8 right-8 cursor-pointer shake">
        <GoBack width="75" height="75" setScreen={setScreen} />
      </div>
      <ArrowDown />
    </m.div>
  );
};

function Introduction(props) {
  return (
    <m.div
      style={{
        transform: props.isInViewFor1 ? "none" : "translateY(100px)",
        opacity: props.isInViewFor1 ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={props.ref1}
      className="rounded-3xl flex m:flex-col justify-evenly duration-500 gap-12 items-center border-4 border-[#abd1c6] bg-neutral-900 p-12 m:px-4 "
    >
      {/* hero */}
      <img
        className="w-44 h-44 rounded-full shadow-[0px_0px_20px_#ffff]"
        src={pp}
        alt="profile-pic"
      />
      <div className="space-y-3 m:text-center">
        <div className="text-3xl text-yellow-100">{props.t("About-1-1")}</div>
        <div className="text-4xl text-yellow-300">{props.t("About-1-2")}</div>
        {/* <div className="text-2xl">{t("About-1-3")}</div> */}
        <div className="text-2xl">{props.durationText}</div>
      </div>
    </m.div>
  );
}

function Experiences(props) {
  return (
    <m.div
      style={{
        transform: props.isInViewFor2 ? "none" : "translateY(100px)",
        opacity: props.isInViewFor2 ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={props.ref2}
      className="rounded-3xl m:shadow-md m:shadow-yellow-300 flex m:flex-col gap-32 m:gap-8 items-center  bg-neutral-900 p-12 m:pb-20 m:p-6 "
    >
      {/*experience */}
      <div className="flex flex-col gap-8 items-center m:pt-6">
        <i className="fa-solid fa-suitcase fa-2xl text-yellow-50"></i>
        <div className="text-xl w-36 text-center font-bold text-yellow-50">
          {props.t("About-2-1")}
        </div>
      </div>

      <div className="space-y-3 flex flex-col self-start">
        <div className="flex gap-4 items-center">
          <Circle classname="text-yellow-500 scale-110 bg-yellow-500 rounded-full" />
          <div className="relative">
            <a
              href="https://www.linkedin.com/company/tesodev/"
              target="_blank"
              className=""
            >
              <span className="text-xl hover:underline text-yellow-300">
                Tesodev
              </span>
            </a>
            <div className="absolute -bottom-6 text-sm whitespace-nowrap">
              Frontend Developer{" "}
              <span className="font-bold text-yellow-300">|</span>{" "}
              {props.t("About-2-2")} 2022 - {props.t("About-2-4")}
            </div>
          </div>
        </div>

        <div className="h-16 ml-[9px] border-l-2 border-l-yellow-100" />

        <div className="flex gap-4 items-center">
          <Circle />
          <div className="relative">
            <a
              href="https://www.linkedin.com/company/likeacat/"
              target="_blank"
              className=""
            >
              <span className="text-yellow-100 hover:underline">grayCat</span>
            </a>
            <div className="absolute -bottom-6 text-xs whitespace-nowrap">
              Frontend Developer{" "}
              <span className="font-bold text-yellow-300">|</span>{" "}
              {props.t("About-2-3")} 2022 - {props.t("About-2-2")} 2022
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}

function Abilities(props) {
  return (
    <m.div
      style={{
        transform: props.isInViewFor3 ? "none" : "translateY(100px)",
        opacity: props.isInViewFor3 ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={props.ref3}
      className="rounded-3xl flex flex-col gap-12 m:gap-8 items-center justify-center border-4 border-[#C1AEFC] bg-neutral-900 p-12 m:p-4 "
    >
      <div className="flex flex-col gap-8 items-center m:pt-6">
        <i className="fa-solid fa-layer-group fa-2xl text-yellow-50"></i>
        <div className="text-xl w-36 text-center font-bold text-yellow-50">
          {props.t("About-3-1")}
        </div>
      </div>

      <div className="flex flex-wrap gap-y-8 items-center justify-center">
        <Skills />
      </div>
    </m.div>
  );
}

function Education(props) {
  return (
    <m.div
      style={{
        transform: props.isInViewFor4 ? "none" : "translateY(100px)",
        opacity: props.isInViewFor4 ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={props.ref4}
      className="rounded-3xl flex m:flex-col gap-32 m:gap-8 items-center m:shadow-md m:shadow-yellow-500 bg-neutral-900 p-12 pb-16 m:pb-20 m:p-6 "
    >
      {/* education */}
      <div className="flex flex-col gap-8 items-center m:pt-6">
        <i className="fa-solid fa-school fa-2xl text-yellow-50"></i>
        <div className="text-xl w-36 text-center font-bold text-yellow-50">
          {props.t("About-4-1")}
        </div>
      </div>
      <div className="space-y-3 flex flex-col self-start">
        <div className="flex gap-4 items-center">
          <Circle classname="text-yellow-200 scale-110" />
          <div className="relative">
            <div className="text-yellow-200">{props.t("About-4-2")}</div>
            <div className="absolute -bottom-6 text-xs whitespace-nowrap">
              {props.t("About-4-3")}{" "}
              <span className="font-bold text-yellow-300">|</span> 2016 - 2021{" "}
            </div>
          </div>
        </div>

        <div className="h-16 ml-[9px] border-l-2 border-l-yellow-50" />

        <div className="flex gap-4 items-center">
          <Circle classname="text-yellow-100 scale-90" />
          <div className="relative">
            <div className="text-yellow-100">{props.t("About-4-4")}</div>
            <div className="absolute -bottom-6 text-xs whitespace-nowrap">
              {props.t("About-4-5")}{" "}
              <span className="font-bold text-yellow-300">|</span> 2018 - 2020{" "}
            </div>
          </div>
        </div>

        <div className="h-16 ml-[9px] border-l-2 border-l-yellow-50" />

        <div className="flex gap-4 items-center">
          <Circle classname="text-yellow-50 scale-75" />
          <div className="relative">
            <div className="text-xs text-yellow-50">{props.t("About-4-6")}</div>
            <div className="absolute -bottom-6 text-[10px] whitespace-nowrap">
              2012 - 2016
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}

function Buttons(props) {
  return (
    <m.div
      style={{
        transform: props.isInViewFor5 ? "none" : "translateY(100px)",
        opacity: props.isInViewFor5 ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={props.ref5}
      className="flex gap-24 m:gap-4 py-6 justify-center items-center"
    >
      <button
        onClick={() => props.setScreen("contact")}
        className="hover:bg-gray-50 bg-neutral-900 duration-300 font-bold hover:text-black text-base cursor-pointer p-2 border-2 border-white text-yellow-50 rounded-lg w-44"
      >
        {props.t("About-5-1")}
      </button>
      <button
        onClick={() => props.setScreen("projects")}
        className="hover:bg-gray-50 bg-neutral-900 duration-300 font-bold hover:text-black text-base cursor-pointer p-2 border-2 border-white text-yellow-50 rounded-lg w-44"
      >
        {props.t("About-5-2")}
      </button>
    </m.div>
  );
}

export default About;
