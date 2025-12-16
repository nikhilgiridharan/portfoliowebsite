import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Verizon',
      companyUrl: 'https://www.verizon.com/',
      role: 'Data Engineer',
      location: 'Dallas, Texas, United States',
      period: 'June 2024 – Present',
      achievements: [
        'Led development of scalable PySpark framework in Databricks to migrate 1.4+ petabytes of Teradata data, reducing manual workload and improving processing performance by 40%',
        'Designed and implemented efficient partitioning and storage strategies in AWS S3, reducing processing time for large-volume datasets and optimizing cost',
        'Built and maintained real-time data pipelines using Kafka, enabling event-driven processing and downstream SQL-based transformations for analytics and monitoring',
        'Optimized 50+ Power BI reports during cloud migration, improving load times and accelerating business validation cycles',
        'Implemented data encryption, access controls, and audit logging, aligning pipeline development with GDPR and enterprise security standards while standardizing data in Parquet format'
      ]
    },
    {
      company: 'Blackmore Partners Inc',
      companyUrl: 'https://blackmorepartnersinc.com/',
      role: 'Data Engineer Intern',
      location: 'Dallas, Texas, United States',
      period: 'December 2023 – March 2024',
      achievements: [
        'Built automated data workflow using Python to ingest, clean, and organize information on 100+ firms, reducing repetitive manual work for the team',
        'Implemented secure cloud storage practices with role-based access controls and audit activity to strengthen data governance for 50+ internal users',
        'Supported integration of new CRM features by preparing data, coordinating requirements, and assisting with configuration updates to improve overall team workflow'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-company">
                    {exp.company === 'Verizon' && (
                      <img src="/verizon-logo.png" alt="Verizon" className="verizon-logo" />
                    )}
                    {exp.company === 'Blackmore Partners Inc' && (
                      <img src="/bmp-logo.png" alt="Blackmore Partners Inc" className="verizon-logo" />
                    )}
                    {exp.companyUrl ? (
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="company-link">
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <p className="experience-role">{exp.role}</p>
                </div>
                <div className="experience-meta">
                  <p className="experience-location">{exp.location}</p>
                  <p className="experience-period">{exp.period}</p>
                </div>
              </div>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, aIndex) => (
                  <li key={aIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

