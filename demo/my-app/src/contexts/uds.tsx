'use client'
/// 1. link the mode with the config name
/// 2. context to change the theme and the scale
/// 3. the provider should udpate
import { clsx } from 'clsx';
import { ReactNode, createContext, useContext, useState } from "react";

export const colorModes = ["light", "dark"];
export const scaleModes = [
    "medium",
    "xSmall",
    "small",
    "large",
    "xLarge",
    "xxLarge",
    "xxxLarge",
];
const DEFAULT_COLOR_MODE = "light";
const DEFAULT_SCALE_MODE = "medium";

const modes: string[] = colorModes.concat(scaleModes);

export const ThemeContext = createContext({
    theme: DEFAULT_COLOR_MODE,
    scale: DEFAULT_SCALE_MODE,
    toggleTheme: () => { },
    setScale: (val: string) => { },
});

interface ThemeProvierProps {
    children?: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProvierProps) => {
    const [theme, setTheme] = useState(DEFAULT_COLOR_MODE); // You can set the default theme here
    const [scale, setScale] = useState(DEFAULT_SCALE_MODE);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, scale, setScale }}>
            <div className={clsx(scale !== DEFAULT_SCALE_MODE ? scale : null, theme !== DEFAULT_COLOR_MODE ? theme : null)}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
