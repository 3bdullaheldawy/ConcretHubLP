import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projectsData.slice(0, 3).map((project) => {
        const title = language === 'ar' ? project.title.ar : project.title.en;
        const category = language === 'ar' ? project.category.ar : project.category.en;
        return (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="group block rounded-[12px] bg-white border border-slate-200 overflow-hidden hover:border-[#C99738] shadow-xs hover:shadow-md transition-all"
          >
            <div className="h-60 overflow-hidden bg-slate-900">
              <img
                src={project.coverImage}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 text-start">
              <span className="text-xs font-mono text-[#C99738] uppercase block mb-1">{category}</span>
              <h3 className="text-base font-bold text-[#111215] group-hover:text-[#C99738] transition-colors mb-2">{title}</h3>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#111215] uppercase tracking-wider">
                <span>{language === 'ar' ? 'التفاصيل' : 'Details'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C99738]" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
