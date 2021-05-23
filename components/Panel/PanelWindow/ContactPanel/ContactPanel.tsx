const ContactPanel = () => {
    return (
        <div className="contact-panel">
            <div className="contact-panel__inner">
                <div className="icon">
                    <a href="https://www.instagram.com/young_planet/" target="_blank"><img src="/images/panel/contact/instagram.png" alt="Young Planet | Instagram" /></a>
                </div>
                <div className="icon">
                    <a href="https://www.twitter.com/spinyoungplanet" target="_blank"><img src="/images/panel/contact/twitter.png" alt="Young Planet | Twitter" /></a>
                </div>
                <div className="icon">
                    <img src="/images/panel/contact/mail.png" alt="Young Planet | Email" />
                </div>
            </div>
        </div>
    )
}

export default ContactPanel