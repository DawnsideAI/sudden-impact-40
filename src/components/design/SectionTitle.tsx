
import React from 'react';
import StyleProvider from './StyleProvider';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  maxWidth?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
  maxWidth = 'max-w-3xl',
}) => {
  const titleClasses = light
    ? "text-white font-bold mb-4"
    : "bg-gradient-to-br from-brand-indigo via-brand-purple to-brand-violet bg-clip-text text-transparent font-bold mb-4";
  
  const subtitleClasses = light
    ? "text-gray-300 text-xl"
    : "text-brand-gray text-xl";

  return (
    <StyleProvider 
      className={`${centered ? 'text-center' : 'text-left'} ${className} ${centered ? 'mx-auto' : ''} ${maxWidth}`}
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl leading-tight ${titleClasses}`}>
        {title}
      </h2>
      {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
    </StyleProvider>
  );
};

export default SectionTitle;
