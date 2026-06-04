export type SkillSection = {
  title: string;
  skills: string[];
};

export const skillSections: SkillSection[] = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Dart']
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Flutter', 'HTML5', 'CSS3', 'TailwindCSS']
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebSocket', 'JWT Auth']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'SQLite', 'T-SQL']
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'AWS EC2/S3', 'CI/CD', 'Vercel', 'Linux', 'Jest', 'pytest']
  },
  {
    title: 'AI / ML',
    skills: ['Pinecone', 'TF Lite', 'Sentence Transformers', 'Claude API', 'Vector Search']
  }
];

