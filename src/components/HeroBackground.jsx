import { useEffect, useRef, useState } from 'react'
import './HeroBackground.css'

const HeroBackground = () => {
  const svgRef = useRef(null)
  const animationRef = useRef(null)
  const isPausedRef = useRef(false)
  const [hoveredNode, setHoveredNode] = useState(null)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768

    if (prefersReducedMotion || isMobile) {
      return
    }

    // Pause animation on scroll
    const handleScroll = () => {
      isPausedRef.current = window.scrollY > 50
    }
    window.addEventListener('scroll', handleScroll)

    // Create subtle pulsing animation
    let pulsePhase = 0
    const nodes = svgRef.current?.querySelectorAll('.network-node')
    
    const animate = () => {
      if (!isPausedRef.current) {
        pulsePhase += 0.001
      }
      
      if (nodes) {
        nodes.forEach((node, index) => {
          const delay = index * 0.1
          const opacity = 0.25 + Math.sin(pulsePhase + delay) * 0.05
          node.setAttribute('opacity', Math.max(0.2, Math.min(0.3, opacity)))
        })
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Generate node positions for a distributed graph layout
  const nodes = [
    { x: 15, y: 20 },
    { x: 35, y: 15 },
    { x: 55, y: 25 },
    { x: 25, y: 35 },
    { x: 45, y: 40 },
    { x: 65, y: 35 },
    { x: 75, y: 20 },
    { x: 20, y: 50 },
    { x: 40, y: 55 },
    { x: 60, y: 50 },
    { x: 80, y: 45 },
    { x: 30, y: 65 },
    { x: 50, y: 70 },
    { x: 70, y: 65 },
    { x: 85, y: 60 },
    { x: 10, y: 40 },
    { x: 90, y: 30 },
  ]

  // Generate connections (edges) between nodes
  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
    [1, 3], [2, 4], [3, 5], [4, 6],
    [5, 7], [6, 8], [7, 9], [8, 10],
    [9, 11], [10, 12], [11, 13], [12, 14],
    [0, 15], [6, 16], [2, 8], [4, 10],
    [7, 11], [9, 13], [5, 9], [8, 12],
  ]

  return (
    <div className="hero-background">
      <div className="gradient-overlay"></div>
      <svg
        ref={svgRef}
        className="network-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Connection lines */}
        <g className="network-lines">
          {connections.map(([start, end], index) => {
            const startNode = nodes[start]
            const endNode = nodes[end]
            // Mix slate and soft blue - every 3rd line is blue
            const isBlue = index % 3 === 0
            return (
              <line
                key={`line-${index}`}
                x1={startNode.x}
                y1={startNode.y}
                x2={endNode.x}
                y2={endNode.y}
                className={`network-line ${isBlue ? 'accent-blue' : ''}`}
                strokeWidth="0.25"
              />
            )
          })}
        </g>
        
        {/* Nodes */}
        <g className="network-nodes">
          {nodes.map((node, index) => {
            // Mix slate and soft blue - every 4th node is blue
            const isBlue = index % 4 === 0
            const isHovered = hoveredNode === index
            return (
              <circle
                key={`node-${index}`}
                cx={node.x}
                cy={node.y}
                r={isHovered ? "1.2" : "0.8"}
                className={`network-node ${isBlue ? 'accent-blue' : ''} ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredNode(index)}
                onMouseLeave={() => setHoveredNode(null)}
                style={{ cursor: 'pointer', transition: 'r 0.3s ease, fill 0.3s ease' }}
              />
            )
          })}
        </g>
      </svg>
    </div>
  )
}

export default HeroBackground

