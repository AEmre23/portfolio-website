import { motion as m } from "framer-motion";
import React from "react";
import { skillsObject } from "../data/skillsObject";

const Skills = () => {
  return (
    <>
      {skillsObject.map((item) => (
        <m.div
          key={item.name}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 800,
            damping: 15,
          }}
          className="flex flex-col p-2 rounded-lg w-24 h-20 items-center justify-between font-semibold"
        >
          <div>{item.svg}</div>
          <div>{item.name}</div>
        </m.div>
      ))}
    </>
  );
};

export default Skills;
