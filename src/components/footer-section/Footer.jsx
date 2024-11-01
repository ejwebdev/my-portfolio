import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./footer.css";

function Footer() {
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
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="footer">
            <motion.div
                className="footer-cntnr"
                ref={ref}
                variants={cntnrVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
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
