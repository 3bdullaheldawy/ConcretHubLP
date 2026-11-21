import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { businessInfo } from '../data/businessInfo';
import aboutImg from '../assets/images/about.jpg';
import supervisionImg from '../assets/images/supervision.jpg';
import {
  HardHat,
  MapPin,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const breadcrumbs = [
    { label: language === 'ar' ? 'من نحن' : 'About Us' }
  ];

  return (
    <div className="bg-[#F8F8F6] text-[#111215] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbs} />

        {/* Editorial Page Header */}
        <div className="text-start max-w-4xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C99738] block mb-2">
            {language === 'ar' ? 'نبذة عن Concrete Hub' : 'About Concrete Hub'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#111215] leading-tight">
            {language === 'ar'
              ? 'الهندسة مسؤولية تبدأ من الفكرة وتمتد إلى أدق تفاصيل التنفيذ'
              : 'Engineering as a Commitment from Concept to Detailed Execution'}
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
            {language === 'ar' ? businessInfo.description.ar : businessInfo.description.en}
          </p>
        </div>

        {/* 1. MANAGEMENT & LEADERSHIP (Eng. Hazem Elmazlawy) with rounded-[14px] */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-10 rounded-[14px] bg-white border border-slate-200 shadow-sm mb-16">
          
          <div className="lg:col-span-5 relative">
            <div className="rounded-[12px] overflow-hidden shadow-md bg-slate-900">
              <img
                src={aboutImg}
                alt="Eng. Hazem Elmazlawy - Concrete Hub"
                className="w-full h-[440px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#111215] text-[#C99738] text-xs font-mono font-bold uppercase mb-3">
              <HardHat className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'إدارة المكتب' : 'Leadership'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#111215] mb-1">
              {language === 'ar' ? businessInfo.manager.nameAr : businessInfo.manager.nameEn}
            </h2>
            <div className="text-sm font-semibold text-[#C99738] mb-5">
              {language === 'ar' ? businessInfo.manager.titleAr : businessInfo.manager.titleEn}
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {businessInfo.aboutStory.ar.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-[#C99738]" />
                <span>{language === 'ar' ? businessInfo.contact.address.ar : businessInfo.contact.address.en}</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <PhoneCall className="w-4 h-4 text-[#C99738]" />
                <span dir="ltr">{businessInfo.contact.phoneDisplay}</span>
              </div>
            </div>
          </div>

        </div>

        {/* 2. ENGINEERING PHILOSOPHY & VALUES (Bootstrap Cards with rounded-[12px]) */}
        <div className="py-12 text-start">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C99738] block mb-2">
              {language === 'ar' ? 'فلسفتنا ورؤيتنا' : 'Philosophy & Vision'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111215]">
              {language === 'ar'
                ? 'الدقة الحسابية مع كفاءة التكلفة وسلامة المنشأة'
                : 'Analytical Rigor, Cost Efficiency & Structural Longevity'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessInfo.brandValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[12px] bg-white border border-slate-200/90 shadow-xs hover:border-[#C99738]/60 transition-all"
              >
                <span className="font-mono text-sm font-bold text-[#C99738] block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[#111215] mb-2">
                  {language === 'ar' ? val.title.ar : val.title.en}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'ar' ? val.desc.ar : val.desc.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. QUOTE BANNER with rounded-[14px] */}
        <div className="relative overflow-hidden rounded-[14px] bg-[#111215] text-white my-12 shadow-lg">
          <img
            src={supervisionImg}
            alt="Concrete Hub Site Supervision"
            className="w-full h-80 sm:h-96 object-cover opacity-35 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-transparent to-[#111215]/80" />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-[#C99738] tracking-widest uppercase block mb-3">
                {language === 'ar' ? 'شعارنا' : 'Our Motto'}
              </span>
              <p className="text-2xl sm:text-3xl font-black text-white leading-snug">
                "{language === 'ar' ? businessInfo.subSlogan.ar : businessInfo.subSlogan.en}"
              </p>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-[#C99738] hover:bg-[#dca742] text-[#111215] font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <span>{language === 'ar' ? 'تواصل مع المهندس حازم' : 'Consult Eng. Hazem'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
