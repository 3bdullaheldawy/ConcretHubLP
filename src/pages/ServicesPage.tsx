import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { servicesData } from '../data/services';
import { Check, PhoneCall } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { language } = useLanguage();

  const breadcrumbs = [
    { label: language === 'ar' ? 'خدماتنا' : 'Services' }
  ];

  return (
    <div className="bg-[#F8F8F6] text-[#111215] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbs} />

        {/* Page Header */}
        <div className="text-start max-w-4xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C99738] block mb-2">
            {language === 'ar' ? 'الخدمات والاستشارات الهندسية' : 'Engineering Capabilities'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#111215] leading-tight">
            {language === 'ar'
              ? 'حلول هندسية متكاملة للمباني والمنشآت الخرسانية'
              : 'Integrated Engineering Solutions for Reinforced Concrete Structures'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {language === 'ar'
              ? 'يقدم مكتب Concrete Hub خدمات التصميم الإنشائي والمعماري والإشراف الميداني وحصر الكميات وفق الأكواد والمواصفات الفنية المعتمدة.'
              : 'Concrete Hub delivers structural, architectural, supervision, and quantity surveying services in strict adherence to certified engineering standards.'}
          </p>
        </div>

        {/* Detailed Services Sections (Bootstrap-Styled Cards with rounded-[14px]) */}
        <div className="space-y-16 border-t border-slate-200 pt-14">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;
            const title = language === 'ar' ? service.title.ar : service.title.en;
            const desc = language === 'ar' ? service.shortDesc.ar : service.shortDesc.en;
            const features = language === 'ar' ? service.features.ar : service.features.en;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`p-6 sm:p-10 rounded-[14px] bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image Column with rounded-[12px] */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-[12px] overflow-hidden bg-[#111215] shadow-sm">
                    <img
                      src={service.image}
                      alt={title}
                      className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 start-4 px-3 py-1 rounded-[6px] bg-[#111215] text-[#C99738] font-mono text-xs font-bold border border-white/10">
                      SERVICE 0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Scope Details Column */}
                <div className={`lg:col-span-6 text-start ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="font-mono text-xs font-bold text-[#C99738] uppercase tracking-wider mb-1.5">
                    DISCIPLINE 0{index + 1}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111215] mb-3">
                    {title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-normal">
                    {desc}
                  </p>

                  <div className="border-t border-b border-slate-100 py-4 my-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-3">
                      {language === 'ar' ? 'أبرز مخرجات وبنود العمل' : 'Key Deliverables & Scope'}
                    </span>
                    <ul className="space-y-2.5">
                      {features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-[#C99738] mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      to={`/contact?service=${encodeURIComponent(title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-[#111215] hover:bg-[#C99738] text-white hover:text-[#111215] font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'طلب استشارة لهذه الخدمة' : 'Request Consultation'}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
