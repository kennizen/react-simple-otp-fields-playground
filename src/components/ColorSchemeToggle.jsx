import React, { memo } from "react";
import { ReactComponent as DarkModeIcon } from "../assets/icons/dark_mode.svg";
import { ReactComponent as LightModeIcon } from "../assets/icons/light_mode.svg";
import { useThemeContext } from "../providers/ThemeProvider";
import { useStore } from "../hooks/useStore";

const ColorSchemeToggle = () => {
    // hooks
    const { colorMode, handleSetColorMode } = useThemeContext();
    const { setValueInStore } = useStore();

    // functions
    function handleColorMode(mode) {
        handleSetColorMode(mode);
        setValueInStore("theme", mode);
    }

    return (
        <div className="flex items-center gap-x-4 relative p-4">
            <div
                className={`${
                    colorMode === "light"
                        ? "bg-primaryDark rounded-tl-lg rounded-bl-lg -translate-x-2"
                        : "bg-primaryLight rounded-tr-lg rounded-br-lg translate-x-8"
                }   w-10 h-9 absolute transition-transform duration-200 ease-out`}
            ></div>

            <LightModeIcon
                onClick={() => handleColorMode("light")}
                className={`relative z-10 fill-primaryLight`}
            />

            <DarkModeIcon
                onClick={() => handleColorMode("dark")}
                className={`relative z-10 fill-primaryDark`}
            />
        </div>
    );
};

export default memo(ColorSchemeToggle);
