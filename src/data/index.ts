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
  // Frontend (from projects + resume)
  { name: 'JavaScript', level: 80, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend'},
  { name: 'TailwindCSS', level: 75, category: 'frontend'},
  { name: 'HTML', level: 90, category: 'frontend' },
  { name: 'CSS', level: 85, category: 'frontend' },

  // Backend & Databases
  { name: 'Python', level: 95, category: 'backend' },
  { name: 'SQL', level: 90, category: 'backend' },
  { name: 'PostgreSQL', level: 85, category: 'backend' },
  { name: 'MySQL', level: 80, category: 'backend' },
  { name: 'SQL Server', level: 70, category: 'backend' },
  { name: 'FastAPI', level: 90, category: 'backend' },
  { name: 'Django', level: 85, category: 'backend' },
  { name: 'Flask', level: 80, category: 'backend' },
  { name: 'RESTful APIs', level: 90, category: 'backend' },
  { name: 'Java', level: 80, category: 'backend' },

  // Cloud Platforms
  { name: 'AWS', level: 90, category: 'cloud' },
  { name: 'Azure', level: 80, category: 'cloud' },
  { name: 'GCP', level: 70, category: 'cloud' },
  { name: 'AWS Glue', level: 80, category: 'cloud' },
  { name: 'AWS Redshift', level: 80, category: 'cloud' },
  { name: 'AWS SageMaker', level: 80, category: 'cloud' },
  { name: 'Azure Synapse', level: 80, category: 'cloud' },

  // DevOps & Automation
  { name: 'Git', level: 85, category: 'devops' },
  { name: 'GitHub Actions', level: 80, category: 'devops' },
  { name: 'Jenkins', level: 75, category: 'devops' },
  { name: 'CI/CD', level: 85, category: 'devops' },
  { name: 'Docker', level: 85, category: 'devops' },
  { name: 'Kubernetes', level: 80, category: 'devops' },
  { name: 'Terraform', level: 70, category: 'devops' },
  { name: 'Shell Scripting', level: 75, category: 'devops' },

  // Data Engineering & Security
  { name: 'Apache Airflow', level: 85, category: 'data' },
  { name: 'Apache Kafka', level: 80, category: 'data' },
  { name: 'Apache Spark', level: 80, category: 'data' },
  { name: 'ETL Pipelines', level: 90, category: 'data' },
  { name: 'Data Modeling', level: 80, category: 'data' },
  { name: 'Great Expectations', level: 75, category: 'data' },
  { name: 'OAuth2.0', level: 75, category: 'data' },
  { name: 'JWT', level: 75, category: 'data' },

  // AI, ML & GenAI
  { name: 'OpenAI API', level: 85, category: 'ai' },
  { name: 'LangChain', level: 80, category: 'ai' },
  { name: 'FAISS', level: 80, category: 'ai' },
  { name: 'Vector Databases', level: 80, category: 'ai' },
  { name: 'Semantic Search', level: 80, category: 'ai' },
  { name: 'TensorFlow', level: 75, category: 'ai' },
  { name: 'PyTorch', level: 70, category: 'ai' },
  { name: 'Hugging Face Transformers', level: 75, category: 'ai' },

  // Monitoring, Analytics & BI
  { name: 'Grafana', level: 85, category: 'BI' },
  { name: 'Prometheus', level: 80, category: 'BI' },
  { name: 'Splunk', level: 80, category: 'BI' },
  { name: 'ELK Stack', level: 80, category: 'BI' },
  { name: 'Tableau', level: 80, category: 'BI' },
  { name: 'Power BI', level: 80, category: 'BI' },
];




export const professionalExperience: Experience[] = [
  {
    title: 'Data Engineer',
    company: 'Infosys Ltd.',
    location: 'Hyderabad, India',
    startDate: 'June 2021',
    endDate: 'Dec 2022',
    description: [
      'Developed and optimized RESTful microservices using FastAPI and Django with OAuth2/JWT authentication, reducing latency by 60% and cutting AWS infrastructure costs by 25%.',
      'Built and automated scalable data pipelines with Apache Airflow and Kafka, reducing model training time by 35% and enabling 500K+ daily ML inferences with sub-100ms latency.',
      'Implemented CI/CD pipelines with Jenkins and GitHub Actions, cutting deployment failures by 40% and doubling release velocity.',
      'Conducted load testing with Locust and JMeter for 100K+ concurrent users, improving system resilience by 45%.',
      'Engineered real-time anomaly detection with Python and TensorFlow, improving fraud detection accuracy by 18% across 10M+ transactions.',
      'Integrated ELK Stack and Splunk for centralized monitoring, reducing issue resolution time by 50%.',
      'Collaborated with cross-functional teams to deliver production-ready, scalable, and reliable data solutions.'
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Django',
      'Apache Kafka',
      'Apache Airflow',
      'Docker',
      'Kubernetes',
      'AWS',
      'Jenkins',
      'GitHub Actions',
      'Locust',
      'JMeter',
      'TensorFlow',
      'ELK',
      'Splunk'
    ]
  }
];

