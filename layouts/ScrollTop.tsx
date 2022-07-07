import React from "react";

export const ScrollTop = () => {
  const scrollToTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button onClick={scrollToTop} className="scroll_top">
      <img src="images/left.png" style={{ borderRadius: "50%" }} alt="" />
    </button>
  );
};
