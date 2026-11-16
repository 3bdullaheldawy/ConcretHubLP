import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { processSteps, type ProcessStep } from '../data/process';
import { FileText, DraftingCompass, Layers, CheckSquare } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const { language } = useLanguage();

  const getIcon = (name: ProcessStep['iconName']) => {
    switch (name) {
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      case 'DraftingCompass':
        return <DraftingCompass className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      case 'CheckSquare':
        return <CheckSquare className="w-6 h-6" />;
      default:
        return <FileText className="w-6 h-6" />;
    }
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F7F7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A36]/10 text-xs font-bold text-[#E58A36] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E58A36]" />
            <span>{language === 'ar' ? 'منهجية العمل الهندسية' : 'Engineering Methodology'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#142536] tracking-tight">
            {language === 'ar' ? 'من الفكرة إلى التنفيذ' : 'From Concept to Execution'}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {language === 'ar'
              ? 'خطوات عمل واضحة ومدروسة تضمن الانتقال السلس من مرحلة الاستشارة والتصميم إلى الإشراف والمتابعة الميدانية.'
              : 'A structured, transparent workflow ensuring seamless transition from consultation and design to field oversight.'}
          </p>
        </div>

        {/* Desktop Horizontal Timeline (hidden on mobile, visible on lg screens) */}
        <div className="hidden lg:block relative my-10">
          
          {/* Continuous Connecting Line with Orange Nodes */}
          <div className="absolute top-1/2 left-12 right-12 h-1 bg-slate-200 -translate-y-12 z-0" />
          <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#E58A36]/40 via-[#E58A36] to-[#E58A36]/40 -translate-y-12 z-0" />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step) => {
              const currentTitle = language === 'ar' ? step.title.ar : step.title.en;
              const currentDesc = language === 'ar' ? step.desc.ar : step.desc.en;

              return (
                <div key={step.step} className="flex flex-col items-center text-center group">
                  {/* Step Number & Node Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 shadow-md group-hover:border-[#E58A36] group-hover:shadow-lg flex items-center justify-center text-[#142536] group-hover:text-[#E58A36] transition-all duration-300">
                      {getIcon(step.iconName)}
                    </div>
                    {/* Step Tag */}
                    <span className="absolute -top-3 -end-3 px-2 py-0.5 rounded-full bg-[#142536] text-[11px] font-mono font-bold text-white group-hover:bg-[#E58A36] transition-colors">
                      {step.step}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm group-hover:shadow-md transition-shadow h-full flex flex-col justify-start">
                    <h3 className="text-base font-bold text-[#142536] mb-2 group-hover:text-[#E58A36] transition-colors">
                      {currentTitle}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {currentDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (visible on screens < lg) */}
        <div className="lg:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute top-6 bottom-6 start-6 w-0.5 bg-slate-300 rtl:right-6 rtl:left-auto ltr:left-6 ltr:right-auto" />

          <div className="space-y-8 relative">
            {processSteps.map((step) => {
              const currentTitle = language === 'ar' ? step.title.ar : step.title.en;
              const currentDesc = language === 'ar' ? step.desc.ar : step.desc.en;

              return (
                <div key={step.step} className="flex items-start gap-4 text-start">
                  {/* Step Node Icon */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-[#142536] text-[#E58A36] border-2 border-white shadow-md flex items-center justify-center font-bold">
                    <span className="font-mono text-xs text-white">{step.step}</span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-2 text-[#E58A36]">
                      {getIcon(step.iconName)}
                      <h3 className="text-base font-bold text-[#142536]">
                        {currentTitle}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {currentDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Methodology note */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            {language === 'ar'
              ? 'تتم جميع المراحل بالتنسيق المباشر مع العميل لضمان الرضا التام والالتزام بالجداول الزمنية.'
              : 'All phases are coordinated in direct collaboration with clients ensuring total transparency and timeline adherence.'}
          </p>
        </div>

      </div>
    </section>
  );
};
