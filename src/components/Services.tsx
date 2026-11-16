import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData, type ServiceItem } from '../data/services';
import {
  Building2,
  Compass,
  HardHat,
  Calculator,
  ClipboardCheck,
  Hammer,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { language } = useLanguage();

  const getIcon = (name: ServiceItem['iconName']) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'HardHat':
        return <HardHat className="w-6 h-6" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6" />;
      default:
        return <Building2 className="w-6 h-6" />;
    }
  };

  const handleServiceSelect = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A36]/10 text-xs font-bold text-[#E58A36] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E58A36]" />
            <span>{language === 'ar' ? 'مجالات واختصاصات المكتب' : 'Our Professional Disciplines'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#142536] tracking-tight">
            {language === 'ar' ? 'خدماتنا الهندسية المتكاملة' : 'Integrated Engineering Services'}
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {language === 'ar'
              ? 'نقدم مجموعة متناسقة من الخدمات والحلول الهندسية التي تغطي مراحل المشروع بدءًا من الفكرة والتصميم ووصولًا إلى الرقابة والتنفيذ.'
              : 'Delivering an integrated suite of civil and architectural engineering services tailored for structural safety, cost-efficiency, and design excellence.'}
          </p>
        </div>

        {/* 6 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const currentTitle = language === 'ar' ? service.title.ar : service.title.en;
            const currentDesc = language === 'ar' ? service.shortDesc.ar : service.shortDesc.en;
            const currentFeatures = language === 'ar' ? service.features.ar : service.features.en;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col bg-[#F7F7F5] rounded-2xl border border-slate-200/90 overflow-hidden hover:border-[#E58A36]/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Service Card Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-[#142536]">
                  <img
                    src={service.image}
                    alt={currentTitle}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142536] via-transparent to-black/30" />
                  
                  {/* Service Number Badge */}
                  <div className="absolute top-4 end-4 px-2.5 py-1 rounded-md bg-[#142536]/80 backdrop-blur-md text-xs font-mono font-bold text-white border border-white/20">
                    0{index + 1}
                  </div>

                  {/* Icon floating on border */}
                  <div className="absolute -bottom-5 start-6 p-3 rounded-xl bg-[#142536] text-[#E58A36] border-2 border-white shadow-md group-hover:bg-[#E58A36] group-hover:text-white transition-colors duration-300">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-8 flex-1 flex flex-col text-start">
                  <h3 className="text-xl font-bold text-[#142536] mb-3 group-hover:text-[#E58A36] transition-colors">
                    {currentTitle}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {currentDesc}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2 mb-6 mt-auto border-t border-slate-200/80 pt-4">
                    {currentFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E58A36] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Action */}
                  <button
                    onClick={() => handleServiceSelect(currentTitle)}
                    className="w-full mt-2 inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-[#142536] group-hover:bg-[#142536] group-hover:text-white group-hover:border-[#142536] transition-all cursor-pointer"
                  >
                    <span>{language === 'ar' ? 'طلب استشارة لهذه الخدمة' : 'Inquire About This Service'}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E58A36] group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Service Note Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#142536] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-700 shadow-lg">
          <div className="text-start">
            <h4 className="text-base sm:text-lg font-bold text-white">
              {language === 'ar'
                ? 'هل تبحث عن استشارة هندسية خاصة بمشروعك؟'
                : 'Need a customized civil engineering consultation?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {language === 'ar'
                ? 'فريق Concrete Hub جاهز لمناقشة التفاصيل وتحديد الحل الهندسي الأنسب لاحتياجاتك.'
                : 'Concrete Hub is ready to review your project specifics and formulate optimal solutions.'}
            </p>
          </div>
          <button
            onClick={() => handleServiceSelect('استشارة عامة')}
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-[#E58A36] hover:bg-[#f09543] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            {language === 'ar' ? 'تواصل مع المهندس حازم' : 'Contact Eng. Hazem'}
          </button>
        </div>

      </div>
    </section>
  );
};
