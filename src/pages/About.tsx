import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const values = [
    {
      title: 'Clarity',
      description: 'Every visual decision is intentional, purposeful, and designed to communicate with precision.'
    },
    {
      title: 'Consistency',
      description: 'We ensure brand excellence across all touchpoints, creating unified experiences that resonate.'
    },
    {
      title: 'Collaboration',
      description: 'Innovation thrives when creative minds work together toward a shared vision.'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-5xl mx-auto">
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
              About Arvera
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
            The studio behind the clarity.
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeUpVariants}
            className="space-y-6"
          >
            <p style={{ 
              fontSize: '20px',
              lineHeight: 1.8,
              color: '#1C1C1C',
              opacity: 0.8
            }}>
              Arvera Creative was founded to bring creative excellence and design thinking into the heart of modern business. We believe design should not only look good — it should work beautifully, communicate clearly, and inspire action.
            </p>
            <p style={{ 
              fontSize: '20px',
              lineHeight: 1.8,
              color: '#1C1C1C',
              opacity: 0.8
            }}>
              Our process is built on collaboration, insight, and precision. We translate business goals into powerful creative solutions that drive growth and distinction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 lg:px-12 mb-32 bg-gray-50 py-24">
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
            Core Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                variants={fadeUpVariants}
                className="text-center"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#C6A664' }}
                >
                  <span style={{ 
                    color: '#ffffff',
                    fontSize: '24px',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {index + 1}
                  </span>
                </div>
                <h3 className="mb-4" style={{ 
                  fontSize: '24px',
                  color: '#1C1C1C',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {value.title}
                </h3>
                <p style={{ 
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: '#1C1C1C',
                  opacity: 0.7
                }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-6 lg:px-12 py-32 mt-32 bg-charcoal" style={{ backgroundColor: '#1C1C1C' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeUpVariants}
            className="mb-8"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#ffffff',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Design that moves business forward.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeUpVariants}
            style={{ 
              fontSize: '20px',
              lineHeight: 1.8,
              color: '#ffffff',
              opacity: 0.8
            }}
          >
            We don't just make things look beautiful. We build systems that work, brands that resonate, and experiences that convert vision into value.
          </motion.p>
        </div>
      </section>
    </div>
  );
};
