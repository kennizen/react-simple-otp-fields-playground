import React from "react";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import IconButton from "./IconButton";

const SideNav = () => {
    return (
        <aside className="h-full w-96 bg-slate-100 dark:bg-slate-800">
            <div className="w-full flex items-center justify-end p-2">
                <IconButton>
                    <MenuIcon className="fill-slate-800" />
                </IconButton>
            </div>
            <div className="h-full flex px-8 py-4">
                <div className="flex flex-col gap-y-2 w-full">
                    <label htmlFor="length" className="text-lg">Length</label>
                    <input
                        type="number"
                        name="length"
                        id="length"
                        className="w-full p-4 border-4 rounded-lg border-slate-400 focus:outline-none focus:border-slate-500"
                    />
                </div>
            </div>
        </aside>
    );
};

export default SideNav;
