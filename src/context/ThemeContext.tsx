import { ReactNode, createContext, useState } from "react";

interface ThemeContextProps {
    theme: "light" | "dark";
    toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps);

interface Props {
    children: ReactNode;
}
export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}