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
  { name: 'Azure', level: 80, category: 'cloud' },
  { name: 'Azure Synapse', level: 80, category: 'cloud' },
  { name: 'AWS SageMaker', level: 80, category: 'cloud' },

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
  { name: 'JWT', level: 75, category: 'project' },

];



export const professionalExperience: Experience[] = [
  {
    title: 'Data & Cloud Engineering Intern',
    company: 'NexusBlue',
    location: 'Phoenix, AZ',
    startDate: 'Mar 2024',
    endDate: 'Present',
    description: [
      'Designing and automating ETL workflows with Airflow and Lambda, improving data availability by 40%.',
      'Developing integration processes for seamless data ingestion and transformation from diverse sources.',
      'Building and deploying real-time microservices with Docker and ECS, reducing data latency by 25%.',
      'Delivering API-driven services to enhance platform responsiveness and data access.',
      'Implementing observability with Prometheus and Grafana, cutting incident response time by 50%.',
      'Automating infrastructure to support continuous data delivery and scaling.',
      'Enhancing system resilience and maintainability through optimization and containerization.'
    ],
    technologies: ['Apache Airflow', 'AWS Lambda', 'Docker', 'AWS ECS', 'Prometheus', 'Grafana', 'API Development', 'Data Integration', 'Automation', 'Scalability Engineering', 'System Reliability', 'Real-Time Data Access']
  },
  {
    title: 'Data Engineer',
    company: 'Infosys Pvt. Ltd',
    location: 'Hyderabad, India',
    startDate: 'June 2021',
    endDate: 'Dec 2022',
    description: [
      'Developed RESTful microservices with FastAPI and Django, reducing feature rollout time by 30%.',
      'Managed containerized apps using Docker and Kubernetes (EKS), ensuring 99.9% uptime.',
      'Built event-driven data pipelines with Kafka and Airflow, cutting data latency by 60%.',
      'Implemented OAuth2 and JWT in APIs to improve security and standards compliance.',
      'Automated CI/CD with Jenkins and GitHub Actions, reducing deployment errors by 40%.',
      'Migrated apps to AWS (ECS, S3, Fargate), cutting infrastructure costs by 25%.',
      'Collaborated across teams to drive DevOps adoption and improve release reliability.'
    ],
    technologies: ['Python', 'FastAPI', 'Django', 'Kafka', 'Airflow', 'Docker', 'Kubernetes', 'AWS ECS', 'OAuth2', 'JWT', 'Jenkins', 'GitHub Actions']
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
      'Built backend systems in Python and Java, handling 1M+ daily API calls with <200ms latency.',
      'Developed ETL pipelines using Spark and PostgreSQL to process 50TB+ of data weekly.',
      'Integrated monitoring with Prometheus and Grafana, reducing incident response time by 50%.',
      'Containerized legacy apps and deployed via AWS ECS with Auto Scaling for better resilience.',
      'Collaborated on APIs using Flask, React, and HTML/CSS, improving performance and UX.',
      'Automated builds and provisioning with shell scripts and CI hooks to streamline workflows.',
      'Led migration to microservices with FastAPI and Docker, reducing downtime by 35%.'
    ],
    technologies: ['Python', 'Java', 'Apache Spark', 'PostgreSQL', 'Prometheus', 'Grafana', 'Flask', 'React', 'FastAPI', 'Docker', 'AWS ECS', 'CI/CD']
  },
  {
    title: 'Cloud & Automation - Intern',
    company: 'Aditi Digital Solutions',
    location: 'Hyderabad, India',
    startDate: 'Sep 2019',
    endDate: 'May 2020',
    description: [
      'Optimized AWS deployments to improve cloud resource utilization by 15%.',
      'Automated maintenance tasks using Python and AWS Lambda, reducing manual effort by 40%.',
      'Built CloudWatch dashboards to enhance monitoring, cutting incident detection time by 30%.'
    ],
    technologies: ['AWS', 'Python', 'Lambda', 'CloudWatch']
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
    company: 'Aditi Digital Solutions',
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
  description: `Hello, I’m Saicharan Veldurthy, an experienced Data and Cloud engineer with over 4 years of success designing and deploying scalable, cloud-native applications and infrastructure. I specialize in backend development using Python, Java, and modern frameworks like FastAPI, Django, and Flask. My expertise includes building secure REST APIs, managing event-driven data pipelines with Kafka and Airflow, and optimizing performance with tools like Spark and PostgreSQL.

I'm skilled in containerization and orchestration using Docker and Kubernetes (EKS), and I bring a strong DevOps mindset—automating CI/CD workflows with Jenkins and GitHub Actions, and delivering highly available systems on AWS (ECS, Lambda, Fargate, S3).

Recently completed my Master’s in Computer Science from the University of Dayton (Dec 2024), and hold certifications including AWS Solutions Architect – Associate, Certified Kubernetes Application Developer (CKAD), and Google Professional Data Engineer.

I’m passionate about building efficient, secure systems and continuously improving cloud architectures to drive business value.`,
};


export const contactInfo = {
  email: 'veldurthysaicharan5@gmail.com',
  phone: '+1 (937)-829-0856',
  location: 'Mesa, Arizona',
};