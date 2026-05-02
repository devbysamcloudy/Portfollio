import { useState } from 'react'
import { projects } from '../../data/projects'
import ProjectCard from '../projects/ProjectCard'
import ProjectFilter from '../projects/ProjectFilter'
import './Projects.css'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category.includes('fullstack')).length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category.includes('ai')).length },
    { id: 'game-dev', label: 'Game Dev', count: projects.filter(p => p.category.includes('game-dev')).length },
    { id: 'enterprise', label: 'Enterprise', count: projects.filter(p => p.category.includes('enterprise')).length }
  ]

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
    
    if (filterId === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => 
        project.category.includes(filterId)
      ))
    }
  }

  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A showcase of my recent work spanning full-stack applications, AI integrations, 
            and game development. Each project demonstrates different aspects of my technical skillset.
          </p>
        </div>

        <ProjectFilter 
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              index={index}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}

        <div className="projects-cta">
          <p className="cta-text">Want to see more of my work?</p>
          <a 
            href="https://github.com/devbysamcloudy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline btn-lg"
          >
            <i className="fab fa-github"></i>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects