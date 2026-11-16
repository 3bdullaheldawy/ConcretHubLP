import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessInfo } from '../data/businessInfo';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const { language } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 end-6 z-40 flex flex-col items-end group">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 max-w-xs p-3.5 bg-[#111215] text-white text-xs shadow-2xl border border-[#282a32] relative animate-in fade-in slide-in-from-bottom-2 duration-300 text-start">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 end-1.5 p-1 text-slate-400 hover:text-white"
            aria-label="Close"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="font-bold text-[#C99738] mb-0.5">
            {language === 'ar' ? 'استشارة هندسية فورية' : 'Instant Engineering Consultation'}
          </div>
          <div className="text-slate-300 text-[11px] leading-tight">
            {language === 'ar'
              ? 'تحدث مباشرة مع المهندس حازم المزلاوي عبر واتساب'
              : 'Chat directly with Eng. Hazem Elmazlawy on WhatsApp'}
          </div>
          {/* Arrow pointer */}
          <div className="absolute -bottom-1.5 end-6 w-3 h-3 bg-[#111215] border-b border-e border-[#282a32] transform rotate-45" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={businessInfo.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="WhatsApp Direct Chat"
      >
        <span className="absolute inset-0 bg-emerald-500 opacity-60 motion-safe:animate-ping rounded-full" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-white" />
      </a>
    </div>
  );
};
