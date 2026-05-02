import './ProjectFilter.css'

function ProjectFilter({ categories, activeFilter, onFilterChange }) {
  return (
    <div className="project-filter">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
          onClick={() => onFilterChange(category.id)}
        >
          {category.label}
          <span className="filter-count">{category.count}</span>
        </button>
      ))}
    </div>
  )
}

export default ProjectFilter