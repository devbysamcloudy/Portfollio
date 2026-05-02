export const skills = {
  frontend: [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 82 },
    { name: 'TypeScript', level: 10 },
  ],
  backend: [
    { name: 'Python', level: 88 },
    { name: 'C', level: 75 },
    { name: 'Flask', level: 85 },
    { name: 'REST API', level: 83 },
    { name: 'FastAPI', level: 78 },
  ],
  database: [
    { name: 'MySQL', level: 80 },
    { name: 'PostgreSQL', level: 78 },
  ],
  devops: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'Linux / WSL', level: 78 },
    { name: 'Vercel', level: 80 },
    { name: 'Railway', level: 75 },
  ],
  specializations: [
    {
      name: 'Full Stack Development',
      description: 'Building complete web applications from responsive frontends in React to robust Python backends with Flask and FastAPI.',
      projects: ['Expense Dashboard', 'Logistics System'],
    },
    {
      name: 'AI Integration',
      description: 'Integrating AI APIs like Ollama and ElevenLabs to build intelligent, voice-enabled applications.',
      projects: ['JARVIS AI Assistant'],
    },
    {
      name: 'Game Development',
      description: 'Developing multiplayer browser games using Phaser 3 with real-time WebSocket sync via Flask-SocketIO.',
      projects: ['Dead Zone: Infinite'],
    },
  ],
};

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/devbysamcloudy',
    icon: 'github',
    username: '@devbysamcloudy',
    primary: true
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/your-profile', // Add your LinkedIn
    icon: 'linkedin',
    username: 'Samuel',
    primary: true
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/your-handle', // Optional
    icon: 'twitter',
    username: '@yourhandle',
    primary: false
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'email',
    username: 'your.email@example.com',
    primary: true
  }
];

export const getPrimarySocials = () => socialLinks.filter(link => link.primary);