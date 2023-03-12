import React from "react";
import ToolTip from "./ToolTip";
import { ReactComponent as HelpIcon } from "../assets/icons/help_outline.svg";

const CustomField = ({ tooltip, label, inputType }) => {
    return (
        <div className="flex flex-col gap-y-2 w-full">
            <div className="flex items-center gap-x-2">
                <label
                    htmlFor={label}
                    className="text-lg font-bold dark:text-secondaryAccentDark transition-colors duration-200"
                >
                    {label}
                </label>
                <ToolTip text={tooltip}>
                    <HelpIcon className="dark:fill-secondaryAccentDark transition-colors duration-200" />
                </ToolTip>
            </div>
            <input
                type={inputType}
                name={label}
                id={label}
                className="w-full p-4 border-4 rounded-lg border-primaryAccentLight dark:border-primaryAccentDark focus:outline-none focus:border-secondaryAccentLight dark:focus:border-secondaryAccentDark hover:border-secondaryAccentLight dark:hover:border-secondaryAccentDark font-bold dark:bg-primaryDark bg-primaryLight dark:text-secondaryAccentDark transition-colors duration-200"
            />
        </div>
    );
};

export default CustomField;
