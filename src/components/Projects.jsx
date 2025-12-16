import './Projects.css'

const Projects = () => {
  const projects = [
    {
      name: 'TradePulse',
      githubUrl: 'https://github.com/nikhilgiridharan/TradePulse',
      technologies: ['Python', 'Cassandra', 'Kafka', 'PySpark'],
      period: 'January 2025 – March 2025',
      why: 'Built to process real-time market data at scale, enabling responsive market-data analytics for trading applications requiring sub-100ms latency.',
      architecture: ['Kafka', 'Spark Streaming', 'Cassandra', 'Analytics'],
      challenges: [
        'Achieved sub-100ms latency for processing tens of thousands of market events per second',
        'Designed TTL-based retention strategies in Cassandra for efficient time-series data storage',
        'Implemented client-side retries and monitoring for 99% availability during volatile market conditions'
      ],
      highlights: [
        'Built real-time streaming pipeline processing tens of thousands of market events per second with sub-100ms latency to enable responsive market-data analytics',
        'Implemented Apache Kafka for scalable ingestion and aggregation of exchange feeds, ensuring stable performance during burst trading periods and volatile market conditions',
        'Designed and tuned Cassandra time-series store with TTL-based retention, client-side retries, and integrated monitoring, supporting low-latency reads and 99% availability'
      ]
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div>
                  <h3 className="project-name">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      {project.name}
                    </a>
                  </h3>
                  <p className="project-period">{project.period}</p>
                </div>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-github-btn"
                >
                  View on GitHub →
                </a>
              </div>

              {project.why && (
                <div className="project-why">
                  <h4 className="project-section-title">Why This Was Built</h4>
                  <p>{project.why}</p>
                </div>
              )}

              {project.architecture && (
                <div className="project-architecture">
                  <h4 className="project-section-title">Architecture</h4>
                  <div className="architecture-flow">
                    {project.architecture.map((component, idx) => (
                      <div key={idx} className="architecture-component">
                        {idx > 0 && <span className="flow-arrow">→</span>}
                        <span className="component-name">{component}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.challenges && (
                <div className="project-challenges">
                  <h4 className="project-section-title">Key Technical Challenges</h4>
                  <ul className="challenges-list">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-tech">
                {project.technologies.map((tech, tIndex) => (
                  <span key={tIndex} className="tech-badge">{tech}</span>
                ))}
              </div>

              <ul className="project-highlights">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
