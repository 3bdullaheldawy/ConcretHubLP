import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { businessInfo } from '../data/businessInfo';
import {
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  User,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceType: serviceParam || 'التصميم الإنشائي',
    projectLocation: '',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessNotice, setShowSuccessNotice] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, serviceType: serviceParam }));
    }
  }, [serviceParam]);

  const validateEgyptianPhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s-]/g, '');
    const egRegex = /^(\+?20|0)?1[0125][0-9]{8}$/;
    return egRegex.test(cleaned);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { fullName?: string; phone?: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName =
        language === 'ar' ? 'يرجى إدخال الاسم بالكامل' : 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName =
        language === 'ar' ? 'الاسم قصير جدًا (3 أحرف على الأقل)' : 'Name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        language === 'ar' ? 'يرجى إدخال رقم الهاتف للتواصل' : 'Please enter your phone number';
    } else if (!validateEgyptianPhone(formData.phone)) {
      newErrors.phone =
        language === 'ar'
          ? 'يرجى إدخال رقم هاتف مصري صحيح (مثال: 01012345678)'
          : 'Please enter a valid Egyptian phone number (e.g. 01012345678)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    const locationPart = formData.projectLocation.trim()
      ? formData.projectLocation.trim()
      : (language === 'ar' ? 'غير محدد' : 'Not specified');

    const detailsPart = formData.projectDetails.trim()
      ? formData.projectDetails.trim()
      : (language === 'ar' ? 'لا توجد تفاصيل إضافية' : 'None provided');

    const formattedMessage =
`مرحبًا Concrete Hub،

أرغب في الاستفسار عن خدمات المكتب.

الاسم: ${formData.fullName.trim()}
رقم الهاتف: ${formData.phone.trim()}
الخدمة المطلوبة: ${formData.serviceType}
موقع المشروع: ${locationPart}
تفاصيل المشروع: ${detailsPart}

برجاء التواصل معي لمناقشة التفاصيل.`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/201092597773?text=${encodedMessage}`;

    setShowSuccessNotice(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 400);
  };

  const serviceOptions = [
    { ar: 'التصميم الإنشائي', en: 'Structural Design' },
    { ar: 'التصميم المعماري', en: 'Architectural Design' },
    { ar: 'الإشراف الهندسي', en: 'Engineering Supervision' },
    { ar: 'حصر الكميات والمقايسات', en: 'Quantity Surveying & Cost Estimation' },
    { ar: 'إدارة المشروعات', en: 'Project Management' },
    { ar: 'أعمال التشطيبات والترميم', en: 'Finishing & Renovation' },
    { ar: 'استشارة هندسية عامة', en: 'General Engineering Consultation' },
  ];

  const breadcrumbs = [
    { label: language === 'ar' ? 'تواصل معنا' : 'Contact Us' }
  ];

  return (
    <div className="bg-[#F8F8F6] text-[#111215] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbs} />

        {/* Page Header */}
        <div className="text-start max-w-4xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C99738] block mb-2">
            {language === 'ar' ? 'قنوات الاتصال المباشرة' : 'Direct Inquiries'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#111215] leading-tight">
            {language === 'ar' ? 'ابدأ مشروعك معنا' : 'Start Your Project With Us'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {language === 'ar'
              ? 'تواصل معنا لمناقشة متطلبات مشروعك والحصول على الاستشارة المناسبة مع المهندس حازم المزلاوي.'
              : 'Reach out to discuss your structural parameters and receive direct engineering consultation from Eng. Hazem Elmazlawy.'}
          </p>
        </div>

        {/* 2-Column Split: Info / WhatsApp Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Office Details (5 cols) with rounded-[14px] */}
          <div className="lg:col-span-5 space-y-6 text-start">
            
            <div className="p-8 rounded-[14px] bg-[#111215] text-white shadow-md relative border border-[#282a32]">
              <span className="text-[11px] font-mono text-[#C99738] uppercase tracking-wider block mb-2">
                {language === 'ar' ? 'المقر الرئيسي' : 'Office Headquarters'}
              </span>
              <h2 className="text-xl font-bold text-white mb-1.5">
                Concrete Hub
              </h2>
              <div className="text-xs text-[#C99738] font-semibold mb-6">
                {language === 'ar' ? businessInfo.manager.titleAr : businessInfo.manager.titleEn}: {language === 'ar' ? businessInfo.manager.nameAr : businessInfo.manager.nameEn}
              </div>

              <div className="space-y-4 text-sm">
                {/* Instant WhatsApp Button with rounded-[10px] */}
                <a
                  href={businessInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-[10px] bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors shadow-xs"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-[11px] text-emerald-100">
                      {language === 'ar' ? 'محادثة فورية عبر واتساب' : 'Direct Instant WhatsApp'}
                    </div>
                    <div className="font-mono text-sm font-bold" dir="ltr">
                      {businessInfo.contact.phoneDisplay}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>

                {/* Direct Phone with rounded-[10px] */}
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="flex items-center gap-3 p-3.5 rounded-[10px] bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                >
                  <Phone className="w-5 h-5 text-[#C99738] flex-shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400">
                      {language === 'ar' ? 'الاتصال الهاتفي' : 'Phone'}
                    </div>
                    <div className="font-mono text-sm font-bold" dir="ltr">
                      {businessInfo.contact.phoneDisplay}
                    </div>
                  </div>
                </a>

                {/* Location Box with rounded-[10px] */}
                <div className="flex items-start gap-3 p-3.5 rounded-[10px] bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-[#C99738] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-slate-400">
                      {language === 'ar' ? 'عنوان المكتب' : 'Office Location'}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200 mt-0.5">
                      {language === 'ar' ? businessInfo.contact.address.ar : businessInfo.contact.address.en}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Maps Link with rounded-[8px] */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <a
                  href={businessInfo.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-[8px] bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#C99738] hover:text-[#dca742] transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>
                    {language === 'ar'
                      ? 'عرض موقع شارع أسيوط، سوهاج على خرائط Google'
                      : 'View Asyut St, Sohag on Google Maps'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Operating Notice with rounded-[12px] */}
            <div className="p-5 rounded-[12px] bg-white border border-slate-200 text-xs text-slate-600 flex items-start gap-3 shadow-xs">
              <Clock className="w-5 h-5 text-[#111215] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#111215] block mb-0.5">
                  {language === 'ar' ? 'مواعيد الاستقبال والرد' : 'Inquiry Response Time'}
                </span>
                {language === 'ar'
                  ? 'نسعد باستقبال استفساراتكم عبر واتساب طوال أيام الأسبوع، وسيتم الرد ومتابعة التفاصيل بأسرع وقت.'
                  : 'Inquiries via WhatsApp are welcomed throughout the week; our engineering team will respond promptly.'}
              </div>
            </div>

          </div>

          {/* Bootstrap-Style Form with rounded-[14px] */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-[14px] border border-slate-200 shadow-sm text-start">
            
            <div className="mb-6">
              <span className="text-xs font-mono font-bold text-[#C99738] uppercase tracking-wider block mb-1">
                {language === 'ar' ? 'استمارة التواصل' : 'Consultation Form'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111215]">
                {language === 'ar' ? 'طلب استشارة ومناقشة مشروع' : 'Project Consultation Request'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {language === 'ar'
                  ? 'يرجى إدخال البيانات؛ وسيتم فتح محادثة واتساب الرسمية مباشرة للتواصل مع المهندس حازم المزلاوي.'
                  : 'Submit your project details; an official pre-formatted WhatsApp chat will launch to finalize your request.'}
              </p>
            </div>

            {/* Success notification with rounded-[10px] */}
            {showSuccessNotice && (
              <div className="mb-6 p-4 rounded-[10px] bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">
                    {language === 'ar' ? 'جاري فتح واتساب الآن...' : 'Opening WhatsApp...'}
                  </span>
                  {language === 'ar'
                    ? 'تم تجهيز رسالتك الهندسية بجميع البيانات المدخلة لتأكيد الاستشارة مع المهندس حازم المزلاوي.'
                    : 'Your inquiry has been formulated for direct transmission to Eng. Hazem Elmazlawy.'}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#111215] mb-1.5">
                  {language === 'ar' ? 'الاسم بالكامل' : 'Full Name'}{' '}
                  <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={language === 'ar' ? 'مثال: محمد أحمد علي' : 'e.g. Mohamed Ahmed'}
                    className={`w-full px-4 py-3 rounded-[10px] bg-slate-50 border text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-all ${
                      errors.fullName
                        ? 'border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-200'
                        : 'border-slate-300 focus:border-[#C99738] focus:bg-white focus:ring-2 focus:ring-[#C99738]/20'
                    }`}
                  />
                  <User className="w-4 h-4 text-slate-400 absolute end-3.5 top-3.5 pointer-events-none" />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Egyptian Phone Number */}
              <div>
                <label className="block text-xs font-bold text-[#111215] mb-1.5">
                  {language === 'ar' ? 'رقم الهاتف (مصر)' : 'Phone Number (Egypt)'}{' '}
                  <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={language === 'ar' ? '01012345678 أو +2010...' : '01012345678'}
                    dir="ltr"
                    className={`w-full px-4 py-3 rounded-[10px] bg-slate-50 border text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-all ${
                      errors.phone
                        ? 'border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-200'
                        : 'border-slate-300 focus:border-[#C99738] focus:bg-white focus:ring-2 focus:ring-[#C99738]/20'
                    }`}
                  />
                  <Phone className="w-4 h-4 text-slate-400 absolute end-3.5 top-3.5 pointer-events-none" />
                </div>
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Service Type Dropdown */}
              <div>
                <label className="block text-xs font-bold text-[#111215] mb-1.5">
                  {language === 'ar' ? 'نوع الخدمة المطلوبة' : 'Required Service'}
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-[10px] bg-slate-50 border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#C99738] focus:bg-white focus:ring-2 focus:ring-[#C99738]/20 transition-all cursor-pointer"
                >
                  {serviceOptions.map((opt, i) => (
                    <option key={i} value={language === 'ar' ? opt.ar : opt.en}>
                      {language === 'ar' ? opt.ar : opt.en}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Location (Optional) */}
              <div>
                <label className="block text-xs font-bold text-[#111215] mb-1.5">
                  {language === 'ar' ? 'موقع المشروع (اختياري)' : 'Project Location (Optional)'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleInputChange}
                    placeholder={language === 'ar' ? 'مثال: سوهاج، شارع الجمهورية / طهطا / أخميم' : 'e.g. Sohag, Akhmim, Tahta'}
                    className="w-full px-4 py-3 rounded-[10px] bg-slate-50 border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#C99738] focus:bg-white focus:ring-2 focus:ring-[#C99738]/20 transition-all"
                  />
                  <MapPin className="w-4 h-4 text-slate-400 absolute end-3.5 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-xs font-bold text-[#111215] mb-1.5">
                  {language === 'ar' ? 'تفاصيل وملاحظات المشروع (اختياري)' : 'Project Details & Scope (Optional)'}
                </label>
                <textarea
                  name="projectDetails"
                  rows={3}
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder={
                    language === 'ar'
                      ? 'نبذة عن مساحة المشروع، عدد الأدوار، أو أي استفسار ترغب في مناقشته...'
                      : 'Brief on project size, number of floors, or specific inquiries...'
                  }
                  className="w-full px-4 py-3 rounded-[10px] bg-slate-50 border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#C99738] focus:bg-white focus:ring-2 focus:ring-[#C99738]/20 transition-all resize-y"
                />
              </div>

              {/* Submit Button with rounded-[10px] */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-[10px] bg-[#C99738] hover:bg-[#dca742] active:scale-[0.98] text-[#111215] font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-sm hover:shadow-md disabled:opacity-75"
              >
                <MessageCircle className="w-5 h-5" />
                <span>
                  {isSubmitting
                    ? (language === 'ar' ? 'جاري فتح واتساب...' : 'Opening WhatsApp...')
                    : (language === 'ar' ? 'إرسال الطلب عبر واتساب الآن' : 'Send via WhatsApp')}
                </span>
                <Send className="w-4 h-4 rtl:rotate-180" />
              </button>

              <p className="text-[11px] text-slate-500 text-center leading-normal">
                {language === 'ar'
                  ? '🔒 بالضغط على إرسال، سيتم فتح محادثة واتساب الرسمية لمكتب Concrete Hub مع المهندس حازم المزلاوي لإتمام الاستشارة.'
                  : '🔒 Clicking send launches the official WhatsApp chat with Eng. Hazem Elmazlawy to finalize your consultation.'}
              </p>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
