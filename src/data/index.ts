import { NavItem, Skill, Experience, Project, Education, Testimonial, SocialLink } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend'},
  { name: 'TailwindCSS', level: 75, category: 'frontend'},
  { name: 'HTML', level: 90, category: 'frontend' },
  { name: 'CSS', level: 85, category: 'frontend' },

  // Backend
  { name: 'Python', level: 95, category: 'backend' },
  { name: 'SQL', level: 90, category: 'backend' },
  { name: 'Java', level: 80, category: 'backend' },
  { name: 'FastAPI', level: 90, category: 'backend' },
  { name: 'Django', level: 85, category: 'backend' },
  { name: 'Flask', level: 80, category: 'backend' },
  { name: 'RESTful APIs', level: 90, category: 'backend' },
  { name: 'PostgreSQL', level: 85, category: 'backend' },
  { name: 'MySQL', level: 80, category: 'backend' },
  { name: 'Aurora', level: 75, category: 'backend' },
  { name: 'SQL Server', level: 70, category: 'backend' },

  // Cloud Platforms
  { name: 'AWS', level: 85, category: 'cloud' },
  { name: 'GCP', level: 80, category: 'cloud' },
  { name: 'Azure', level: 70, category: 'cloud' },

  // DevOps & Automation
  { name: 'Shell Scripting', level: 75, category: 'devops' },
  { name: 'Git', level: 85, category: 'devops' },
  { name: 'GitHub Actions', level: 80, category: 'devops' },
  { name: 'Jenkins', level: 75, category: 'devops' },
  { name: 'CI/CD', level: 80, category: 'devops' },
  { name: 'Terraform', level: 70, category: 'devops' },
  { name: 'Docker', level: 85, category: 'devops' },
  { name: 'Kubernetes', level: 80, category: 'devops' },

  // Engineering Practices (Project + Security + Data Tools)
  { name: 'Apache Kafka', level: 80, category: 'project' },
  { name: 'Apache Airflow', level: 85, category: 'project' },
  { name: 'Apache Spark', level: 75, category: 'project' },
  { name: 'Agile', level: 90, category: 'project' },
  { name: 'Scrum', level: 85, category: 'project' },
  { name: 'TDD', level: 75, category: 'project' },
  { name: 'OAuth2.0', level: 75, category: 'project' },
  { name: 'JWT', level: 75, category: 'project' }
];



export const professionalExperience: Experience[] = [
  {
    title: 'System Engineer (Cloud Backend Developer)',
    company: 'Infosys Pvt. Ltd.',
    location: 'Hyderabad, India',
    startDate: 'June 2021',
    endDate: 'Nov 2022',
    description: [
      'Built microservices using FastAPI and Django that handled over 1 million API requests per day, reducing latency by 35%.',
      'Deployed applications on AWS EKS with Terraform, ensuring 99.99% uptime in production.' ,
      'Created CI/CD pipelines using GitHub Actions and Jenkins, cutting deployment errors by 90% and speeding up releases by 60%.',
      'Implemented secure authentication with OAuth2.0 and JWT, supporting 10,000+ concurrent users without breaches.',
      'Optimized data pipelines with Airflow and Kafka, reducing data delivery time from hours to under 5 minutes.',
    ],
    technologies: ['FastAPI', 'Django', 'Python', 'AWS EKS', 'Terraform', 'GitHub Actions', 'Jenkins', 'OAuth2.0', 'JWT', 'AWS Aurora', 'Amazon S3', 'PostgreSQL', 'Apache Airflow', 'Apache Kafka'],
  },
  {
    title: 'Associate Data Engineer (Python & Cloud Developer)',
    company: 'Innominds Software Pvt. Ltd.',
    location: 'Hyderabad, India',
    startDate: 'Oct 2019',
    endDate: 'July 2021',
    description: [
      'Built ETL pipelines using Apache Airflow and Python, boosting data processing efficiency by 50% across 5+ business units.',
      'Deployed apps on GCP Cloud Functions and AWS ECS, enabling autoscaling to handle 2x traffic without downtime.',
      'Designed a real-time Spark + Kafka pipeline processing over 100K events/min, cutting insights latency from 1 hour to under 2 minutes.',
      'Optimized PostgreSQL and Aurora for analytics, reducing query execution time by 40%.',
      'Used Docker and cloud-native monitoring tools to ensure stable deployments and reduce production bugs and recovery time by 50%.',
    ],
    technologies: ['Apache Airflow', 'Python', 'GCP Cloud Functions', 'AWS ECS', 'Apache Spark', 'Apache Kafka', 'PostgreSQL', 'AWS Aurora', 'Docker', 'Cloud-native monitoring tools'],
  },
];

export const additionalExperience: Experience[] = [
  {
    title: 'Cloud Computing Intern',
    company: 'Guru Nanak Institutions',
    location: 'Hyderabad, India',
    startDate: 'Sep 2018',
    endDate: 'Aug 2019',
    description: [
      'Deployed and managed 10+ cloud-native applications on GCP and AWS, improving scalability and reducing costs by 25%.',
      'Used Docker for containerization to ensure consistent development and production environments.',
      'Managed orchestration with Kubernetes to handle scalable deployments in production.',
      'Automated cloud infrastructure provisioning using Infrastructure as Code (IaC) tools.',
      'Secured 15+ API integrations with proper access controls for enhanced security.',
    ],
    technologies: ['GCP', 'AWS', 'Docker', 'Kubernetes', 'Infrastructure as Code (IaC)', 'API integrations'],
  },
  {
    title: 'Data Science and Machine learning through Python-Intern',
    company: 'Aditi Digital Solutions',
    location: 'Hyderabad, India',
    startDate: 'Jan 2021',
    endDate: 'June 2021',
    description: [
      'Built and deployed over 5 machine learning models using Python, Pandas, NumPy, and Scikit-Learn with 85%+ accuracy.',
      'Designed efficient data pipelines, reducing model training and deployment time by 40%.',
      'Collaborated with business teams to define 10+ key performance indicators (KPIs).',
      'Developed interactive dashboards that improved data-driven decision-making by 30%.',
      'Focused on delivering end-to-end ML solutions from data preparation to deployment.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Data Pipelines', 'Dashboards'],
  },
];


