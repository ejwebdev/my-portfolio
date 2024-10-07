import aboutImg from "../../assets/about-img.png";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
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
    { tech: htmlIcon, title: "HTML" },
    { tech: cssIcon, title: "CSS" },
    { tech: tailwindIcon, title: "Tailwind" },
    { tech: javascriptIcon, title: "JavaScript" },
    { tech: bootstrapIcon, title: "Bootstrap" },
    { tech: reactIcon, title: "React" },
    { tech: nodejsIcon, title: "Node.js" },
    { tech: gitIcon, title: "Git" },
    { tech: githubIcon, title: "GitHub" },
    { tech: firebaseIcon, title: "Firebase" },
    { tech: shopifyIcon, title: "Shopify" },
    { tech: canvaIcon, title: "Canva" },
    { tech: figmaIcon, title: "Figma" },
];

function About() {
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
        <section className="about" id="about">
            <div className="about-cntnr">
                <img
                    src={aboutImg}
                    alt="Enrico Jay About Image"
                    draggable="false"
                />
                <div className="about-right">
                    <h3>
                        <span className="material-symbols-rounded">
                            line_end
                        </span>
                        About Me
                    </h3>
                    <h2>Who Am I?</h2>
                    <p>
                        I&apos;m <span>Enrico Jay Sison</span>, a fresh graduate
                        with two years of hands-on experience in web development
                        and design. I enjoy going to the gym and have a passion
                        for music, serving as a musician in my church.
                    </p>
                    <ul>
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
                    </ul>
                    <button onClick={resumeClick}>
                        <span className="material-symbols-rounded">
                            cloud_download
                        </span>
                        Resume
                    </button>
                </div>
            </div>
        </section>
    );
}

export default About;
