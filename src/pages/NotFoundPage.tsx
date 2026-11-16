import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#F8F8F6] text-[#111215] px-4 pt-24 pb-16">
      <div className="max-w-md p-8 rounded-[14px] bg-white border border-slate-200 shadow-sm text-center">
        <div className="font-mono text-6xl font-black text-[#C99738] mb-3">
          404
        </div>
        <h1 className="text-2xl font-black mb-3">
          {language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h1>
        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          {language === 'ar'
            ? 'عذرًا، لم نتمكن من العثور على الصفحة المطلوبة. يرجى التحقق من الرابط أو الانتقال إلى الصفحة الرئيسية.'
            : 'The page you are looking for does not exist or has been moved.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-[10px] bg-[#111215] text-[#C99738] font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xs"
          >
            <span>{language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </Link>

          <Link
            to="/projects"
            className="w-full sm:w-auto px-6 py-3 rounded-[10px] bg-white border border-slate-300 text-slate-700 hover:text-[#111215] font-semibold text-xs tracking-wider inline-flex items-center justify-center hover:bg-slate-50 transition-all"
          >
            <span>{language === 'ar' ? 'استعراض المشروعات' : 'View Projects'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
