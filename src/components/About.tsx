import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle, UserCheck, HardHat } from 'lucide-react';
import aboutImg from '../assets/images/about.jpg';
import { businessInfo } from '../data/businessInfo';

export const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7F7F5] relative overflow-hidden">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side: Architectural Imagery with Technical Accents */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Technical CAD Frame */}
              <div className="absolute -inset-3 sm:-inset-4 border-2 border-dashed border-[#142536]/20 rounded-2xl pointer-events-none" />
              
              {/* Main Architectural Image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#142536] border border-slate-300">
                <img
                  src={aboutImg}
                  alt="Concrete Hub Engineering Design & Planning"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Subtle Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#142536]/80 via-transparent to-transparent" />

                {/* Floating Office Badge */}
                <div className="absolute bottom-5 inset-x-5 p-4 rounded-xl bg-[#142536]/90 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#E58A36] text-white flex-shrink-0">
                      <HardHat className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-[#E58A36] font-semibold">
                        {language === 'ar' ? 'إدارة هندسية معتمدة' : 'Certified Engineering Oversight'}
                      </div>
                      <div className="text-base font-bold text-white">
                        {language === 'ar' ? businessInfo.manager.nameAr : businessInfo.manager.nameEn}
                      </div>
                      <div className="text-xs text-slate-300">
                        {language === 'ar' ? 'مكتب Concrete Hub – سوهاج' : 'Concrete Hub Office – Sohag'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Geometric Crosshair Corner */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#E58A36]" />
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#E58A36]" />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-start">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#142536]/5 border border-[#142536]/15 text-xs font-bold text-[#142536] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E58A36]" />
              <span>{language === 'ar' ? 'عن مكتب Concrete Hub' : 'About Concrete Hub'}</span>
            </div>

            {/* Section Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142536] leading-snug">
              {language === 'ar'
                ? 'الهندسة تبدأ بفكرة.. والتميز يبدأ بالتنفيذ.'
                : 'Engineering Begins with an Idea.. Excellence with Execution.'}
            </h2>

            {/* Paragraph 1 */}
            <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {language === 'ar'
                ? 'Concrete Hub مكتب هندسي يسعى إلى تقديم حلول هندسية متكاملة، من خلال الجمع بين التفكير الهندسي الدقيق، والتخطيط الجيد، والاهتمام بأدق تفاصيل المشروع، بما يساعد العملاء على تحويل أفكارهم إلى مشروعات قابلة للتنفيذ.'
                : 'Concrete Hub is an engineering consultancy committed to delivering integrated engineering solutions by marrying rigorous analytical thinking, sound planning, and meticulous attention to detail, enabling clients to turn conceptual ideas into viable, executed structures.'}
            </p>

            {/* Paragraph 2 & Management Attribution */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {language === 'ar'
                  ? 'في Concrete Hub نرى أن الهندسة ليست مجرد رسومات ومخططات، بل مسؤولية تبدأ من أول فكرة وتمتد حتى الوصول إلى أفضل حل ممكن على أرض الواقع. نعمل على تقديم رؤية هندسية واضحة تضع متطلبات العميل وطبيعة المشروع في مقدمة أولوياتنا.'
                  : 'At Concrete Hub, we see engineering not merely as sketches and drawings, but as a solemn responsibility from conception to field execution, keeping client priorities and structural integrity at the forefront.'}
              </p>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#142536]">
                <span className="flex items-center gap-1.5 text-[#E58A36]">
                  <UserCheck className="w-4 h-4" />
                  <span>{language === 'ar' ? 'بإدارة المهندس حازم المزلاوي' : 'Managed by Eng. Hazem Elmazlawy'}</span>
                </span>
                <span className="text-slate-500">
                  {language === 'ar' ? 'سوهاج – جمهورية مصر العربية' : 'Sohag – Egypt'}
                </span>
              </div>
            </div>

            {/* Core Values Cards (4 Brand Pillars) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {businessInfo.brandValues.map((val, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/90 border border-slate-200/90 shadow-sm hover:border-[#E58A36]/60 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="p-1 rounded bg-[#E58A36]/10 text-[#E58A36]">
                      <CheckCircle className="w-4 h-4" />
                    </span>
                    <h4 className="text-sm font-bold text-[#142536]">
                      {language === 'ar' ? val.title.ar : val.title.en}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-normal">
                    {language === 'ar' ? val.desc.ar : val.desc.en}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
