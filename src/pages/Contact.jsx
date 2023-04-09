// Dependencies
import React from "react";
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";
// Components
import GoBack from "../utils/goback";
// Data
import { contactObject } from "../data/contactObject";

const Contact = ({ setScreen }) => {
  const { t } = useTranslation();

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 1, opacity: { delay: 1 } }}
      className="text-white z-30 relative h-screen m:min-h-screen m:mt-6 w-screen flex flex-col gap-24 m:gap-20 justify-center items-center"
    >
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-yellow-500 to-orange-500 bg-clip-text py-2 text-transparent text-5xl font-black">
        {t("Contact-1")}
      </h1>
      <div className="hoverEffect flex flex-wrap gap-y-8 items-center justify-center">
        {contactObject.map((item, index) => (
          <GetContactSVG key={index} link={item.link}>
            {item.svg}
          </GetContactSVG>
        ))}
      </div>
      <div className="animate-border w-[50vw] m:w-[90vw] rounded-xl from-teal-500 via-red-500 to-yellow-500 bg-[length:400%_400%] p-0.5 bg-gradient-to-r">
        <span className="block px-5 rounded-xl py-3 font-bold text-center text-lg text-neutral-300 bg-neutral-900">
          {t("Contact-3")}
        </span>
      </div>
      <GoBack width="75" height="75" setScreen={setScreen} />
    </m.div>
  );
};

const GetContactSVG = ({ children, link, className }) => {
  return (
    <a href={link} target="_blank">
      <m.span
        whileHover={{ scale: 1.1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 600,
          damping: 10,
        }}
        className={`${className} hoverEffect flex justify-center items-center w-32`}
      >
        {children}
      </m.span>
    </a>
  );
};

export default Contact;
