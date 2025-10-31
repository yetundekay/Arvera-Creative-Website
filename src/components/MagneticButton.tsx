import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'primary' | 'secondary';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  style = {},
  variant = 'primary'
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyle = variant === 'primary' ? {
    backgroundColor: '#1C1C1C',
    color: '#ffffff',
  } : {
    borderColor: '#C6A664',
    color: '#1C1C1C',
    backgroundColor: 'transparent',
    border: '2px solid #C6A664'
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`px-8 py-4 rounded-sm transition-all duration-300 relative overflow-hidden ${className}`}
      style={{
        ...baseStyle,
        fontSize: '16px',
        fontWeight: 500,
        ...style
      }}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: variant === 'primary' 
          ? '0 0 30px rgba(198, 166, 100, 0.3)' 
          : '0 0 20px rgba(198, 166, 100, 0.2)'
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="relative z-10"
        animate={{
          x: -position.x * 0.5,
          y: -position.y * 0.5,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      >
        {children}
      </motion.span>
      
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};
