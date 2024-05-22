import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function IntroSection() {
    const {theme} =useContext(ThemeContext)
    return (
        <div className="intro-section">
            <img src={theme == "light" ? "LogoLight.png" : "LogoDark.png"} alt="GilaLogo"></img>
            <h1>Ignacio's Challenge</h1>
        </div>
    );
}

export default IntroSection;
