import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { whyUsData, type WhyUsItem } from '../data/whyUs';
import { Target, CheckCircle2, Sliders, MessageSquare, ShieldCheck, Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { language } = useLanguage();

  const getIcon = (name: WhyUsItem['iconName']) => {
    switch (name) {
      case 'Target':
        return <Target className="w-6 h-6" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      default:
        return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#142536] text-white relative overflow-hidden">
      {/* Blueprint grid on dark background */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />

      {/* Decorative Technical Drawing Watermark */}
      <div className="absolute -end-16 -top-16 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -end-32 -top-32 w-[500px] h-[500px] rounded-full border border-[#E58A36]/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold text-[#E58A36] mb-3 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#E58A36]" />
            <span>{language === 'ar' ? 'قيمنا ومعاييرنا' : 'Our Standards & Principles'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {language === 'ar' ? 'لماذا تختار Concrete Hub؟' : 'Why Choose Concrete Hub?'}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {language === 'ar'
              ? 'نضع الدقة والالتزام والوضوح في صلب كل استشارة وتصميم، لنضمن لك تجربة هندسية موثوقة تلبي طموحاتك وتحمي استثمارك.'
              : 'Placing precision, accountability, and clarity at the core of every consultation and blueprint to protect your investment.'}
          </p>
        </div>

        {/* 5 Value Propositions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyUsData.map((item, index) => {
            const currentTitle = language === 'ar' ? item.title.ar : item.title.en;
            const currentDesc = language === 'ar' ? item.desc.ar : item.desc.en;

            // Make the first card or 5th card span nicely
            const isLast = index === 4;

            return (
              <div
                key={item.id}
                className={`relative p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-[#E58A36]/70 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between text-start group ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Technical Corner Markers */}
                <div className="absolute top-2 start-2 w-3 h-3 border-t border-s border-white/20 group-hover:border-[#E58A36] transition-colors" />
                <div className="absolute bottom-2 end-2 w-3 h-3 border-b border-e border-white/20 group-hover:border-[#E58A36] transition-colors" />

                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white/10 text-[#E58A36] group-hover:bg-[#E58A36] group-hover:text-white transition-colors duration-300">
                      {getIcon(item.iconName)}
                    </div>
                    <span className="font-mono text-2xl font-black text-white/20 group-hover:text-[#E58A36]/60 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E58A36] transition-colors">
                    {currentTitle}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {currentDesc}
                  </p>
                </div>

                {/* Sub-bar indicator */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#E58A36]">
                  <Check className="w-3.5 h-3.5" />
                  <span className="text-slate-300 font-medium">
                    {language === 'ar' ? 'معيار أساسي في كافة أعمالنا' : 'A foundational principle in all deliverables'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
