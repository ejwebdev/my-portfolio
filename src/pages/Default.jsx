import Header from "../components/header-page/Header.jsx";
import Hero from "../components/hero-page/Hero.jsx";
import Projects from "../components/projects-page/Projects.jsx";
import About from "../components/about-page/About.jsx";
import Contact from "../components/contact-page/Contact.jsx";
import Footer from "../components/footer-page/Footer.jsx";

function Default() {
    return (
        <>
            <Header />
            <Hero />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </>
    );
}

export default Default;
