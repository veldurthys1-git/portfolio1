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

    // ML & NLP
  { name: 'TensorFlow', level: 80, category: 'data' },
  { name: 'Scikit-learn', level: 85, category: 'data' },
  { name: 'XGBoost', level: 80, category: 'data' },
  { name: 'spaCy', level: 80, category: 'data' },
  { name: 'Hugging Face Transformers', level: 75, category: 'data' },
  { name: 'OpenCV', level: 80, category: 'data' }
];



export const professionalExperience: Experience[] = [
  {
    title: 'Senior Backend Engineer – Python & Embedded Systems (Model-Based Design)',
    company: 'Wells Fargo',
    location: 'Arizona, USA',
    startDate: 'June 2024',
    endDate: 'June 2025',
    description: [
      'Developed secure RESTful APIs using Python and Flask for payment platforms, integrated with AWS Lambda and Fargate.',
      'Built ETL pipelines for transaction data using Python and SQL, with schema validation and SLA monitoring.',
      'Refactored legacy code into Python-based microservices with improved modularity and test coverage.',
      'Implemented OAuth2 and JWT for secure authentication across internal and external APIs.',
      'Deployed applications via CI/CD pipelines using Docker, Jenkins, and GitHub Actions.',
      'Collaborated with DevOps and compliance teams to align solutions with cloud strategy and security standards.'
    ],
    technologies: ['Python', 'Flask', 'SQL Server', 'AWS Lambda', 'Docker', 'Jenkins', 'OAuth2', 'JWT', 'CI/CD']
  },
  {
    title: 'Senior Python Developer',
    company: 'CareSource',
    location: 'Texas, USA',
    startDate: 'Jan 2023',
    endDate: 'May 2024',
    description: [
      'Built APIs with Django and Flask for claims and patient data, secured with OAuth2 and JWT.',
      'Designed healthcare ETL pipelines in Python for transforming eligibility and claims datasets.',
      'Integrated React frontends with backend APIs for real-time dashboards.',
      'Automated backend workflows using cron, Shell scripting, and PyTest for validation.',
      'Migrated monolithic services to FastAPI-based microservices.',
      'Maintained HIPAA-compliant data integrity and audit trails.'
    ],
    technologies: ['Python', 'Django', 'Flask', 'FastAPI', 'React.js', 'SQL Server', 'JWT', 'HIPAA']
  },
  {
    title: 'Python Developer',
    company: 'CBRE Group',
    location: 'Boston, MA, USA',
    startDate: 'Dec 2019',
    endDate: 'Nov 2022',
    description: [
      'Developed RESTful APIs with Flask and Django for internal dashboards and real estate analytics.',
      'Created ETL pipelines for property and transaction data using Python and PostgreSQL.',
      'Migrated Java modules to modular Python services, improving performance and scalability.',
      'Integrated React interfaces and secured data using OAuth2 and JWT.',
      'Automated backend jobs using Shell scripts and maintained CI/CD pipelines.',
      'Participated in Agile development cycles and code reviews.'
    ],
    technologies: ['Python', 'Django', 'Flask', 'PostgreSQL', 'React', 'OAuth2', 'CI/CD']
  }
];



export const additionalExperience: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Infosys Ltd',
    location: 'Hyderabad, India',
    startDate: 'Mar 2018',
    endDate: 'Nov 2019',
    description: [
      'Built REST APIs using Java and Spring, integrated with SQL and NoSQL databases.',
      'Automated system tasks using Shell scripting and Python.',
      'Deployed services on AWS and Azure with CI/CD via Jenkins and Docker.',
      'Implemented microservices and monitored performance using Splunk and Nagios.',
      'Worked in Agile teams to deliver scalable enterprise applications.'
    ],
    technologies: ['Java', 'Spring', 'Python', 'AWS', 'Azure', 'Jenkins', 'Docker', 'SQL']
  },
  {
    title: 'Associate Software Engineer',
    company: 'Innominds',
    location: 'Bangalore, India',
    startDate: 'June 2017',
    endDate: 'Feb 2018',
    description: [
      'Developed ETL pipelines using Python and Airflow for large-scale data processing.',
      'Used Hadoop, Spark, and Kafka for big data analytics.',
      'Built data quality checks and automated validations.',
      'Supported data lakes on AWS S3 and Azure Blob Storage.',
      'Collaborated with data scientists to streamline ML data flows.'
    ],
    technologies: ['Python', 'Airflow', 'Spark', 'Kafka', 'AWS S3', 'Azure', 'ETL']
  }
];


