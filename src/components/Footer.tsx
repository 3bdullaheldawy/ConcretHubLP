import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { businessInfo } from '../data/businessInfo';
import {
  Phone,
  MapPin,
  MessageCircle,
  ExternalLink,
  ArrowUp,
} from 'lucide-react';

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111215] text-white border-t border-[#282a32] relative pt-16 pb-12 overflow-hidden">
      {/* Blueprint grid on dark background */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#282a32] text-start">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" size="lg" />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md pt-2">
              {language === 'ar' ? businessInfo.description.ar : businessInfo.description.en}
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1.5 rounded-[6px] bg-[#1a1c22] border border-[#282a32] text-xs text-[#C99738] font-bold tracking-wide">
                {language === 'ar' ? businessInfo.manager.titleAr : businessInfo.manager.titleEn}: {language === 'ar' ? businessInfo.manager.nameAr : businessInfo.manager.nameEn}
              </span>
            </div>

            {/* Social Channels */}
            <div className="pt-4">
              <span className="text-[11px] text-slate-500 uppercase tracking-wider block mb-2 font-mono">
                {language === 'ar' ? 'قنوات التواصل المعتمدة' : 'Official Channels'}
              </span>
              <div className="flex items-center gap-2">
                {/* WhatsApp Direct Link */}
                <a
                  href={businessInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-[8px] bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-200"
                  aria-label="WhatsApp"
                  title="WhatsApp: +201092597773"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                {/* Facebook */}
                {businessInfo.social.facebook ? (
                  <a
                    href={businessInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-[8px] bg-white/5 text-slate-400 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                ) : (
                  <span
                    className="w-10 h-10 rounded-[8px] bg-white/[0.02] text-slate-600 border border-white/5 flex items-center justify-center cursor-not-allowed opacity-40"
                    title={language === 'ar' ? 'قيد التجهيز' : 'In preparation'}
                  >
                    <FacebookIcon />
                  </span>
                )}

                {/* Instagram */}
                {businessInfo.social.instagram ? (
                  <a
                    href={businessInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-[8px] bg-white/5 text-slate-400 border border-white/10 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                ) : (
                  <span
                    className="w-10 h-10 rounded-[8px] bg-white/[0.02] text-slate-600 border border-white/5 flex items-center justify-center cursor-not-allowed opacity-40"
                    title={language === 'ar' ? 'قيد التجهيز' : 'In preparation'}
                  >
                    <InstagramIcon />
                  </span>
                )}

                {/* LinkedIn */}
                {businessInfo.social.linkedin ? (
                  <a
                    href={businessInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-[8px] bg-white/5 text-slate-400 border border-white/10 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon />
                  </a>
                ) : (
                  <span
                    className="w-10 h-10 rounded-[8px] bg-white/[0.02] text-slate-600 border border-white/5 flex items-center justify-center cursor-not-allowed opacity-40"
                    title={language === 'ar' ? 'قيد التجهيز' : 'In preparation'}
                  >
                    <LinkedinIcon />
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Pages Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#C99738] uppercase tracking-wider font-mono border-b border-[#282a32] pb-2">
              {language === 'ar' ? 'صفحات الموقع' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#C99738] transition-colors">
                  {language === 'ar' ? 'الرئيسية' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C99738] transition-colors">
                  {language === 'ar' ? 'عن المكتب والرؤية الهندسية' : 'About Concrete Hub'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#C99738] transition-colors">
                  {language === 'ar' ? 'الخدمات الهندسية والاستشارية' : 'Engineering Services'}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#C99738] transition-colors">
                  {language === 'ar' ? 'معرض المشروعات والتطبيقات' : 'Project Portfolio'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C99738] transition-colors">
                  {language === 'ar' ? 'تواصل معنا واستشارة واتساب' : 'Contact & Consultation'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-[#C99738] uppercase tracking-wider font-mono border-b border-[#282a32] pb-2">
              {language === 'ar' ? 'بيانات المقر والتواصل' : 'Location & Inquiries'}
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C99738] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">
                    {language === 'ar' ? 'العنوان' : 'Office Location'}:
                  </span>
                  <span className="text-slate-400">
                    {language === 'ar' ? businessInfo.contact.address.ar : businessInfo.contact.address.en}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C99738] flex-shrink-0" />
                <div>
                  <span className="text-white block font-medium">
                    {language === 'ar' ? 'الهاتف المباشر' : 'Direct Phone'}:
                  </span>
                  <a
                    href={`tel:${businessInfo.contact.phone}`}
                    className="font-mono text-slate-300 hover:text-[#C99738] transition-colors"
                    dir="ltr"
                  >
                    {businessInfo.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="text-white block font-medium">
                    {language === 'ar' ? 'المحادثة السريعة' : 'WhatsApp'}:
                  </span>
                  <a
                    href={businessInfo.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-emerald-400 hover:underline"
                    dir="ltr"
                  >
                    {businessInfo.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={businessInfo.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[8px] bg-[#1a1c22] border border-[#282a32] text-xs text-slate-300 hover:text-white hover:border-[#C99738] transition-all"
                >
                  <span>{language === 'ar' ? 'عرض شارع أسيوط، سوهاج على الخريطة' : 'View Asyut St on Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C99738]" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Concrete Hub. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}{' '}
            <span className="text-slate-400">
              ({language === 'ar' ? 'إدارة المهندس حازم المزلاوي' : 'Eng. Hazem Elmazlawy'})
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] bg-[#1a1c22] border border-[#282a32] text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>{language === 'ar' ? 'العودة للأعلى' : 'Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
