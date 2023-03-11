import { createContext, useCallback, useContext, useState } from "react";

const Theme = createContext({
    colorMode: "",
    handleSetColorMode: (mode) => {},
});

export const useThemeContext = () => {
    return useContext(Theme);
};

const ThemeProvider = ({ children }) => {
    const [colorMode, setColorMode] = useState("light");

    const handleSetColorMode = useCallback((mode) => {
        setColorMode(mode);
    }, []);

    return <Theme.Provider value={{ colorMode, handleSetColorMode }}>{children}</Theme.Provider>;
};

export default ThemeProvider;
