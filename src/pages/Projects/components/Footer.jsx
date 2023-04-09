import React from "react";

function Footer(props) {
  return (
    <div className="w-screen text-white text-center space-y-4 pb-12 justify-center flex flex-col items-center gap-12">
      <div className="font-bold text-xl m:px-4 m:leading-relaxed m:pt-8">
        {props.t("Project-6")}{" "}
        <a
          className="underline"
          target="_blank"
          href="https://github.com/AEmre23?tab=repositories"
        >
          {props.t("Project-7")}
        </a>
      </div>
      <div
        onClick={() => props.setScreen("contact")}
        className="hover:bg-gray-100 font-bold bg-neutral-900 duration-300 hover:text-black text-xl cursor-pointer p-3 border-2 border-white text-yellow-50 rounded-lg w-64"
      >
        {props.t("Project-8")}
      </div>
    </div>
  );
}

export default Footer;
