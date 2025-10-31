import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { OptimusBankPreview } from '../components/OptimusBankPreview';
import { AlinaAIPreview } from '../components/AlinaAIPreview';
import { OptiVersePreview } from '../components/OptiVersePreview';
import { MagneticButton } from '../components/MagneticButton';
import { AnimatedText } from '../components/AnimatedText';
import { Card3D } from '../components/Card3D';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.03,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="inline-block"
        style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
      >
        {char}
      </motion.span>
    ));
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      title: 'Optimus Bank Rebrand',
      description: 'Refined visual identity and UX design that improved engagement and recognition.',
      useCustomComponent: true
    },
    {
      title: 'Alina AI Platform',
      description: 'Full product interface and brand direction for an AI management system.',
      useCustomComponent: true
    },
    {
      title: 'OptiVerse Finance',
      description: 'Mobile banking app with seamless UX and comprehensive financial management.',
      useCustomComponent: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Parallax Background */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white opacity-60" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl" />
        </motion.div>

        <motion.div style={{ opacity }} className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span style={{ 
              color: '#C6A664', 
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Arvera Creative Studio
            </span>
          </motion.div>

          <h1 className="mb-8" style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            lineHeight: 1.1,
            color: '#1C1C1C',
            fontFamily: 'Poppins, sans-serif'
          }}>
            {splitText('Design that')}
            <br />
            {splitText('defines clarity.')}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-12 max-w-2xl mx-auto"
            style={{ 
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#1C1C1C',
              opacity: 0.8
            }}
          >
            We create intelligent, scalable, and visually consistent design systems that power ambitious brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton
              onClick={() => onNavigate('Work')}
              variant="primary"
            >
              View Our Work
            </MagneticButton>
            <MagneticButton
              onClick={() => onNavigate('Contact')}
              variant="secondary"
            >
              Get in Touch
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            variants={fadeUpVariants}
          >
            <h2 className="mb-8" style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#1C1C1C',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Crafting timeless experiences
            </h2>
            <p style={{ 
              fontSize: '20px',
              lineHeight: 1.8,
              color: '#1C1C1C',
              opacity: 0.8,
              maxWidth: '800px'
            }}>
              Arvera Creative is a creative studio building timeless brand and digital experiences. We blend strategy, design, and innovation to help businesses communicate with precision and confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeUpVariants}
            className="mb-16 text-center"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#1C1C1C',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Core Services
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Brand Strategy & Identity',
                description: 'Distinct brand systems that express purpose and personality'
              },
              {
                title: 'UI/UX Design',
                description: 'Intuitive, scalable digital experiences built for impact'
              },
              {
                title: 'Website Development',
                description: 'High-performance websites with beautiful design and clean code'
              },
              {
                title: 'Product & Creative Direction',
                description: 'Campaigns and narratives that connect emotionally'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeUpVariants}
                whileHover={{ y: -8 }}
                className="p-8 bg-white rounded-sm"
              >
                <div className="w-12 h-1 mb-6" style={{ backgroundColor: '#C6A664' }} />
                <h3 className="mb-4" style={{ 
                  fontSize: '24px',
                  color: '#1C1C1C',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: '#1C1C1C',
                  opacity: 0.7
                }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeUpVariants}
            className="mb-16 text-center"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#1C1C1C',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                variants={fadeUpVariants}
              >
                <Card3D className="group overflow-hidden">
                  <div className="relative overflow-hidden mb-4 aspect-[4/3] rounded-sm">
                    {project.useCustomComponent ? (
                      project.title === 'Optimus Bank Rebrand' ? <OptimusBankPreview /> : 
                      project.title === 'Alina AI Platform' ? <AlinaAIPreview /> :
                      <OptiVersePreview />
                    ) : (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center"
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span 
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        style={{ 
                          color: '#ffffff',
                          fontSize: '14px',
                          fontWeight: 500,
                          letterSpacing: '0.1em'
                        }}
                      >
                        VIEW PROJECT →
                      </motion.span>
                    </motion.div>
                  </div>
                  <h3 className="mb-2" style={{ 
                    fontSize: '20px',
                    color: '#1C1C1C',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: '#1C1C1C',
                    opacity: 0.7
                  }}>
                    {project.description}
                  </p>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeUpVariants}
            style={{ 
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#1C1C1C',
              opacity: 0.7
            }}
          >
            Trusted by brands across banking, fintech, and enterprise innovation.
          </motion.p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeUpVariants}
            className="mb-8"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: '#1C1C1C',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Let's create something exceptional.
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeUpVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(198, 166, 100, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('Contact')}
              className="px-10 py-5 rounded-sm transition-all duration-300"
              style={{ 
                backgroundColor: '#1C1C1C',
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: 500
              }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
