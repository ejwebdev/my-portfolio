import { useState, useEffect } from "react";
import navLogo from "/my-logo.png";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github-nav.svg";
import "./header.css";

function Header() {
    // Scroll-based Background Change
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const refreshPage = () => {
        window.location.href = "";
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Event Listener
    const links = (id, event) => {
        event.preventDefault();
        setIsMenuOpen(false);
        smoothScroll(id);
    };

    const facebookLink = () => {
        window.open("https://web.facebook.com/EJsison25", "_blank");
    };
    const linkedinLink = () => {
        window.open("https://www.linkedin.com/in/ejwebdev/", "_blank");
    };
    const githubLink = () => {
        window.open("https://github.com/ejwebdev", "_blank");
    };

    return (
        <header
            className={`header ${
                isScrolled
                    ? "bg-black bg-opacity-80 backdrop-blur-md"
                    : "bg-transparent"
            }`}
        >
            <nav className="nav">
                <img
                    src={navLogo}
                    alt="Enrico Jay Logo"
                    onClick={refreshPage}
                />
                <ul className={isMenuOpen ? "left-0" : "-left-[200%]"}>
                    <li>
                        <a href="#home" onClick={(e) => links("home", e)}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            onClick={(e) => links("projects", e)}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={(e) => links("about", e)}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => links("contact", e)}>
                            Contact
                        </a>
                    </li>
                    <li className="header-socials">
                        <img
                            src={facebook}
                            alt="Enrico Jay Facebook"
                            draggable="false"
                            rel="noopener noreferrer"
                            onClick={facebookLink}
                        />
                        <img
                            src={linkedin}
                            alt="Enrico Jay LinkedIn"
                            draggable="false"
                            rel="noopener noreferrer"
                            onClick={linkedinLink}
                        />
                        <img
                            src={github}
                            alt="Enrico Jay GitHub"
                            draggable="false"
                            rel="noopener noreferrer"
                            onClick={githubLink}
                        />
                    </li>
                </ul>
                <div>
                    <img
                        src={facebook}
                        alt="Enrico Jay Facebook"
                        draggable="false"
                        rel="noopener noreferrer"
                        onClick={facebookLink}
                    />
                    <img
                        src={linkedin}
                        alt="Enrico Jay LinkedIn"
                        draggable="false"
                        rel="noopener noreferrer"
                        onClick={linkedinLink}
                    />
                    <img
                        src={github}
                        alt="Enrico Jay GitHub"
                        draggable="false"
                        rel="noopener noreferrer"
                        onClick={githubLink}
                    />
                </div>
                <span className="material-symbols-rounded" onClick={toggleMenu}>
                    {isMenuOpen ? "close" : "segment"}
                </span>
            </nav>
        </header>
    );
}

export default Header;
