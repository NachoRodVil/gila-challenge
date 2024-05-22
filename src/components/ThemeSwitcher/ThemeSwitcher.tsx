import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ThemeSwitcher() {
    const {theme, toggleTheme} =useContext(ThemeContext)
    return (
        <div className="theme-switcher">
            <button onClick={() => toggleTheme()}>{theme === "light" ? "Dark" : "Light"} Mode</button>
        </div>
    );
}

export default ThemeSwitcher;
