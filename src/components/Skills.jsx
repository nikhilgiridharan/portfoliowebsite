import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'SQL', logo: '/sql-logo.svg' },
    { name: 'Cassandra', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg' },
    { name: 'AWS', logo: '/aws-logo.png' },
    { name: 'Databricks', logo: '/databricks-logo.png' },
    { name: 'Spark', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
    { name: 'Kafka', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
    { name: 'Power BI', logo: '/powerbi-logo.png' }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => {
            const isLargerLogo = ['SQL', 'Cassandra', 'Spark'].includes(skill.name)
            const isDatabricks = skill.name === 'Databricks'
            return (
              <span key={index} className="skill-tag">
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className={`skill-logo ${isLargerLogo ? 'skill-logo-large' : ''} ${isDatabricks ? 'skill-logo-databricks' : ''}`} 
                />
                {skill.name}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
