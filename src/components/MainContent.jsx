import React from "react";
import { OtpFields } from "react-simple-otp-fields";
import { useOtpStateContext } from "../pages/Home";
import ColorSchemeToggle from "./ColorSchemeToggle";

const MainContent = () => {
    const { otpState } = useOtpStateContext();

    return (
        <main className="flex-1 h-full bg-primaryLight dark:bg-primaryDark transition-colors duration-200">
            <section className="w-full p-4 flex items-center justify-end">
                <p className="text-center flex-1 font-bold text-2xl dark:text-secondaryAccentDark transition-colors duration-200 ml-24">
                    React Simple OTP Fields
                </p>
                <ColorSchemeToggle />
            </section>
            <section className="flex items-center justify-center h-28 mt-28">
                <OtpFields
                    length={otpState.length > 6 ? 6 : otpState.length}
                    onChange={() => {}}
                    otp={otpState.otp}
                    gap={otpState.gap >= 50 ? "50px" : otpState.gap + "px"}
                    seperator={otpState.seperator}
                />
            </section>
            <section></section>
        </main>
    );
};

export default MainContent;
