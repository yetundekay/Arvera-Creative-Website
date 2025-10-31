import React from 'react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t py-12 px-6 lg:px-12" style={{ borderColor: 'rgba(28, 28, 28, 0.1)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p style={{ color: '#1C1C1C', fontSize: '14px' }}>
              © 2025 Arvera Creative. All rights reserved.
            </p>
            <p style={{ color: '#C6A664', fontSize: '14px', marginTop: '4px' }}>
              Strategic Design. Timeless Creativity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <a
              href="mailto:arveracreative@gmail.com"
              className="transition-colors duration-300 hover:opacity-70"
              style={{ color: '#1C1C1C', fontSize: '14px' }}
            >
              arveracreative@gmail.com
            </a>
            <a
              href="https://instagram.com/arveradesign"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
              style={{ color: '#1C1C1C' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
