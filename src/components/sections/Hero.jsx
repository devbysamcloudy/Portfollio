import { useEffect, useState } from 'react'
import './Hero.css'

function Hero() {
  const [displayText, setDisplayText] = useState('')
  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'Python Developer',
    'AI Integration Expert',
    'Game Developer'
  ]
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">
              Samuel <span className="name-highlight">Nganga</span>
            </h1>
            <div className="hero-role-wrapper">
              <h2 className="hero-role">
                {displayText}
                <span className="cursor">|</span>
              </h2>
            </div>
            <p className="hero-description">
              Full Stack Developer specializing in Python, Flask, React, and REST APIs. 
              Building everything from AI assistants to multiplayer games. 
              Based in Nairobi, Kenya 🇰🇪
            </p>

            <div className="hero-cta">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                View My Work
              </button>
              <button className="btn btn-outline" onClick={scrollToContact}>
                Get In Touch
              </button>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/devbysamcloudy" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:your.email@example.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-image-bg"></div>
              <img 
                src="/src/assets/images/profile/WhatsApp Image 2026-04-29 at 11.22.42.jpeg" 
                alt="Samuel Profile" 
                className="hero-image"
              />
              <div className="hero-badge">
                <span className="badge-icon">💼</span>
                <div className="badge-text">
                  <p className="badge-title">Available for Work</p>
                  <p className="badge-subtitle">Open to opportunities</p>
                </div>
              </div>
            </div>

            <div className="floating-cards">
              <div className="float-card card-1">
                <span className="card-icon">⚡</span>
                <p className="card-text">Fast Learner</p>
              </div>
              <div className="float-card card-2">
                <span className="card-icon">🎯</span>
                <p className="card-text">Problem Solver</p>
              </div>
              <div className="float-card card-3">
                <span className="card-icon">🚀</span>
                <p className="card-text">Team Player</p>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <p className="scroll-text">Scroll to explore</p>
        </div>
      </div>
    </section>
  )
}

export default Hero