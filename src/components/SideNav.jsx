import React from "react";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import IconButton from "./IconButton";
import CustomField from "./CustomField";
import { useOtpStateContext } from "../pages/Home";

const SideNav = () => {
    // hooks
    const { otpState, setOtpState } = useOtpStateContext();

    // functions
    function handleOnChange(e) {
        setOtpState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <aside className="h-full w-80 bg-secondaryLight dark:bg-secondaryDark transition-colors duration-200 drop-shadow-sm">
            <div className="w-full flex items-center justify-end p-2">
                <IconButton>
                    <MenuIcon className="fill-secondaryAccentLight dark:fill-secondaryAccentDark transition-colors duration-200" />
                </IconButton>
            </div>
            <div className="flex px-8 py-4 flex-col gap-y-24">
                <CustomField
                    inputType="number"
                    label="Length"
                    tooltip="Determines the total number of input fields. For this demo purpose it is capped at a max of 6 fields."
                    value={otpState.length}
                    onChange={handleOnChange}
                />
                <CustomField
                    inputType="number"
                    label="Gap"
                    tooltip="Space between the input fields, if a seperator is provided the spacing for the seperator is also considered. For this demo purpose it is capped at 50 units."
                    value={otpState.gap}
                    onChange={handleOnChange}
                />
                <CustomField
                    inputType="text"
                    label="Seperator"
                    tooltip="A seperator between the input fields. For this demo it is limited to only string values but it accepts any ReactNode."
                    value={otpState.seperator}
                    onChange={handleOnChange}
                />
            </div>
        </aside>
    );
};

export default SideNav;
