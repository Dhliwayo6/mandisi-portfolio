export const projects = [
  {
    id: '01',
    name: 'Self-Storage Platform',
    subtitle: 'Capstone project',
    desc: 'Serverless self-storage booking platform built with AWS SAM (Infrastructure-as-Code). REST API via API Gateway with Cognito auth, async billing and notifications via SQS & EventBridge, React front-end hosted on S3/CloudFront with automated GitLab CI/CD deployment.',
    tags: ['Python', 'AWS Lambda', 'DynamoDB', 'Cognito', 'S3', 'SQS', 'GitLab CI/CD', 'SAM'],
    year: '2025',
    featured: true,
  },
  {
    id: '02',
    name: 'VaultOps',
    subtitle: 'Inventory management',
    desc: 'Full-stack inventory management web app for SMEs. Spring Boot REST API back-end with relational MySQL schema supporting real-time stock visibility and reporting queries.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API'],
    year: '2025',
  },
  {
    id: '03',
    name: 'Tasked',
    subtitle: 'Task management API',
    desc: 'Secure task management REST API with JWT-based authentication, role-based authorisation, and MySQL data persistence. Built with a focus on clean architecture and security.',
    tags: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'Maven'],
    year: '2025',
  },
  {
    id: '04',
    name: 'Project Collaboration Tool',
    subtitle: 'Multi-user platform',
    desc: 'Multi-user collaboration platform with REST API back-end, relational MySQL persistence, and Maven build automation. Designed for team workflows and shared project tracking.',
    tags: ['Java', 'Spring Boot', 'Maven', 'MySQL', 'Git'],
    year: '2025',
  },
  {
    id: '05',
    name: 'NT Simple Solutions',
    subtitle: 'Business website',
    desc: 'Business website for a Zimbabwe-based construction startup, built and deployed on Netlify with continuous deployment. Integrated Formspree for contact form functionality.',
    tags: ['React', 'Netlify', 'Formspree', 'CSS'],
    year: '2025',
    link: '#',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks',
    items: ['Spring Boot', 'React', 'Flask', 'FastAPI', 'Javalin', 'JUnit'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Cognito', 'CloudFront', 'SQS', 'SES', 'Docker', 'GitLab CI/CD', 'GitHub Actions', 'AWS SAM'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'SQLite3', 'DynamoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Maven', 'IntelliJ IDEA', 'VS Code'],
  },
]

export const experience = [
  {
    role: 'Front Desk Supervisor',
    org: 'WeThinkCode',
    location: 'Johannesburg',
    period: 'Sept 2025 – Mar 2026',
    desc: 'Supervised a team of 10, tracking compliance and escalating performance concerns. Maintained accurate digital records and proposed data-driven improvements to campus workflows.',
  },
  {
    role: 'Technical Mentor',
    org: 'WeThinkCode',
    location: 'Johannesburg',
    period: 'Sept – Dec 2025',
    desc: 'Mentored first-year software engineering students through structured peer-to-peer support. Conducted code reviews, providing written feedback to reinforce clean code standards.',
  },
  {
    role: 'Front Desk Admin & Tech Support',
    org: 'WeThinkCode',
    location: 'Johannesburg',
    period: 'Jan – Sept 2025',
    desc: 'Troubleshot campus PCs and hardware/software issues. Managed student data tracking systems, attendance, biometric access logs, and shift scheduling.',
  },
  {
    role: 'Laboratory Assistant',
    org: 'Vaal University of Technology',
    location: 'Vanderbijlpark',
    period: 'Jun – Nov 2023',
    desc: 'Designed data collection workflows for CWI-affiliated environmental research. Quantified heavy metal concentrations in water samples.',
  },
  {
    role: 'Laboratory Assistant',
    org: 'Vaal University of Technology',
    location: 'Vanderbijlpark',
    period: 'Apr 2021 – Apr 2022',
    desc: 'Managed postgraduate research experiments in Tissue Culture and Cell Biology. Maintained precise laboratory records and supported senior researchers in executing controlled experiments.',
  },
  {
    role: 'Peer Mentor/Tutor',
    org: 'Vaal Univaersity of Technology',
    location: 'Vanderbjlpark',
    period: 'Jan – Oct 2020',
    desc: 'Planned and delivered revision sessions for first-year Biotechnology students. Reported on student performance trends and supported peers in building foundational understanding of core subject material.',
  },
]

export const education = [
  {
    qualification: 'Occupational Certificate in Software Engineering',
    institution: 'WeThinkCode',
    location: 'Johannesburg',
    period: '2024 – 2025',
    notes: 'Java OOP, REST APIs, AWS Cloud, Docker, CI/CD, Testing',
  },
  {
    qualification: 'Advanced Diploma in Biotechnology',
    institution: 'Vaal University of Technology',
    location: 'Vanderbijlpark',
    period: '2023',
    notes: 'Cum Laude honours',
  },
  {
    qualification: 'Diploma in Biotechnology',
    institution: 'Vaal University of Technology',
    location: 'Vanderbijlpark',
    period: '2018 – 2022',
    notes: 'Scientific methodology, quantitative analysis',
  },
]

export const certifications = [
  { name: 'WeThinkCode GenAI Course for Software Engineers', issuer: 'WeThinkCode', year: '2025' },
  { name: 'CS50P: Introduction to Programming with Python', issuer: 'Harvard University via edX', year: '2024' },
  { name: 'CS50SQL: Introduction to Databases with SQL', issuer: 'Harvard University via edX', year: '2024' },
]

