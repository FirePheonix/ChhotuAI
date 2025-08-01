import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const NewsletterSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section ref={ref} className="py-32 px-4 bg-void-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="font-serif text-5xl md:text-6xl text-white mb-8 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          Join the AI Revolution
        </motion.h2>
        
        <motion.p 
          className="font-sans text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Get early access to Chotu.AI and be among the first shopkeepers to transform their business with AI.
        </motion.p>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <input
            type="tel"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your WhatsApp number"
            className="flex-1 px-6 py-3 bg-transparent border border-nova-silver text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300 min-w-0"
            required
          />
          
          <button
            type="submit"
            className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide whitespace-nowrap"
          >
            {isSubmitted ? 'Requested!' : 'Get Early Access'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default NewsletterSection;
