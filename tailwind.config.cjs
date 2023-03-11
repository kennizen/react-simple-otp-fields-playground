/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem",
        },
        extend: {
            colors: {
                primaryDark: "rgb(34, 40, 49)",
                secondaryDark: "rgb(57, 62, 70)",
                primaryAccentDark: "rgb(0, 173, 181)",
                secondaryAccentDark: "rgb(238, 238, 238)",
                primaryLight: "rgb(249, 247, 247)",
                secondaryLight: "rgb(219, 226, 239)",
                primaryAccentLight: "rgb(63, 114, 175)",
                secondaryAccentLight: "rgb(17, 45, 78)",
            },
            dropShadow: {
                light: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