export const projects: Project[] = [
  {
    id: 'sales-forecasting-ml',
    title: 'Sales Forecasting Using Machine Learning',
    description:
      'Developed a predictive sales model using Python, Scikit-learn, Pandas, and NumPy, achieving 80%+ accuracy. Processed historical data to identify sales trends and built a dashboard with Matplotlib to visualize key insights.',
    image:
      'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    liveUrl: 'https://www.youtube.com/watch?v=pCuV_7H2vyQ&ab_channel=NicholasRenotte',
    githubUrl: 'https://github.com/saicharan-207',
    featured: false,
  },
  {
    id: 'smart-car-parking',
    title: 'Smart Car Parking using Blynk',
    description:
      'Designed an IoT-based smart parking prototype using ESP8266 and ultrasonic sensors. Integrated with Blynk Cloud for real-time slot monitoring with 95% accuracy and sub-2s latency. Reduced manual parking management by 80% through automation.',
    image:
      'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['ESP8266', 'Ultrasonic Sensors', 'Blynk', 'IoT', 'Cloud Integration'],
    liveUrl: 'https://www.youtube.com/watch?v=tjLAjGi6O5Q&ab_channel=ElectronicClinic',
    githubUrl: 'https://github.com/saicharan-207',
    featured: true,
  },
  {
    id: 'vm-cloud-deployment',
    title: 'Virtual Machine Deployment on Cloud',
    description:
      'Deployed virtual machines on AWS and GCP to gain hands-on experience with cloud infrastructure. Configured IAM roles and security groups, and automated deployments using Terraform.',
    image:
      'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['AWS', 'GCP', 'Terraform', 'IAM', 'Cloud Networking'],
    liveUrl: 'https://www.youtube.com/watch?v=g2Il8cxNv18&ab_channel=KahanDataSolutions',
    githubUrl: 'https://github.com/saicharan-207',
    featured: false,
  },
];



export const education: Education[] = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of Dayton',
    location: 'Dayton, Ohio',
    graduationDate: '',
    description: 'Focused on advanced topics including cloud computing, distributed systems, machine learning, and backend development. Completed projects involving real-time data processing, API design, and secure system architecture. Gained hands-on experience with modern technologies like Python, Docker, Kubernetes, and cloud platforms such as AWS and GCP.',
  },
  {
    degree: 'Bachelor of Science in Electronics and Communication Engineering',
    institution: 'Guru Nanak University ',
    location: 'Hyderabad, India',
    graduationDate: '',
    description: 'Gained a strong foundation in electronics, signal processing, and communication systems. Developed problem-solving skills through coursework in embedded systems, digital logic, and microprocessors. Completed hands-on projects involving circuit design, IoT systems, and basic programming in C and Python.',
  },
];

export const testimonials: Testimonial[] = [
  {
    content: "An exceptional backend engineer who consistently delivers high-performance, scalable systems. Saicharan’s expertise in Python, FastAPI, and cloud-native technologies made a measurable impact—reducing system latency by 35% and deployment errors by 90%.",
    author: '— Ravi Kulkarni',
    role: 'Senior Engineering Manager',
    company: 'CareSource',
  },
  {
    content: 'Saicharan demonstrates a rare combination of deep technical skills and business insight. His work on data pipelines and real-time processing with Kafka and Spark greatly enhanced our data delivery and decision-making capabilities.',
    author: '— Priya Menon',
    role: 'Lead Data Engineer',
    company: 'CBRE Gropu',
  },
  {
    content: 'A dependable team player with a strong DevOps mindset. Saicharan led critical cloud deployments using Terraform and Docker across AWS and GCP, helping us achieve 99.99% uptime and robust CI/CD workflows.',
    author: '— Neeraj Verma',
    role: 'Cloud Solutions Architect',
    company: 'Infosys',
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/saicharan-207',
    icon: 'Github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sai-charan-22b39532a/',
    icon: 'Linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://x.com/Veldurthysaich12',
    icon: 'Twitter',
  },
  {
    platform: 'Email',
    url: 'mailto:saicharanveldurthy01@gmail.com',
    icon: 'Mail',
  },
];

export const aboutMe = {
  title: 'About Me',
  description: `Hello, I’m Saicharan Veldurthy — a Data Engineer and Backend Developer with over 8 years of experience delivering high-performance systems across healthcare, finance, and real estate. I specialize in building scalable, secure backend services and data pipelines using Python, Django, Flask, FastAPI, and cloud-native technologies on AWS and GCP.

My expertise includes engineering ETL/ELT workflows, designing microservices architectures, and optimizing SQL-based data platforms like PostgreSQL and SQL Server. I’ve migrated legacy systems to cloud-native architectures, deployed event-driven solutions using AWS Lambda and Fargate, and implemented secure APIs with OAuth2 and JWT.

I’m proficient in Docker, CI/CD (Jenkins, GitHub Actions), and Terraform, and I consistently align backend systems with security standards such as HIPAA and GDPR. I also enjoy mentoring, collaborating in Agile teams, and translating business needs into scalable, API-first data solutions.

I support Agile teams through planning and collaboration, mentor developers, and create documentation. I thrive in fast-paced environments, building scalable backend solutions that align with business goals.`,
};


export const contactInfo = {
  email: 'saicharanveldurthy01@gmail.com',
  phone: '+1 (937)-829-0856',
  location: 'Mesa, Arizona',
};