export const projects: Project[] = [
  // ...existing projects
  {
    id: 'vm-cloud-deployment',
    title: 'Virtual Machine Deployment on Cloud',
    description:
      'Deployed virtual machines on AWS and GCP to gain hands-on experience with cloud infrastructure. Configured IAM roles and security groups, and automated deployments using Terraform.',
    image:
      'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['AWS', 'GCP', 'Terraform', 'IAM', 'Cloud Networking'],
    liveUrl: 'https://www.youtube.com/watch?v=g2Il8cxNv18&ab_channel=KahanDataSolutions',
    githubUrl: 'https://github.com/veldurthys1-git/cloud_vm_deployment',
    featured: true,
  },
  {
    id: 'sales-forecasting-ml',
    title: 'Sales Forecasting Using Machine Learning',
    description:
      'Developed a predictive sales model using Python, Scikit-learn, Pandas, and NumPy, achieving 80%+ accuracy. Processed historical data to identify sales trends and built a dashboard with Matplotlib to visualize key insights.',
    image:
      'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    liveUrl: 'https://www.youtube.com/watch?v=pCuV_7H2vyQ&ab_channel=NicholasRenotte',
    githubUrl: 'https://github.com/veldurthys1-git/ml_sales_forecasting',
    featured: false,
  },
];


export const education: Education[] = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of Dayton',
    location: 'Dayton, Ohio',
    graduationDate: '2024',
    description: 'Focused on advanced topics including cloud computing, distributed systems, machine learning, and backend development. Completed projects involving real-time data processing, API design, and secure system architecture. Gained hands-on experience with modern technologies like Python, Docker, Kubernetes, and cloud platforms such as AWS and GCP.',
  },
  {
    degree: 'Bachelor of Science in Electronics and Communication Engineering',
    institution: 'Guru Nanak University ',
    location: 'Hyderabad, India',
    graduationDate: '2020',
    description: 'Gained a strong foundation in electronics, signal processing, and communication systems. Developed problem-solving skills through coursework in embedded systems, digital logic, and microprocessors. Completed hands-on projects involving circuit design, IoT systems, and basic programming in C and Python.',
  },
];

export const testimonials: Testimonial[] = [
  {
    content: "An exceptional backend engineer who consistently delivers high-performance, scalable systems. Saicharan’s expertise in Python, FastAPI, and cloud-native technologies made a measurable impact—reducing system latency by 35% and deployment errors by 90%.",
    author: '— Ravi Kulkarni',
    role: 'Senior Engineering Manager',
    company: 'Infosys',
  },
  {
    content: 'Saicharan demonstrates a rare combination of deep technical skills and business insight. His work on data pipelines and real-time processing with Kafka and Spark greatly enhanced our data delivery and decision-making capabilities.',
    author: '— Priya Menon',
    role: 'Lead Data Engineer',
    company: 'Innominds',
  },
  {
    content: 'A dependable team player with a strong DevOps mindset. Saicharan led critical cloud deployments using Terraform and Docker across AWS and GCP, helping us achieve 99.99% uptime and robust CI/CD workflows.',
    author: '— Neeraj Verma',
    role: 'Cloud Solutions Architect',
    company: 'Guru Nanak University',
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/veldurthys1-git',
    icon: 'Github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/veldurthy-saicharan/',
    icon: 'Linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://x.com/Veldurthysaich1',
    icon: 'Twitter',
  },
  {
    platform: 'Email',
    url: 'mailto:veldurthysaicharan5@gmail.com',
    icon: 'Mail',
  },
];

export const aboutMe = {
  title: 'About Me',
  description: `Hi, I’m Saicharan Veldurthy, a Python Backend Developer with over 3.5 years of experience specializing in building scalable, cloud-native systems. My core expertise lies in FastAPI, Flask, and developing RESTful APIs for high-performance GenAI and Retrieval-Augmented Generation (RAG) applications.

I’ve designed and deployed prompt pipelines using LangChain and OpenAI, enabling real-time classification, summarization, and data extraction. My backend work is often integrated with vector databases like Pinecone and FAISS, and seamlessly connects with frontend systems built in React and Node.js.

In production, I work extensively with Google Cloud Platform, leveraging Cloud Run, Pub/Sub, and Firestore, along with CI/CD pipelines using GitHub Actions. I ensure code reliability with 95%+ test coverage through PyTest, and prioritize clean, secure implementations using OAuth2, JWT, and best practices for GDPR and ISO 27001 compliance.

I hold a Master’s in Computer Science from the University of Dayton and bring a strong foundation in AI infrastructure, data engineering, and automation. I’m passionate about solving complex problems and contributing to teams at the forefront of machine learning and cloud technologies.`,
};

export const contactInfo = {
  email: 'veldurthysaicharan5@gmail.com',
  phone: '+1 (937)-829-0856',
  location: 'Mesa, Arizona',
};