import React, { useState, useEffect } from 'react';
import { navItems } from '../data';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-heading font-bold text-primary-600 dark:text-primary-400"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-medium text-dark-600 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-dark-600 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-dark-800 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-medium text-dark-600 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;