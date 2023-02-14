import React, { useState, useEffect } from "react";

const ArrowDown = () => {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    handleScroll()
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showArrow]);

  console.log("aaa", document.body.offsetHeight)
  
  const handleScroll = () => {
    if (window.scrollY + window.innerHeight < document.body.offsetHeight - 200) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  return (
    <div
      className="transition-all w-12 h-12 rounded-full fixed bottom-3 left-3 m:right-3 m:left-[unset] flex items-center justify-center"
      onClick={() => !showArrow ? document.documentElement.scrollTop = 0 : null }
      style={{ transform: showArrow ? "" : "rotate(180deg)", cursor: showArrow ? "" : "pointer", background: showArrow ? "" : "gray"}}>
      <i className="fas fa-arrow-down animate-pulse" style={{ fontSize: "36px" }} />
    </div>
  );
};

export default ArrowDown;