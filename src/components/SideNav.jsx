import React from "react";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as HelpIcon } from "../assets/icons/help_outline.svg";
import IconButton from "./IconButton";
import ToolTip from "./ToolTip";

const SideNav = () => {
    return (
        <aside className="h-full w-96 bg-secondaryLight dark:bg-secondaryDark transition-colors duration-200 drop-shadow-sm">
            <div className="w-full flex items-center justify-end p-2">
                <IconButton>
                    <MenuIcon className="fill-secondaryAccentLight dark:fill-secondaryAccentDark transition-colors duration-200" />
                </IconButton>
            </div>
            <div className="flex px-8 py-4 flex-col gap-y-24">
                <div className="flex flex-col gap-y-2 w-full">
                    <div className="flex items-center gap-x-2">
                        <label
                            htmlFor="length"
                            className="text-lg font-bold dark:text-secondaryAccentDark transition-colors duration-200"
                        >
                            Length
                        </label>
                        <ToolTip text="Determines the total number of input fields.">
                            <HelpIcon className="dark:fill-secondaryAccentDark transition-colors duration-200" />
                        </ToolTip>
                    </div>
                    <input
                        type="number"
                        name="length"
                        id="length"
                        className="w-full p-4 border-4 rounded-lg border-primaryAccentLight dark:border-primaryAccentDark focus:outline-none focus:border-secondaryAccentLight dark:focus:border-secondaryAccentDark hover:border-secondaryAccentLight dark:hover:border-secondaryAccentDark font-bold dark:bg-primaryDark bg-primaryLight dark:text-secondaryAccentDark transition-colors duration-200"
                    />
                </div>
                <div className="flex flex-col gap-y-2 w-full">
                    <div className="flex items-center gap-x-2">
                        <label
                            htmlFor="gap"
                            className="text-lg font-bold dark:text-secondaryAccentDark transition-colors duration-200"
                        >
                            Gap
                        </label>
                        <ToolTip text="Space between the input fields, if a seperator is provided the spacing for the seperator is also considered.">
                            <HelpIcon className="dark:fill-secondaryAccentDark transition-colors duration-200" />
                        </ToolTip>
                    </div>
                    <input
                        type="text"
                        name="length"
                        id="gap"
                        className="w-full p-4 border-4 rounded-lg border-primaryAccentLight dark:border-primaryAccentDark focus:outline-none focus:border-secondaryAccentLight dark:focus:border-secondaryAccentDark hover:border-secondaryAccentLight dark:hover:border-secondaryAccentDark font-bold dark:bg-primaryDark bg-primaryLight dark:text-secondaryAccentDark transition-colors duration-200"
                    />
                </div>
                <div className="flex flex-col gap-y-2 w-full">
                    <div className="flex items-center gap-x-2">
                        <label
                            htmlFor="seperator"
                            className="text-lg font-bold dark:text-secondaryAccentDark transition-colors duration-200"
                        >
                            Seperator
                        </label>
                        <ToolTip text="A seperator between the input fields.">
                            <HelpIcon className="dark:fill-secondaryAccentDark transition-colors duration-200" />
                        </ToolTip>
                    </div>
                    <input
                        type="text"
                        name="length"
                        id="seperator"
                        className="w-full p-4 border-4 rounded-lg border-primaryAccentLight dark:border-primaryAccentDark focus:outline-none focus:border-secondaryAccentLight dark:focus:border-secondaryAccentDark hover:border-secondaryAccentLight dark:hover:border-secondaryAccentDark font-bold dark:bg-primaryDark bg-primaryLight dark:text-secondaryAccentDark transition-colors duration-200"
                    />
                </div>
            </div>
        </aside>
    );
};

export default SideNav;
