import { useEffect } from "react";
import Home from "./pages/Home";
import { useThemeContext } from "./providers/ThemeProvider";
import { useStore } from "./hooks/useStore";

function App() {
    // hooks
    const { handleSetColorMode } = useThemeContext();
    const { getValueFromStore } = useStore();

    // lifecycles
    useEffect(() => {
        const value = getValueFromStore("theme");
        if (value === null) return;
        handleSetColorMode(value);
    }, []);

    return <Home />;
}

export default App;
