import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ project, index }) {
  const cardStyle = {
    animationDelay: `${index * 0.1}s`
  }

  return (
    <div className="project-card" style={cardStyle}>
      <div className="project-card-inner">
        {/* Image Section */}
        <div className="project-image-wrapper">
          {project.images && project.images.length > 0 ? (
            <img 
              src={project.images[0]} 
              alt={project.title}
              className="project-image"
              onError={(e) => {
                e.target.src = '/src/assets/hero.png'
              }}
            />
          ) : (
            <div className="project-image-placeholder">
              <i className="fas fa-code"></i>
            </div>
          )}
          
          {project.featured && (
            <div className="featured-badge">
              <i className="fas fa-star"></i>
              Featured
            </div>
          )}

          {project.status && (
            <div className={`status-badge ${project.status}`}>
              {project.status === 'in-progress' ? 'In Progress' : 'Completed'}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="project-content">
          <div className="project-categories">
            {project.category.slice(0, 2).map((cat) => (
              <span key={cat} className="category-tag">
                {cat}
              </span>
            ))}
          </div>

          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.shortDescription}</p>

          {/* Tech Stack */}
          <div className="project-tech">
            {project.techStack.frontend && (
              <div className="tech-group">
                <span className="tech-label">Frontend:</span>
                <div className="tech-tags">
                  {project.techStack.frontend.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.backend && (
              <div className="tech-group">
                <span className="tech-label">Backend:</span>
                <div className="tech-tags">
                  {project.techStack.backend.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="project-actions">
            <Link 
              to={`/projects/${project.id}`} 
              className="btn btn-primary btn-sm"
            >
              View Details
              <i className="fas fa-arrow-right"></i>
            </Link>

            <div className="project-links">
              {project.links?.github && (
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="icon-link"
                  title="View on GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              )}
              {project.links?.live && (
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="icon-link"
                  title="Live Demo"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard