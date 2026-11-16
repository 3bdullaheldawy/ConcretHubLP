import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import { servicesData } from '../data/services';
import { whyUsData } from '../data/whyUs';
import { businessInfo } from '../data/businessInfo';
import heroBg from '../assets/images/hero-bg.jpg';
import aboutImg from '../assets/images/about.jpg';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  Sparkles,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const featuredProjects = projectsData.slice(0, 3);
  const featuredServices = servicesData.slice(0, 4);

  return (
    <div className="bg-[#F8F8F6] text-[#111215]">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center bg-[#111215] text-white pt-24 pb-16 overflow-hidden">
        {/* Architectural Background Photography with Deep Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Concrete Hub Civil Engineering"
            className="w-full h-full object-cover object-center opacity-30 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-[#111215]/80 to-[#111215]/60" />
          <div className="absolute inset-0 blueprint-grid-dark opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full text-start">
          
          {/* Subtle Technical Identity Tag */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-[6px] bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold tracking-wide text-[#C99738] font-mono">
            <span className="w-2 h-2 rounded-full bg-[#C99738]" />
            <span>
              {language === 'ar'
                ? 'مكتب استشارات وحلول هندسية مدنية • سوهاج'
                : 'Civil Engineering & Structural Solutions • Sohag'}
            </span>
          </div>

          {/* Main Architectural Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] max-w-4xl text-white">
            {language === 'ar' ? (
              <>
                نبني رؤيتك على أساس من{' '}
                <span className="text-[#C99738] relative inline-block">
                  الثقة والدقة الهندسية
                </span>
              </>
            ) : (
              <>
                Building Your Vision on Foundations of{' '}
                <span className="text-[#C99738]">
                  Trust & Structural Precision
                </span>
              </>
            )}
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
            {language === 'ar'
              ? 'في Concrete Hub نجمع بين التفكير الهندسي الدقيق، والتخطيط المدروس، والالتزام بأعلى معايير التنفيذ لتحويل طموحاتك إلى واقع إنشائي متين.'
              : 'At Concrete Hub, we unite rigorous structural engineering, deliberate planning, and execution fidelity to transform architectural ambitions into durable reality.'}
          </p>

          {/* Office Management Signoff */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
            <span className="font-semibold text-slate-300">
              {language === 'ar' ? 'بإدارة المهندس حازم المزلاوي' : 'Managed by Eng. Hazem Elmazlawy'}
            </span>
            <span className="mx-2 text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#C99738]" />
              {language === 'ar' ? 'شارع أسيوط، سوهاج' : 'Asyut St, Sohag'}
            </span>
          </div>

          {/* Bootstrap-Inspired CTA Buttons with rounded-[10px] */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-[10px] bg-[#C99738] hover:bg-[#dca742] text-[#111215] font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <span>{language === 'ar' ? 'طلب استشارة هندسية' : 'Request Consultation'}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[10px] bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 hover:border-white/40 transition-all active:scale-[0.98]"
            >
              <span>{language === 'ar' ? 'استعراض المشروعات' : 'Explore Portfolio'}</span>
            </Link>
          </div>

          {/* Technical Spec Strip with rounded-[10px] */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-start">
            <div className="p-3 rounded-[8px] bg-white/5 border border-white/10">
              <div className="font-mono text-xs text-[#C99738] uppercase mb-0.5">01. Precision</div>
              <div className="text-sm font-bold text-white">
                {language === 'ar' ? 'تصميم إنشائي معتمد' : 'Structural Design'}
              </div>
            </div>
            <div className="p-3 rounded-[8px] bg-white/5 border border-white/10">
              <div className="font-mono text-xs text-[#C99738] uppercase mb-0.5">02. Oversight</div>
              <div className="text-sm font-bold text-white">
                {language === 'ar' ? 'إشراف ومطابقة ميدانية' : 'Field Supervision'}
              </div>
            </div>
            <div className="p-3 rounded-[8px] bg-white/5 border border-white/10">
              <div className="font-mono text-xs text-[#C99738] uppercase mb-0.5">03. Quantity</div>
              <div className="text-sm font-bold text-white">
                {language === 'ar' ? 'حصر كميات ومقايسات' : 'Accurate BOQ'}
              </div>
            </div>
            <div className="p-3 rounded-[8px] bg-white/5 border border-white/10">
              <div className="font-mono text-xs text-[#C99738] uppercase mb-0.5">04. Execution</div>
              <div className="text-sm font-bold text-white">
                {language === 'ar' ? 'إدارة مشروعات وترميم' : 'Management & Renovation'}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ABOUT US SECTION (Split Screen with Rounded Card Styling) */}
      <section className="py-20 lg:py-28 bg-[#F8F8F6] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Photography with rounded-[14px] */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-[14px] overflow-hidden shadow-lg border border-slate-200">
                <img
                  src={aboutImg}
                  alt="Eng. Hazem Elmazlawy Concrete Hub"
                  className="w-full h-[440px] sm:h-[480px] object-cover object-center grayscale contrast-115"
                  loading="lazy"
                />

                {/* Director Tag with rounded-[10px] */}
                <div className="absolute bottom-5 inset-x-5 p-4 rounded-[10px] bg-[#111215]/95 text-white border-s-4 border-[#C99738] shadow-md">
                  <div className="text-[11px] font-mono text-[#C99738] uppercase tracking-wider">
                    {language === 'ar' ? 'إدارة المكتب' : 'Leadership'}
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {language === 'ar' ? businessInfo.manager.nameAr : businessInfo.manager.nameEn}
                  </div>
                  <div className="text-xs text-slate-400">
                    {language === 'ar' ? 'مهندس مدني – مكتب Concrete Hub' : 'Civil Engineer – Concrete Hub'}
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#C99738]/10 text-[#C99738] text-xs font-mono font-bold uppercase mb-3">
                <span>{language === 'ar' ? 'الهندسة تبدأ بفكرة.. والتميز يبدأ بالتنفيذ' : 'Concept to Structural Reality'}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111215] leading-tight">
                {language === 'ar'
                  ? 'رؤية هندسية واضحة تضع متطلبات العميل وطبيعة المشروع في مقدمة الأولويات'
                  : 'A rigorous engineering vision placing client priorities and structural integrity first'}
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {language === 'ar' ? businessInfo.description.ar : businessInfo.description.en}
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  {language === 'ar'
                    ? 'في Concrete Hub نرى أن الهندسة ليست مجرد رسومات ومخططات، بل مسؤولية تبدأ من أول فكرة وتمتد حتى الوصول إلى أفضل حل ممكن على أرض الواقع.'
                    : 'At Concrete Hub, we see engineering not merely as drawings, but as a commitment from initial conception to optimum physical execution.'}
                </p>
                <p>
                  {language === 'ar'
                    ? 'بإدارة المهندس حازم المزلاوي، نسعى إلى بناء علاقات قائمة على الثقة وتقديم حلول هندسية عملية ومدروسة تراعي تكلفة المشروع وأمان المنشأة.'
                    : 'Under the management of Eng. Hazem Elmazlawy, we build relationships grounded in trust and deliver viable engineering designs.'}
                </p>
              </div>

              {/* Action Link to Full About Page */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-slate-900 text-white hover:bg-[#C99738] hover:text-[#111215] text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <span>{language === 'ar' ? 'تعرف على فلسفتنا وفريق العمل بالتفصيل' : 'Read Our Full Story'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (Bootstrap-inspired Cards) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 text-start pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C99738] block mb-1.5">
                {language === 'ar' ? 'خدمات واختصاصات المكتب' : 'Core Disciplines'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#111215]">
                {language === 'ar' ? 'الحلول والخدمات الهندسية' : 'Engineering Solutions & Services'}
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-[8px] border border-slate-300 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#111215] hover:border-slate-400 hover:bg-slate-50 transition-all"
            >
              <span>{language === 'ar' ? 'عرض جميع الخدمات الست بالتفصيل' : 'View All 6 Services'}</span>
              <ArrowIcon className="w-4 h-4 text-[#C99738]" />
            </Link>
          </div>

          {/* Bootstrap-Style 2x2 Services Grid with rounded-[12px] */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => {
              const title = language === 'ar' ? service.title.ar : service.title.en;
              const desc = language === 'ar' ? service.shortDesc.ar : service.shortDesc.en;
              const features = language === 'ar' ? service.features.ar : service.features.en;

              return (
                <div
                  key={service.id}
                  className="rounded-[12px] bg-[#F8F8F6] border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between text-start hover:border-[#C99738]/60 hover:shadow-md transition-all duration-300 group"
                >
                  <div>
                    {/* Top Tag & Number */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#C99738] uppercase tracking-wider">
                        DISCIPLINE 0{index + 1}
                      </span>
                      <span className="w-8 h-8 rounded-[8px] bg-white border border-slate-200 flex items-center justify-center font-mono text-xs font-bold text-[#111215]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#111215] mb-3 group-hover:text-[#C99738] transition-colors">
                      {title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {desc}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-200/70">
                      {features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#C99738] mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-[8px] bg-white border border-slate-200 text-xs font-bold text-[#111215] group-hover:bg-[#111215] group-hover:text-white transition-all shadow-xs"
                  >
                    <span>{language === 'ar' ? 'طلب استشارة لهذه الخدمة' : 'Consult On This Scope'}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C99738] group-hover:text-white" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. SELECTED PROJECTS (Bootstrap Cards with rounded-[12px]) */}
      <section className="py-20 lg:py-28 bg-[#111215] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-start pb-6 border-b border-[#282a32]">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C99738] block mb-1.5">
                {language === 'ar' ? 'معرض المشروعات والتطبيقات' : 'Project Portfolio'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                {language === 'ar' ? 'نماذج وتطبيقات هندسية مختارة' : 'Featured Engineering Works'}
              </h2>
            </div>
            <Link
              to="/projects"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-[8px] bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs sm:text-sm font-semibold transition-all"
            >
              <span>{language === 'ar' ? 'تصفح كافة المشروعات' : 'Explore All Projects'}</span>
              <ArrowIcon className="w-4 h-4 text-[#C99738]" />
            </Link>
          </div>

          {/* Illustrative Notice */}
          <div className="mb-10 p-4 rounded-[10px] bg-white/5 border border-white/10 text-xs text-slate-300 text-start flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#C99738] flex-shrink-0" />
            <span>
              {language === 'ar'
                ? 'ملاحظة: النماذج والصور المعروضة استرشادية لبيان مجالات واختصاصات العمل الهندسي، ويجري تحديث المعرض بمشروعات Concrete Hub تباعًا.'
                : 'Note: Visuals represent illustrative engineering domains and technical scopes. Concrete Hub projects are updated periodically.'}
            </span>
          </div>

          {/* 3 Projects Grid with rounded-[12px] */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-start">
            {featuredProjects.map((project, idx) => {
              const title = language === 'ar' ? project.title.ar : project.title.en;
              const category = language === 'ar' ? project.category.ar : project.category.en;
              const desc = language === 'ar' ? project.shortDesc.ar : project.shortDesc.en;

              return (
                <div
                  key={project.id}
                  className="rounded-[12px] bg-[#1a1c22] border border-[#282a32] overflow-hidden flex flex-col justify-between hover:border-[#C99738]/60 transition-all duration-300 group shadow-md"
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="relative block h-64 overflow-hidden bg-black"
                  >
                    <img
                      src={project.coverImage}
                      alt={title}
                      className="w-full h-full object-cover grayscale contrast-120 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 end-3 px-2.5 py-1 rounded-[6px] bg-[#111215]/90 text-xs font-mono font-bold text-[#C99738] border border-white/10">
                      CASE 0{idx + 1}
                    </div>
                  </Link>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-semibold text-[#C99738] uppercase mb-1.5">
                        {category}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C99738] transition-colors leading-snug">
                        <Link to={`/projects/${project.slug}`}>{title}</Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                        {desc}
                      </p>
                    </div>

                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-bold text-slate-300 group-hover:text-[#C99738] transition-colors uppercase tracking-wider"
                    >
                      <span>{language === 'ar' ? 'عرض تفاصيل المشروع الكاملة' : 'View Full Case Study'}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#C99738]" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. WHY US & METHODOLOGY (Bootstrap Cards with rounded-[10px]) */}
      <section className="py-20 lg:py-28 bg-[#F8F8F6] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-start mb-14 pb-6 border-b border-slate-200">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C99738] block mb-1.5">
              {language === 'ar' ? 'معاييرنا الهندسية' : 'Engineering Benchmarks'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111215]">
              {language === 'ar' ? 'لماذا تختار Concrete Hub؟' : 'Why Choose Concrete Hub?'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-start">
            {whyUsData.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-[12px] bg-white border border-slate-200/90 shadow-xs hover:border-[#C99738]/60 transition-all"
              >
                <span className="font-mono text-2xl font-black text-[#C99738] block mb-3">
                  {item.number}
                </span>
                <h3 className="text-base font-bold text-[#111215] mb-2">
                  {language === 'ar' ? item.title.ar : item.title.en}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'ar' ? item.desc.ar : item.desc.en}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. DIRECT CONSULTATION CTA */}
      <section className="py-20 bg-[#111215] text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark opacity-15" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C99738] block mb-2">
            {language === 'ar' ? 'خطوتك القادمة' : 'Next Step'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            {language === 'ar'
              ? 'هل لديك مشروع إنشائي أو استفسار هندسي؟'
              : 'Planning a civil engineering project?'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'تواصل مباشرة مع المهندس حازم المزلاوي لمناقشة المتطلبات الفنية والحصول على الاستشارة المناسبة.'
              : 'Connect directly with Eng. Hazem Elmazlawy to evaluate technical requirements and tailor appropriate engineering solutions.'}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-[10px] bg-[#C99738] hover:bg-[#dca742] text-[#111215] font-bold text-sm tracking-wide uppercase shadow-sm transition-all"
            >
              {language === 'ar' ? 'طلب استشارة ومراسلة واتساب' : 'Request Consultation'}
            </Link>

            <a
              href={businessInfo.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-[10px] bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide uppercase shadow-sm transition-all"
            >
              {language === 'ar' ? 'محادثة فورية على الرقم: 01092597773' : 'WhatsApp: +201092597773'}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
