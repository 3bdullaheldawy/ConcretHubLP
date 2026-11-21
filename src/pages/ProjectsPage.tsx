import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { projectsData } from '../data/projects';
import { Sparkles, ArrowUpRight, MapPin } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { language } = useLanguage();

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: language === 'ar' ? 'كافة المشروعات' : 'All Projects' },
    { id: 'residential', label: language === 'ar' ? 'مبانٍ سكنية وفيلات' : 'Residential' },
    { id: 'commercial', label: language === 'ar' ? 'مجمعات تجارية وإدارية' : 'Commercial' },
    { id: 'structural', label: language === 'ar' ? 'أساسات وهياكل إنشائية' : 'Structural' },
    { id: 'facade', label: language === 'ar' ? 'واجهات معمارية' : 'Facades' },
    { id: 'finishing', label: language === 'ar' ? 'إشراف وتشطيبات' : 'Finishing' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((item) => item.categorySlug === activeCategory);

  const breadcrumbs = [
    { label: language === 'ar' ? 'مشروعاتنا' : 'Projects' }
  ];

  return (
    <div className="bg-[#F8F8F6] text-[#111215] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbs} />

        {/* Page Header */}
        <div className="text-start max-w-4xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C99738] block mb-2">
            {language === 'ar' ? 'معرض الأعمال والنماذج' : 'Engineering Portfolio'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#111215] leading-tight">
            {language === 'ar'
              ? 'مجالات وتطبيقات هندسية متخصصة'
              : 'Specialized Civil & Structural Case Studies'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {language === 'ar'
              ? 'استعراض لمجالات وتطبيقات العمل الهندسي والإنشائي للمكتب. انقر على أي مشروع للاطلاع على دراسة الحالة التفصيلية ومواصفات التنفيذ.'
              : 'Showcasing our civil engineering scopes and structural domains. Click on any project to explore the dedicated case study.'}
          </p>

          {/* Illustrative Notice with rounded-[10px] */}
          <div className="mt-6 p-4 rounded-[10px] bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#C99738] flex-shrink-0" />
            <span>
              {language === 'ar'
                ? 'ملاحظة: النماذج والصور المعروضة استرشادية لبيان مجالات واختصاصات العمل الهندسي، ويجري تحديث المعرض بمشروعات Concrete Hub تباعًا.'
                : 'Note: Visuals represent illustrative engineering domains and technical scopes. The portfolio is continuously updated with office projects.'}
            </span>
          </div>
        </div>

        {/* Bootstrap Nav-Pills Category Filter Tabs with rounded-[8px] */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-slate-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-[8px] text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#111215] text-[#C99738] font-bold shadow-xs'
                  : 'bg-white text-slate-600 hover:text-[#111215] border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid with rounded-[14px] */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-start">
          {filteredProjects.map((project, idx) => {
            const title = language === 'ar' ? project.title.ar : project.title.en;
            const category = language === 'ar' ? project.category.ar : project.category.en;
            const desc = language === 'ar' ? project.shortDesc.ar : project.shortDesc.en;
            const location = language === 'ar' ? project.location.ar : project.location.en;

            return (
              <div
                key={project.id}
                className="group flex flex-col rounded-[14px] bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-[#C99738]/60 transition-all duration-300"
              >
                {/* Cover Image */}
                <Link
                  to={`/projects/${project.slug}`}
                  className="relative block h-64 overflow-hidden bg-[#111215]"
                >
                  <img
                    src={project.coverImage}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 end-3 px-2.5 py-1 rounded-[6px] bg-[#111215]/90 text-[11px] font-mono text-[#C99738] border border-white/10">
                    0{idx + 1}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#C99738] uppercase mb-1.5">
                      <span>{category}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#111215] mb-2 group-hover:text-[#C99738] transition-colors leading-snug">
                      <Link to={`/projects/${project.slug}`}>{title}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {desc}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
                      <MapPin className="w-3.5 h-3.5 text-[#C99738] flex-shrink-0" />
                      <span className="truncate">{location}</span>
                    </div>
                  </div>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="pt-4 border-t border-slate-100 inline-flex items-center justify-between text-xs font-bold text-[#111215] group-hover:text-[#C99738] transition-colors uppercase tracking-wider"
                  >
                    <span>{language === 'ar' ? 'عرض تفاصيل ودراسة المشروع' : 'View Full Case Study'}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C99738]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
