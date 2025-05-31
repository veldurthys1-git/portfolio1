import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../data';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-dark-800 dark:text-white mb-6">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
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

interface TestimonialCardProps {
  testimonial: {
    content: string;
    author: string;
    role: string;
    company: string;
    image?: string;
  };
  index: number;
  inView: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden flex flex-col h-full"
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="mb-6 text-primary-500">
          <Quote size={32} />
        </div>
        
        <p className="text-dark-600 dark:text-gray-300 mb-6 flex-grow italic">
          "{testimonial.content}"
        </p>
        
        <div className="mt-auto">
          <h4 className="font-bold text-dark-800 dark:text-white">
            {testimonial.author}
          </h4>
          <p className="text-dark-500 dark:text-gray-400 text-sm">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;