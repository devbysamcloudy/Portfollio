import { useState } from 'react'
import { socialLinks } from '../../data/socialLinks'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ submitted: false, loading: true, error: null })

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setFormStatus({ submitted: true, loading: false, error: null })
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, loading: false, error: null })
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'snganga685@gmail.com',
      link: 'mailto:snganga685@gmail.com'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Nairobi, Kenya',
      link: null
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: '@devbysamcloudy',
      link: 'https://github.com/devbysamcloudy'
    }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info Cards */}
          <div className="contact-info-section">
            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="info-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="info-content">
                    <h4 className="info-title">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="info-value" target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <p className="info-value">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links-section">
              <h3 className="social-title">Connect With Me</h3>
              <div className="social-links-grid">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-card"
                  >
                    <i className={`fab fa-${social.icon}`}></i>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="availability-card">
              <div className="availability-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="availability-content">
                <h4 className="availability-title">Currently Available</h4>
                <p className="availability-text">
                  Open to freelance projects, full-time opportunities, and collaborations
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {formStatus.submitted && (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {formStatus.error && (
                <div className="form-error">
                  <i className="fas fa-exclamation-circle"></i>
                  {formStatus.error}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact