import './ArchitectureDiagram.css'

const ArchitectureDiagram = () => {
  return (
    <section className="architecture-section">
      <div className="container">
        <div className="architecture-content">
          <div className="diagram-container">
            <svg
              viewBox="0 0 800 400"
              className="architecture-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ingestion Layer */}
              <g className="layer ingestion">
                <rect x="50" y="50" width="120" height="80" rx="4" className="layer-box" />
                <text x="110" y="95" className="layer-label">Ingestion</text>
                <circle cx="80" cy="70" r="4" className="node" />
                <circle cx="110" cy="70" r="4" className="node" />
                <circle cx="140" cy="70" r="4" className="node" />
              </g>

              {/* Arrow to Bronze */}
              <path d="M 170 90 L 220 90" className="arrow" />
              <path d="M 215 85 L 220 90 L 215 95" className="arrow-head" />

              {/* Bronze Layer */}
              <g className="layer bronze">
                <rect x="220" y="50" width="120" height="80" rx="4" className="layer-box" />
                <text x="280" y="95" className="layer-label">Bronze</text>
                <circle cx="250" cy="70" r="4" className="node" />
                <circle cx="280" cy="70" r="4" className="node" />
                <circle cx="310" cy="70" r="4" className="node" />
              </g>

              {/* Arrow to Silver */}
              <path d="M 340 90 L 390 90" className="arrow" />
              <path d="M 385 85 L 390 90 L 385 95" className="arrow-head" />

              {/* Silver Layer */}
              <g className="layer silver">
                <rect x="390" y="50" width="120" height="80" rx="4" className="layer-box" />
                <text x="450" y="95" className="layer-label">Silver</text>
                <circle cx="420" cy="70" r="4" className="node" />
                <circle cx="450" cy="70" r="4" className="node" />
                <circle cx="480" cy="70" r="4" className="node" />
              </g>

              {/* Arrow to Gold */}
              <path d="M 510 90 L 560 90" className="arrow" />
              <path d="M 555 85 L 560 90 L 555 95" className="arrow-head" />

              {/* Gold Layer */}
              <g className="layer gold">
                <rect x="560" y="50" width="120" height="80" rx="4" className="layer-box" />
                <text x="620" y="95" className="layer-label">Gold</text>
                <circle cx="590" cy="70" r="4" className="node" />
                <circle cx="620" cy="70" r="4" className="node" />
                <circle cx="650" cy="70" r="4" className="node" />
              </g>

              {/* Vertical flow to Orchestration */}
              <path d="M 620 130 L 620 180" className="arrow" />
              <path d="M 615 175 L 620 180 L 625 175" className="arrow-head" />

              {/* Orchestration Layer */}
              <g className="layer orchestration">
                <rect x="520" y="180" width="200" height="80" rx="4" className="layer-box" />
                <text x="620" y="225" className="layer-label">Orchestration</text>
                <circle cx="560" cy="200" r="4" className="node" />
                <circle cx="620" cy="200" r="4" className="node" />
                <circle cx="680" cy="200" r="4" className="node" />
              </g>

              {/* Analytics Consumers */}
              <g className="layer consumers">
                <rect x="50" y="300" width="670" height="80" rx="4" className="layer-box" />
                <text x="385" y="345" className="layer-label">Analytics Consumers</text>
                <circle cx="150" cy="320" r="4" className="node" />
                <circle cx="300" cy="320" r="4" className="node" />
                <circle cx="450" cy="320" r="4" className="node" />
                <circle cx="600" cy="320" r="4" className="node" />
              </g>

              {/* Connections from Gold to Consumers */}
              <path d="M 590 130 L 150 300" className="connection" />
              <path d="M 620 130 L 300 300" className="connection" />
              <path d="M 650 130 L 450 300" className="connection" />
              <path d="M 620 130 L 600 300" className="connection" />
            </svg>
          </div>
          <div className="architecture-description">
            <p className="description-text">
              This architecture follows a medallion pattern with clear separation between raw ingestion, 
              validated bronze, enriched silver, and curated gold layers. Orchestration manages dependencies 
              and scheduling across the pipeline, while maintaining data quality gates at each stage. 
              The design prioritizes scalability and maintainability, with each layer serving distinct 
              consumption patterns—from exploratory analytics to production dashboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArchitectureDiagram

