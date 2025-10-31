import React from 'react';

interface IconProps {
  className?: string;
}

export const BrandStrategyIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Concentric circles representing brand layers */}
    <circle cx="200" cy="200" r="140" stroke="#C6A664" strokeWidth="2" opacity="0.3" />
    <circle cx="200" cy="200" r="100" stroke="#C6A664" strokeWidth="2" opacity="0.5" />
    <circle cx="200" cy="200" r="60" stroke="#C6A664" strokeWidth="3" opacity="0.7" />
    
    {/* Central diamond shape */}
    <path
      d="M200 150 L240 200 L200 250 L160 200 Z"
      fill="#C6A664"
      opacity="0.9"
    />
    
    {/* Four directional lines */}
    <line x1="200" y1="60" x2="200" y2="120" stroke="#1C1C1C" strokeWidth="2" opacity="0.6" />
    <line x1="340" y1="200" x2="280" y2="200" stroke="#1C1C1C" strokeWidth="2" opacity="0.6" />
    <line x1="200" y1="340" x2="200" y2="280" stroke="#1C1C1C" strokeWidth="2" opacity="0.6" />
    <line x1="60" y1="200" x2="120" y2="200" stroke="#1C1C1C" strokeWidth="2" opacity="0.6" />
    
    {/* Small circles at cardinal points */}
    <circle cx="200" cy="60" r="6" fill="#C6A664" />
    <circle cx="340" cy="200" r="6" fill="#C6A664" />
    <circle cx="200" cy="340" r="6" fill="#C6A664" />
    <circle cx="60" cy="200" r="6" fill="#C6A664" />
  </svg>
);

export const UIUXDesignIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Device frames - mobile and desktop */}
    <rect x="80" y="120" width="120" height="200" rx="8" stroke="#1C1C1C" strokeWidth="3" fill="white" />
    <rect x="220" y="80" width="100" height="140" rx="4" stroke="#1C1C1C" strokeWidth="2" fill="white" />
    
    {/* Mobile screen elements */}
    <rect x="100" y="145" width="80" height="4" fill="#C6A664" opacity="0.7" />
    <rect x="100" y="160" width="60" height="4" fill="#1C1C1C" opacity="0.3" />
    <rect x="100" y="170" width="70" height="4" fill="#1C1C1C" opacity="0.3" />
    <rect x="100" y="190" width="80" height="40" fill="#C6A664" opacity="0.2" />
    <rect x="100" y="240" width="35" height="30" fill="#1C1C1C" opacity="0.1" />
    <rect x="145" y="240" width="35" height="30" fill="#1C1C1C" opacity="0.1" />
    
    {/* Desktop screen elements */}
    <rect x="230" y="100" width="80" height="3" fill="#C6A664" opacity="0.7" />
    <rect x="230" y="110" width="50" height="3" fill="#1C1C1C" opacity="0.3" />
    <rect x="230" y="120" width="80" height="30" fill="#C6A664" opacity="0.2" />
    <rect x="230" y="160" width="35" height="25" fill="#1C1C1C" opacity="0.1" />
    <rect x="275" y="160" width="35" height="25" fill="#1C1C1C" opacity="0.1" />
    
    {/* Connection line */}
    <path
      d="M200 220 Q210 240 220 240"
      stroke="#C6A664"
      strokeWidth="2"
      strokeDasharray="4 4"
      opacity="0.5"
    />
    
    {/* Cursor pointer */}
    <path
      d="M270 260 L270 280 L275 275 L280 285 L285 283 L280 273 L287 273 Z"
      fill="#C6A664"
    />
  </svg>
);

export const WebDevelopmentIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Browser window */}
    <rect x="60" y="80" width="280" height="240" rx="8" stroke="#1C1C1C" strokeWidth="3" fill="white" />
    
    {/* Browser toolbar */}
    <rect x="60" y="80" width="280" height="30" fill="#1C1C1C" opacity="0.05" />
    <circle cx="80" cy="95" r="4" fill="#C6A664" opacity="0.6" />
    <circle cx="95" cy="95" r="4" fill="#C6A664" opacity="0.6" />
    <circle cx="110" cy="95" r="4" fill="#C6A664" opacity="0.6" />
    
    {/* Code brackets */}
    <path
      d="M120 160 L100 200 L120 240"
      stroke="#C6A664"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M280 160 L300 200 L280 240"
      stroke="#C6A664"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Code lines */}
    <line x1="150" y1="160" x2="250" y2="160" stroke="#1C1C1C" strokeWidth="2" opacity="0.4" />
    <line x1="150" y1="180" x2="230" y2="180" stroke="#1C1C1C" strokeWidth="2" opacity="0.3" />
    <line x1="150" y1="200" x2="240" y2="200" stroke="#C6A664" strokeWidth="3" opacity="0.6" />
    <line x1="150" y1="220" x2="220" y2="220" stroke="#1C1C1C" strokeWidth="2" opacity="0.3" />
    <line x1="150" y1="240" x2="250" y2="240" stroke="#1C1C1C" strokeWidth="2" opacity="0.4" />
    
    {/* Forward slash in center */}
    <line x1="190" y1="250" x2="210" y2="150" stroke="#C6A664" strokeWidth="3" opacity="0.5" />
  </svg>
);

export const CreativeDirectionIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Starburst/rays pattern */}
    <circle cx="200" cy="200" r="50" fill="#C6A664" opacity="0.8" />
    
    {/* Radiating lines */}
    <line x1="200" y1="200" x2="200" y2="80" stroke="#C6A664" strokeWidth="3" opacity="0.4" />
    <line x1="200" y1="200" x2="280" y2="120" stroke="#C6A664" strokeWidth="3" opacity="0.4" />
    <line x1="200" y1="200" x2="320" y2="200" stroke="#C6A664" strokeWidth="3" opacity="0.4" />
    <line x1="200" y1="200" x2="280" y2="280" stroke="#C6A664" strokeWidth="3" opacity="0.4" />
    <line x1="200" y1="200" x2="200" y2="320" stroke="#C6A664" strokeWidth="3" opacity="0.4" />
    <line x1="200" y1="200" x2="120" y2="280" stroke="#C6A664" strokeWidth="3" opacity="0.4" />
    <line x1="200" y1="200" x2="80" y2="200" stroke="#C6A664" strokeWidth="3" opacity="0.4" />
    <line x1="200" y1="200" x2="120" y2="120" stroke="#C6A664" strokeWidth="3" opacity="0.4" />
    
    {/* Outer circles */}
    <circle cx="200" cy="80" r="8" fill="#1C1C1C" opacity="0.6" />
    <circle cx="280" cy="120" r="8" fill="#1C1C1C" opacity="0.6" />
    <circle cx="320" cy="200" r="8" fill="#1C1C1C" opacity="0.6" />
    <circle cx="280" cy="280" r="8" fill="#1C1C1C" opacity="0.6" />
    <circle cx="200" cy="320" r="8" fill="#1C1C1C" opacity="0.6" />
    <circle cx="120" cy="280" r="8" fill="#1C1C1C" opacity="0.6" />
    <circle cx="80" cy="200" r="8" fill="#1C1C1C" opacity="0.6" />
    <circle cx="120" cy="120" r="8" fill="#1C1C1C" opacity="0.6" />
    
    {/* Middle ring */}
    <circle cx="200" cy="200" r="90" stroke="#1C1C1C" strokeWidth="2" opacity="0.2" />
    
    {/* Center highlight */}
    <circle cx="200" cy="200" r="30" fill="white" opacity="0.3" />
  </svg>
);
