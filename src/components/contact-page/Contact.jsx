import "./contact.css";

function Contact() {
    const emailClick = () => {
        window.location.href = "mailto:ejwebdev@gmail.com";
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-cntnr">
                <h3>
                    <span className="material-symbols-rounded">line_end</span>
                    Contact
                </h3>
                <h2>Get In Touch</h2>
                <p>
                    Looking for a skilled web developer and designer to bring
                    your ideas to life? Let&apos;s collaborate on innovative
                    projects. Email me today and let&apos;s create something
                    amazing!
                </p>
                <button onClick={emailClick}>
                    <span className="material-symbols-rounded">
                        forward_to_inbox
                    </span>
                    Email Me
                </button>
            </div>
        </section>
    );
}

export default Contact;
