import { skills } from '../../data/skills'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Arsenal</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            A comprehensive overview of my technical skills, from frontend frameworks to backend systems,
            databases, and specialized tools.
          </p>
        </div>

        <div className="skills-grid">
          {/* Frontend Skills */}
          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3 className="category-title">Frontend Development</h3>
            </div>
            <div className="skills-list">
              {skills.frontend.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3 className="category-title">Backend Development</h3>
            </div>
            <div className="skills-list">
              {skills.backend.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database Skills */}
          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-database"></i>
              </div>
              <h3 className="category-title">Database & Storage</h3>
            </div>
            <div className="skills-list">
              {skills.database.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps Skills */}
          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3 className="category-title">DevOps & Deployment</h3>
            </div>
            <div className="skills-list">
              {skills.devops.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="specializations">
          <h3 className="specializations-title">Areas of Expertise</h3>
          <div className="specializations-grid">
            {skills.specializations.map((spec) => (
              <div key={spec.name} className="specialization-card">
                <h4 className="spec-name">{spec.name}</h4>
                <p className="spec-description">{spec.description}</p>
                {spec.projects && (
                  <div className="spec-projects">
                    <span className="spec-label">Projects:</span>
                    <span className="spec-value">{spec.projects.join(', ')}</span>
                  </div>
                )}
                {spec.platforms && (
                  <div className="spec-projects">
                    <span className="spec-label">Platforms:</span>
                    <span className="spec-value">{spec.platforms.join(', ')}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills