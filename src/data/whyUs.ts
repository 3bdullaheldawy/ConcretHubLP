export interface WhyUsItem {
  id: string;
  number: string;
  iconName: 'Target' | 'CheckCircle2' | 'Sliders' | 'MessageSquare' | 'ShieldCheck';
  title: {
    ar: string;
    en: string;
  };
  desc: {
    ar: string;
    en: string;
  };
}

export const whyUsData: WhyUsItem[] = [
  {
    id: 'thoughtful-vision',
    number: '01',
    iconName: 'Target',
    title: {
      ar: 'رؤية هندسية مدروسة',
      en: 'Thoughtful Engineering Vision',
    },
    desc: {
      ar: 'دراسة وتحليل متطلبات كل مشروع بعناية قبل اقتراح الحل الإنشائي أو المعماري المناسب، لضمان أعلى جدوى وكفاءة.',
      en: 'Thoroughly analyzing project requirements before determining structural and architectural solutions for optimum viability.',
    },
  },
  {
    id: 'attention-details',
    number: '02',
    iconName: 'Sliders',
    title: {
      ar: 'الاهتمام بأدق التفاصيل',
      en: 'Meticulous Attention to Detail',
    },
    desc: {
      ar: 'التركيز على دقة المخططات الهندسية والحسابات الإنشائية والتفاصيل التنفيذية لتجنب أي تعارضات أو أخطاء أثناء البناء.',
      en: 'Rigorous precision in blueprints, structural calculations, and shop drawings to prevent site conflicts or execution errors.',
    },
  },
  {
    id: 'practical-solutions',
    number: '03',
    iconName: 'CheckCircle2',
    title: {
      ar: 'حلول هندسية عملية',
      en: 'Practical & Feasible Solutions',
    },
    desc: {
      ar: 'مراعاة ميزانية العميل وطبيعة الموقع ومتطلبات التنفيذ الواقعية لتقديم تصميمات متوازنة وقابلة للتطبيق دون هدر.',
      en: 'Tailoring designs to site constraints and realistic budgets, ensuring balance between feasibility and structural safety.',
    },
  },
  {
    id: 'clear-communication',
    number: '04',
    iconName: 'MessageSquare',
    title: {
      ar: 'تواصل واضح ومستمر',
      en: 'Clear & Responsive Communication',
    },
    desc: {
      ar: 'الاهتمام بالاستماع لاحتياجات العميل، وشرح البدائل الهندسية بوضوح وشفافية، ومتابعة جميع الاستفسارات أولًا بأول.',
      en: 'Actively understanding client requirements, explaining engineering alternatives transparently, and providing regular updates.',
    },
  },
  {
    id: 'quality-commitment',
    number: '05',
    iconName: 'ShieldCheck',
    title: {
      ar: 'الالتزام بجودة العمل',
      en: 'Commitment to Quality & Standards',
    },
    desc: {
      ar: 'الحرص على مطابقة الأعمال للأكواد الهندسية والمواصفات الفنية المتفق عليها، لضمان سلامة واستدامة المنشأة.',
      en: 'Strict adherence to Egyptian engineering building codes and technical standards for lasting safety and durability.',
    },
  },
];
