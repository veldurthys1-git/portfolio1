import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '../data';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-dark-800 dark:text-white mb-6">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap md:flex-nowrap items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center">
                        <GraduationCap size={24} />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-dark-800 dark:text-white">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
                          {edu.institution}
                        </h4>
                        <div className="flex items-center text-dark-500 dark:text-gray-400 mb-4">
                          <Calendar size={16} className="mr-2" />
                          <span className="text-sm">Graduated {edu.graduationDate}</span>
                          <span className="mx-2">•</span>
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        
                        {edu.description && (
                          <p className="text-dark-600 dark:text-gray-300">
                            {edu.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;