import React from 'react';
import logoImage from 'figma:asset/f709e10688e9b340b1323457e18ed14196589814.png';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`} style={{ height: '40px' }}>
      {/* Logo image */}
      <img 
        src={logoImage} 
        alt="Arvera Creative" 
        style={{ height: '40px', width: 'auto' }}
        className="object-contain"
      />
    </div>
  );
};
