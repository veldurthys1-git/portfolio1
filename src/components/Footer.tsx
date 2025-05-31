import React from 'react';
import { navItems, socialLinks } from '../data';
import { ChevronUp } from 'lucide-react';
import SocialIcon from './SocialIcon';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white dark:bg-dark-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gray-200 dark:border-dark-700">
          <div>
            <h2 className="text-2xl font-heading font-bold text-primary-600 dark:text-primary-400 mb-6">
              Portfolio
            </h2>
            <p className="text-dark-600 dark:text-gray-300 mb-6">
              Thank you for visiting my portfolio. If you're interested in working together, please don't hesitate to get in touch.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-500 dark:hover:text-primary-400 flex items-center justify-center transition-colors"
                  aria-label={link.platform}
                >
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-dark-800 dark:text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-dark-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-dark-800 dark:text-white mb-6">
              Newsletter
            </h3>
            <p className="text-dark-600 dark:text-gray-300 mb-4">
              Subscribe to my newsletter to receive updates on my latest projects and articles.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:border-primary-500 focus:ring focus:ring-primary-500/20 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-r-lg bg-primary-500 text-white font-medium hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-dark-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Saicharan Veldurthy. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center text-dark-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            aria-label="Scroll to top"
          >
            <span className="mr-2">Back to top</span>
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;