import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { projectsData } from '../data/projects';
import { businessInfo } from '../data/businessInfo';
import {
  MapPin,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  ShieldAlert,
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F8F8F6] text-[#111215] px-4 pt-24 pb-16">
        <div className="max-w-md p-8 rounded-[14px] bg-white border border-slate-200 shadow-sm text-center">
          <ShieldAlert className="w-12 h-12 text-[#C99738] mx-auto mb-4" />
          <h1 className="text-2xl font-black mb-2">
            {language === 'ar' ? 'المشروع غير موجود' : 'Project Not Found'}
          </h1>
          <p className="text-sm text-slate-600 mb-6">
            {language === 'ar'
              ? 'عذرًا، لم نتمكن من العثور على المشروع المطلوب أو قد تم تحديث الرابط.'
              : 'The requested project could not be found or the link has changed.'}
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-[#111215] text-[#C99738] font-bold text-xs uppercase tracking-wider shadow-sm"
          >
            <span>{language === 'ar' ? 'العودة لمعرض المشروعات' : 'Back to Portfolio'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  const title = language === 'ar' ? project.title.ar : project.title.en;
  const category = language === 'ar' ? project.category.ar : project.category.en;
  const location = language === 'ar' ? project.location.ar : project.location.en;
  const overview = language === 'ar' ? project.overview.ar : project.overview.en;
  const story = language === 'ar' ? project.detailedStory.ar : project.detailedStory.en;
  const scope = language === 'ar' ? project.scopeOfWork.ar : project.scopeOfWork.en;

  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  const breadcrumbs = [
    { label: language === 'ar' ? 'مشروعاتنا' : 'Projects', path: '/projects' },
    { label: title },
  ];

  return (
    <div className="bg-[#F8F8F6] text-[#111215] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbs} />

        {/* 1. PROJECT HEADER & HERO */}
        <div className="text-start mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-[#C99738] uppercase tracking-wider mb-2">
            <span>{category}</span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-1 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-[#C99738]" />
              {location}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#111215] leading-tight max-w-4xl">
            {title}
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-700 leading-relaxed max-w-3xl font-normal">
            {overview}
          </p>

          {/* Illustrative Notice Badge with rounded-[8px] */}
          <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-[8px] bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 font-medium">
            <Sparkles className="w-4 h-4 text-[#C99738] flex-shrink-0" />
            <span>
              {language === 'ar'
                ? 'نموذج هندسي استرشادي يوضح اختصاص ومعايير Concrete Hub في هذا القطاع الإنشائي.'
                : 'Illustrative engineering scope demonstrating Concrete Hub’s execution standards for this domain.'}
            </span>
          </div>
        </div>

        {/* Large Project Hero Image with rounded-[14px] */}
        <div className="relative h-[380px] sm:h-[500px] w-full rounded-[14px] overflow-hidden bg-[#111215] mb-12 shadow-md">
          <img
            src={project.coverImage}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111215]/80 via-transparent to-transparent opacity-60" />
        </div>

        {/* 2. TECHNICAL SPECIFICATIONS BAR with rounded-[12px] */}
        <div className="bg-[#111215] text-white p-6 sm:p-8 rounded-[12px] shadow-sm mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-start">
          {project.specs.map((spec, sIdx) => (
            <div key={sIdx} className="border-s-2 border-[#C99738] ps-3">
              <div className="text-[11px] font-mono text-[#C99738] uppercase tracking-wider mb-1">
                {language === 'ar' ? spec.label.ar : spec.label.en}
              </div>
              <div className="text-sm font-bold text-white">
                {language === 'ar' ? spec.value.ar : spec.value.en}
              </div>
            </div>
          ))}
        </div>

        {/* 3. CASE STUDY & SCOPE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-start mb-20">
          
          {/* Detailed Narrative Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl font-black text-[#111215] pb-3 border-b border-slate-200">
              {language === 'ar' ? 'التفاصيل والحلول الهندسية المطبقة' : 'Engineering Approach & Solutions'}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {story.map((par, pIdx) => (
                <p key={pIdx}>{par}</p>
              ))}
            </div>

            {/* Scope of Work */}
            <div className="pt-6">
              <h3 className="text-lg font-bold text-[#111215] mb-4">
                {language === 'ar' ? 'نطاق الأعمال والمخرجات الهندسية' : 'Scope of Work & Deliverables'}
              </h3>
              <div className="space-y-3">
                {scope.map((item, scIdx) => (
                  <div key={scIdx} className="flex items-start gap-3 p-3.5 rounded-[10px] bg-white border border-slate-200 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#C99738] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Consultation Card (4 cols) with rounded-[14px] */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 rounded-[14px] bg-[#111215] text-white text-start shadow-md">
              <span className="text-[11px] font-mono font-bold text-[#C99738] uppercase tracking-wider block mb-2">
                {language === 'ar' ? 'استشارة فورية' : 'Consultation'}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                {language === 'ar' ? 'هل تخطط لمشروع مماثل؟' : 'Planning a similar project?'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {language === 'ar'
                  ? 'يمكنك مناقشة الحسابات الإنشائية وجدول الكميات مباشرة مع المهندس حازم المزلاوي.'
                  : 'Discuss structural parameters and BOQ estimates directly with Eng. Hazem Elmazlawy.'}
              </p>

              <Link
                to={`/contact?service=${encodeURIComponent(category)}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-[10px] bg-[#C99738] hover:bg-[#dca742] text-[#111215] font-bold text-xs uppercase tracking-wider transition-all mb-3 shadow-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'طلب استشارة لهذا المجال' : 'Consult on this Scope'}</span>
              </Link>

              <a
                href={businessInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-[10px] bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors"
              >
                <span>{language === 'ar' ? 'محادثة عبر واتساب' : 'WhatsApp Chat'}</span>
              </a>
            </div>

            {/* Office Attribution */}
            <div className="p-6 rounded-[12px] bg-white border border-slate-200 text-xs text-slate-600 space-y-2 shadow-xs">
              <div className="font-bold text-[#111215]">
                {language === 'ar' ? 'المكتب الاستشاري المسؤول' : 'Consultancy'}:
              </div>
              <div>Concrete Hub – المهندس حازم المزلاوي</div>
              <div>{language === 'ar' ? businessInfo.contact.address.ar : businessInfo.contact.address.en}</div>
              <div className="pt-2 text-[11px] font-mono text-[#C99738]">
                REF: {project.slug.toUpperCase()}
              </div>
            </div>

          </div>

        </div>

        {/* 4. MULTI-IMAGE GALLERY with rounded-[12px] */}
        <div className="mb-20 text-start">
          <h2 className="text-2xl font-black text-[#111215] pb-3 border-b border-slate-200 mb-8">
            {language === 'ar' ? 'معرض الصور والمخططات' : 'Project Visuals & Documentation'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((imgSrc, gIdx) => (
              <div key={gIdx} className="rounded-[12px] overflow-hidden bg-[#111215] h-64 shadow-sm border border-slate-200">
                <img
                  src={imgSrc}
                  alt={`${title} - Visual 0${gIdx + 1}`}
                  className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 5. RELATED PROJECTS with rounded-[12px] */}
        <div className="border-t border-slate-200 pt-16 text-start">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-[#111215]">
              {language === 'ar' ? 'مشروعات وتطبيقات أخرى ذات صلة' : 'Related Engineering Cases'}
            </h2>
            <Link
              to="/projects"
              className="text-xs font-bold text-[#C99738] hover:text-[#ad7e26] transition-colors inline-flex items-center gap-1"
            >
              <span>{language === 'ar' ? 'عرض كل المشروعات' : 'View All'}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <div key={rel.id} className="flex flex-col sm:flex-row gap-6 p-4 rounded-[12px] bg-white border border-slate-200 group shadow-xs hover:border-[#C99738]/60 transition-all">
                <Link to={`/projects/${rel.slug}`} className="sm:w-48 h-36 rounded-[8px] flex-shrink-0 overflow-hidden bg-[#111215]">
                  <img
                    src={rel.coverImage}
                    alt={language === 'ar' ? rel.title.ar : rel.title.en}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <span className="text-[11px] font-mono text-[#C99738] uppercase">
                      {language === 'ar' ? rel.category.ar : rel.category.en}
                    </span>
                    <h3 className="text-base font-bold text-[#111215] group-hover:text-[#C99738] transition-colors mt-1">
                      <Link to={`/projects/${rel.slug}`}>
                        {language === 'ar' ? rel.title.ar : rel.title.en}
                      </Link>
                    </h3>
                  </div>
                  <Link
                    to={`/projects/${rel.slug}`}
                    className="mt-3 text-xs font-bold text-[#111215] group-hover:text-[#C99738] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{language === 'ar' ? 'اطّلع على التفاصيل' : 'View Scope'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C99738]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
