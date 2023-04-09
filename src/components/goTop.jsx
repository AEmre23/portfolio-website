import React, { useState, useEffect } from "react";

const GoTop = () => {
  const [canGoTop, setCanGoTop] = useState(false);
  useEffect(() => {
    handleScroll();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [canGoTop]);

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight <
      document.body.offsetHeight - 200
    ) {
      setCanGoTop(true);
    } else {
      setCanGoTop(false);
    }
  };

  return (
    <div
      className="transition-all w-12 h-12 rounded-full fixed bottom-3 left-3 m:right-3 m:left-[unset] flex items-center justify-center"
      onClick={() =>
        !canGoTop ? (document.documentElement.scrollTop = 0) : null
      }
      style={{
        transform: canGoTop ? "" : "rotate(180deg)",
        cursor: canGoTop ? "" : "pointer",
        background: canGoTop ? "" : "gray",
      }}
    >
      <i
        className="fas fa-arrow-down animate-pulse"
        style={{ fontSize: "36px" }}
      />
    </div>
  );
};

export default GoTop;
