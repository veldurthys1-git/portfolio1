import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data';
import { Skill } from '../types';

export const categories = [
  { id: 'all', label: 'All Skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'cloud', label: 'Cloud Platforms' },
  { id: 'devops', label: 'DevOps & Automation' },
  { id: 'project', label: 'Engineering Practices' },
];



const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-dark-800 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} inView={inView} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  skill: Skill;
  index: number;
  inView: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-dark-700 dark:text-gray-200">
          {skill.name}
        </h3>
        <span className="text-sm text-dark-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full h-3 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: 0.1 * index + 0.3, duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;