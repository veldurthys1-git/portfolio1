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
  // Frontend (from projects)
  { name: 'JavaScript', level: 80, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },
  { name: 'TailwindCSS', level: 75, category: 'frontend' },
  { name: 'HTML', level: 90, category: 'frontend' },
  { name: 'CSS', level: 85, category: 'frontend' },

  // Backend & APIs
  { name: 'Python', level: 95, category: 'backend' },
  { name: 'FastAPI', level: 90, category: 'backend' },
  { name: 'Flask', level: 85, category: 'backend' },
  { name: 'Django', level: 75, category: 'backend' },
  { name: 'RESTful APIs', level: 90, category: 'backend' },
  { name: 'gRPC', level: 80, category: 'backend' },
  { name: 'Pydantic', level: 85, category: 'backend' },
  { name: 'Marshmallow', level: 80, category: 'backend' },
  { name: 'OAuth2.0', level: 80, category: 'backend' },
  { name: 'JWT', level: 80, category: 'backend' },
  { name: 'Kong API Gateway', level: 75, category: 'backend' },
  { name: 'SQLAlchemy', level: 80, category: 'backend' },

  // Databases
  { name: 'SQL', level: 90, category: 'backend' },
  { name: 'PostgreSQL', level: 85, category: 'backend' },
  { name: 'MySQL', level: 80, category: 'backend' },
  { name: 'Oracle', level: 75, category: 'backend' },
  { name: 'Cassandra', level: 65, category: 'backend' },

  // Cloud Platforms (Wells Fargo/CareSource emphasis on GCP + AWS)
  { name: 'GCP', level: 90, category: 'cloud' },
  { name: 'AWS', level: 85, category: 'cloud' },
  { name: 'Azure', level: 60, category: 'cloud' },

  // GCP Services
  { name: 'GKE', level: 85, category: 'cloud' },
  { name: 'Cloud Run', level: 85, category: 'cloud' },
  { name: 'Pub/Sub', level: 85, category: 'cloud' },
  { name: 'BigQuery', level: 85, category: 'cloud' },
  { name: 'Cloud Build', level: 80, category: 'cloud' },
  { name: 'Secret Manager', level: 80, category: 'cloud' },
  { name: 'Cloud Tasks', level: 75, category: 'cloud' },
  { name: 'Cloud Logging & Monitoring', level: 80, category: 'cloud' },

  // AWS Services
  { name: 'AWS Lambda', level: 80, category: 'cloud' },
  { name: 'API Gateway', level: 80, category: 'cloud' },
  { name: 'S3', level: 85, category: 'cloud' },
  { name: 'RDS', level: 75, category: 'cloud' },

  // DevOps, Security & Automation
  { name: 'Git', level: 85, category: 'devops' },
  { name: 'CI/CD', level: 90, category: 'devops' },
  { name: 'GitLab CI/CD', level: 85, category: 'devops' },
  { name: 'GitHub Actions', level: 75, category: 'devops' },
  { name: 'Jenkins', level: 70, category: 'devops' },
  { name: 'Docker', level: 85, category: 'devops' },
  { name: 'Kubernetes', level: 85, category: 'devops' },
  { name: 'Terraform', level: 80, category: 'devops' },
  { name: 'HashiCorp Vault', level: 75, category: 'devops' },
  { name: 'Shell Scripting', level: 75, category: 'devops' },
  { name: 'SonarQube', level: 80, category: 'devops' },
  { name: 'Prisma Cloud', level: 75, category: 'devops' },
  { name: 'Snyk', level: 75, category: 'devops' },
  { name: 'Trivy', level: 75, category: 'devops' },
  { name: 'OWASP Secure Coding', level: 80, category: 'devops' },

  // Data Engineering & Streaming
  { name: 'ETL Pipelines', level: 85, category: 'data' },
  { name: 'Pandas', level: 85, category: 'data' },
  { name: 'Apache Kafka', level: 80, category: 'data' },
  { name: 'RabbitMQ', level: 70, category: 'data' },
  { name: 'PySpark', level: 70, category: 'data' },
  { name: 'Data Modeling', level: 80, category: 'data' },
  { name: 'Analytics Hub', level: 70, category: 'data' },

  // Testing & Quality
  { name: 'PyTest', level: 85, category: 'data' },
  { name: 'Behave (BDD)', level: 75, category: 'data' },
  { name: 'TDD/BDD', level: 80, category: 'data' },

  // Observability & On-call
  { name: 'Prometheus', level: 85, category: 'BI' },
  { name: 'Grafana', level: 85, category: 'BI' },
  { name: 'PagerDuty', level: 70, category: 'BI' },

  // (Optional) GenAI—kept modest since not core in featured roles
  { name: 'OpenAI API', level: 60, category: 'ai' },
  { name: 'LangChain', level: 55, category: 'ai' },
  { name: 'FAISS', level: 55, category: 'ai' },
  { name: 'Vector Databases', level: 55, category: 'ai' },
  { name: 'Hugging Face Transformers', level: 55, category: 'ai' }
];





