import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import project5 from "../../assets/project5.jpg";
import "./projects.css";

const projects = [
    {
        img: project1,
        link: "https://ejwebdev.github.io/meows-sweet-bites/",
        title: "Meow's Sweet Bites",
        desc: "A website for a local business cakery and flower shop, developed and designed in collaboration with the client, to showcase her products and special offers.",
        tech: ["Tailwind", "React", "React-Router", "Node.js", "Git"],
    },
    {
        img: project2,
        link: "https://ejwebdev.github.io/greenvista/",
        title: "GreenVista",
        desc: "A real estate project website, developed and designed as a personal project to refine my web development skills and showcase my readiness for larger clients or companies.",
        tech: ["Tailwind", "React", "React-Router", "Node.js", "Git"],
    },
    {
        img: project3,
        link: "https://ejwebdev.github.io/eventify/",
        title: "Eventify",
        desc: "An event management website, developed and designed as a personal project to demonstrate my flexibility in creating various types of websites.",
        tech: ["Tailwind", "React", "React-Router", "Node.js", "Git"],
    },
    {
        img: project4,
        link: "https://dribbble.com/shots/25030627-E-Commerce-Gymshark-Inspired-Project",
        title: "Gymshark PH",
        desc: "An e-commerce website inspired by the official Gymshark website, developed and designed using the Shopify platform as a personal project to showcase my Shopify development skills.",
        tech: ["Shopify", "Liquid", "Custom CSS"],
    },
    {
        img: project5,
        link: "https://ejwebdev.github.io/firebase-auth/",
        title: "Firebase Auth",
        desc: "An authentication form website inspired by Firebase, developed and designed as a personal project to showcase my backend database management skills for upcoming projects.",
        tech: ["HTML", "Tailwind", "JavaScript", "Node.js", "Firebase", "Git"],
    },
];

function Projects() {
    const projectDetails = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <section className="projects" id="projects">
            <div className="projects-cntnr">
                <h3>
                    <span className="material-symbols-rounded">line_end</span>
                    Projects
                </h3>
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((projects, index) => (
                        <div key={index}>
                            <img
                                src={projects.img}
                                alt="Enrico Jay Projects"
                                draggable="false"
                                onClick={() => projectDetails(projects.link)}
                            />
                            <h3 onClick={() => projectDetails(projects.link)}>
                                {projects.title}
                            </h3>
                            <p>{projects.desc}</p>
                            <ul className="projects-grid-tech">
                                {projects.tech.map((tech, techIndex) => (
                                    <li key={techIndex}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
