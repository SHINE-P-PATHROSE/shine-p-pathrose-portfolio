export type Proficiency = 'core' | 'working' | 'learning'

export interface SkillItem {
  name: string
  proficiency: Proficiency
}

export interface SkillCategory {
  id: string
  title: string
  skills: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: [
      { name: 'Python', proficiency: 'core' },
      { name: 'JavaScript', proficiency: 'core' },
      { name: 'PHP', proficiency: 'working' },
      { name: 'C++', proficiency: 'working' },
      { name: 'SQL', proficiency: 'core' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Django', proficiency: 'core' },
      { name: 'Django REST Framework', proficiency: 'core' },
      { name: 'FastAPI', proficiency: 'core' },
      { name: 'Flask', proficiency: 'working' },
      { name: 'RESTful APIs', proficiency: 'core' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'HTML5', proficiency: 'core' },
      { name: 'CSS3', proficiency: 'core' },
      { name: 'Bootstrap', proficiency: 'core' },
      { name: 'JavaScript', proficiency: 'core' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      { name: 'MySQL', proficiency: 'core' },
      { name: 'SQLite', proficiency: 'core' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git', proficiency: 'core' },
      { name: 'GitHub', proficiency: 'core' },
      { name: 'Postman', proficiency: 'working' },
      { name: 'Excel', proficiency: 'working' },
      { name: 'Figma', proficiency: 'working' },
      { name: 'Linux', proficiency: 'working' },
      { name: 'RHEL', proficiency: 'working' },
    ],
  },
  {
    id: 'learning',
    title: 'Currently Learning',
    skills: [
      { name: 'React.js', proficiency: 'learning' },
      { name: 'Docker', proficiency: 'learning' },
      { name: 'Advanced Django', proficiency: 'learning' },
      { name: 'Advanced REST API development', proficiency: 'learning' },
    ],
  },
]

export const proficiencyLabels: Record<Proficiency, string> = {
  core: 'Core',
  working: 'Working Knowledge',
  learning: 'Currently Learning',
}

export const architectureLayers = [
  { label: 'Frontend', items: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'] },
  { label: 'REST API', items: ['Django REST Framework', 'FastAPI'] },
  { label: 'Backend', items: ['Python'] },
  { label: 'Database', items: ['MySQL', 'SQLite'] },
]
