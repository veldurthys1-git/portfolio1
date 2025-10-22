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
  // Data Engineering & Lakehouse
  { name: 'Python', level: 95, category: 'data' },
  { name: 'SQL', level: 95, category: 'data' },
  { name: 'Apache Spark / PySpark', level: 90, category: 'data' },
  { name: 'Apache Airflow', level: 90, category: 'data' },
  { name: 'Delta Lake / Lakehouse', level: 85, category: 'data' },
  { name: 'Kafka (Streaming)', level: 80, category: 'data' },
  { name: 'dbt', level: 75, category: 'data' },
  { name: 'ETL / ELT Design', level: 90, category: 'data' },
  { name: 'Data Modeling (Star & Snowflake)', level: 85, category: 'data' },
  { name: 'Partitioning & Performance Tuning', level: 85, category: 'data' },

  // Databases & Warehousing
  { name: 'Snowflake', level: 90, category: 'databases' },
  { name: 'AWS Redshift', level: 80, category: 'databases' },
  { name: 'BigQuery', level: 75, category: 'databases' },
  { name: 'PostgreSQL', level: 85, category: 'databases' },
  { name: 'MySQL', level: 80, category: 'databases' },
  { name: 'SQL Server', level: 75, category: 'databases' },
  { name: 'MongoDB', level: 65, category: 'databases' },

  // Cloud Platforms & Services
  { name: 'AWS', level: 85, category: 'cloud' },
  { name: 'Azure', level: 85, category: 'cloud' },
  { name: 'GCP', level: 70, category: 'cloud' },

  // AWS (detail)
  { name: 'S3', level: 85, category: 'cloud' },
  { name: 'Glue (Catalog/ETL)', level: 80, category: 'cloud' },
  { name: 'EMR', level: 80, category: 'cloud' },
  { name: 'Redshift (DW)', level: 80, category: 'cloud' },

  // Azure (detail)
  { name: 'Azure Data Factory', level: 90, category: 'cloud' },
  { name: 'Azure Synapse Analytics', level: 85, category: 'cloud' },
  { name: 'Azure Databricks', level: 85, category: 'cloud' },
  { name: 'Azure Key Vault / IAM', level: 80, category: 'cloud' },

  // GCP (from skills list)
  { name: 'Dataflow', level: 65, category: 'cloud' },

  // DevOps & Automation
  { name: 'Git', level: 90, category: 'devops' },
  { name: 'CI/CD (Pipelines)', level: 90, category: 'devops' },
  { name: 'Jenkins', level: 80, category: 'devops' },
  { name: 'GitHub Actions', level: 75, category: 'devops' },
  { name: 'Terraform', level: 80, category: 'devops' },
  { name: 'Docker', level: 85, category: 'devops' },
  { name: 'Kubernetes', level: 75, category: 'devops' },
  { name: 'Shell Scripting', level: 75, category: 'devops' },

  // Quality, Governance & Security
  { name: 'Great Expectations (DQ)', level: 80, category: 'governance' },
  { name: 'Data Lineage & Catalog (Glue Catalog)', level: 80, category: 'governance' },
  { name: 'Metadata Management', level: 80, category: 'governance' },
  { name: 'Data Security & Compliance (SOC 2, GDPR)', level: 75, category: 'governance' },

  // Observability & Monitoring
  { name: 'Prometheus', level: 80, category: 'observability' },
  { name: 'Grafana', level: 80, category: 'observability' },
  { name: 'Logging & Monitoring', level: 85, category: 'observability' },

  // Ways of Working
  { name: 'Agile / Scrum', level: 85, category: 'devops' },
  { name: 'Cross-Functional Collaboration', level: 85, category: 'devops' }
];






export const professionalExperience: Experience[] = [
  {
    title: 'Lead Data Engineer',
    company: 'Wells Fargo',
    location: 'Arizona, USA',
    startDate: 'June 2024',
    endDate: 'Present',
    description: [
      'Architected and managed enterprise-scale data pipelines using Apache Spark, Airflow, and Snowflake to power 200+ business-critical reports and analytics workloads.',
      'Led the migration of legacy Hadoop workloads to Azure Data Factory and Synapse Analytics, reducing data latency by 50% and modernizing infrastructure.',
      'Directed and mentored a team of 4 data engineers, standardizing coding practices and implementing robust data quality frameworks that achieved 99.8% reliability.',
      'Optimized ETL orchestration within Azure Data Factory through parallelization and efficient resource allocation, reducing job execution time by 45%.',
      'Implemented real-time monitoring using Prometheus and Grafana, improving issue detection and resolution speed across data pipelines.',
      'Designed secure data access policies using Azure IAM and Key Vault, ensuring SOC2 compliance and complete audit traceability.',
      'Collaborated with cross-functional analytics teams to deliver automated, scalable, and compliant data solutions supporting enterprise decision-making.'
    ],
    technologies: [
      'Python',
      'Apache Spark',
      'Apache Airflow',
      'Snowflake',
      'Azure Data Factory',
      'Azure Synapse',
      'Databricks',
      'Prometheus',
      'Grafana',
      'Azure Key Vault',
      'Terraform',
      'Git',
      'SQL'
    ]
  },
  {
    title: 'Senior Data Engineer',
    company: 'CareSource',
    location: 'Dayton, Ohio, USA',
    startDate: 'June 2023',
    endDate: 'May 2024',
    description: [
      'Designed and implemented a modern Data Lakehouse using Delta Lake on Databricks, managing over 10TB of data for enterprise analytics and reporting.',
      'Built and maintained real-time streaming pipelines using Kafka and Spark Structured Streaming to enable low-latency analytics across multiple systems.',
      'Migrated ETL workflows from Informatica to PySpark, reducing compute costs by 40% and improving maintainability.',
      'Developed and orchestrated complex data workflows with Apache Airflow DAGs, improving SLA adherence from 85% to 98%.',
      'Implemented automated unit testing and CI/CD pipelines for ETL processes, reducing production downtime by 35% and improving release frequency.',
      'Collaborated with governance teams to establish data lineage and cataloging using AWS Glue, ensuring metadata consistency and audit compliance.',
      'Partnered with analytics and BI teams to deliver trusted datasets that accelerated business insights by 30%.'
    ],
    technologies: [
      'Python',
      'PySpark',
      'Apache Airflow',
      'Kafka',
      'Databricks',
      'AWS Glue',
      'Delta Lake',
      'AWS S3',
      'Terraform',
      'CI/CD',
      'SQL',
      'Git'
    ]
  }
];

