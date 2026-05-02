import './Experience.css'

function Experience() {
  const experiences = [
    {
      id: 'moringa-school',
      title: 'Full Stack Software Development Student',
      organization: 'Moringa School',
      location: 'Nairobi, Kenya',
      startDate: 'June 2024',
      endDate: 'July 2026',
      current: true,
      type: 'education',
      icon: 'fas fa-graduation-cap',
      description: 'Intensive full-stack software development program covering React, TypeScript, Python, Flask, FastAPI, PostgreSQL, and modern development practices.',
      highlights: [
        'Built JARVIS AI Personal Assistant as capstone project',
        'Served as Team Lead on group project',
        'Mentored by Daniel Karanja and Dennis Kiboi',
        'Completed multiple full-stack projects including game development',
        'Achieved proficiency in both frontend and backend technologies'
      ],
      technologies: ['React', 'TypeScript', 'Python', 'Flask', 'PostgreSQL', 'FastAPI']
    },
    {
      id: 'garytech-freelance',
      title: 'Frontend Developer (Freelance)',
      organization: 'GaryTech',
      location: 'Nairobi, Kenya',
      startDate: 'January 2026',
      endDate: 'Present',
      current: true,
      type: 'work',
      icon: 'fas fa-briefcase',
      description: 'Leading frontend development for enterprise logistics CRM platform, collaborating with backend developer to deliver comprehensive business solution.',
      highlights: [
        'Architected React/TypeScript frontend from scratch',
        'Implemented real-time shipment tracking dashboard',
        'Delivered responsive design for multi-device access',
        'Collaborated on API integration and data flow design'
      ],
      technologies: ['React', 'TypeScript', 'Bootstrap', 'REST APIs']
    }
  ]

  const certifications = [
    {
      name: 'Project Management',
      issuer: 'AMI',
      date: 'November 2025',
      icon: 'fas fa-certificate'
    },
    {
      name: 'Entrepreneurship',
      issuer: 'AMI',
      date: 'November 2025',
      icon: 'fas fa-lightbulb'
    },
    {
      name: 'Emotional Intelligence',
      issuer: 'AMI',
      date: 'November 2025',
      icon: 'fas fa-brain'
    },
    {
      name: 'ICDL Certification',
      issuer: 'ICDL',
      date: '2024',
      icon: 'fas fa-laptop'
    },
    {
      name: 'KNEC Certification',
      issuer: 'KNEC',
      date: '2024',
      icon: 'fas fa-award'
    }
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-description">
            My professional journey and educational background in software development
          </p>
        </div>

        <div className="experience-content">
          {/* Timeline */}
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`timeline-item ${exp.type}`}>
                <div className="timeline-marker">
                  <div className="timeline-icon">
                    <i className={exp.icon}></i>
                  </div>
                  <div className="timeline-line"></div>
                </div>

                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-title-section">
                      <h3 className="timeline-title">{exp.title}</h3>
                      <p className="timeline-organization">{exp.organization}</p>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-date">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </span>
                      <span className="timeline-location">
                        <i className="fas fa-map-marker-alt"></i>
                        {exp.location}
                      </span>
                      {exp.current && (
                        <span className="current-badge">Current</span>
                      )}
                    </div>
                  </div>

                  <p className="timeline-description">{exp.description}</p>

                  <div className="timeline-highlights">
                    <h4 className="highlights-title">Key Highlights:</h4>
                    <ul className="highlights-list">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="timeline-technologies">
                    <span className="tech-label">Technologies:</span>
                    <div className="tech-tags">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="certifications-container">
            <h3 className="certifications-title">Certifications & Awards</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-icon">
                    <i className={cert.icon}></i>
                  </div>
                  <div className="cert-content">
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience