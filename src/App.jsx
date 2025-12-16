import { useEffect } from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}

export default App

