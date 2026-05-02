import { useParams, Link } from 'react-router-dom'
import { projects } from '../../data/projects'

function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find(p => p.id === projectId || p.slug === projectId)

  if (!project) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'var(--gradient-dark)',
        color: 'var(--color-white)'
      }}>
        <h2>Project not found</h2>
        <Link to="/" style={{ color: 'var(--color-primary)', marginTop: '1rem' }}>Back to Home</Link>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', padding: '6rem 2rem 4rem', maxWidth: '900px', margin: '0 auto' }}>
      <Link to="/" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 'var(--font-weight-semibold)' }}>
        ← Back to Projects
      </Link>
      <h1 style={{ marginTop: '2rem', color: 'var(--color-dark)' }}>{project.title}</h1>
      <p style={{ color: 'var(--color-gray-700)', lineHeight: 1.7 }}>{project.description}</p>
    </div>
  )
}

export default ProjectDetail
