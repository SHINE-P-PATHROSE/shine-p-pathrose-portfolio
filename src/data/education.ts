export interface EducationItem {
  id: string
  degree: string
  institution: string
  affiliation?: string
  period: string
  score: string
  scoreLabel: string
}

export const education: EducationItem[] = [
  {
    id: 'be-cse',
    degree: 'Bachelor of Engineering — Computer Science and Engineering',
    institution: 'Vins Christian College of Engineering',
    affiliation: 'Anna University',
    period: '2020 – 2024',
    score: '7.96',
    scoreLabel: 'CGPA',
  },
  {
    id: 'hss',
    degree: 'Higher Secondary — Computer Science',
    institution: 'Evans H S S Parassala',
    period: '2018 – 2020',
    score: '67%',
    scoreLabel: 'Percentage',
  },
  {
    id: 'sslc',
    degree: 'SSLC',
    institution: 'Samuel L M S H S Parassala',
    period: '2017 – 2018',
    score: '82%',
    scoreLabel: 'Percentage',
  },
]

export const certification = {
  title: 'Python Full Stack Development Certification',
  issuer: 'Bootstack Academy',
}
