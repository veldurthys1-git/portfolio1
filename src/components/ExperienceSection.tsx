import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { professionalExperience, additionalExperience } from '../data';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState<'professional' | 'additional'>('professional');

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-dark-800 dark:text-white mb-6">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === 'professional'
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-white/60'
              }`}
              onClick={() => setActiveCategory('professional')}
            >
              Professional
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === 'additional'
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-white/60'
              }`}
              onClick={() => setActiveCategory('additional')}
            >
              Additional
            </button>
          </div>

          {/* Timeline Items */}
          <div className="max-w-5xl mx-auto space-y-16">
            {(activeCategory === 'professional' ? professionalExperience : additionalExperience).map(
              (experience, index) => (
                <TimelineItem
                  key={index}
                  experience={experience}
                  index={index}
                  inView={inView}
                  isLast={
                    index ===
                    (activeCategory === 'professional'
                      ? professionalExperience.length - 1
                      : additionalExperience.length - 1)
                  }
                />
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  experience: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | 'Present';
    description: string[];
    technologies: string[];
  };
  index: number;
  inView: boolean;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index, inView }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-9 items-start min-h-[240px]">
      {/* Vertical line */}
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-300 dark:bg-dark-700 z-0" />

      {/* Icon */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center shadow-lg">
          <Briefcase size={16} className="text-white" />
        </div>
      </div>

      {/* Left card */}
      {isEven && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          className="col-span-9 md:col-span-4 md:col-start-1 order-2 md:order-1"
        >
          <CardContent experience={experience} />
        </motion.div>
      )}

      {/* Right card */}
      {!isEven && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          className="col-span-9 md:col-span-4 md:col-start-6 order-3"
        >
          <CardContent experience={experience} />
        </motion.div>
      )}
    </div>
  );
};

const CardContent: React.FC<{ experience: TimelineItemProps['experience'] }> = ({ experience }) => (
  <div className="p-6 rounded-xl bg-white dark:bg-dark-800 shadow-md">
    <h3 className="text-xl font-bold text-dark-800 dark:text-white">
      {experience.title}
    </h3>
    <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
      {experience.company}
    </h4>
    <div className="flex items-center text-dark-500 dark:text-gray-400 mb-4">
      <Calendar size={16} className="mr-2" />
      <span className="text-sm">
        {experience.startDate} - {experience.endDate}
      </span>
      <span className="mx-2">•</span>
      <span className="text-sm">{experience.location}</span>
    </div>
    <ul className="space-y-2 mb-4">
      {experience.description.map((item, idx) => (
        <li key={idx} className="text-dark-600 dark:text-gray-300 flex items-start">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-2 mt-auto">
      {experience.technologies.map((tech) => (
        <span
          key={tech}
          className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default ExperienceSection;