export const professionalExperience: Experience[] = [
  {
    title: 'Backend Engineer – Python & Cloud Infrastructure',
    company: 'Wells Fargo',
    location: 'Arizona, USA',
    startDate: 'June 2024',
    endDate: 'Present',
    description: [
      'Architected and deployed microservices using FastAPI and Flask on GCP (GKE, Cloud Run), ensuring high-performance, low-latency APIs for enterprise systems.',
      'Developed RESTful and gRPC APIs integrated with OAuth2, JWT, and Google Identity, securing cross-platform authentication flows.',
      'Implemented event-driven microservices using Pub/Sub and Cloud Tasks, improving asynchronous data processing and scalability by 40%.',
      'Enhanced ETL pipelines using Python multiprocessing and Pandas, reducing data transformation time by 60%.',
      'Built and automated CI/CD pipelines with GitLab CI/CD and Cloud Build, embedding linting, testing, and security scans with SonarQube and Trivy.',
      'Integrated Prometheus and Grafana dashboards for observability, cutting downtime and alert response time by 45%.',
      'Mentored junior developers and collaborated with cross-functional teams to design secure, production-grade APIs adhering to OWASP standards.'
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Flask',
      'gRPC',
      'OAuth2',
      'JWT',
      'GCP (GKE, Cloud Run, Pub/Sub, BigQuery, Cloud Tasks)',
      'AWS Lambda',
      'Terraform',
      'GitLab CI/CD',
      'Prometheus',
      'Grafana',
      'SonarQube',
      'Pandas',
      'SQLAlchemy'
    ]
  },
  {
    title: 'Python Backend & Data Engineer – APIs, Big Data & ETL Pipelines',
    company: 'CareSource',
    location: 'Texas, USA',
    startDate: 'June 2023',
    endDate: 'May 2024',
    description: [
      'Designed and deployed scalable microservices with FastAPI and Flask on GKE and Cloud Run, enabling secure API-driven data workflows.',
      'Developed event-driven data pipelines integrating Pub/Sub, Cloud Storage, and BigQuery for real-time analytics and compliance monitoring.',
      'Implemented API payload validation with Pydantic and Marshmallow, ensuring strict schema compliance across systems.',
      'Automated infrastructure provisioning using Terraform with reusable modules for IAM, GKE clusters, and Secret Manager.',
      'Embedded security-as-code in CI/CD pipelines using Cloud Build and integrated Prisma Cloud, Snyk, and Trivy for vulnerability detection.',
      'Improved observability with Stackdriver Logging and Monitoring, reducing issue triage time by 50%.',
      'Collaborated in Agile teams to deliver production-ready APIs, enhancing compliance automation and data governance capabilities.'
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Flask',
      'Pydantic',
      'Terraform',
      'GCP (GKE, Cloud Run, Pub/Sub, BigQuery, Cloud Storage, Secret Manager)',
      'Kubernetes',
      'HashiCorp Vault',
      'SonarQube',
      'Prisma Cloud',
      'Snyk',
      'Trivy',
      'Cloud Build',
      'Agile-Scrum'
    ]
  }
];

