
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
}

export const IndustryCard = ({
  id,
  icon,
  title,
  description,
  isActive,
  onClick,
}: IndustryCardProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        "w-full p-6 rounded-xl text-left transition-all duration-300 glass-card hover:shadow-lg",
        isActive ? "border-[1.5px] border-agency-vibrantPurple shadow-lg" : "hover:border-agency-vibrantPurple/50"
      )}
      onClick={onClick}
    >
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center text-white mb-4",
        isActive ? "gradient-bg" : "bg-white/5"
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 line-clamp-2">{description}</p>
      
      {isActive && (
        <div className="mt-2 text-agency-vibrantPurple font-medium">Selected</div>
      )}
    </motion.button>
  );
};
