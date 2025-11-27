import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  isLoading = false,
  disabled,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-black disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-electric text-white shadow-[0_0_20px_rgba(0,108,255,0.4)] hover:shadow-[0_0_35px_rgba(0,108,255,0.6)] hover:scale-105 active:scale-95 border border-brand-electric/50",
    secondary: "bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/40 active:scale-95",
    glass: "glass-panel text-white hover:bg-white/10 border-white/20 hover:border-brand-electric/50 hover:shadow-[0_0_20px_rgba(0,108,255,0.2)] active:scale-95"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        icon && <span className="w-5 h-5">{icon}</span>
      )}
      {children}
    </button>
  );
};