export const additionalExperience: Experience[] = [
  {
    title: 'Python Developer – Full Stack Development',
    company: 'Infosys Ltd.',
    location: 'Hyderabad, India',
    startDate: 'June 2021',
    endDate: 'Dec 2022',
    description: [
      'Developed and maintained backend services using Flask and Django REST Framework, modernizing legacy Java systems into scalable microservices.',
      'Integrated ReactJS frontends with RESTful APIs, improving response times and front-end user experience across enterprise portals.',
      'Implemented secure authentication with OAuth2 and JWT, enforcing multi-tenant access for corporate systems.',
      'Built ETL workflows in Python and SQL to process and analyze large-scale real estate datasets.',
      'Containerized applications using Docker and deployed to AWS EC2/S3, improving scalability and deployment consistency.',
      'Automated CI/CD pipelines using Jenkins and GitLab CI/CD, achieving zero-downtime releases.',
      'Collaborated in Agile teams, conducting code reviews and debugging production issues to maintain SLA performance.'
    ],
    technologies: [
      'Python',
      'Flask',
      'Django REST Framework',
      'ReactJS',
      'Redux',
      'JavaScript (ES6+)',
      'PostgreSQL',
      'MySQL',
      'AWS EC2/S3',
      'Docker',
      'OAuth2',
      'JWT',
      'Jenkins',
      'GitLab CI/CD',
      'Agile-Scrum'
    ]
  },
  {
    title: 'Associate Python Developer – Python & Big Data Engineering',
    company: 'Innominds',
    location: 'Bangalore, India',
    startDate: 'Aug 2020',
    endDate: 'May 2021',
    description: [
      'Developed and deployed Python-based backend APIs using Flask to support large-scale data ingestion and analytics workflows.',
      'Built PySpark-based ETL pipelines processing 10TB+ data weekly for analytics and batch processing.',
      'Integrated Apache Kafka and Hadoop (HDFS, Hive) for streaming and distributed processing, improving system throughput by 30%.',
      'Automated nightly syncs and backup jobs using Python and Shell scripts, reducing manual tasks by 80%.',
      'Implemented PyTest test suites to enable CI-friendly validation of ETL workflows and APIs.',
      'Optimized SQL queries and schemas in PostgreSQL/MySQL to improve query performance for large datasets.',
      'Collaborated with cross-functional teams in Agile sprints, delivering production-ready solutions and improving team productivity.'
    ],
    technologies: [
      'Python',
      'Flask',
      'PySpark',
      'Apache Kafka',
      'Hadoop (HDFS, Hive)',
      'PostgreSQL',
      'MySQL',
      'AWS S3',
      'Azure Blob Storage',
      'Shell Scripting',
      'PyTest',
      'Docker',
      'CI/CD',
      'Agile-Scrum'
    ]
  }
];




