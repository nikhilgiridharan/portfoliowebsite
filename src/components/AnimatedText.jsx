import { useState, useEffect } from 'react'
import './AnimatedText.css'

const AnimatedText = ({ text, delay = 0, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          setIsComplete(true)
          clearInterval(interval)
        }
      }, 50) // Speed of letter appearance

      return () => clearInterval(interval)
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [text, delay])

  return (
    <div className={`animated-text ${className} ${isComplete ? 'complete' : ''}`}>
      {displayedText.split('').map((char, index) => (
        <span
          key={index}
          className={`char ${char === ' ' ? 'space' : ''}`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      {!isComplete && <span className="cursor">|</span>}
    </div>
  )
}

export default AnimatedText

