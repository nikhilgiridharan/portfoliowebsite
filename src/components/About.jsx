import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm <strong>Nikhil Giridharan</strong>, a data engineer passionate about building scalable and efficient data systems. 
              I specialize in designing and implementing data pipelines that transform raw data into actionable insights, enabling 
              organizations to make data-driven decisions.
            </p>
            <p>
              My work focuses on creating robust data architectures using modern cloud technologies and big data frameworks. 
              I have experience with distributed computing systems, real-time data processing, and building data lakes and warehouses 
              that can handle large-scale data volumes efficiently.
            </p>
            <p>
              I'm passionate about optimizing data workflows, improving data quality, and ensuring that data infrastructure is both 
              performant and cost-effective. Whether it's building ETL pipelines, designing data models, or implementing streaming 
              solutions, I enjoy solving complex data challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
