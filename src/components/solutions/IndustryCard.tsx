
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface IndustryCardProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
  lightMode?: boolean;
}

export const IndustryCard = ({
  id,
  icon,
  title,
  description,
  isActive,
  onClick,
  index,
  lightMode,
}: IndustryCardProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "w-full p-6 rounded-xl text-left transition-all duration-300 bg-white shadow-md hover:shadow-lg border relative overflow-hidden",
        isActive 
          ? "border-[1.5px] border-brand-pink shadow-lg" 
          : "border-gray-200 hover:border-brand-aqua/50"
      )}
      onClick={onClick}
    >
      {/* Subtle gradient background effect */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5 pointer-events-none"></div>
      )}
      
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm",
        isActive 
          ? "pink-aqua-bg text-white" 
          : "bg-gray-100 text-brand-aqua"
      )}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-brand-dark">{title}</h3>
      <p className="text-brand-gray line-clamp-2">{description}</p>
      
      {isActive && (
        <div className="mt-3 text-brand-pink font-medium flex items-center gap-2">
          <span className="w-2 h-2 bg-brand-pink rounded-full"></span>
          <span>Selected</span>
        </div>
      )}
    </motion.button>
  );
};