export const additionalExperience: Experience[] = [
  {
    title: 'Associate Data Engineer',
    company: 'Innominds Software Pvt. Ltd.',
    location: 'Hyderabad, India',
    startDate: 'May 2020',
    endDate: 'June 2021',
    description: [
      'Developed backend systems in Python and Java, handling 1M+ daily API requests with <200ms latency, and migrated monoliths to Docker-based microservices, reducing downtime by 35%.',
      'Built ETL pipelines with Apache Spark and PostgreSQL to process 50TB+ weekly data and designed AWS S3/Glue data lakes consolidating 100TB+, improving query speed by 70%.',
      'Optimized ML workflows with AWS Redshift feature stores, reducing retraining time by 40%, and deployed NLP models processing 2M+ documents/day with 92% accuracy.',
      'Automated data quality checks with PySpark and Great Expectations, reducing errors by 55%.',
      'Implemented monitoring with Prometheus and Grafana, cutting incident response by 50%.',
      'Containerized legacy apps with AWS ECS and Auto Scaling, boosting scalability 3x.',
      'Worked with cross-functional teams to deliver reliable, production-ready systems.'
    ],
    technologies: [
      'Python',
      'Java',
      'Apache Spark',
      'PostgreSQL',
      'AWS S3',
      'AWS Glue',
      'AWS Redshift',
      'PySpark',
      'Great Expectations',
      'Prometheus',
      'Grafana',
      'AWS ECS',
      'Docker'
    ]
  },
  {
    title: 'Data Analyst',
    company: 'Arka F&B Pvt. Ltd.',
    location: 'Hyderabad, India',
    startDate: 'Aug 2019',
    endDate: 'May 2020',
    description: [
      'Integrated POS data with sales forecasts to optimize inventory and demand planning, reducing stockouts by 25% and food waste by 18%.',
      'Designed real-time dashboards in Tableau and Power BI for 15+ outlets, standardizing reporting and improving data consistency by 30%.',
      'Conducted time-motion studies to identify bottlenecks, improving service speed by 12%.',
      'Automated daily reporting with Python and Excel, saving 4+ hours per week.',
      'Led vendor evaluation framework for 20+ suppliers, improving supply chain reliability and cost-efficiency.',
      'Collaborated across operations and procurement teams, improving forecasting accuracy by 20%.'
    ],
    technologies: [
      'Python',
      'Excel',
      'Tableau',
      'Power BI',
      'SQL'
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
    content: "An exceptional backend engineer who consistently delivers high-performance, scalable systems. Saicharan’s expertise in Python, FastAPI, and cloud-native technologies made a measurable impact—reducing system latency by 35% and deployment errors by 90%.",
    author: '— Ravi Kulkarni',
    role: 'Senior Engineering Manager',
    company: 'Infosys Ltd.',
  },
  {
    content: 'Saicharan demonstrates a rare combination of deep technical skills and business insight. His work on data pipelines and real-time processing with Kafka and Spark greatly enhanced our data delivery and decision-making capabilities.',
    author: '— Priya Menon',
    role: 'Lead Data Engineer',
    company: 'Innominds Software Pvt. Ltd.',
  },
  {
    content: 'A team player in every sense, Sai Charan built dashboards and improved forecasting that reduced stockouts and waste while enabling faster, data-driven decisions. His ability to turn complex data into clear insights made a lasting impact on operational efficiency.',
    author: '— Neeraj Verma',
    role: 'Cloud Solutions Architect',
    company: 'Arka F&B Pvt Ltd',
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
    url: 'mailto:veldurthys1@gmail.com',
    icon: 'Mail',
  },
];

export const aboutMe = {
  title: 'About Me',
  description: `Hi, I’m Saicharan Veldurthy, an Data and Software Engineer with 4+ years of experience building scalable, cloud-native systems. I recently earned my Master’s in Computer Science from the University of Dayton (2024) and specialize in backend development, real-time data pipelines, and modern cloud infrastructure.

I work with tools like Python, Spark, Airflow, and Kafka to create real-time workflows and data architectures. On the backend side, I design secure APIs and applications using FastAPI, Django, and Flask. I also explore new technologies like vector databases and GenAI solutions with OpenAI APIs and LangChain to solve modern data problems.

Previously, I contributed to enterprise projects at Infosys and Innominds, where I developed secure APIs, automated CI/CD pipelines, and led cloud deployments using Kubernetes and AWS. I’m also skilled in monitoring and observability with Prometheus, Grafana, and CloudWatch.

I hold certifications including AWS Solutions Architect Associate, CKAD, and Google Professional Data Engineer. I’m passionate about building intelligent, efficient systems and currently seeking full-time roles in AI, cloud, or data engineering.`,
};


export const contactInfo = {
  email: 'veldurthys1@gmail.com',
  phone: '+1 (937)-829-0856',
  location: 'Mesa, Arizona',
};