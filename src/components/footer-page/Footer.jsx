import "./footer.css";

function Footer() {
    return (
        <section className="footer">
            <div className="footer-cntnr">
                <hr />
                <div>
                    <p>&copy; 2024 Enrico Jay Sison</p>
                    <ul>
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
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Footer;
