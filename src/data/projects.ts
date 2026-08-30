export interface Project {
  title: string
  slug: string
  category: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image: string
  featured: boolean
  highlights: string[]
  caseStudy?: boolean
  filterTags: string[]
  caseStudyDetails?: {
    challenge: string
    approach: string
    outcome: string
  }
}

export const featuredProjects: Project[] = [
  {
    title: 'SnapBazaar',
    slug: 'snapbazaar',
    category: 'E-Commerce | Django | Full Stack',
    description:
      'A full-stack e-commerce platform with product browsing, search, cart management and user authentication.',
    technologies: ['Python', 'Django', 'JavaScript', 'CSS', 'HTML', 'MySQL'],
    githubUrl: 'https://github.com/SHINE-P-PATHROSE/SnapBazaar-Django',
    image: '/projects/snapbazaar.svg',
    featured: true,
    filterTags: ['Full Stack', 'E-Commerce'],
    highlights: [
      'Product listing with search and filtering',
      'Shopping cart and user authentication',
      'Profile management and product model design',
      'Backend APIs with responsive UI',
      'Image optimization for product displays',
    ],
    caseStudyDetails: {
      challenge: 'Create a complete shopping flow that feels simple for customers while keeping product and order data organized.',
      approach: 'Built Django models and authentication around a responsive Bootstrap-style storefront with search, cart, profile and checkout workflows.',
      outcome: 'Delivered a practical full-stack commerce foundation with reusable product, user and order workflows.',
    },
  },
  {
    title: 'Employee Leave & Attendance Management',
    slug: 'leave-attendance',
    category: 'Django | HR Workflow | REST API',
    description:
      'A business application for tracking employee attendance, leave requests and loss-of-pay with role-based dashboards.',
    technologies: ['Python', 'Django', 'Django REST Framework', 'Bootstrap', 'JavaScript'],
    image: '/projects/leave-attendance.svg',
    featured: true,
    caseStudy: true,
    filterTags: ['Full Stack', 'Business Apps'],
    highlights: [
      'Attendance management and leave request workflows',
      'LOP tracking with admin and employee dashboards',
      'Role-based access control and authentication',
      'CRUD REST APIs with responsive UI',
      'Real-time monitoring of attendance status',
    ],
    caseStudyDetails: {
      challenge: 'Replace manual attendance and leave tracking with a controlled workflow for employees and administrators.',
      approach: 'Combined role-based Django workflows, REST endpoints and dashboard views for attendance, leave approval and loss-of-pay tracking.',
      outcome: 'Created a single source of truth for daily attendance and leave decisions across employee and admin roles.',
    },
  },
  {
    title: 'Project Management / Feedback Directory',
    slug: 'feedback-directory',
    category: 'FastAPI | Python | Internal Tools',
    description:
      'Professional engineering project — an internal tool for project navigation, document management and feedback workflows.',
    technologies: ['Python', 'FastAPI', 'SQLite', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    image: '/projects/feedback-directory.svg',
    featured: true,
    caseStudy: true,
    filterTags: ['Full Stack', 'Business Apps', 'Automation'],
    highlights: [
      'REST API backend with authentication and RBAC',
      'Dynamic project navigation and document management',
      'Automated issue scraping with Python',
      'File view, download and delete capabilities',
      'Responsive frontend with SQLite data layer',
    ],
    caseStudyDetails: {
      challenge: 'Give engineering teams a reliable way to navigate projects, manage documents and track feedback in one place.',
      approach: 'Designed a FastAPI service with SQLite persistence, authentication, RBAC and file-management endpoints backed by a responsive frontend.',
      outcome: 'Turned scattered project observations and files into a searchable internal workflow with controlled access.',
    },
  },
  {
    title: 'NexHire',
    slug: 'nexhire',
    category: 'Web Application | Full Stack',
    description:
      'A job application web platform built with Python and HTML, focused on connecting applicants with opportunities.',
    technologies: ['Python', 'HTML'],
    githubUrl: 'https://github.com/SHINE-P-PATHROSE/NexHire',
    image: '/projects/nexhire.svg',
    featured: true,
    filterTags: ['Full Stack', 'Business Apps'],
    highlights: [
      'Full-stack web application for job applications',
      'Python backend with HTML frontend',
      'Structured repository with Python and HTML components',
    ],
  },
  {
    title: 'Buddy_punch',
    slug: 'buddy-punch',
    category: 'Web Application',
    description:
      'A leave management web application built with Python, HTML, CSS and JavaScript for tracking employee leave.',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/SHINE-P-PATHROSE/Buddy_punch',
    liveUrl: 'http://Shaaa.pythonanywhere.com',
    image: '/projects/buddy-punch.svg',
    featured: true,
    filterTags: ['Full Stack', 'Business Apps'],
    highlights: [
      'Leave management workflow application',
      'Python backend with responsive frontend',
      'HTML, CSS and JavaScript interface layers',
    ],
  },
  {
    title: 'Mangalam Hope Pipes Assessment',
    slug: 'mangalam-hope-pipes',
    category: 'Frontend | Responsive Web Design',
    description:
      'A corporate website showcasing products, certifications and company information with responsive design.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/SHINE-P-PATHROSE/mangalam-hope-pipes-assessment',
    image: '/projects/mangalam-real.png',
    featured: true,
    filterTags: ['Frontend', 'Responsive UI'],
    highlights: [
      'Corporate website with product showcase',
      'FAQ, certifications and contact sections',
      'Responsive design with cross-browser compatibility',
      'Performance-optimized frontend delivery',
    ],
  },
]

export const moreProjectSlugs = [
  'SnapBazaar-Django',
  'NexHire',
  'Buddy_punch',
  'ShopSphere',
  'Cookiees',
  'institution-project',
  'Email_scraper',
  'bank_website',
  'Todo_app',
  'todo_application',
  'mangalam-hope-pipes-assessment',
  'GitHub-Commands',
] as const

export const staticRepoMeta: Record<
  string,
  { description: string; stack: string; liveUrl?: string; image?: string }
> = {
  'SnapBazaar-Django': {
    description: 'E-commerce website with Django backend.',
    stack: 'Python, Django, JavaScript',
    image: '/projects/snapbazaar.svg',
  },
  NexHire: {
    description: 'AI based Job Application platform.',
    stack: 'Python, HTML',
    image: '/projects/nexhire.svg',
  },
  Buddy_punch: {
    description: 'Leave management web application.',
    stack: 'Python, HTML, CSS, JavaScript',
    liveUrl: 'http://Shaaa.pythonanywhere.com',
    image: '/projects/buddy-punch.svg',
  },
  ShopSphere: {
    description: 'ShopSphere Ecommerce application.',
    stack: 'Python, HTML, JavaScript, CSS',
    image: '/projects/shopsphere.svg',
  },
  Cookiees: {
    description: 'Cookiees food ordering application.',
    stack: 'Python, JavaScript, HTML, CSS',
    image: '/projects/cookiees.svg',
  },
  'institution-project': {
    description: 'Institution website project.',
    stack: 'HTML',
    image: '/projects/institution.svg',
  },
  Email_scraper: {
    description: 'Python-based email scraping utility.',
    stack: 'Python, HTML',
    liveUrl: 'https://email-scraper-rosy.vercel.app',
    image: '/projects/email-scraper.svg',
  },
  bank_website: {
    description: 'Bank website frontend project.',
    stack: 'HTML',
    image: '/projects/bank-website.svg',
  },
  Todo_app: {
    description: 'Task management application.',
    stack: 'Python, HTML',
    image: '/projects/todo.svg',
  },
  todo_application: {
    description: 'Todo application to manage tasks.',
    stack: 'Python',
    image: '/projects/todo.svg',
  },
  'mangalam-hope-pipes-assessment': {
    description: 'Corporate responsive website assessment.',
    stack: 'HTML, CSS, JavaScript',
    image: '/projects/mangalam.svg',
  },
  'GitHub-Commands': {
    description: 'GitHub commands reference and notes.',
    stack: 'Documentation',
  },
}
