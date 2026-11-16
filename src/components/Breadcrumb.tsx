import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const { language, isRTL } = useLanguage();

  const Separator = isRTL ? ChevronLeft : ChevronRight;

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center flex-wrap gap-2 text-xs text-[#7A8088] py-4 border-b border-slate-200/80 mb-8"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-[#7A8088] hover:text-[#C99738] transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>{language === 'ar' ? 'الرئيسية' : 'Home'}</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <Separator className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            {isLast || !item.path ? (
              <span className="font-semibold text-[#111215] truncate max-w-[200px] sm:max-w-md">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-[#C99738] transition-colors truncate max-w-[150px]"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