export const additionalExperience: Experience[] = [
  {
    title: 'Data Engineer',
    company: 'Infosys Ltd.',
    location: 'Hyderabad, India',
    startDate: 'June 2021',
    endDate: 'Dec 2022',
    description: [
      'Developed Spark-based ETL pipelines on AWS EMR processing 1TB+ of data daily, integrating Kafka for near real-time data ingestion.',
      'Designed and implemented data warehouse schemas using Star and Snowflake models in Snowflake and Redshift, improving query performance by 45%.',
      'Automated infrastructure and deployment workflows using Terraform and GitHub Actions, standardizing CI/CD processes and cutting release time by 60%.',
      'Established data validation frameworks with Great Expectations, ensuring 99% data consistency across analytics systems.',
      'Optimized query performance through SQL partitioning, clustering, and compression strategies, reducing compute costs by 25%.',
      'Collaborated with data scientists and BI teams to deliver analytics datasets for key business initiatives and improved insight delivery.',
      'Mentored junior engineers in PySpark optimization, SQL tuning, and pipeline best practices, fostering team efficiency and skill growth.'
    ],
    technologies: [
      'Python',
      'PySpark',
      'AWS EMR',
      'Apache Kafka',
      'Snowflake',
      'Redshift',
      'Terraform',
      'Great Expectations',
      'GitHub Actions',
      'SQL',
      'AWS S3'
    ]
  },
  {
    title: 'Associate Data Engineer',
    company: 'Innominds Software Pvt. Ltd.',
    location: 'Bangalore, India',
    startDate: 'Aug 2020',
    endDate: 'May 2021',
    description: [
      'Developed ETL workflows using Python and SQL to process large datasets from REST APIs, JSON, and CSV sources for analytics systems.',
      'Built PySpark-based data processing jobs on AWS S3 and Redshift, reducing overall processing time by 30%.',
      'Implemented data validation and transformation automation with reusable Python modules and SQL checks, improving accuracy by 25%.',
      'Managed Airflow DAGs for job orchestration and monitoring, reducing manual intervention by 40%.',
      'Optimized SQL queries and database schemas to enhance analytics query performance by up to 50%.',
      'Supported the migration of on-prem databases to AWS Cloud with zero downtime, improving scalability and cost efficiency.',
      'Collaborated with BI teams to deliver high-performance reporting datasets and ensure consistent data availability.'
    ],
    technologies: [
      'Python',
      'PySpark',
      'Apache Airflow',
      'AWS S3',
      'AWS Redshift',
      'SQL',
      'Pandas',
      'ETL',
      'Docker',
      'Shell Scripting'
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
  description: `Hi, I’m Saicharan Veldurthy, a data engineer passionate about building scalable and reliable data systems that power real-world decisions. I enjoy turning complex, unstructured data into meaningful insights through efficient architecture and automation.

At Wells Fargo, I lead data engineering projects focused on Spark, Airflow, and Snowflake within Azure. My work centers on performance optimization, data quality, and cloud migration to modernize enterprise analytics.

Before that, I worked as a Senior Data Engineer at CareSource, where I helped design a modern Data Lakehouse using Databricks and Delta Lake, and built real-time streaming systems with Kafka. I also led efforts to automate CI/CD pipelines, implement data lineage with AWS Glue, and modernize legacy ETL workflows to reduce processing time and cost.

I’m passionate about data systems that are not just powerful, but maintainable and efficient. I believe great engineering is about combining scalability with simplicity making sure every solution adds real value. Outside of work, I love exploring new data tools, learning emerging technologies in cloud and automation, and working on side projects that challenge how data can be used creatively.`,
};



export const contactInfo = {
  email: 'veldurthys1@udayton.edu',
  phone: '+1 (937)-829-0856',
  location: 'Mesa, Arizona',
};