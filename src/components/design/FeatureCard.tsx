
import React from 'react';
import { LucideIcon } from 'lucide-react';
import StyleProvider from './StyleProvider';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  light?: boolean;
  index?: number;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  light = false,
  index = 0,
  className = '',
}) => {
  const bgClasses = light
    ? "glass-morphism"
    : "bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md";
  
  const titleClasses = light
    ? "text-white"
    : "text-brand-dark";
  
  const textClasses = light
    ? "text-gray-300"
    : "text-brand-gray";

  return (
    <StyleProvider
      delay={index * 0.1}
      className={`${bgClasses} transition-all duration-300 p-6 rounded-xl group ${className}`}
    >
      <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-brand-indigo/20 to-brand-violet/20 flex items-center justify-center mb-5 group-hover:from-brand-indigo/30 group-hover:to-brand-violet/30 transition-all duration-300`}>
        <Icon className={`w-6 h-6 text-brand-indigo`} />
      </div>
      <h3 className={`text-xl font-semibold mb-3 ${titleClasses}`}>{title}</h3>
      <p className={textClasses}>{description}</p>
    </StyleProvider>
  );
};

export default FeatureCard;
