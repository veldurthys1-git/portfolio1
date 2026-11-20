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
  // IBM Z Mainframe Development
  { name: 'IBM z/OS', level: 90, category: 'data' },
  { name: 'COBOL', level: 95, category: 'data' },
  { name: 'JCL', level: 95, category: 'data' },
  { name: 'Assembler', level: 85, category: 'data' },
  { name: 'CICS', level: 85, category: 'data' },
  { name: 'TSO/ISPF', level: 90, category: 'data' },
  { name: 'SDSF', level: 85, category: 'data' },
  { name: 'DFSORT', level: 85, category: 'data' },
  { name: 'VSAM', level: 85, category: 'data' },
  { name: 'PDS/PDSE', level: 90, category: 'data' },
  { name: 'GDG', level: 85, category: 'data' },
  { name: 'COBOL Copybooks', level: 90, category: 'data' },
  { name: 'BMS Maps', level: 75, category: 'data' },
  { name: 'Batch Processing', level: 95, category: 'data' },
  { name: 'JCL PROCs', level: 90, category: 'data' },
  { name: 'Abend Analysis', level: 85, category: 'data' },
  { name: 'Dataset Management', level: 90, category: 'data' },

  // Databases & SQL
  { name: 'IBM DB2', level: 90, category: 'databases' },
  { name: 'SQL', level: 90, category: 'databases' },
  { name: 'Embedded SQL', level: 90, category: 'databases' },
  { name: 'Cursor Processing', level: 85, category: 'databases' },
  { name: 'SQLCODE Handling', level: 85, category: 'databases' },
  { name: 'PostgreSQL', level: 80, category: 'databases' },
  { name: 'AWS Redshift', level: 80, category: 'databases' },

  // Data Engineering & Programming
  { name: 'Python', level: 90, category: 'data' },
  { name: 'Java', level: 75, category: 'data' },
  { name: 'Apache Spark', level: 90, category: 'data' },
  { name: 'PySpark', level: 90, category: 'data' },
  { name: 'Apache Airflow', level: 85, category: 'data' },
  { name: 'Apache Kafka', level: 85, category: 'data' },
  { name: 'SAS', level: 80, category: 'data' },
  { name: 'ETL Pipelines', level: 90, category: 'data' },
  { name: 'Data Management', level: 85, category: 'data' },

  // Cloud Platforms & Services
  { name: 'AWS', level: 85, category: 'cloud' },
  { name: 'Microsoft Azure', level: 80, category: 'cloud' },
  { name: 'Amazon EC2', level: 85, category: 'cloud' },
  { name: 'Amazon S3', level: 85, category: 'cloud' },
  { name: 'Amazon RDS', level: 80, category: 'cloud' },
  { name: 'AWS Lambda', level: 80, category: 'cloud' },

  // DevOps & Automation
  { name: 'Git', level: 90, category: 'devops' },
  { name: 'Jenkins', level: 85, category: 'devops' },
  { name: 'GitHub Actions', level: 85, category: 'devops' },
  { name: 'CI/CD Pipelines', level: 90, category: 'devops' },
  { name: 'Docker', level: 85, category: 'devops' },
  { name: 'Kubernetes', level: 80, category: 'devops' },
  { name: 'Terraform', level: 80, category: 'devops' },
  { name: 'Bash Scripting', level: 80, category: 'devops' },
  { name: 'Agile / Scrum', level: 90, category: 'devops' },
  { name: 'SDLC', level: 90, category: 'devops' },

  // Backend Development
  { name: 'FastAPI', level: 85, category: 'governance' },
  { name: 'Flask', level: 85, category: 'governance' },
  { name: 'Django', level: 80, category: 'governance' },
  { name: 'RESTful APIs', level: 90, category: 'governance' },
  { name: 'Microservices', level: 85, category: 'governance' },
  { name: 'JWT Authentication', level: 85, category: 'governance' },

  // Monitoring & Production Support
  { name: 'Prometheus', level: 80, category: 'observability' },
  { name: 'Amazon CloudWatch', level: 85, category: 'observability' },
  { name: 'Production Support', level: 90, category: 'observability' },
  { name: 'Root Cause Analysis', level: 90, category: 'observability' },
  { name: 'Application Debugging', level: 90, category: 'observability' },
  { name: 'Performance Optimization', level: 85, category: 'observability' },
  { name: 'Unit Testing', level: 90, category: 'observability' },
  { name: 'Integration Testing', level: 85, category: 'observability' },
  { name: 'Regression Testing', level: 85, category: 'observability' },
  { name: 'UAT', level: 85, category: 'observability' },

  // Mainframe Utilities & Collaboration
  { name: 'Connect:Direct', level: 80, category: 'devops' },
  { name: 'WinSCP', level: 85, category: 'devops' },
  { name: 'IBM Developer for z/OS', level: 85, category: 'devops' },
  { name: 'Application Modernization', level: 85, category: 'devops' },
  { name: 'Cross-Functional Collaboration', level: 90, category: 'devops' }
];


