import { motion, useAnimation } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/Observer.jsx";
import { useEffect } from "react";
import "./footer.css";

function Footer() {
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

    return (
        <section className="footer" ref={ref}>
            <motion.div
                className="footer-cntnr"
                variants={cntnrVariants}
                initial="hidden"
                animate={controls}
            >
                <hr />
                <div>
                    <motion.p variants={itemVariants}>
                        &copy; 2024 Enrico Jay Sison
                    </motion.p>
                    <motion.ul variants={itemVariants}>
                        <li>
                            <a
                                href="https://web.facebook.com/EJsison25"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/ejwebdev/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/ejwebdev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                    </motion.ul>
                </div>
            </motion.div>
        </section>
    );
}

export default Footer;
