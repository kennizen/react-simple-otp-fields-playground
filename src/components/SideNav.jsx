import React from "react";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as HelpIcon } from "../assets/icons/help_outline.svg";
import IconButton from "./IconButton";
import ToolTip from "./ToolTip";

const SideNav = () => {
    return (
        <aside className="h-full w-96 bg-secondaryLight dark:bg-slate-800">
            <div className="w-full flex items-center justify-end p-2">
                <IconButton>
                    <MenuIcon className="fill-secondaryAccentLight" />
                </IconButton>
            </div>
            <div className="h-full flex px-8 py-4">
                <div className="flex flex-col gap-y-2 w-full">
                    <div className="flex items-center gap-x-2">
                        <label htmlFor="length" className="text-lg font-bold">
                            Length
                        </label>
                        <ToolTip text={"after:content-['super']"}>
                            <HelpIcon />
                        </ToolTip>
                    </div>
                    <input
                        type="number"
                        name="length"
                        id="length"
                        className="w-full p-4 border-4 rounded-lg border-primaryAccentLight focus:outline-none focus:border-secondaryAccentLight hover:border-secondaryAccentLight font-bold"
                    />
                </div>
            </div>
        </aside>
    );
};

export default SideNav;
