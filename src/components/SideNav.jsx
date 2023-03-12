import React from "react";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import IconButton from "./IconButton";
import CustomField from "./CustomField";

const SideNav = () => {
    return (
        <aside className="h-full w-96 bg-secondaryLight dark:bg-secondaryDark transition-colors duration-200 drop-shadow-sm">
            <div className="w-full flex items-center justify-end p-2">
                <IconButton>
                    <MenuIcon className="fill-secondaryAccentLight dark:fill-secondaryAccentDark transition-colors duration-200" />
                </IconButton>
            </div>
            <div className="flex px-8 py-4 flex-col gap-y-24">
                <CustomField
                    inputType="number"
                    label="Length"
                    tooltip="Determines the total number of input fields."
                />
                <CustomField
                    inputType="text"
                    label="Gap"
                    tooltip="Space between the input fields, if a seperator is provided the spacing for the seperator is also considered."
                />
                <CustomField
                    inputType="text"
                    label="Seperator"
                    tooltip="A seperator between the input fields."
                />
            </div>
        </aside>
    );
};

export default SideNav;
