import React from "react";
import { OtpFields } from "react-simple-otp-fields";
import { useOtpStateContext } from "../pages/Home";
import ColorSchemeToggle from "./ColorSchemeToggle";
import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";

const MainContent = () => {
    const { otpState } = useOtpStateContext();

    return (
        <main className="flex-1 h-full bg-primaryLight dark:bg-primaryDark transition-colors duration-200 overflow-auto">
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
            <section className="flex items-start w-full gap-x-8 py-4 px-8 mt-28">
                <div className="flex flex-col flex-1 flex-shrink-0 gap-y-2">
                    <p className="text-xl font-semibold dark:text-secondaryAccentDark">Themes</p>
                    <div className="min-w-[10rem] dark:bg-secondaryDark bg-secondaryLight max-h-[25rem] flex-1 overflow-auto rounded-md p-4 dark:text-secondaryAccentDark">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In perferendis
                        libero voluptates eligendi consequatur tenetur exercitationem quae
                        repudiandae. Architecto asperiores eum, doloremque molestiae laborum, unde
                        quam dolore non vero veritatis cumque inventore nisi dignissimos.
                        Perspiciatis, repellendus aliquid nisi commodi qui vel illum amet a cumque,
                        repudiandae corrupti sint autem, aspernatur delectus labore quidem nesciunt
                        consequuntur mollitia necessitatibus veniam minus architecto ut impedit.
                        Expedita ducimus, dolorem sint odit temporibus voluptatibus rerum, ea cumque
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-y-2">
                    <p className="text-xl font-semibold dark:text-secondaryAccentDark">
                        Container styles
                    </p>
                    <div className="min-w-[10rem] dark:bg-secondaryDark bg-secondaryLight max-h-[25rem] flex-1 overflow-auto rounded-md dark:text-secondaryAccentDark">
                        <CodeMirror
                            value="console.log('hello world!');"
                            height="25rem"
                            extensions={[css()]}
                            onChange={() => {}}
                            theme="dark"
                        />
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-y-2">
                    <p className="text-xl font-semibold dark:text-secondaryAccentDark">
                        Input Styles
                    </p>
                    <div className="min-w-[10rem] dark:bg-secondaryDark bg-secondaryLight max-h-[25rem] flex-1 overflow-auto rounded-md dark:text-secondaryAccentDark">
                        <CodeMirror
                            value="console.log('hello world!');"
                            height="25rem"
                            extensions={[css()]}
                            onChange={() => {}}
                            theme="dark"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent;
