export const projects = [
  {
    id: 'jarvis-ai-assistant',
    title: 'JARVIS AI Personal Assistant',
    shortDescription: 'Full-stack AI assistant with voice integration and intelligent task management',
    category: ['fullstack', 'ai', 'capstone'],
    featured: true,
    
    techStack: {
      frontend: ['React', 'TypeScript', 'Bootstrap'],
      backend: ['Flask', 'SQLAlchemy', 'PostgreSQL'],
      deployment: ['Vercel', 'Railway', 'Supabase'],
      integrations: ['ElevenLabs Voice', 'OpenWeatherMap', 'Ollama (gemma4)']
    },
    
    description: `A comprehensive AI personal assistant built as my Moringa School capstone project. 
    JARVIS combines voice interaction, intelligent task management, and real-time data integration 
    to provide a seamless user experience.`,
    
    features: [
      'JWT-based authentication system',
      'Voice interaction with ElevenLabs integration',
      'Real-time weather widget with OpenWeatherMap',
      'AI chat powered by Ollama (gemma4:latest)',
      'PostgreSQL database (local via pgAdmin, cloud via Supabase)',
      'OneDrive integration for file management'
    ],
    
    challenges: [
      'Implementing seamless voice-to-text and text-to-voice conversion',
      'Designing scalable database schema for user sessions and AI memory',
      'Balancing local development with cloud deployment strategies'
    ],
    
    outcomes: [
      'Successfully defended as Moringa School capstone project',
      'Demonstrated full-stack proficiency from database to UI',
      'Integrated multiple third-party APIs into cohesive system'
    ],
    
    images: [
      '/assets/images/projects/jarvis/hero.png',
      '/assets/images/projects/jarvis/dashboard.png',
      '/assets/images/projects/jarvis/chat.png'
    ],
    
    links: {
      github: 'https://github.com/devbysamcloudy/jarvis',
      live: null, // or add demo link if you have one
      video: null
    },
    
    date: '2025-12',
    status: 'completed'
  },
  
  {
    id: 'dead-zone-infinite',
    title: 'Dead Zone: Infinite',
    shortDescription: 'Multiplayer zombie survival RPG with co-op mechanics and boss AI',
    category: ['game-dev', 'fullstack'],
    featured: true,
    
    techStack: {
      frontend: ['React', 'Vite', 'Phaser 3'],
      backend: ['Flask', 'Flask-SocketIO', 'PostgreSQL'],
      deployment: ['Vercel', 'Railway'],
      features: ['PWA Support', 'Real-time Multiplayer']
    },
    
    description: `A 48-file, multi-phase zombie survival RPG featuring complex game systems including 
    boss AI, cooperative multiplayer synchronization, and a Masters progression system. Built as a 
    companion project to JARVIS, showcasing game development and real-time communication skills.`,
    
    features: [
      'Complex boss AI with multiple behavior patterns',
      'Real-time co-op multiplayer with WebSocket sync',
      'Masters progression system with unique abilities',
      'Mobile-optimized PWA deployment',
      'PostgreSQL-backed player data persistence',
      'Multi-phase game progression system'
    ],
    
    images: [
      '/assets/images/projects/dead_zone/gameplay.png'
    ],
    
    links: {
      github: 'https://github.com/devbysamcloudy/dead-zone-infinite',
      live: null,
      video: null
    },
    
    date: '2025-11',
    status: 'completed'
  },
  
  {
    id: 'exp-system-dashboard',
    title: 'EXP System Dashboard',
    shortDescription: 'Gamified developer dashboard with GitHub stats and XP progression',
    category: ['fullstack', 'tools'],
    featured: false,
    
    techStack: {
      frontend: ['React', 'Vite'],
      backend: ['FastAPI'],
      integrations: ['GitHub API', 'Jira']
    },
    
    description: `Gamified developer productivity dashboard that tracks GitHub activity, coding quests, 
    AI usage monitoring, and implements an XP/leveling system. Project managed through Jira with 
    tickets ESA-1 through ESA-10.`,
    
    features: [
      'GitHub statistics integration',
      'Coding quest system with rewards',
      'AI usage monitoring and analytics',
      'XP and leveling progression mechanics',
      'Jira-integrated task tracking'
    ],
    
    images: [
      '/assets/images/projects/exp_dashboard/dashboard.png'
    ],
    
    links: {
      github: null,
      live: null,
      video: null
    },
    
    date: '2025-10',
    status: 'completed'
  }
];

// Helper functions
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category) => projects.filter(p => p.category.includes(category));
export const getProjectById = (id) => projects.find(p => p.id === id);