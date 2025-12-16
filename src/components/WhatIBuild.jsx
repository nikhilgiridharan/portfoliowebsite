import './WhatIBuild.css'

const WhatIBuild = () => {
  const systems = [
    {
      title: 'Lakehouse Platforms',
      description: 'Designing and operating unified data architectures that combine the flexibility of data lakes with the performance of data warehouses, enabling both batch and real-time analytics on petabyte-scale datasets.'
    },
    {
      title: 'Batch & Streaming Pipelines',
      description: 'Building production-grade data pipelines that process millions of events per second with sub-100ms latency, ensuring data freshness and reliability across distributed systems.'
    },
    {
      title: 'Data Quality & Reliability',
      description: 'Implementing comprehensive data governance frameworks with automated quality checks, lineage tracking, and observability to maintain trust in enterprise data assets.'
    },
    {
      title: 'Analytics & Semantic Layers',
      description: 'Creating semantic data models and self-service analytics infrastructure that enable faster business decision-making while maintaining data consistency and security.'
    }
  ]

  return (
    <section className="what-i-build">
      <div className="container">
        <h2 className="section-heading">What I Build</h2>
        <div className="systems-grid">
          {systems.map((system, index) => (
            <div key={index} className="system-card">
              <h3 className="system-title">{system.title}</h3>
              <p className="system-description">{system.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIBuild

