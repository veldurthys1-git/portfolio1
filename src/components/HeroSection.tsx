import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { socialLinks } from '../data';
import SocialIcon from './SocialIcon';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4"
              >
                Python Full Stack Developer
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-dark-800 dark:text-white mb-4"
              >
                Hi, I'm <span className="text-primary-500">Saicharan Veldurthy</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-sm md:text-base text-dark-500 dark:text-gray-300 mb-8 max-w-2xl"
              >
                I build scalable, secure backend systems and cloud-native applications using modern technologies like Python, FastAPI, and Django. Passionate about optimizing performance and data workflows, I focus on delivering efficient, reliable solutions that power real-world platforms and enhance user experiences behind the scenes.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#contact" 
                className="px-6 py-3 font-medium rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 font-medium rounded-lg border border-dark-300 dark:border-dark-600 text-dark-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center gap-4 mt-4"
            >
              {socialLinks.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.platform}
                >
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-96 md:h-[500px]">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-100 via-white to-secondary-100 dark:from-primary-900/20 dark:via-dark-800 dark:to-secondary-900/20 rounded-xl transform rotate-3"></div>
              <div className="absolute inset-2 overflow-hidden rounded-xl bg-white dark:bg-dark-700 shadow-xl transform -rotate-3">
                <img 
                  src="Main.jpg" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-dark-400 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;