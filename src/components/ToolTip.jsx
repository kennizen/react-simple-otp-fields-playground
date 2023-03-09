import React from "react";

const ToolTip = ({ children, text }) => {
    return (
        <div
            className={`relative after:absolute ${text} after:top-1/2 after:-right-16 after:-mt-[5px] after:bg-red-400 after:py-1 after:px-2`}
        >
            <span className="">{text}</span>
            {children}
        </div>
    );
};

export default ToolTip;
