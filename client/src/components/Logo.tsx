import React from 'react';
import logoPath from '@assets/chrome_KULIV5V2yh.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  return (
    <div className={`${className} ${sizeClasses[size]} relative`}>
      <img 
        src={logoPath} 
        alt="Discover Georgia - See More, Feel More" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;