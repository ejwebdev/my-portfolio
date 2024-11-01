import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";
import navLogo from "/my-logo.png";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github-nav.svg";
import "./header.css";

function Header() {
    const ref = useRef();
    const inView = useInView(ref, { once: true });

    // Animation Variants
    const cntnrVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

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
            <motion.nav
                className="nav"
                ref={ref}
                variants={cntnrVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.img
                    src={navLogo}
                    alt="Enrico Jay Logo"
                    onClick={refreshPage}
                    variants={itemVariants}
                />
                <motion.ul
                    className={isMenuOpen ? "left-0" : "-left-[200%]"}
                    variants={itemVariants}
                >
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
                </motion.ul>
                <div>
                    <motion.img
                        src={facebook}
                        alt="Enrico Jay Facebook"
                        draggable="false"
                        rel="noopener noreferrer"
                        onClick={facebookLink}
                        variants={itemVariants}
                    />
                    <motion.img
                        src={linkedin}
                        alt="Enrico Jay LinkedIn"
                        draggable="false"
                        rel="noopener noreferrer"
                        onClick={linkedinLink}
                        variants={itemVariants}
                    />
                    <motion.img
                        src={github}
                        alt="Enrico Jay GitHub"
                        draggable="false"
                        rel="noopener noreferrer"
                        onClick={githubLink}
                        variants={itemVariants}
                    />
                </div>
                <motion.span
                    className="material-symbols-rounded"
                    onClick={toggleMenu}
                    variants={itemVariants}
                >
                    {isMenuOpen ? "close" : "segment"}
                </motion.span>
            </motion.nav>
        </header>
    );
}

export default Header;
