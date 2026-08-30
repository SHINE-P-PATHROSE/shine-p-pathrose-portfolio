export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'baehal',
    role: 'Associate Engineer',
    company: 'Baehal Software Limited',
    period: 'Aug 2026 – Present',
    highlights: [],
  },
  {
    id: 'isro',
    role: 'Graduate Apprentice Trainee',
    company: 'U R Rao Satellite Centre (ISRO)',
    period: 'Aug 2025 – Aug 2026',
    highlights: [
      'Developed the Feedback Directory web application for managing project observations.',
      'Built secure login functionality and dynamic project navigation.',
      'Developed file/document management — view, download and delete project-related files.',
      'Automated project-issue scraping using Python.',
      'Developed an internal Project Management Web Application for the Control Systems Group.',
      'Built backend services and RESTful APIs using Python and FastAPI.',
      'Implemented authentication and role-based access control.',
      'Designed responsive interfaces using HTML5, CSS3, Bootstrap and JavaScript.',
      'Used SQLite for application data management.',
      'Collaborated with engineers for requirements gathering, testing, debugging and optimization.',
    ],
  },
  {
    id: 'miss-india',
    role: 'Technical Support Staff',
    company: 'Miss India',
    period: 'Jun 2025 – Jul 2025',
    highlights: [
      'IT troubleshooting and system/network support.',
      'Website maintenance and infrastructure support.',
    ],
  },
  {
    id: 'moonhive',
    role: 'Full-Stack Developer Intern',
    company: 'Moonhive Private Limited',
    period: 'Nov 2024 – Feb 2025',
    highlights: [
      'Full-stack web development with Python/Django.',
      'Built interfaces with HTML, CSS, Bootstrap and JavaScript.',
      'Developed RESTful APIs and SQL-backed features.',
      'Application maintenance and performance improvement.',
    ],
  },
]
