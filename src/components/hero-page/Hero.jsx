import { useTypewriter, Cursor } from "react-simple-typewriter";
import heroImg from "../../assets/hero-img.webp";
import "./hero.css";

function Hero() {
    // Typewriter
    const [text] = useTypewriter({
        words: ["Front-End Developer", "UI/UX Designer", "Freelance Developer"],
        loop: [],
        typeSpeed: 120,
        deleteSpeed: 80,
        delaySpeed: 3000,
    });

    const bookMeeting = () => {
        window.open("https://calendly.com/ejwebdev25", "_blank");
    };

    return (
        <section className="home" id="home">
            <div className="home-cntnr">
                <div className="home-left">
                    <h1>Hi, I&apos;m Enrico Jay</h1>
                    <h3>
                        <span className="material-symbols-rounded">
                            line_end
                        </span>
                        <span>
                            {text}
                            <Cursor />
                        </span>
                    </h3>
                    <p>
                        I build modern, responsive websites that blend
                        creativity and functionality. Let&apos;s transform your
                        vision into reality. Let&apos;s talk today!
                    </p>
                    <button onClick={bookMeeting}>
                        <span className="material-symbols-rounded">group</span>
                        Talk to Me
                    </button>
                </div>
                <img
                    src={heroImg}
                    alt="Enrico Jay Home Image"
                    draggable="false"
                />
            </div>
        </section>
    );
}

export default Hero;
