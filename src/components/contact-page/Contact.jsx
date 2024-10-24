import { motion, useAnimation } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/Observer.jsx";
import { useEffect } from "react";
import "./contact.css";

function Contact() {
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

    const emailClick = () => {
        window.location.href = "mailto:ejwebdev@gmail.com";
    };

    return (
        <section className="contact" id="contact" ref={ref}>
            <motion.div
                className="contact-cntnr"
                variants={cntnrVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.h3 variants={itemVariants}>
                    <span className="material-symbols-rounded">line_end</span>
                    Contact
                </motion.h3>
                <motion.h2 variants={itemVariants}>Get In Touch</motion.h2>
                <motion.p variants={itemVariants}>
                    Looking for a skilled web developer and designer to bring
                    your ideas to life? Let&apos;s collaborate on innovative
                    projects. Email me today and let&apos;s create something
                    amazing!
                </motion.p>
                <motion.button onClick={emailClick} variants={itemVariants}>
                    <span className="material-symbols-rounded">
                        forward_to_inbox
                    </span>
                    Email Me
                </motion.button>
            </motion.div>
        </section>
    );
}

export default Contact;
