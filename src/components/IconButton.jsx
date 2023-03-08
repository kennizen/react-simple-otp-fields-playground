import React from "react";

const IconButton = ({ children, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="p-2 rounded-full hover:bg-slate-200 transition-colors duration-300"
        >
            {children}
        </div>
    );
};

export default IconButton;
