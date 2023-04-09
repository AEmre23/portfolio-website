import React from "react";
import { motion as m } from "framer-motion";
import Skills from "../../../components/AboutSkills";

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

export default Abilities;
