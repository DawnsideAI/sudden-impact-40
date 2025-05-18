
import React from 'react';
import StyleProvider from './StyleProvider';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  maxWidth?: string;
  subtitleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
  maxWidth = 'max-w-3xl',
  subtitleClassName = '',
}) => {
  const titleClasses = light
    ? "text-white font-bold mb-2 md:mb-4"
    : "bg-gradient-to-r from-brand-pink via-brand-purple to-brand-aqua bg-clip-text text-transparent font-bold mb-2 md:mb-4";
  
  const subtitleClasses = light
    ? "text-gray-300 text-base md:text-xl"
    : "text-brand-gray text-base md:text-xl";

  return (
    <StyleProvider 
      className={`${centered ? 'text-center' : 'text-left'} ${className} ${centered ? 'mx-auto' : ''} ${maxWidth}`}
    >
      <h2 className={`text-2xl md:text-4xl lg:text-5xl leading-tight ${titleClasses}`}>
        {title}
      </h2>
      {subtitle && <p className={`${subtitleClasses} ${subtitleClassName}`}>{subtitle}</p>}
    </StyleProvider>
  );
};

export default SectionTitle;
