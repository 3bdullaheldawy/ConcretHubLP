/**
 * Concrete Hub - Business Information & Settings
 * Centralized, easily editable business configuration.
 * 
 * IMPORTANT:
 * - Only verified business information is stored here.
 * - Social media links with empty strings are rendered as inert or hidden without misleading links.
 */

export interface BusinessInfo {
  name: {
    ar: string;
    en: string;
  };
  slogan: {
    ar: string;
    en: string;
  };
  subSlogan: {
    ar: string;
    en: string;
  };
  manager: {
    nameAr: string;
    nameEn: string;
    titleAr: string;
    titleEn: string;
  };
  type: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  aboutStory: {
    ar: string[];
    en: string[];
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string;
    whatsappUrl: string;
    address: {
      ar: string;
      en: string;
    };
    mapsUrl: string;
  };
  social: {
    // Empty strings indicate unconfigured accounts; UI safely respects this.
    facebook: string;
    instagram: string;
    linkedin: string;
    whatsapp: string;
  };
  brandValues: Array<{
    title: { ar: string; en: string };
    desc: { ar: string; en: string };
  }>;
}

export const businessInfo: BusinessInfo = {
  name: {
    ar: "Concrete Hub",
    en: "Concrete Hub",
  },
  slogan: {
    ar: "نبني رؤيتك على أساس من الثقة والهندسة",
    en: "Building Your Vision on Foundations of Trust & Engineering",
  },
  subSlogan: {
    ar: "نبني بثقة.. ونصمم للمستقبل.",
    en: "Building with Confidence.. Designing for the Future.",
  },
  manager: {
    nameAr: "المهندس حازم المزلاوي",
    nameEn: "Eng. Hazem Elmazlawy",
    titleAr: "مهندس مدني – إدارة المكتب",
    titleEn: "Civil Engineer – Office Management",
  },
  type: {
    ar: "مكتب استشارات وحلول هندسية مدنية",
    en: "Civil Engineering & Construction Solutions Office",
  },
  description: {
    ar: "Concrete Hub مكتب هندسي يقدم حلولًا متكاملة في مجال الهندسة المدنية والإنشاءات، مع الاهتمام بالتخطيط الهندسي الدقيق، وجودة التصميم، ومتابعة تفاصيل المشروعات. نؤمن بأن نجاح أي مشروع يبدأ بفهم احتياجات العميل واختيار الحل الهندسي المناسب.",
    en: "Concrete Hub is an engineering office providing integrated solutions in civil engineering and construction, with dedicated focus on precise engineering planning, design quality, and comprehensive project details.",
  },
  aboutStory: {
    ar: [
      "في Concrete Hub نرى أن الهندسة ليست مجرد رسومات ومخططات، بل مسؤولية تبدأ من أول فكرة وتمتد حتى الوصول إلى أفضل حل ممكن على أرض الواقع.",
      "نعمل على تقديم رؤية هندسية واضحة تجمع بين الدراسة والتخطيط والاهتمام بالتفاصيل، مع وضع احتياجات العميل وطبيعة المشروع في مقدمة أولوياتنا.",
      "بإدارة المهندس حازم المزلاوي، نسعى إلى بناء علاقات قائمة على الثقة وتقديم حلول هندسية عملية ومدروسة."
    ],
    en: [
      "At Concrete Hub, we believe engineering is not just drawings and blueprints, but a commitment starting from the initial idea through to the optimal real-world implementation.",
      "We provide a clear engineering vision that integrates thorough analysis, planning, and meticulous attention to detail, keeping our clients' objectives and project nature top of mind.",
      "Under the management of Eng. Hazem Elmazlawy, we strive to build trust-based partnerships and deliver practical, well-engineered solutions."
    ]
  },
  contact: {
    phone: "+201092597773",
    phoneDisplay: "+20 109 259 7773",
    whatsappNumber: "201092597773",
    whatsappUrl: "https://wa.me/201092597773",
    address: {
      ar: "شارع أسيوط، سوهاج، محافظة سوهاج، مصر",
      en: "Asyut Street, Sohag, Sohag Governorate, Egypt",
    },
    // Verified Google Maps search link without fake GPS coordinates
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Asyut+Street%2C+Sohag%2C+Egypt",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61585254770983",
    instagram: "", // أضف لينك الإنستغرام هنا لما يبقى متاح
    linkedin: "",
    whatsapp: "https://wa.me/201092597773",
  },
  brandValues: [
    {
      title: { ar: "الدقة الهندسية", en: "Engineering Precision" },
      desc: { ar: "الالتزام بأدق المعايير والمحددات الحسابية الإنشائية والمعمارية.", en: "Strict adherence to analytical and structural standards." }
    },
    {
      title: { ar: "الجودة والاحترافية", en: "Quality & Professionalism" },
      desc: { ar: "معايير تنفيذية ومراجعات فنية دقيقة لكل تفاصيل المشروع.", en: "Exacting technical reviews and execution standards." }
    },
    {
      title: { ar: "الثقة والشفافية", en: "Trust & Transparency" },
      desc: { ar: "تواصل واضح ومستمر مع العملاء ومصارحة في كل مرحلة.", en: "Clear, transparent communication at every milestone." }
    },
    {
      title: { ar: "الحلول العملية", en: "Practical Solutions" },
      desc: { ar: "تصميمات قابلة للتنفيذ تجمع بين كفاءة التكلفة وسلامة المنشأ.", en: "Feasible designs combining cost-efficiency with structural safety." }
    }
  ]
};
