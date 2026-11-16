import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
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
  Building,
  User,
} from 'lucide-react';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceType: initialService || 'التصميم الإنشائي',
    projectLocation: '',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessNotice, setShowSuccessNotice] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  // Egyptian Phone Validation: matches e.g. 01012345678, 011..., 012..., 015..., or +2010... or 2010...
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

    // Clear errors on change
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { fullName?: string; phone?: string } = {};

    // Validate Name
    if (!formData.fullName.trim()) {
      newErrors.fullName =
        language === 'ar' ? 'يرجى إدخال الاسم بالكامل' : 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName =
        language === 'ar' ? 'الاسم قصير جدًا (3 أحرف على الأقل)' : 'Name must be at least 3 characters';
    }

    // Validate Egyptian Phone
    if (!formData.phone.trim()) {
      newErrors.phone =
        language === 'ar' ? 'يرجى إدخال رقم الهاتف للتواصل' : 'Please enter your phone number';
    } else if (!validateEgyptianPhone(formData.phone)) {
      newErrors.phone =
        language === 'ar'
          ? 'يرجى إدخال رقم هاتف مصري صحيح (مثال: 01012345678)'
          : 'Please enter a valid Egyptian phone number (e.g., 01012345678)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Build the formatted Arabic WhatsApp Message
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

    // Open WhatsApp in a new tab
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

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A36]/10 text-xs font-bold text-[#E58A36] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E58A36]" />
            <span>{language === 'ar' ? 'طلب استشارة ومناقشة مشروع' : 'Consultation & Inquiry'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#142536] tracking-tight">
            {language === 'ar' ? 'ابدأ مشروعك معنا' : 'Start Your Project With Us'}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {language === 'ar'
              ? 'تواصل معنا لمناقشة مشروعك والحصول على الاستشارة المناسبة.'
              : 'Contact us to discuss your project parameters and receive dedicated engineering consultation.'}
          </p>
        </div>

        {/* 2-Column Layout: Contact Cards & Information / Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Information & Quick Actions Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-start">
            
            {/* Quick Contact Card */}
            <div className="p-8 rounded-2xl bg-[#142536] text-white shadow-xl relative overflow-hidden border border-slate-700">
              <div className="absolute top-0 end-0 p-8 opacity-10 pointer-events-none">
                <Building className="w-32 h-32 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {language === 'ar' ? 'Concrete Hub للاستشارات الهندسية' : 'Concrete Hub Engineering'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                {language === 'ar'
                  ? 'بإدارة المهندس حازم المزلاوي – نرحب باستفساراتكم لتقديم الحلول الإنشائية والمعمارية المناسبة.'
                  : 'Managed by Eng. Hazem Elmazlawy – Welcoming inquiries to deliver structural and architectural excellence.'}
              </p>

              <div className="space-y-4 text-sm">
                {/* WhatsApp Direct Action */}
                <a
                  href={businessInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors group cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-[11px] text-emerald-100">
                      {language === 'ar' ? 'محادثة فورية عبر واتساب' : 'Direct Instant WhatsApp'}
                    </div>
                    <div className="font-mono text-sm font-bold">
                      {businessInfo.contact.phoneDisplay}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-75 group-hover:opacity-100" />
                </a>

                {/* Phone Call */}
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-[#E58A36] flex-shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400">
                      {language === 'ar' ? 'الاتصال المباشر' : 'Direct Phone'}
                    </div>
                    <div className="font-mono text-sm font-bold text-white">
                      {businessInfo.contact.phoneDisplay}
                    </div>
                  </div>
                </a>

                {/* Location Display */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-[#E58A36] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-slate-400">
                      {language === 'ar' ? 'عنوان المكتب' : 'Office Address'}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200 mt-0.5">
                      {language === 'ar' ? businessInfo.contact.address.ar : businessInfo.contact.address.en}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Maps Link */}
              <div className="mt-6 pt-5 border-t border-slate-700/80">
                <a
                  href={businessInfo.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#E58A36] hover:text-[#f09543] transition-colors"
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

            {/* Availability Note */}
            <div className="p-5 rounded-2xl bg-[#F7F7F5] border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#142536] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#142536] block mb-0.5">
                  {language === 'ar' ? 'ساعات التواصل والاستشارة' : 'Consultation Availability'}
                </span>
                {language === 'ar'
                  ? 'نسعد باستقبال طلباتكم ورسائلكم طوال أيام الأسبوع عبر واتساب، وسيتم الرد ومتابعة التفاصيل بأسرع وقت.'
                  : 'Inquiries via WhatsApp are welcomed throughout the week; our engineering team will respond promptly.'}
              </div>
            </div>

          </div>

          {/* Contact Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#F7F7F5] p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-lg text-start relative">
            
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#142536]">
                {language === 'ar' ? 'نموذج طلب الاستشارة الهندسية' : 'Engineering Consultation Form'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {language === 'ar'
                  ? 'يرجى ملء البيانات التالية وسيتم فتح محادثة واتساب تلقائيًا لمناقشة التفاصيل مباشرة مع المهندس.'
                  : 'Fill in the information below; a pre-formatted WhatsApp chat will launch to finalize your request directly.'}
              </p>
            </div>

            {/* Notification when submitted */}
            {showSuccessNotice && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">
                    {language === 'ar' ? 'جاري فتح تطبيق واتساب الآن...' : 'Opening WhatsApp conversation...'}
                  </span>
                  {language === 'ar'
                    ? 'تم تجهيز رسالتك الهندسية بجميع البيانات المدخلة لتأكيد الاستشارة مع المهندس حازم المزلاوي.'
                    : 'Your inquiry message has been prepared for direct transmission to Eng. Hazem Elmazlawy.'}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Full Name Field */}
              <div>
                <label className="block text-xs font-bold text-[#142536] mb-1.5">
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
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-300 focus:border-[#E58A36] focus:ring-orange-100'
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

              {/* Phone Field */}
              <div>
                <label className="block text-xs font-bold text-[#142536] mb-1.5">
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
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-300 focus:border-[#E58A36] focus:ring-orange-100'
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
                <label className="block text-xs font-bold text-[#142536] mb-1.5">
                  {language === 'ar' ? 'نوع الخدمة المطلوبة' : 'Required Service Type'}
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#E58A36] focus:ring-2 focus:ring-orange-100 transition-all cursor-pointer"
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
                <label className="block text-xs font-bold text-[#142536] mb-1.5">
                  {language === 'ar' ? 'موقع المشروع (اختياري)' : 'Project Location (Optional)'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleInputChange}
                    placeholder={language === 'ar' ? 'مثال: سوهاج، شارع الجمهورية / طهطا / أخميم' : 'e.g. Sohag, Akhmim, Tahta'}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E58A36] focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                  <MapPin className="w-4 h-4 text-slate-400 absolute end-3.5 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Project Details (Optional) */}
              <div>
                <label className="block text-xs font-bold text-[#142536] mb-1.5">
                  {language === 'ar' ? 'تفاصيل وملاحظات المشروع (اختياري)' : 'Project Notes & Details (Optional)'}
                </label>
                <textarea
                  name="projectDetails"
                  rows={3}
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder={
                    language === 'ar'
                      ? 'نبذة عن مساحة المشروع، عدد الأدوار، أو أي تفاصيل ترغب في توضيحها...'
                      : 'Brief on project size, number of floors, or specific requirements...'
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E58A36] focus:ring-2 focus:ring-orange-100 transition-all resize-y"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-[#E58A36] hover:bg-[#f09543] active:scale-[0.99] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-950/20 flex items-center justify-center gap-2.5 transition-all cursor-pointer disabled:opacity-75"
              >
                <MessageCircle className="w-5 h-5" />
                <span>
                  {isSubmitting
                    ? (language === 'ar' ? 'جاري فتح واتساب...' : 'Opening WhatsApp...')
                    : (language === 'ar' ? 'إرسال الطلب عبر واتساب الآن' : 'Send Inquiry via WhatsApp')}
                </span>
                <Send className="w-4 h-4 rtl:rotate-180" />
              </button>

              {/* Explanation Note */}
              <p className="text-[11px] text-slate-500 text-center leading-normal">
                {language === 'ar'
                  ? '🔒 بالضغط على إرسال، سيتم تحويلك مباشرة إلى محادثة واتساب الرسمية لمكتب Concrete Hub مع المهندس حازم المزلاوي لإتمام الاستشارة.'
                  : '🔒 Clicking send opens the official WhatsApp chat of Concrete Hub with Eng. Hazem Elmazlawy to finalize your consultation.'}
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
