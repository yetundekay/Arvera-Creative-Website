import React from 'react';
import { motion } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  type?: 'fade' | 'slide' | 'reveal' | 'stagger';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  style = {},
  delay = 0,
  type = 'stagger'
}) => {
  const words = text.split(' ');
  
  if (type === 'stagger') {
    return (
      <div className={className} style={style}>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: delay + wordIndex * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              style={{ marginRight: '0.25em' }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </div>
    );
  }

  if (type === 'reveal') {
    return (
      <div className={`${className} overflow-hidden`} style={style}>
        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {text}
        </motion.div>
      </div>
    );
  }

  if (type === 'slide') {
    return (
      <motion.div
        className={className}
        style={style}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {text}
      </motion.div>
    );
  }

  // fade
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {text}
    </motion.div>
  );
};
