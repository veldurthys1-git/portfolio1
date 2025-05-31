export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'cloud' | 'devops' | 'project';
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  description?: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}