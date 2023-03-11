import React from "react";

const ToolTip = ({ children, text }) => {
    return (
        <div className="relative group">
            <span className="scale-0 bg-secondaryAccentLight dark:bg-secondaryAccentDark text-secondaryLight dark:text-secondaryDark py-1 px-4 rounded-md absolute z-10 top-1/2 -translate-y-1/2 left-[140%] after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:-left-1 after:bg-secondaryAccentLight dark:after:bg-secondaryAccentDark after:w-4 after:h-4 after:rotate-45 group-hover:scale-100 duration-100 max-w-[20rem] text-sm min-w-[11rem]">
                {text}
            </span>
            {children}
        </div>
    );
};

export default ToolTip;
