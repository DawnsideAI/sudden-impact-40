
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
        "w-full p-6 rounded-xl text-left transition-all duration-300 bg-white shadow-md hover:shadow-lg border",
        isActive 
          ? "border-[1.5px] border-agency-vibrantPurple shadow-lg ring-1 ring-agency-vibrantPurple/30" 
          : "border-gray-200 hover:border-agency-vibrantPurple/50"
      )}
      onClick={onClick}
    >
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center mb-4",
        isActive 
          ? "gradient-bg text-white" 
          : "bg-gray-100 text-agency-vibrantPurple"
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-agency-dark">{title}</h3>
      <p className="text-agency-gray line-clamp-2">{description}</p>
      
      {isActive && (
        <div className="mt-2 text-agency-vibrantPurple font-medium flex items-center gap-1">
          <span className="w-2 h-2 bg-agency-vibrantPurple rounded-full"></span>
          Selected
        </div>
      )}
    </motion.button>
  );
};
