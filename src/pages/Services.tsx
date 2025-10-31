import React from 'react';
import { motion } from 'motion/react';
import { BrandStrategyIcon, UIUXDesignIcon, WebDevelopmentIcon, CreativeDirectionIcon } from '../components/ServiceIcons';
import { MagneticButton } from '../components/MagneticButton';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      number: '01',
      title: 'Brand Strategy & Identity',
      description: 'We craft distinct brand systems that express purpose and personality. From naming to logo creation, we ensure every brand element aligns with your business strategy.',
      features: [
        'Brand Positioning & Messaging',
        'Visual Identity Systems',
        'Logo & Symbol Design',
        'Brand Guidelines & Standards',
        'Typography & Color Systems'
      ],
      icon: BrandStrategyIcon
    },
    {
      number: '02',
      title: 'UI/UX Design',
      description: 'We design digital experiences that are intuitive, scalable, and performance-driven. Websites, apps, dashboards — built to deliver clarity and impact.',
      features: [
        'User Research & Testing',
        'Interface Design',
        'Interaction Design',
        'Design Systems & Component Libraries',
        'Responsive Web Design'
      ],
      icon: UIUXDesignIcon
    },
    {
      number: '03',
      title: 'Website Development',
      description: 'We build high-performance, scalable websites that combine beautiful design with clean code. From marketing sites to complex web applications, we deliver solutions that perform.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Web Application Development',
        'CMS Integration',
        'Performance Optimization'
      ],
      icon: WebDevelopmentIcon
    },
    {
      number: '04',
      title: 'Product & Creative Direction',
      description: 'We partner with forward-thinking brands to shape campaigns, visuals, and creative narratives that connect emotionally and commercially.',
      features: [
        'Creative Strategy',
        'Campaign Development',
        'Art Direction',
        'Product Design',
        'Visual Storytelling'
      ],
      icon: CreativeDirectionIcon
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
              Our Services
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
            What we do best.
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
            We specialize in creating cohesive brand experiences that drive results. From strategy to execution, we deliver design that works.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              variants={fadeUpVariants}
              className="grid md:grid-cols-2 gap-16 items-start"
            >
              {/* Left Column */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="mb-6">
                  <span style={{ 
                    color: '#C6A664',
                    fontSize: '48px',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {service.number}
                  </span>
                </div>
                <h2 className="mb-6" style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  color: '#1C1C1C',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {service.title}
                </h2>
                <p style={{ 
                  fontSize: '18px',
                  lineHeight: 1.8,
                  color: '#1C1C1C',
                  opacity: 0.8,
                  marginBottom: '32px'
                }}>
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C6A664' }} />
                      <span style={{ 
                        fontSize: '16px',
                        color: '#1C1C1C',
                        opacity: 0.8
                      }}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right Column - Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`aspect-[4/3] flex items-center justify-center p-12 rounded-sm ${index % 2 === 1 ? 'md:order-1' : ''}`}
                style={{ backgroundColor: '#FAFAFA' }}
              >
                <motion.div
                  className="w-full max-w-md"
                  initial={{ y: 0 }}
                  whileHover={{ 
                    y: -10,
                    rotate: [0, -2, 2, -2, 0],
                    scale: 1.05
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.22, 1, 0.36, 1],
                    rotate: {
                      duration: 0.8,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <service.icon className="w-full h-auto" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
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
            Our Process
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision, audience, and goals' },
              { step: '02', title: 'Strategy', description: 'Crafting a roadmap aligned with business objectives' },
              { step: '03', title: 'Design', description: 'Creating visual solutions that inspire and perform' },
              { step: '04', title: 'Delivery', description: 'Launching with precision and ongoing support' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeUpVariants}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: '#C6A664' }}
                >
                  <span style={{ 
                    color: '#C6A664',
                    fontSize: '18px',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {phase.step}
                  </span>
                </div>
                <h3 className="mb-3" style={{ 
                  fontSize: '20px',
                  color: '#1C1C1C',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {phase.title}
                </h3>
                <p style={{ 
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: '#1C1C1C',
                  opacity: 0.7
                }}>
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 lg:px-12">
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
            Let's build your brand's next chapter.
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
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