export const projects: Project[] = [
  {
    id: 'ai-resume-matcher',
    title: 'AI-Powered Resume Matcher',
    description:
      'Built a platform to match resumes with job descriptions using NLP and vector search. Used FastAPI, LangChain, and FAISS for semantic matching; integrated OpenAI embeddings, PDF parsing, and deployed via Docker on AWS with CI/CD. Showcases practical AI/ML, NLP, and cloud deployment skills.',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['NLP', 'Semantic Search', 'Python', 'Transformers', 'Resume Parsing'],
    liveUrl: 'https://veldurthys1-git.github.io/AI-Powered-Resume-Matcher/',
    githubUrl: 'https://github.com/veldurthys1-git/AI-Powered-Resume-Matcher',
    featured: true,
  },
  {
    id: 'real-time-hospital-dashboard',
    title: 'Real-Time Hospital Operations Dashboard',
    description:
      'Built a real-time hospital dashboard with metrics on patients, staff, beds, departments, and alerts. Developed using React, TypeScript, and Tailwind CSS, with Lucide icons and modular components. Designed for live health data monitoring and intuitive admin visualization.',
    image:
      'https://images.pexels.com/photos/7088539/pexels-photo-7088539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Data Modeling', 'Domain Mapping & SSL', 'Monitoring', 'Infrastructure as Code (IaC)', 'Cloud Deployment', 'Real-Time Dashboard'],
    liveUrl: 'https://veldurthys1-git.github.io/Real-Time-Healthcare-Ops-Dashboard/',
    githubUrl: 'https://github.com/veldurthys1-git/Real-Time-Healthcare-Ops-Dashboard',
    featured: true,
  },
  {
    id: 'saas-dashboard-fastapi',
    title: 'Full-Stack SaaS Dashboard',
    description:
      'Developed a full-stack SaaS dashboard using FastAPI, PostgreSQL, and React, supporting 5K+ users/month with <150ms API latency and deployed via Kubernetes (EKS) with CI/CD and Prometheus-based monitoring.',
    image:
      'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['FastAPI', 'PostgreSQL', 'React', 'Kubernetes (EKS)', 'CI/CD', 'Prometheus'],
    liveUrl: 'https://veldurthys1-git.github.io/Full-Stack-SaaS-Dashboard/',
    githubUrl: 'https://github.com/saicharan-207',
    featured: true,
  },
  {
    id: 'smart-car-parking',
    title: 'Smart Car Parking using Blynk',
    description:
      'Designed an IoT-based smart parking prototype using ESP8266 and ultrasonic sensors. Integrated with Blynk Cloud for real-time slot monitoring with 95% accuracy and sub-2s latency. Reduced manual parking management by 80% through automation.',
    image:
      'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['ESP8266', 'Ultrasonic Sensors', 'Blynk', 'IoT', 'Cloud Integration'],
    liveUrl: 'https://veldurthys1-git.github.io/Smart-Car-Parking/',
    githubUrl: 'https://github.com/saicharan-207',
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
    liveUrl: 'https://veldurthys1-git.github.io/Sales-Forecasting-Using-Machine-Learning/',
    githubUrl: 'https://github.com/veldurthys1-git/Sales-Forecasting-Using-Machine-Learning',
    featured: false,
  },
  {
    id: 'vm-cloud-deployment',
    title: 'Virtual Machine Deployment on Cloud',
    description:
      'Deployed virtual machines on AWS and GCP to gain hands-on experience with cloud infrastructure. Configured IAM roles and security groups, and automated deployments using Terraform.',
    image:
      'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['AWS', 'GCP', 'Terraform', 'IAM', 'Cloud Networking'],
    liveUrl: 'https://veldurthys1-git.github.io/Virtual-Machine-Deployment-on-Cloud/',
    githubUrl: 'https://github.com/veldurthys1-git/Virtual-Machine-Deployment-on-Cloud',
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
    content:
      "Saicharan is an outstanding backend engineer who consistently delivers secure, reliable, and scalable cloud solutions. His work on Python microservices and GCP automation at Wells Fargo reduced deployment time by 40% and significantly improved API performance across production systems.",
    author: "— John Matthews",
    role: "Senior Engineering Manager",
    company: "Wells Fargo",
  },
  {
    content:
      "Saicharan’s technical expertise and problem-solving mindset made a real difference in our data engineering initiatives. His work on real-time pipelines and compliance automation using FastAPI, Terraform, and GCP improved reliability, observability, and compliance tracking across multiple environments.",
    author: "— Sophia Turner",
    role: "Lead Cloud Engineer",
    company: "CareSource",
  },
  {
    content:
      "An exceptional Python developer with a deep understanding of both backend systems and modern DevOps practices. At Infosys, Saicharan built robust microservices and automated CI/CD workflows that improved team efficiency and reduced release times by 50%.",
    author: "— Ravi Kulkarni",
    role: "Senior Engineering Manager",
    company: "Infosys Ltd.",
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
    url: 'mailto:veldurthys1@udayton.edu',
    icon: 'Mail',
  },
];

export const aboutMe = {
  title: 'About Me',
  description: `Hi, I’m Saicharan Veldurthy, a Python Full Stack and Cloud Engineer with over five years of experience building scalable backend systems and data platforms. I love designing secure, high-performance APIs and event-driven architectures that power real-time analytics and smooth integrations across cloud environments.

At Wells Fargo, I build and maintain cloud-native microservices and serverless APIs using Python, FastAPI, and Flask on Google Cloud Platform and AWS. My work focuses on improving performance, automation, and observability while modernizing legacy systems into reliable, cost-efficient solutions.

Before Wells Fargo, I worked at CareSource, Infosys, and Innominds, where I engineered backend systems, automated data pipelines, and built cloud-based platforms using GCP, AWS, and PySpark. These experiences helped me bridge data engineering with backend logic to create efficient, production-ready solutions.

I’m passionate about clean code, scalable design, and systems that are secure and effortless to maintain. Outside of work, I enjoy exploring AI-powered APIs, cloud automation, and emerging data technologies that make engineering both smarter and simpler.`,
};



export const contactInfo = {
  email: 'veldurthys1@udayton.edu',
  phone: '+1 (937)-829-0856',
  location: 'Mesa, Arizona',
};