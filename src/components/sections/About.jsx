import './About.css'

function About() {
  const stats = [
    { number: '88+', label: 'GitHub Projects' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '2+', label: 'Years Learning' },
    { number: '100%', label: 'Passion Driven' }
  ]

  const highlights = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Education',
      description: 'Currently pursuing Full Stack Software Development at Moringa School, Nairobi',
      detail: 'Expected graduation: July 2026'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Achievements',
      description: 'Successfully defended JARVIS AI Assistant as capstone project',
      detail: 'Mentored by Daniel Karanja & Dennis Kiboi'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Experience',
      description: 'Freelance Frontend Developer — private client work',
      detail: 'Delivered enterprise-grade web solutions'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Vision',
      description: 'Building innovative solutions that solve real-world problems',
      detail: 'From AI assistants to multiplayer games'
    }
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Passionate Full Stack Developer from Nairobi, Kenya, turning ideas into reality through code
          </p>
        </div>

        <div className="about-content">
          <div className="about-image-section">
            <div className="about-image-wrapper">
              <img 
                src="/images/profile/WhatsApp Image 2026-04-29 at 11.22.42.jpeg"
                alt="Samuel Profile"
                className="about-image"
              />
              <div className="about-image-decoration"></div>
            </div>

            <div className="about-quote">
              <i className="fas fa-quote-left quote-icon"></i>
              <p className="quote-text">
                "Code is poetry written in logic. Every project is an opportunity to create something extraordinary."
              </p>
              <p className="quote-author">- Samuel Nganga</p>
            </div>
          </div>

          <div className="about-text-section">
            <h3 className="about-subtitle">Full Stack Developer & Problem Solver</h3>
            
            <div className="about-description">
              <p>
                Hi! I'm <strong>Samuel</strong>, a Full Stack Software Development student at 
                <strong> Moringa School</strong> in Nairobi, Kenya. My journey into software development 
                has been driven by a passion for building solutions that make a difference.
              </p>
              
              <p>
                I specialize in building full-stack applications using <strong>React, Python, Flask, 
                FastAPI, and PostgreSQL</strong>. From AI-powered personal assistants to multiplayer zombie 
                survival games, I love tackling complex challenges and turning ambitious ideas into reality.
              </p>

              <p>
                I also take on freelance work, delivering enterprise-grade web solutions for private clients. 
                Beyond web development, I've developed a deep interest in <strong>AI integration</strong> and 
                <strong>ethical hacking</strong> — constantly expanding my skillset and pushing the boundaries 
                of what I can build.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or mentoring fellow developers. I believe in continuous learning and staying ahead 
                of the curve in this ever-evolving tech landscape.
              </p>
            </div>

            <div className="about-highlights">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon">
                    <i className={highlight.icon}></i>
                  </div>
                  <div className="highlight-content">
                    <h4 className="highlight-title">{highlight.title}</h4>
                    <p className="highlight-description">{highlight.description}</p>
                    <p className="highlight-detail">{highlight.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About