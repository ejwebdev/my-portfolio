import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./contact.css";

function Contact() {
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

    const emailClick = () => {
        window.location.href = "mailto:ejwebdev@gmail.com";
    };

    return (
        <section className="contact" id="contact">
            <motion.div
                className="contact-cntnr"
                ref={ref}
                variants={cntnrVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
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
