import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-title">Contact</h2>
          <p className="contact-cta">
            Open to data engineering opportunities and collaborations
          </p>

          <div className="contact-buttons">
            <a 
              href="https://www.linkedin.com/in/nikhilgiridharan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button linkedin"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:nickgiridharan@gmail.com"
              className="contact-button email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
