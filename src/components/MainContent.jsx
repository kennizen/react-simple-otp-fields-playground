import React from "react";
import ColorSchemeToggle from "./ColorSchemeToggle";

const MainContent = () => {
    return (
        <div className="flex-1 h-full bg-primaryLight dark:bg-primaryDark transition-colors duration-200">
            <div className="w-full p-4 flex items-center justify-end">
                <ColorSchemeToggle />
            </div>
        </div>
    );
};

export default MainContent;
