import { supabase } from '../utils/supabase';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-6a419bf5/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error('Contact form submission error:', data);
        console.error('Error details:', data.details);
        console.error('Status:', data.status);
        
        // Show detailed error for debugging
        let errorMessage = data.error || 'Failed to send message';
        if (data.details) {
          if (typeof data.details === 'object' && data.details.message) {
            errorMessage += `: ${data.details.message}`;
          } else if (typeof data.details === 'string') {
            errorMessage += `: ${data.details}`;
          }
        }
        throw new Error(errorMessage);
      }

      console.log('Contact form submitted successfully:', data);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 mb-24">
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
              Get in Touch
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
            Let's collaborate.
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
            We're always open to new projects, partnerships, and creative opportunities. Tell us about your idea, and we'll bring it to life with strategy and design precision.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.5 }}
              variants={fadeUpVariants}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name"
                    style={{ 
                      color: '#1C1C1C',
                      fontSize: '14px',
                      fontWeight: 500,
                      display: 'block',
                      marginBottom: '8px'
                    }}
                  >
                    Name *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border transition-all duration-300 focus:outline-none"
                    style={{ 
                      borderColor: 'rgba(28, 28, 28, 0.2)',
                      color: '#1C1C1C',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email"
                    style={{ 
                      color: '#1C1C1C',
                      fontSize: '14px',
                      fontWeight: 500,
                      display: 'block',
                      marginBottom: '8px'
                    }}
                  >
                    Email *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border transition-all duration-300 focus:outline-none"
                    style={{ 
                      borderColor: 'rgba(28, 28, 28, 0.2)',
                      color: '#1C1C1C',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="company"
                    style={{ 
                      color: '#1C1C1C',
                      fontSize: '14px',
                      fontWeight: 500,
                      display: 'block',
                      marginBottom: '8px'
                    }}
                  >
                    Company
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border transition-all duration-300 focus:outline-none"
                    style={{ 
                      borderColor: 'rgba(28, 28, 28, 0.2)',
                      color: '#1C1C1C',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="projectType"
                    style={{ 
                      color: '#1C1C1C',
                      fontSize: '14px',
                      fontWeight: 500,
                      display: 'block',
                      marginBottom: '8px'
                    }}
                  >
                    Project Type *
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.01 }}
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border transition-all duration-300 focus:outline-none"
                    style={{ 
                      borderColor: 'rgba(28, 28, 28, 0.2)',
                      color: '#1C1C1C',
                      fontSize: '16px',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="">Select a project type</option>
                    <option value="branding">Brand Strategy & Identity</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="web-development">Website Development</option>
                    <option value="creative-direction">Product & Creative Direction</option>
                    <option value="other">Other</option>
                  </motion.select>
                </div>

                <div>
                  <label 
                    htmlFor="message"
                    style={{ 
                      color: '#1C1C1C',
                      fontSize: '14px',
                      fontWeight: 500,
                      display: 'block',
                      marginBottom: '8px'
                    }}
                  >
                    Message *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border transition-all duration-300 focus:outline-none resize-none"
                    style={{ 
                      borderColor: 'rgba(28, 28, 28, 0.2)',
                      color: '#1C1C1C',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(198, 166, 100, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ 
                    backgroundColor: '#1C1C1C',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 500,
                    opacity: isSending ? 0.7 : 1
                  }}
                >
                  {isSending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-6 p-4 rounded-sm"
                    style={{ backgroundColor: '#C6A664', color: '#ffffff' }}
                  >
                    <p style={{ fontSize: '16px' }}>
                      ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-6 p-4 rounded-sm"
                    style={{ backgroundColor: '#dc3545', color: '#ffffff' }}
                  >
                    <p style={{ fontSize: '16px' }}>
                      ✗ {error}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.6 }}
              variants={fadeUpVariants}
              className="space-y-12"
            >
              <div>
                <h2 className="mb-6" style={{ 
                  fontSize: '28px',
                  color: '#1C1C1C',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  Let's Talk
                </h2>
                <p style={{ 
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: '#1C1C1C',
                  opacity: 0.8,
                  marginBottom: '24px'
                }}>
                  Whether you're looking to build a new brand, redesign your digital presence, or bring a creative vision to life — we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2" style={{ 
                    fontSize: '14px',
                    color: '#C6A664',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    Email
                  </h3>
                  <a 
                    href="mailto:arveracreative@gmail.com"
                    className="transition-opacity duration-300 hover:opacity-70"
                    style={{ 
                      fontSize: '18px',
                      color: '#1C1C1C'
                    }}
                  >
                    arveracreative@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="mb-2" style={{ 
                    fontSize: '14px',
                    color: '#C6A664',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    Location
                  </h3>
                  <p style={{ 
                    fontSize: '18px',
                    color: '#1C1C1C'
                  }}>
                    Lagos, Nigeria
                  </p>
                </div>

                <div>
                  <h3 className="mb-2" style={{ 
                    fontSize: '14px',
                    color: '#C6A664',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    Follow Us
                  </h3>
                  <a 
                    href="https://instagram.com/arveracreative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-opacity duration-300 hover:opacity-70"
                    style={{ 
                      fontSize: '18px',
                      color: '#1C1C1C'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    @arveracreative
                  </a>
                </div>
              </div>

              {/* Availability Note */}
              <div className="p-6 bg-gray-50">
                <h3 className="mb-3" style={{ 
                  fontSize: '18px',
                  color: '#1C1C1C',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  Current Availability
                </h3>
                <p style={{ 
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: '#1C1C1C',
                  opacity: 0.8
                }}>
                  We're currently accepting new projects for Q2 2025. Average response time is 24-48 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
