import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-name">Nikhil Giridharan</h1>
            <p className="hero-role">Data Engineer | Databricks | Cloud & Analytics</p>
            
            <ul className="hero-value-props">
              <li>Built production systems processing <strong>1.4+ petabytes</strong> of data with 40% performance improvements</li>
              <li>Architected cloud-native data pipelines serving real-time analytics at enterprise scale</li>
              <li>Designed Databricks Lakehouse solutions reducing costs while improving data availability</li>
            </ul>

            <div className="hero-cta">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button primary">
                Download Resume
              </a>
              <a href="https://github.com/nikhilgiridharan" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/nikhilgiridharan/" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="hero-photo">
              <img 
                src="/photo.jpg" 
                alt="Nikhil Giridharan" 
                onError={(e) => {
                  const currentSrc = e.target.src;
                  if (currentSrc.includes('photo.jpg')) {
                    e.target.src = '/photo.png';
                  } else if (currentSrc.includes('photo.png')) {
                    e.target.src = '/photo.jpeg';
                  } else {
                    e.target.src = '/photo.svg';
                    e.target.style.opacity = '0.5';
                  }
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
