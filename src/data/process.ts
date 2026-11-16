export interface ProcessStep {
  step: string;
  iconName: 'FileText' | 'DraftingCompass' | 'Layers' | 'CheckSquare';
  title: {
    ar: string;
    en: string;
  };
  desc: {
    ar: string;
    en: string;
  };
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    iconName: 'FileText',
    title: {
      ar: 'استقبال الطلب وفهم الاحتياجات',
      en: 'Inquiry & Understanding Needs',
    },
    desc: {
      ar: 'جلسة استماع هندسية لمناقشة أفكار العميل، ونوع المشروع، والأهداف المرجوة، وتحديد النطاق الأولي للعمل.',
      en: 'Initial engineering consultation to grasp client requirements, goals, project type, and preliminary scope.',
    },
  },
  {
    step: '02',
    iconName: 'DraftingCompass',
    title: {
      ar: 'دراسة المتطلبات والتخطيط الفني',
      en: 'Study & Technical Planning',
    },
    desc: {
      ar: 'معاينة الموقع ومراجعة الاشتراطات والأبعاد وتحليل المعطيات الفنية لإعداد خطة العمل الهندسية المناسبة.',
      en: 'Site review, dimension verification, technical parameter analysis, and structured milestone planning.',
    },
  },
  {
    step: '03',
    iconName: 'Layers',
    title: {
      ar: 'تقديم الحلول والتصميمات الهندسية',
      en: 'Engineering Design & Delivery',
    },
    desc: {
      ar: 'إعداد ومراجعة المخططات والرسومات الإنشائية والمعمارية والمقايسات المتفق عليها بأعلى درجات الدقة.',
      en: 'Drafting comprehensive structural, architectural blueprints, and BOQ estimates adhering to engineering standards.',
    },
  },
  {
    step: '04',
    iconName: 'CheckSquare',
    title: {
      ar: 'المتابعة والإشراف وفق نطاق العمل',
      en: 'Oversight & Phase Follow-up',
    },
    desc: {
      ar: 'متابعة مراحل التنفيذ الميداني أو استلام البنود وفق الاشتراطات والعقد لضمان مطابقة المنفذ للمخطط.',
      en: 'Active site oversight, milestone inspections, and adherence monitoring according to the agreed project scope.',
    },
  },
];
