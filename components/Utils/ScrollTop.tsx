import React from "react";

export const ScrollTop = (): JSX.Element => {
    const onScrollToTop = () => {
        scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <button onClick={onScrollToTop} className="scroll_top">
            <img src="images/left.png" style={{ borderRadius: "50%" }} alt="" />
        </button>
    );
};
