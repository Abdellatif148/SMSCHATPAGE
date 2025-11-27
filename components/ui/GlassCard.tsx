import React from 'react';
import { BaseProps } from '../../types';

interface GlassCardProps extends BaseProps {
  hoverEffect?: boolean;
  glowEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  glowEffect = false
}) => {
  return (
    <div 
      className={`
        glass-panel rounded-3xl p-6 transition-all duration-500 ease-out
        ${hoverEffect ? 'glass-panel-hover cursor-default' : ''}
        ${glowEffect ? 'shadow-[0_0_40px_-10px_rgba(0,108,255,0.15)] border-brand-electric/20' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
