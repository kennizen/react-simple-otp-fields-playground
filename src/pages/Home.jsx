import { createContext, useContext, useState } from "react";
import MainContent from "../components/MainContent";
import SideNav from "../components/SideNav";
import { useThemeContext } from "../providers/ThemeProvider";

const OtpStateContext = createContext({
    otpState: { length: 5, gap: 8, seperator: "", otp: [] },
    setOtpState: () => {},
});

export function useOtpStateContext() {
    return useContext(OtpStateContext);
}

const Home = () => {
    // hooks
    const { colorMode } = useThemeContext();

    // states
    const [otpState, setOtpState] = useState({
        length: 5,
        gap: 8,
        seperator: "",
        otp: [],
    });

    console.log("Otp state", otpState);

    return (
        <OtpStateContext.Provider value={{ otpState, setOtpState }}>
            <section className={`h-screen overflow-auto flex ${colorMode}`}>
                <SideNav />
                <MainContent />
            </section>
        </OtpStateContext.Provider>
    );
};

export default Home;
