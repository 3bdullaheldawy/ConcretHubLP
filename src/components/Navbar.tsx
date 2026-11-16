import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, PhoneCall, Globe } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: language === 'ar' ? 'الرئيسية' : 'Home' },
    { path: '/about', label: language === 'ar' ? 'من نحن' : 'About Us' },
    { path: '/services', label: language === 'ar' ? 'خدماتنا' : 'Services' },
    { path: '/projects', label: language === 'ar' ? 'مشروعاتنا' : 'Projects' },
    { path: '/contact', label: language === 'ar' ? 'تواصل معنا' : 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111215]/95 backdrop-blur-md shadow-md border-b border-[#282a32] py-3'
          : 'bg-[#111215]/90 backdrop-blur-sm border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center focus:outline-none group">
            <Logo variant="light" size="md" />
          </Link>

          {/* Desktop Nav Links (Bootstrap nav-pills style with moderate rounding) */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-semibold rounded-[8px] transition-all duration-200 ${
                    isActive
                      ? 'bg-white/10 text-[#C99738] font-bold shadow-xs'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[8px] border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white hover:border-[#C99738] hover:bg-white/5 transition-all cursor-pointer"
              title={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-[#C99738]" />
              <span>{language === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* Direct Consultation Link (Bootstrap-inspired primary button with rounded-[10px]) */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-[#C99738] hover:bg-[#dca742] text-[#111215] font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'طلب استشارة هندسية' : 'Request Consultation'}</span>
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 text-xs font-bold text-slate-300 border border-slate-700 rounded-[8px] bg-white/5"
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-[8px] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111215] border-b border-slate-800 px-5 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-[8px] text-base font-semibold text-start transition-colors ${
                    isActive
                      ? 'text-[#C99738] bg-white/10 font-bold'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-[10px] bg-[#C99738] text-[#111215] font-bold text-sm tracking-wide uppercase shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{language === 'ar' ? 'طلب استشارة هندسية' : 'Request Consultation'}</span>
            </Link>

            <a
              href={businessInfo.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-[10px] bg-emerald-600/90 hover:bg-emerald-600 text-white font-medium text-sm transition-colors"
            >
              <span>{language === 'ar' ? 'محادثة واتساب فورية' : 'Direct WhatsApp'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
