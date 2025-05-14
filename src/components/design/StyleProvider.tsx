
import React from 'react';
import { motion } from 'framer-motion';

interface StyleProviderProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

const StyleProvider: React.FC<StyleProviderProps> = ({
  children,
  className = '',
  animate = true,
  delay = 0,
}) => {
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
  
  return <div className={className}>{children}</div>;
};

export default StyleProvider;
