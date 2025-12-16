import './Education.css'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          <div className="education-main">
            <div className="education-header">
              <div>
                <h3 className="education-school">
                  <img src="/utd-logo.png" alt="UTD" className="utd-logo" />
                  <a 
                    href="https://www.utdallas.edu/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="education-link"
                  >
                    The University of Texas at Dallas
                  </a>
                </h3>
                <p className="education-degree">Bachelor of Science in Computer Science</p>
              </div>
              <div className="education-meta">
                <p className="education-period">2023 - 2024</p>
              </div>
            </div>
            <ul className="education-bullets">
              <li>Graduated in 1 year</li>
              <li>Courses: Data Structures and Algorithms, Database Systems</li>
              <li>Honors: Academic Success Scholarship</li>
            </ul>
          </div>
          <div className="education-main">
            <div className="education-header">
              <div>
                <h3 className="education-school">
                  <img src="/independence-logo.png" alt="Independence High School" className="utd-logo" />
                  <a 
                    href="https://schools.friscoisd.org/campus/high-school/independence/home" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="education-link"
                  >
                    Independence High School
                  </a>
                </h3>
                <p className="education-degree">High School Diploma</p>
              </div>
              <div className="education-meta">
                <p className="education-period">2019 - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

