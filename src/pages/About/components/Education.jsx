import React from "react";
import { motion as m } from "framer-motion";
import Circle from "../../../utils/circle";

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

export default Education;
