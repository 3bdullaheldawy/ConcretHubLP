import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/logo.jpg';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  showSubtitle = true,
  size = 'md',
}) => {
  const { language } = useLanguage();
  const isLight = variant === 'light';

  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Concrete Hub Emblem Badge */}
      <div
        className={`relative ${sizeClasses[size]} rounded-full overflow-hidden flex-shrink-0 border ${
          isLight ? 'border-white/20 shadow-md' : 'border-black/10 shadow-sm'
        }`}
      >
        <img
          src={logoImg}
          alt="Concrete Hub Official Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Typographic Identity matching the Logo Font */}
      <div className="flex flex-col text-start">
        <div
          className={`font-black tracking-wider text-lg md:text-xl font-['Montserrat',sans-serif] leading-none flex items-center ${
            isLight ? 'text-white' : 'text-[#111215]'
          }`}
        >
          <span>CONCRETE</span>
          <span className="text-[#C99738] font-black ms-1.5">HUB</span>
        </div>
        {showSubtitle && (
          <span
            className={`text-[10px] md:text-xs font-semibold tracking-wider uppercase mt-1 ${
              isLight ? 'text-slate-300' : 'text-[#7A8088]'
            }`}
          >
            {language === 'ar' ? 'للاستشارات والحلول الهندسية' : 'Civil Engineering Solutions'}
          </span>
        )}
      </div>
    </div>
  );
};
