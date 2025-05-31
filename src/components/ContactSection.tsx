import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { contactInfo, socialLinks } from '../data';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SocialIcon from './SocialIcon';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-dark-800 dark:text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-dark-700 dark:text-gray-200 mb-1">Email</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-dark-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-dark-700 dark:text-gray-200 mb-1">Phone</h4>
                    <a
                      href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`}
                      className="text-dark-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-dark-700 dark:text-gray-200 mb-1">Location</h4>
                    <p className="text-dark-500 dark:text-gray-400">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-dark-700 dark:text-gray-200 mb-4">
                  Connect with me
                </h4>
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
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-gray-200 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:border-primary-500 focus:ring focus:ring-primary-500/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-gray-200 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:border-primary-500 focus:ring focus:ring-primary-500/20 transition-colors"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-gray-200 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:border-primary-500 focus:ring focus:ring-primary-500/20 transition-colors"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-gray-200 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:border-primary-500 focus:ring focus:ring-primary-500/20 transition-colors resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full px-6 py-3 rounded-lg bg-primary-500 text-white font-medium flex items-center justify-center hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800 transition-colors disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </div>
                  )}
                </button>
                
                {formStatus === 'success' && (
                  <div className="px-4 py-3 bg-green-100 text-green-700 rounded-lg">
                    Your message has been sent successfully. I'll get back to you soon!
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="px-4 py-3 bg-red-100 text-red-700 rounded-lg">
                    There was an error sending your message. Please try again later.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;