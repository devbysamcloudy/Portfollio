export const experience = [
  {
    id: 'moringa-school',
    title: 'Full Stack Software Development Student',
    organization: 'Moringa School',
    location: 'Nairobi, Kenya',
    startDate: '2024-06', // Adjust to your actual start date
    endDate: '2026-07',
    current: true,
    type: 'education',
    description: 'Intensive full-stack software development program covering React, TypeScript, Python, Flask, FastAPI, PostgreSQL, and modern development practices.',
    highlights: [
      'Built JARVIS AI Personal Assistant as capstone project',
      'Served as Team Lead on group project',
      'Mentored by Daniel Karanja and Dennis Kiboi',
      'Completed multiple full-stack projects including game development',
      'Achieved proficiency in both frontend and backend technologies'
    ],
    technologies: ['React', 'Python', 'Flask', 'PostgreSQL', 'FastAPI', 'JavaScript']
  },
  {
    id: 'garytech-freelance',
    title: 'Freelance Frontend Developer',
    organization: 'Self-employed',
    location: 'Nairobi, Kenya',
    startDate: '2026-01',
    endDate: null,
    current: true,
    type: 'work',
    description: 'Freelancing and interning to sharpen real-world skills, working on client projects while continuously improving across the full stack.',
    highlights: [
      'Delivered private client web projects end-to-end',
      'Improved React and API integration skills through real projects',
      'Practiced responsive design and cross-device compatibility',
      'Continuously learning and applying new technologies'
    ],
    technologies: ['React', 'JavaScript', 'Python', 'Flask', 'REST APIs']
  }
];

export const getCurrentExperience = () => experience.filter(exp => exp.current);
export const getExperienceByType = (type) => experience.filter(exp => exp.type === type);