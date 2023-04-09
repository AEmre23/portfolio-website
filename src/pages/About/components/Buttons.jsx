import { motion as m } from "framer-motion";
import React from "react";

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

export default Buttons;
