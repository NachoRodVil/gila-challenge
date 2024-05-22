import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import IntroSection from "./IntroSection/IntroSection";
import DataFetcher from "./DataFetcher/DataFetcher";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

function Home() {
    const {theme} = useContext(ThemeContext)
    return (
        <div className="app" data-theme={theme}>
            <ThemeSwitcher/>
            <IntroSection />
            <DataFetcher />
        </div>
    );
}

export default Home;
