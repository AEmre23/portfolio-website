import React from "react";
import pp from "../../../assets/pp.png";
import { motion as m } from "framer-motion";

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

export default Introduction;
