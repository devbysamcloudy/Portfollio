import { Link } from 'react-router-dom'
import { socialLinks } from '../../data/socialLinks'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-text">Samuel</span>
              <span className="logo-accent">Nganga</span>
            </Link>
            <p className="footer-tagline">
              Full Stack Developer specializing in Python, Flask, React, and REST APIs. Building innovative solutions from AI to multiplayer games.
            </p>
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={social.name}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-nav">
              <li><span className="footer-nav-link">Web Development</span></li>
              <li><span className="footer-nav-link">Frontend Development</span></li>
              <li><span className="footer-nav-link">Backend Development</span></li>
              <li><span className="footer-nav-link">AI Integration</span></li>
              <li><span className="footer-nav-link">Game Development</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-links">
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                Nairobi, Kenya
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:snganga685@gmail.com">snganga685@gmail.com</a>
              </li>
              <li>
                <i className="fab fa-github"></i>
                <a href="https://github.com/devbysamcloudy" target="_blank" rel="noopener noreferrer">
                  @devbysamcloudy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Samuel Nganga. All rights reserved.
          </p>
          <p className="footer-credit">
            Built with <i className="fas fa-heart"></i> using React & JavaScript
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
