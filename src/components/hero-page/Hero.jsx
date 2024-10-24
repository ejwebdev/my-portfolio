import { motion, useAnimation } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/Observer.jsx";
import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import heroImg from "../../assets/hero-img.webp";
import "./hero.css";

function Hero() {
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

    // Typewriter
    const [text] = useTypewriter({
        words: ["Front-End Developer", "UI/UX Designer", "Freelance Developer"],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80,
        delaySpeed: 3000,
    });

    const bookMeeting = () => {
        window.open("https://calendly.com/ejwebdev25", "_blank");
    };

    return (
        <section className="home" id="home" ref={ref}>
            <motion.div
                className="home-cntnr"
                variants={cntnrVariants}
                initial="hidden"
                animate={controls}
            >
                <div className="home-left">
                    <motion.h1 variants={itemVariants}>
                        Hi, I&apos;m Enrico Jay
                    </motion.h1>
                    <motion.h3 variants={itemVariants}>
                        <span className="material-symbols-rounded">
                            line_end
                        </span>
                        <span>
                            {text}
                            <Cursor />
                        </span>
                    </motion.h3>
                    <motion.p variants={itemVariants}>
                        I build modern, responsive websites that blend
                        creativity and functionality. Let&apos;s transform your
                        vision into reality. Let&apos;s talk today!
                    </motion.p>
                    <motion.button
                        onClick={bookMeeting}
                        variants={itemVariants}
                    >
                        <span className="material-symbols-rounded">group</span>
                        Talk to Me
                    </motion.button>
                </div>
                <motion.img
                    src={heroImg}
                    alt="Enrico Jay Home Image"
                    draggable="false"
                    variants={itemVariants}
                />
            </motion.div>
        </section>
    );
}

export default Hero;
