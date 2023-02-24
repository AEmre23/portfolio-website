// Dependencies
import { useState, useLayoutEffect } from "react";
import { motion as m } from "framer-motion";
// Components
import arrow from "../assets/arrow.png";
import SwitchLang from "../utilities/switchLang";

const Welcome = ({ setScreen }) => {
  const [animateTitle, setAnimateTitle] = useState(true);

  useLayoutEffect(() => {
    if (localStorage.getItem("lang") === "tr") setAnimateTitle(false);
  }, []);

  return (
    <m.div
      key={screen}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ y: "-100vh" }}
      className="fixed flex-col gap-12 cursor-default font-poppins text-white font-semibold h-screen w-screen flex justify-center items-center"
    >
      <div className="h-[130px] m:h-[80px] overflow-hidden relative">
        <div
          className={`${
            animateTitle ? "top-0" : "-top-[130px] m:-top-[90px]"
          } relative text-8xl m:text-[55px] text-center duration-300`}
        >
          <div className="animate-text bg-gradient-to-r from-teal-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            WELCOME
          </div>
          <div className="mt-8 animate-text bg-gradient-to-r from-teal-500 via-yellow-500 to-orange-500 bg-clip-text p-3 text-transparent">
            HOŞGELDİNİZ
          </div>
        </div>
      </div>
      <img
        onClick={() => setScreen("hero")}
        className="w-16 h-16 m:w-12 m:h-12 animate-bounce cursor-pointer duration-300 hover:drop-shadow-[3px_1px_5px_#ffff]"
        src={arrow}
        alt="arrow-icon"
      />
      <SwitchLang change={animateTitle} setChange={setAnimateTitle} />
    </m.div>
  );
};

export default Welcome;
