import { createContext, useCallback, useContext, useState } from "react";

const Theme = createContext(null);

export const useThemeContext = () => {
    return useContext(Theme);
};

const ThemeProvider = ({ children }) => {
    const [colorMode, setColorMode] = useState("light");

    const handleSetColorMode = useCallback(() => {
        setColorMode((prev) => (prev === "light" ? "dark" : prev));
    }, []);

    return <Theme.Provider value={{ colorMode, handleSetColorMode }}>{children}</Theme.Provider>;
};

export default ThemeProvider;
