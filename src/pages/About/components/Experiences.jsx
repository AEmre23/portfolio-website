import React from "react";
import { motion as m } from "framer-motion";
import Circle from "../../../utils/circle";

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

export default Experiences;
