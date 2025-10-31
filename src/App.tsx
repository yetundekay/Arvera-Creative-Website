import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Work } from './pages/Work';
import { Contact } from './pages/Contact';

type Page = 'Home' | 'About' | 'Services' | 'Work' | 'Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 40,
      scale: 0.98
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: -40,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home onNavigate={handleNavigate} />;
      case 'About':
        return <About />;
      case 'Services':
        return <Services onNavigate={handleNavigate} />;
      case 'Work':
        return <Work />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ color: '#1C1C1C' }}>
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page Content with Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
            style={{ backgroundColor: '#1C1C1C', color: '#ffffff' }}
            whileHover={{ scale: 1.1, backgroundColor: '#C6A664' }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
