import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OptimusBankPreview } from '../components/OptimusBankPreview';
import { AlinaAIPreview } from '../components/AlinaAIPreview';
import { OptiVersePreview } from '../components/OptiVersePreview';
import { SparkPreview } from '../components/SparkPreview';
import { Card3D } from '../components/Card3D';
import { AnimatedText } from '../components/AnimatedText';

export const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      id: 1,
      title: 'Optimus Bank Rebrand',
      category: 'Branding, UI/UX, Website Development',
      year: '2024',
      description: 'We transformed Optimus Bank\'s identity with a cohesive brand system and intuitive user interfaces that reflect innovation and trust.',
      challenge: 'Modernize a legacy banking brand while maintaining credibility and trust.',
      solution: 'Created a refined visual language that balances sophistication with approachability. The new system improved customer engagement by 45%.',
      useCustomComponent: true
    },
    {
      id: 2,
      title: 'Alina AI Platform',
      category: 'Product Design, UI/UX, Brand Direction',
      year: '2024',
      description: 'We designed a seamless experience for an AI-powered enterprise management tool, balancing aesthetics with function.',
      challenge: 'Make complex AI functionality accessible and intuitive for non-technical users.',
      solution: 'Developed a clean, modular interface with progressive disclosure patterns that simplify complexity without sacrificing power.',
      useCustomComponent: true
    },
    {
      id: 3,
      title: 'OptiVerse Finance',
      category: 'Mobile App Design, UI/UX',
      year: '2024',
      description: 'A comprehensive mobile banking experience with intuitive design and seamless dark mode integration.',
      challenge: 'Create a mobile-first banking solution that feels modern and trustworthy while simplifying complex financial operations.',
      solution: 'Designed an elegant interface with dual-theme support, quick action cards, and personalized financial insights that improved user engagement by 60%.',
      useCustomComponent: true
    },
    {
      id: 4,
      title: 'Spark Dating App',
      category: 'Mobile App Design, UI/UX',
      year: '2024',
      description: 'A modern dating app focused on authentic connections with a playful, engaging interface.',
      challenge: 'Create a dating experience that feels personal and fun while building trust and safety.',
      solution: 'Designed an intuitive swipe interface with warm colors and smooth animations that encourage genuine interaction.',
      useCustomComponent: true
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeUpVariants}
          >
            <span style={{ 
              color: '#C6A664', 
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.3 }}
            variants={fadeUpVariants}
            className="mt-6 mb-8"
            style={{ 
              fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
              lineHeight: 1.1,
              color: '#1C1C1C',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Our Work Speaks for Itself.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeUpVariants}
            className="max-w-2xl mx-auto"
            style={{ 
              fontSize: '20px',
              lineHeight: 1.8,
              color: '#1C1C1C',
              opacity: 0.8
            }}
          >
            A curated collection of projects that showcase our commitment to design excellence and strategic thinking.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12" style={{ perspective: '1500px' }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeUpVariants}
              >
                <Card3D onClick={() => setSelectedProject(project.id)}>
                  <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-gray-100 rounded-sm">
                    {project.useCustomComponent ? (
                      project.id === 1 ? <OptimusBankPreview /> : 
                      project.id === 2 ? <AlinaAIPreview /> : 
                      project.id === 3 ? <OptiVersePreview /> :
                      <SparkPreview />
                    ) : (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8"
                      transition={{ duration: 0.4 }}
                    >
                      <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        style={{ 
                          color: '#ffffff',
                          fontSize: '14px',
                          fontWeight: 500,
                          letterSpacing: '0.15em'
                        }}
                      >
                        VIEW DETAILS →
                      </motion.span>
                    </motion.div>
                  </div>

                  <div className="flex items-start justify-between mb-2">
                    <h3 style={{ 
                      fontSize: '24px',
                      color: '#1C1C1C',
                      fontFamily: 'Poppins, sans-serif'
                    }}>
                      {project.title}
                    </h3>
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      style={{ 
                        color: '#C6A664',
                        fontSize: '14px'
                      }}
                    >
                      {project.year}
                    </motion.span>
                  </div>
                  
                  <p style={{ 
                    fontSize: '14px',
                    color: '#1C1C1C',
                    opacity: 0.6,
                    marginBottom: '8px'
                  }}>
                    {project.category}
                  </p>
                  
                  <p style={{ 
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: '#1C1C1C',
                    opacity: 0.8
                  }}>
                    {project.description}
                  </p>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 lg:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              {projects.find(p => p.id === selectedProject) && (
                <>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-8 right-8"
                    style={{ color: '#1C1C1C' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>

                  <div className="w-full aspect-video mb-8 overflow-hidden">
                    {projects.find(p => p.id === selectedProject)?.useCustomComponent ? (
                      selectedProject === 1 ? <OptimusBankPreview /> : 
                      selectedProject === 2 ? <AlinaAIPreview /> : 
                      selectedProject === 3 ? <OptiVersePreview /> :
                      <SparkPreview />
                    ) : (
                      <img
                        src={projects.find(p => p.id === selectedProject)?.image}
                        alt={projects.find(p => p.id === selectedProject)?.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span style={{ color: '#C6A664', fontSize: '14px' }}>
                      {projects.find(p => p.id === selectedProject)?.category}
                    </span>
                    <span style={{ color: '#1C1C1C', fontSize: '14px', opacity: 0.6 }}>
                      {projects.find(p => p.id === selectedProject)?.year}
                    </span>
                  </div>

                  <h2 className="mb-6" style={{ 
                    fontSize: '36px',
                    color: '#1C1C1C',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-3" style={{ 
                        fontSize: '20px',
                        color: '#1C1C1C',
                        fontFamily: 'Poppins, sans-serif'
                      }}>
                        Challenge
                      </h3>
                      <p style={{ 
                        fontSize: '16px',
                        lineHeight: 1.7,
                        color: '#1C1C1C',
                        opacity: 0.8
                      }}>
                        {projects.find(p => p.id === selectedProject)?.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-3" style={{ 
                        fontSize: '20px',
                        color: '#1C1C1C',
                        fontFamily: 'Poppins, sans-serif'
                      }}>
                        Solution
                      </h3>
                      <p style={{ 
                        fontSize: '16px',
                        lineHeight: 1.7,
                        color: '#1C1C1C',
                        opacity: 0.8
                      }}>
                        {projects.find(p => p.id === selectedProject)?.solution}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="px-6 lg:px-12 bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeUpVariants}
            className="mb-8"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#1C1C1C',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Ready to create something remarkable?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeUpVariants}
            className="mb-8"
            style={{ 
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#1C1C1C',
              opacity: 0.8
            }}
          >
            Let's discuss how we can elevate your brand and bring your vision to life.
          </motion.p>
        </div>
      </section>
    </div>
  );
};
