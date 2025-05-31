import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = filter === 'featured'
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-dark-800 dark:text-white mb-6">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                  filter === 'all'
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-dark-800 text-dark-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700'
                } border border-gray-300 dark:border-dark-600`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                  filter === 'featured'
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-dark-800 text-dark-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700'
                } border border-gray-300 dark:border-dark-600 border-l-0`}
              >
                Featured
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
  };
  index: number;
  inView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.1 * (index % 3), duration: 0.5 }}
      className="group relative bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {project.featured && (
        <div className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-accent-500 text-white rounded-full">
          Featured
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-dark-600 dark:text-gray-300 text-sm mb-4">
          {project.description.length > 100
            ? `${project.description.substring(0, 100)}...`
            : project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex justify-between">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
            >
              <ExternalLink size={16} className="mr-1" /> View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-dark-500 dark:text-gray-400 hover:text-dark-700 dark:hover:text-gray-200 transition-colors"
            >
              <Github size={16} className="mr-1" /> Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;