export const certifications = [
  {
    id: 1,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2023',
    category: 'technical',
    credentialId: null,
    image: null
  },
  {
    id: 2,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: '2023',
    category: 'technical',
    credentialId: null,
    image: null
  },
  {
    id: 3,
    title: 'Python for Everybody',
    issuer: 'Coursera',
    date: '2023',
    category: 'technical',
    credentialId: null,
    image: null
  },
  {
    id: 4,
    title: 'Communication Skills',
    issuer: 'LinkedIn Learning',
    date: '2023',
    category: 'soft-skills',
    credentialId: null,
    image: null
  },
  {
    id: 5,
    title: 'Entrepreneurship Fundamentals',
    issuer: 'Coursera',
    date: '2023',
    category: 'business',
    credentialId: null,
    image: null
  },
  {
    id: 6,
    title: 'Project Management Essentials',
    issuer: 'LinkedIn Learning',
    date: '2023',
    category: 'professional-development',
    credentialId: null,
    image: null
  }
];

export const skills = {
  frontend: [
    { name: 'React', level: 90, icon: 'react', category: 'framework' },
    { name: 'TypeScript', level: 85, icon: 'typescript', category: 'language' },
    { name: 'JavaScript', level: 95, icon: 'javascript', category: 'language' },
    { name: 'HTML5', level: 95, icon: 'html5', category: 'markup' },
    { name: 'CSS3', level: 90, icon: 'css3', category: 'styling' },
    { name: 'Bootstrap', level: 85, icon: 'bootstrap', category: 'framework' },
    { name: 'Vite', level: 80, icon: 'vite', category: 'tooling' },
    { name: 'Phaser 3', level: 75, icon: 'phaser', category: 'game-engine' }
  ],
  
  backend: [
    { name: 'Python', level: 90, icon: 'python', category: 'language' },
    { name: 'Flask', level: 90, icon: 'flask', category: 'framework' },
    { name: 'FastAPI', level: 85, icon: 'fastapi', category: 'framework' },
    { name: 'SQLAlchemy', level: 85, icon: 'sqlalchemy', category: 'orm' },
    { name: 'Flask-SocketIO', level: 80, icon: 'socketio', category: 'real-time' }
  ],
  
  database: [
    { name: 'PostgreSQL', level: 85, icon: 'postgresql', category: 'relational' },
    { name: 'Supabase', level: 80, icon: 'supabase', category: 'cloud' },
    { name: 'pgAdmin', level: 80, icon: 'pgadmin', category: 'tool' }
  ],
  
  devops: [
    { name: 'Git', level: 90, icon: 'git', category: 'vcs' },
    { name: 'GitHub', level: 90, icon: 'github', category: 'platform' },
    { name: 'Vercel', level: 85, icon: 'vercel', category: 'deployment' },
    { name: 'Railway', level: 80, icon: 'railway', category: 'deployment' },
    { name: 'WSL', level: 85, icon: 'linux', category: 'environment' }
  ],
  
  tools: [
    { name: 'VS Code', level: 95, icon: 'vscode', category: 'ide' },
    { name: 'Jira', level: 80, icon: 'jira', category: 'project-management' },
    { name: 'Postman', level: 85, icon: 'postman', category: 'api-testing' }
  ],
  
  specializations: [
    { 
      name: 'AI Integration', 
      description: 'Experience integrating Ollama, ElevenLabs, and other AI APIs',
      projects: ['JARVIS']
    },
    { 
      name: 'Ethical Hacking', 
      description: 'Kali Linux, nmap, Metasploit, Burp Suite, Hydra',
      platforms: ['TryHackMe', 'HackTheBox']
    },
    { 
      name: 'Real-time Systems', 
      description: 'WebSocket implementation with Flask-SocketIO',
      projects: ['Dead Zone: Infinite']
    },
    {
      name: 'Game Development',
      description: 'Phaser 3 game engine, multiplayer sync, boss AI',
      projects: ['Dead Zone: Infinite']
    }
  ]
};

export const getSkillsByCategory = (category) => {
  const allSkills = [...skills.frontend, ...skills.backend, ...skills.database, ...skills.devops, ...skills.tools];
  return allSkills.filter(skill => skill.category === category);
};