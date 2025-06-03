import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutMe } from '../data';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-dark-800 dark:text-white mb-6">
            {aboutMe.title}
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative h-80 md:h-full rounded-xl overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  src="/IMG_1630.JPG" 
                  alt="About me" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="md:col-span-3"
            >
              <div className="prose prose-lg dark:prose-invert">
                {aboutMe.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-dark-600 dark:text-gray-300 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
