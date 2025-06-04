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
    title: 'Big Data Engineer',
    company: 'Infosys Pvt. Ltd.',
    location: 'Hyderabad, India',
    startDate: 'June 2021',
    endDate: 'Dec 2022',
    description: [
      'Developed scalable big data pipelines using Apache Spark and Hadoop on Azure Synapse & HDInsight, processing 15TB+ data daily for telecom and BFSI clients.',
      'Built NLP pipelines using spaCy and Hugging Face Transformers for sentiment analysis and text classification, improving feedback processing accuracy by 28%.',
      'Designed and deployed fraud detection and lead scoring ML models on AWS Glue, S3, and SageMaker, enhancing prediction accuracy by 25%.',
      'Automated visual inspection in manufacturing using OpenCV and TensorFlow, reducing manual QA time by 60% and improving defect detection rates.',
      'Migrated 40+ legacy ETL pipelines to cloud-native tools (Azure Data Factory, AWS Glue), cutting compute costs by 30% and increasing uptime.',
      'Implemented real-time chatbot NLP APIs in collaboration with DS teams, decreasing response latency by 35% and boosting customer engagement.'
    ],
    technologies: [
      'Apache Spark', 'Hadoop', 'Azure Synapse', 'HDInsight', 'spaCy', 'Hugging Face', 
      'AWS Glue', 'Amazon S3', 'SageMaker', 'OpenCV', 'TensorFlow', 'Azure Data Factory'
    ]
  },
  {
    title: 'Associate Data Engineer',
    company: 'Innominds Software Pvt. Ltd.',
    location: 'Hyderabad, India',
    startDate: 'Oct 2019',
    endDate: 'June 2021',
    description: [
      'Created ETL pipelines with Python and Apache Airflow, processing 2TB+ data weekly across diverse sources.',
      'Contributed to AWS S3-based data lake implementation using Glue and Athena, reducing BI query times by 30%.',
      'Supported data warehouse integrations with Snowflake and Azure Synapse for 3 enterprise clients, improving cross-platform accessibility.',
      'Automated data quality checks with PySpark and Great Expectations, boosting data reliability metrics by 25%.',
      'Optimized feature extraction for ML workflows, reducing training prep time by 40% through efficient preprocessing.',
      'Processed and annotated 500K+ images for CV models using Labelbox and custom Python tools, accelerating model development cycles.'
    ],
    technologies: [
      'Python', 'Apache Airflow', 'AWS S3', 'Glue', 'Athena', 'Snowflake', 'Azure Synapse', 
      'PySpark', 'Great Expectations', 'Labelbox'
    ]
  },
];


export const additionalExperience: Experience[] = [
  {
    title: 'Internet of Things Intern',
    company: 'Guru Nanak Institutions',
    location: 'Hyderabad, India',
    startDate: 'Aug 2018',
    endDate: 'Oct 2019',
    description: [
      'Developed a smart parking prototype using Blynk and ultrasonic sensors, enabling real-time slot monitoring with 95% detection accuracy.',
      'Integrated IoT hardware (ESP8266, sensors) with Blynk Cloud, achieving real-time data updates with under 2-second latency.',
      'Reduced manual parking checks by over 80% through mobile-based automation and remote monitoring features.',
      'Designed a modular architecture to support future IoT extensions such as environmental monitoring and traffic control.',
      'Collaborated with a cross-functional team to present the system at a university tech expo, receiving recognition for innovation and usability.'
    ],
    technologies: ['ESP8266', 'Ultrasonic Sensors', 'Blynk Cloud', 'IoT Hardware']
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
    githubUrl: 'https://github.com/veldurthys1-git/ml_sales_forecasting',
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
    githubUrl: 'https://github.com/veldurthys1-git/smart_parking_iot',
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
    githubUrl: 'https://github.com/veldurthys1-git/cloud_vm_deployment',
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
  description: `Hello, I’m Saicharan Veldurthy, a Data and Machine Learning Engineer with over 4 years of experience in data engineering, NLP, and cloud-based AI solutions. I’ve worked on building large-scale data pipelines, deploying machine learning models, and designing backend services that power real-time analytics and intelligent applications.

At Infosys and Innominds, I’ve contributed to projects across telecom, banking, manufacturing, and customer experience—ranging from fraud detection and lead scoring to chatbot NLP and computer vision for quality inspection. I’m proficient with tools like Python, Spark, Airflow, and cloud platforms including AWS, Azure, and GCP.

I hold a Master’s degree in Computer Science from the University of Dayton and am passionate about solving real-world problems with data—whether it’s improving prediction accuracy, reducing latency, or automating manual processes. I’m continuously learning and exploring new ways to apply AI and big data to make systems smarter, faster, and more efficient.`,
};

export const contactInfo = {
  email: 'veldurthysaicharan5@gmail.com',
  phone: '+1 (937)-829-0856',
  location: 'Mesa, Arizona',
};