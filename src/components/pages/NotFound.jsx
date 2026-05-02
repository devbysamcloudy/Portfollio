import { Link } from 'react-router-dom'

function NotFound() {
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
      <h1 style={{ fontSize: '8rem', fontWeight: 'var(--font-weight-black)', margin: 0, color: 'var(--color-primary)' }}>
        404
      </h1>
      <h2 style={{ fontSize: 'var(--font-size-3xl)', margin: '1rem 0' }}>Page Not Found</h2>
      <p style={{ color: 'var(--color-gray-400)', marginBottom: '2rem', maxWidth: '400px' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" style={{
        padding: '0.75rem 2rem',
        background: 'var(--gradient-primary)',
        color: 'var(--color-white)',
        borderRadius: 'var(--radius-full)',
        textDecoration: 'none',
        fontWeight: 'var(--font-weight-semibold)',
        transition: 'opacity var(--transition-base)'
      }}>
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