export const professionalExperience: Experience[] = [

  {
    title: 'Software Engineer',
    company: 'State Farm Mutual Auto. Ins. Co.',
    location: 'Tempe, AZ',
    startDate: 'Feb 2026',
    endDate: 'Nov 2026',
    description: [
      'Engineered and maintained enterprise IBM z/OS applications using COBOL, JCL, Assembler, macros, and copybooks, supporting high-volume financial batch processing and improving application reliability by 20%.',
      'Developed and optimized COBOL-DB2 programs and SQL queries across 10+ application modules, implementing data validation and record processing to reduce data discrepancies by 25%.',
      'Designed, executed, and troubleshot 30+ JCL batch jobs using TSO/ISPF, SDSF, and DFSORT, analyzing execution failures and return codes to improve batch-processing efficiency by 35%.',
      'Supported CICS online transaction processing and batch integration across 5+ interconnected components, resolving transaction failures and data inconsistencies to improve issue-resolution turnaround by 30%.',
      'Performed advanced root cause analysis, COBOL/Assembler debugging, and application modernization, resolving 15+ complex defects and reducing recurring processing errors by 35%.',
      'Managed 50+ mainframe datasets and secure file transfers using TSO, WinSCP, and Connect:Direct, maintaining 99%+ data accuracy through production and test validation.',
      'Designed and executed 100+ unit, integration, and regression test scenarios across COBOL, DB2, CICS, and JCL workflows, achieving 95%+ test pass rates.',
      'Collaborated with technical leads and business stakeholders across 6+ Agile/SDLC release cycles, supporting code reviews, technical documentation, and deployment readiness.'
    ],
    technologies: [
      'IBM z/OS',
      'IBM Z',
      'COBOL',
      'JCL',
      'Assembler',
      'DB2',
      'SQL',
      'CICS',
      'TSO/ISPF',
      'SDSF',
      'DFSORT',
      'VSAM',
      'COBOL Copybooks',
      'Macros',
      'Batch Processing',
      'Dataset Management',
      'Connect:Direct',
      'WinSCP',
      'Root Cause Analysis',
      'Application Modernization',
      'Agile/Scrum',
      'SDLC'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Target Corporation',
    location: 'San Francisco, CA',
    startDate: 'Feb 2025',
    endDate: 'Feb 2026',
    description: [
      'Developed and maintained 8+ COBOL-DB2 application modules on IBM z/OS, implementing embedded SQL, cursor processing, and SQLCODE handling to improve data retrieval efficiency by 15%.',
      'Enhanced 12+ COBOL programs by modifying business logic, updating copybooks, optimizing file-handling routines, and conducting impact analysis, reducing application defects by 20%.',
      'Configured and maintained 20+ JCL batch jobs using cataloged PROCs, GDGs, and conditional execution, troubleshooting COBOL abends, DB2 SQL errors, and 25+ production incidents to reduce batch failures by 18%.',
      'Delivered application enhancements through Agile/SDLC processes, performing root cause analysis, unit testing, UAT, and production deployment support while collaborating with cross-functional teams to achieve 95% on-time delivery.'
    ],
    technologies: [
      'IBM z/OS',
      'IBM Z',
      'COBOL',
      'DB2',
      'JCL',
      'SQL',
      'Embedded SQL',
      'Cursor Processing',
      'SQLCODE Handling',
      'COBOL Copybooks',
      'File Handling',
      'Cataloged PROCs',
      'GDG',
      'Batch Processing',
      'Abend Analysis',
      'Root Cause Analysis',
      'Unit Testing',
      'UAT',
      'Production Support',
      'Agile/Scrum',
      'SDLC'
    ]
  },
  {
    title: 'Engineer',
    company: 'Merizon Technologies',
    location: 'San Francisco, CA',
    startDate: 'Apr 2024',
    endDate: 'Dec 2024',
    description: [
      'Worked with IBM z/OS, TSO/ISPF, PDS/PDSE, and VSAM, gaining practical experience in mainframe environments, dataset management, and legacy application workflows.',
      'Developed and tested COBOL programs using COMP-3, working-storage variables, copybooks, and file-handling techniques, while executing JCL jobs and monitoring batch processing.',
      'Assisted with DB2 SQL operations and CICS transaction workflows, gaining exposure to BMS maps, application testing, and mainframe transaction processing.'
    ],
    technologies: [
      'IBM z/OS',
      'IBM Z',
      'COBOL',
      'JCL',
      'DB2',
      'SQL',
      'CICS',
      'TSO/ISPF',
      'PDS/PDSE',
      'VSAM',
      'COMP-3',
      'COBOL Copybooks',
      'BMS Maps',
      'File Handling',
      'Dataset Management',
      'Batch Processing',
      'Application Testing'
    ]
  }
];

export const additionalExperience: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Infosys',
    location: 'India',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: [
      'Engineered and deployed large-scale data processing pipelines using Apache Spark, PySpark, and SAS, accelerating data transformation processes by 45% for enterprise analytics.',
      'Designed and automated ETL workflows using Apache Airflow and Kafka, streamlining data ingestion and reducing manual intervention by 80%.',
      'Developed and optimized RESTful APIs using FastAPI and Flask, improving response efficiency and integration with front-end applications and microservices.',
      'Deployed and managed containerized applications using Docker and Kubernetes across AWS and Azure, achieving 99.5% uptime and scalable performance.',
      'Implemented CI/CD automation pipelines using Jenkins and GitHub Actions, reducing deployment time from 2 hours to under 15 minutes.',
      'Automated infrastructure provisioning using Terraform and Infrastructure as Code (IaC), maintaining consistent cloud configurations across multiple environments.',
      'Monitored system performance using Prometheus and CloudWatch and optimized DB2 queries on IBM Z mainframe, collaborating with cross-functional teams to improve system reliability and performance.'
    ],
    technologies: [
      'Python',
      'SQL',
      'Apache Spark',
      'PySpark',
      'SAS',
      'Apache Airflow',
      'Apache Kafka',
      'FastAPI',
      'Flask',
      'RESTful APIs',
      'Microservices',
      'AWS',
      'Microsoft Azure',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Jenkins',
      'GitHub Actions',
      'CI/CD',
      'Infrastructure as Code',
      'Prometheus',
      'Amazon CloudWatch',
      'IBM Z',
      'DB2',
      'Git'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Innominds Pvt. Ltd.',
    location: 'India',
    startDate: 'Oct 2020',
    endDate: 'Jun 2021',
    description: [
      'Developed and modified Assembler and COBOL programs on IBM Z mainframe using IBM Developer for z/OS and CICS, executing JCL batch jobs and integrating DB2 to maintain accurate transaction records.',
      'Integrated mainframe batch processing with Apache Kafka for real-time event-driven architectures, leveraging CICS channels to support scalable transaction workflows.',
      'Collaborated with DevOps teams to design CI/CD pipelines using Jenkins and GitHub Actions, reducing manual deployment errors by 90%.',
      'Deployed and managed applications on AWS using EC2, S3, RDS, and Lambda, ensuring high availability and reducing application latency by 25%.',
      'Designed and implemented ETL pipelines using Apache Airflow and PySpark to process large-scale datasets and support enterprise analytics teams.',
      'Implemented monitoring and alerting using Amazon CloudWatch and Prometheus, enabling proactive issue resolution and reducing system downtime by 35%.'
    ],
    technologies: [
      'IBM Z',
      'IBM Developer for z/OS',
      'COBOL',
      'Assembler',
      'JCL',
      'DB2',
      'CICS',
      'Apache Kafka',
      'Batch Processing',
      'CICS Channels',
      'Apache Airflow',
      'PySpark',
      'AWS',
      'Amazon EC2',
      'Amazon S3',
      'Amazon RDS',
      'AWS Lambda',
      'Docker',
      'Jenkins',
      'GitHub Actions',
      'CI/CD',
      'Amazon CloudWatch',
      'Prometheus'
    ]
  },  
  {
    title: 'Site Reliability Engineer',
    company: 'Aditi Digital Solutions',
    location: 'India',
    startDate: 'Jan 2020',
    endDate: 'Sep 2020',
    description: [
      'Engineered scalable RESTful APIs using Python, Flask, and Django, optimizing database queries and caching to improve backend performance by 30% while implementing secure JWT-based authentication.',
      'Led cloud migration initiatives from on-premise infrastructure to AWS, reducing infrastructure costs by 20% and improving deployment scalability and system reliability.',
      'Automated ETL workflows using Apache Airflow, streamlining data ingestion and processing to improve data availability for analytics teams by 25%.',
      'Implemented CI/CD pipelines using GitHub Actions and Jenkins, containerizing microservices with Docker and Kubernetes to achieve 95% uptime and reduce deployment time from hours to minutes.'
    ],
    technologies: [
      'Python',
      'Flask',
      'Django',
      'RESTful APIs',
      'SQL',
      'JWT Authentication',
      'Database Optimization',
      'Caching',
      'AWS',
      'Cloud Migration',
      'Apache Airflow',
      'ETL Pipelines',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'GitHub Actions',
      'CI/CD',
      'Microservices',
      'Git'
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
      "Saicharan demonstrated strong technical expertise in IBM Z mainframe development at State Farm. His contributions to COBOL, JCL, DB2, and CICS applications helped improve batch processing efficiency, application reliability, and production support. His problem-solving skills and dedication to delivering quality solutions made him a valuable team member.",
    author: "— Dusty Monberg",
    role: "Enterprise Tech Manager",
    company: "State Farm Mutual Auto. Ins. Co.",
  },
  {
    content:
      "Saicharan consistently demonstrated excellent problem-solving skills while working on enterprise mainframe applications. His experience with COBOL-DB2 development, JCL batch processing, and production troubleshooting contributed to improved system performance and application stability. He collaborated effectively with the team and delivered reliable solutions.",
    author: "— Sofia Turner",
    role: "Senior Software Engineer",
    company: "Target Corporation",
  },
  {
    content:
      "Saicharan brought valuable technical expertise to our data engineering and application development initiatives. His work with Apache Spark, PySpark, Airflow, AWS, and CI/CD automation improved data processing efficiency and streamlined deployment workflows. His adaptability and commitment to quality were evident throughout his contributions.",
    author: "— Mareddy Surender",
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
    platform: 'Twitter',
    url: 'https://x.com/Veldurthysaich1',
    icon: 'Twitter',
  },
  {
    platform: 'Email',
    url: 'mailto:veldurthy.sc.work@gmail.com',
    icon: 'Mail',
  },
];


export const aboutMe = {
  title: 'About Me',
  description: `Hi, I’m Saicharan Veldurthy, a Software Engineer with 5+ years of experience in IBM Z mainframe development, enterprise applications, cloud technologies, and data engineering. I specialize in building, maintaining, and optimizing reliable enterprise systems using COBOL, JCL, DB2, CICS, Assembler, and IBM z/OS.

At State Farm, I worked on enterprise mainframe applications supporting high-volume batch processing and financial data operations. My responsibilities included COBOL-DB2 development, JCL batch job execution, CICS transaction processing, application debugging, and production support. I focused on improving application reliability, optimizing batch performance, and resolving complex technical issues.

Previously, at Target Corporation, I developed and enhanced COBOL-DB2 applications, maintained JCL batch workflows, and supported production systems. During my time at Merizon Technologies, I strengthened my foundation in IBM z/OS, COBOL programming, dataset management, DB2, and CICS transaction processing.

Earlier in my career, I worked at Infosys, Innominds, and Aditi Digital Solutions, gaining experience in data engineering, backend development, cloud infrastructure, and DevOps. I worked with Python, Apache Spark, PySpark, Kafka, Airflow, AWS, Azure, Docker, Kubernetes, and CI/CD automation to build scalable applications and efficient data pipelines.

I'm passionate about modernizing enterprise systems, optimizing application performance, and solving complex engineering challenges. I enjoy combining traditional mainframe technologies with modern cloud and automation practices to deliver reliable, secure, and maintainable solutions. I'm continuously expanding my technical expertise and exploring new ways to improve enterprise software systems.`,
};


export const contactInfo = {
  email: 'veldurthy.sc.work@gmail.com',
  phone: '+1 (725)-222-9596',
  location: 'Las Vegas, NV',
};
