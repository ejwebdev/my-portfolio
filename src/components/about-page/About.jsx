import { motion, useAnimation } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/Observer.jsx";
import { useEffect } from "react";
import aboutImg from "../../assets/about-img.png";
import tailwindIcon from "../../assets/tailwind.svg";
import javascriptIcon from "../../assets/javascript.svg";
import bootstrapIcon from "../../assets/bootstrap.svg";
import reactIcon from "../../assets/react.svg";
import nodejsIcon from "../../assets/node.js.svg";
import gitIcon from "../../assets/git.svg";
import githubIcon from "../../assets/github.svg";
import firebaseIcon from "../../assets/firebase.svg";
import shopifyIcon from "../../assets/shopify.svg";
import canvaIcon from "../../assets/canva.svg";
import figmaIcon from "../../assets/figma.svg";
import resume from "../../assets/resume.pdf";
import "./about.css";

const aboutTech = [
    { tech: tailwindIcon, title: "Tailwind" },
    { tech: javascriptIcon, title: "JavaScript" },
    { tech: bootstrapIcon, title: "Bootstrap" },
    { tech: reactIcon, title: "React JS" },
    { tech: nodejsIcon, title: "Node.js" },
    { tech: gitIcon, title: "Git" },
    { tech: githubIcon, title: "GitHub" },
    { tech: firebaseIcon, title: "Firebase" },
    { tech: shopifyIcon, title: "Shopify" },
    { tech: canvaIcon, title: "Canva" },
    { tech: figmaIcon, title: "Figma" },
];

function About() {
    // Animation Controls
    const controls = useAnimation();
    const { ref, isVisible } = useIntersectionObserver(0.25);

    useEffect(() => {
        if (isVisible) {
            controls.start("visible");
        }
    }, [isVisible, controls]);

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
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    // Auto Download Resume
    const resumeClick = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Sison,EnricoJay_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="about" id="about" ref={ref}>
            <motion.div
                className="about-cntnr"
                variants={cntnrVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.img
                    src={aboutImg}
                    alt="Enrico Jay About Image"
                    draggable="false"
                    variants={itemVariants}
                />
                <div className="about-right">
                    <motion.h3 variants={itemVariants}>
                        <span className="material-symbols-rounded">
                            line_end
                        </span>
                        About Me
                    </motion.h3>
                    <motion.h2 variants={itemVariants}>Who Am I?</motion.h2>
                    <motion.p variants={itemVariants}>
                        I&apos;m <span>Enrico Jay Sison</span>, a fresh graduate
                        with two years of hands-on experience in web development
                        and design. Aside from programming, I enjoy going to the
                        gym and pursue my passion for music as a musician,
                        finding balance between fitness, creativity, and
                        technology.
                    </motion.p>
                    <motion.ul variants={itemVariants}>
                        {aboutTech.map((aboutTech, index) => (
                            <li key={index}>
                                <img
                                    src={aboutTech.tech}
                                    alt="Enrico Jay Tech Stack"
                                    draggable="false"
                                />
                                {aboutTech.title}
                            </li>
                        ))}
                    </motion.ul>
                    <motion.button
                        onClick={resumeClick}
                        variants={itemVariants}
                    >
                        <span className="material-symbols-rounded">
                            cloud_download
                        </span>
                        Resume
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
}

export default About;
