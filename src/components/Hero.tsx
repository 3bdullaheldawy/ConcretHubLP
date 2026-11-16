import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, ArrowRight, ShieldCheck, Compass, Ruler, MapPin } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.jpg';

export const Hero: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center bg-[#0d1926] text-white pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Architecture Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Concrete Hub Civil Engineering Architecture"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Deep Engineering Navy Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1926] via-[#142536]/85 to-[#0b1622]/90" />
        
        {/* Subtle CAD Blueprint Grid */}
        <div className="absolute inset-0 blueprint-grid-dark opacity-35" />

        {/* Diagonal Technical Construction Accent Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="#E58A36" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="15%" cy="30%" r="4" fill="#E58A36" />
          <circle cx="85%" cy="70%" r="4" fill="#E58A36" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        {/* Office & Manager Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8 hover:border-[#E58A36]/60 transition-all duration-300">
          <span className="w-2 h-2 rounded-full bg-[#E58A36] animate-ping" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
            {language === 'ar'
              ? 'مكتب استشارات وحلول هندسية مدنية • بإدارة المهندس حازم المزلاوي'
              : 'Civil Engineering Office • Managed by Eng. Hazem Elmazlawy'}
          </span>
          <div className="hidden sm:flex items-center gap-1 text-[11px] text-[#E58A36] font-medium border-s border-white/20 ps-2.5">
            <MapPin className="w-3 h-3" />
            <span>{language === 'ar' ? 'سوهاج، مصر' : 'Sohag, Egypt'}</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.25] max-w-4xl text-white drop-shadow-md">
          {language === 'ar' ? (
            <>
              نبني رؤيتك على أساس من{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#E58A36] relative inline-block">
                الثقة والهندسة
                <svg
                  className="absolute -bottom-2 right-0 left-0 w-full h-2 text-[#E58A36] opacity-60"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </>
          ) : (
            <>
              Building Your Vision on Foundations of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#E58A36]">
                Trust & Engineering
              </span>
            </>
          )}
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed">
          {language === 'ar'
            ? 'في Concrete Hub نقدم حلولًا هندسية متكاملة تجمع بين الدقة الفنية، والتخطيط المدروس، والجودة في التنفيذ، لنحول أفكارك إلى واقع.'
            : 'At Concrete Hub, we provide comprehensive civil engineering solutions combining technical precision, deliberate planning, and execution quality to transform ideas into tangible reality.'}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E58A36] hover:bg-[#f09543] text-white font-bold text-base shadow-xl shadow-orange-950/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
          >
            <span>{language === 'ar' ? 'اطلب استشارة هندسية' : 'Request Engineering Consultation'}</span>
            {isRTL ? (
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </button>

          <button
            onClick={() => scrollTo('services')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all cursor-pointer"
          >
            <span>{language === 'ar' ? 'اكتشف خدماتنا' : 'Explore Our Services'}</span>
          </button>
        </div>

        {/* Engineering Pillars Highlights */}
        <div className="mt-16 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-700/60 pt-8 text-start">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-[#E58A36]/15 text-[#E58A36]">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {language === 'ar' ? 'دقة التصميم الإنشائي' : 'Structural Precision'}
              </h4>
              <p className="text-xs text-slate-400">
                {language === 'ar' ? 'مطابقة متقدمة لأكواد البناء' : 'Strict Code Compliance'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-[#E58A36]/15 text-[#E58A36]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {language === 'ar' ? 'إشراف ميداني موثوق' : 'Field Supervision'}
              </h4>
              <p className="text-xs text-slate-400">
                {language === 'ar' ? 'متابعة مراحل الصب والتسليح' : 'Quality Pouring & Rebar Audit'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-[#E58A36]/15 text-[#E58A36]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {language === 'ar' ? 'حصر دقيق للمقايسات' : 'Accurate BOQ & Costing'}
              </h4>
              <p className="text-xs text-slate-400">
                {language === 'ar' ? 'تخطيط مالي يحمي ميزانيتك' : 'Optimized Financial Takeoffs'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Technical Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E58A36] to-transparent opacity-70" />
    </section>
  );
};
