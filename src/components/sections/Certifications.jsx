import { certifications } from '../../data/certification'
import './Certifications.css'

function Certifications() {
  const categories = {
    'professional-development': {
      title: 'Professional Development',
      icon: 'fas fa-briefcase',
      color: '#667eea'
    },
    'business': {
      title: 'Business & Entrepreneurship',
      icon: 'fas fa-lightbulb',
      color: '#f093fb'
    },
    'soft-skills': {
      title: 'Soft Skills',
      icon: 'fas fa-users',
      color: '#4facfe'
    },
    'technical': {
      title: 'Technical Certifications',
      icon: 'fas fa-laptop-code',
      color: '#43e97b'
    }
  }

  // Group certifications by category
  const groupedCertifications = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = []
    }
    acc[cert.category].push(cert)
    return acc
  }, {})

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications & Awards</h2>
          <p className="section-description">
            Professional certifications and courses that enhance my technical and business acumen
          </p>
        </div>

        <div className="certifications-content">
          {Object.entries(groupedCertifications).map(([categoryKey, certs]) => {
            const category = categories[categoryKey]
            
            return (
              <div key={categoryKey} className="certification-category">
                <div className="category-header">
                  <div 
                    className="category-icon-wrapper"
                    style={{ background: category.color }}
                  >
                    <i className={category.icon}></i>
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                  <span className="category-count">{certs.length}</span>
                </div>

                <div className="certifications-grid">
                  {certs.map((cert) => (
                    <div key={cert.id} className="certification-card">
                      <div className="cert-header">
                        <div 
                          className="cert-icon"
                          style={{ background: category.color }}
                        >
                          <i className="fas fa-certificate"></i>
                        </div>
                        {cert.image && (
                          <a 
                            href={cert.image} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="cert-view-link"
                            title="View Certificate"
                          >
                            <i className="fas fa-external-link-alt"></i>
                          </a>
                        )}
                      </div>

                      <div className="cert-body">
                        <h4 className="cert-title">{cert.title}</h4>
                        <p className="cert-issuer">
                          <i className="fas fa-building"></i>
                          {cert.issuer}
                        </p>
                        
                        {cert.date && (
                          <p className="cert-date">
                            <i className="fas fa-calendar-alt"></i>
                            Issued: {cert.date}
                          </p>
                        )}

                        {cert.credentialId && (
                          <p className="cert-credential">
                            <i className="fas fa-id-card"></i>
                            ID: {cert.credentialId}
                          </p>
                        )}
                      </div>

                      <div className="cert-footer">
                        <span className="cert-badge">{categoryKey.replace('-', ' ')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="certifications-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-award"></i>
            </div>
            <div className="stat-content">
              <h3 className="stat-number">{certifications.length}</h3>
              <p className="stat-label">Total Certifications</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="stat-content">
              <h3 className="stat-number">
                {new Set(certifications.map(c => c.issuer)).size}
              </h3>
              <p className="stat-label">Learning Institutions</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="stat-content">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Commitment to Learning</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="certifications-cta">
          <p className="cta-text">Interested in continuous learning and professional growth</p>
          <a href="#contact" className="btn btn-primary btn-lg">
            <i className="fas fa-envelope"></i>
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  )
}

export default Certifications