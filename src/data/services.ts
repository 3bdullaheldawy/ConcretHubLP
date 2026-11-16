import structuralImg from '../assets/images/structural.jpg';
import architecturalImg from '../assets/images/architectural.jpg';
import supervisionImg from '../assets/images/supervision.jpg';
import quantityImg from '../assets/images/quantity.jpg';
import managementImg from '../assets/images/management.jpg';
import finishingImg from '../assets/images/finishing.jpg';

export interface ServiceItem {
  id: string;
  iconName: 'Building2' | 'Compass' | 'HardHat' | 'Calculator' | 'ClipboardCheck' | 'Hammer';
  title: {
    ar: string;
    en: string;
  };
  shortDesc: {
    ar: string;
    en: string;
  };
  features: {
    ar: string[];
    en: string[];
  };
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'structural-design',
    iconName: 'Building2',
    title: {
      ar: 'التصميم الإنشائي',
      en: 'Structural Design',
    },
    shortDesc: {
      ar: 'إعداد التصميمات والحلول الإنشائية للمباني والمنشآت، مع مراعاة متطلبات الأمان والكفاءة الهندسية.',
      en: 'Developing structural designs and solutions for buildings, balancing engineering safety and load efficiency.',
    },
    features: {
      ar: [
        'تحليل الأحمال الإنشائية وفق الكود الهندسي',
        'تصميم العناصر الخرسانية المسلحة والأساسات',
        'مخططات تسليح تفصيلية قابلة للتنفيذ الميداني'
      ],
      en: [
        'Structural load analysis complying with engineering codes',
        'Reinforced concrete & foundation design',
        'Detailed, field-ready reinforcement blueprints'
      ]
    },
    image: structuralImg,
  },
  {
    id: 'architectural-design',
    iconName: 'Compass',
    title: {
      ar: 'التصميم المعماري',
      en: 'Architectural Design',
    },
    shortDesc: {
      ar: 'إعداد التصورات والمخططات المعمارية التي تجمع بين الاستغلال الأمثل للمساحات والوظائف العملية.',
      en: 'Crafting architectural plans and concepts that maximize spatial utility with modern aesthetic balance.',
    },
    features: {
      ar: [
        'توزيع الفراغات المعمارية بمرونة وكفاءة',
        'دراسة الواجهات والإضاءة والتهوية الطبيعية',
        'توافق التصميم مع المتطلبات الوظيفية للعميل'
      ],
      en: [
        'Smart, flexible spatial zoning',
        'Facade studies with natural lighting & ventilation',
        'Full alignment with client functional needs'
      ]
    },
    image: architecturalImg,
  },
  {
    id: 'engineering-supervision',
    iconName: 'HardHat',
    title: {
      ar: 'الإشراف الهندسي',
      en: 'Engineering Supervision',
    },
    shortDesc: {
      ar: 'متابعة الأعمال الهندسية ومراجعة مراحل التنفيذ لضمان مطابقة الأعمال للمخططات والمواصفات المتفق عليها.',
      en: 'On-site technical monitoring and phase reviews to ensure execution strictly adheres to approved blueprints.',
    },
    features: {
      ar: [
        'استلام حديد التسليح وصب الخرسانة ميدانيًا',
        'مطابقة التنفيذ مع اللوحات والاشتراطات الهندسية',
        'توثيق الملاحظات الفنية وتقديم التوجيهات للمقاول'
      ],
      en: [
        'On-site steel reinforcement and concrete pour inspection',
        'Verification of blueprint compliance & standards',
        'Technical progress logs & contractor guidelines'
      ]
    },
    image: supervisionImg,
  },
  {
    id: 'quantity-surveying',
    iconName: 'Calculator',
    title: {
      ar: 'حصر الكميات والمقايسات',
      en: 'Quantity Surveying & Costing',
    },
    shortDesc: {
      ar: 'إعداد حصر دقيق للكميات وتقديرات التكاليف لدعم التخطيط المالي للمشروعات.',
      en: 'Preparing accurate quantity takeoff and detailed cost estimations to support sound project financial planning.',
    },
    features: {
      ar: [
        'حصر كميات الخرسانات وحديد التسليح والمباني',
        'إعداد دفاتر المقايسات وبنود الأعمال التفصيلية',
        'تقدير الميزانيات التقديرية للحد من الهدر المالي'
      ],
      en: [
        'Comprehensive concrete, rebar & masonry takeoffs',
        'Bill of Quantities (BOQ) preparation',
        'Cost estimation to prevent financial waste'
      ]
    },
    image: quantityImg,
  },
  {
    id: 'project-management',
    iconName: 'ClipboardCheck',
    title: {
      ar: 'إدارة المشروعات',
      en: 'Project Management',
    },
    shortDesc: {
      ar: 'تنظيم ومتابعة مراحل المشروع والتنسيق بين الأعمال المختلفة لتحقيق أفضل سير للعمل.',
      en: 'Organizing and tracking project milestones with multi-trade coordination for smooth operational workflow.',
    },
    features: {
      ar: [
        'جدولة المراحل الزمنية للتنفيذ',
        'متابعة تدفق التوريدات ومسار الأعمال',
        'إدارة المخاطر وتجنب التعطل أثناء العمل'
      ],
      en: [
        'Timeline & milestone scheduling',
        'Material procurement flow tracking',
        'Proactive risk mitigation during execution'
      ]
    },
    image: managementImg,
  },
  {
    id: 'finishing-renovation',
    iconName: 'Hammer',
    title: {
      ar: 'أعمال التشطيبات والترميم',
      en: 'Finishing & Renovation',
    },
    shortDesc: {
      ar: 'تقديم حلول لأعمال التشطيبات والتطوير والترميم وفقًا لطبيعة ومتطلبات كل مشروع.',
      en: 'Delivering tailored engineering solutions for architectural finishing, structural rehabilitation, and upgrades.',
    },
    features: {
      ar: [
        'فحص المنشآت ودراسة شروخ وعيوب الخرسانة',
        'تحديد أساليب الترميم والتدعيم المناسبة',
        'إشراف هندسي على بنود التشطيبات المعمارية'
      ],
      en: [
        'Structural inspection & crack diagnostic evaluation',
        'Targeted concrete reinforcement & repair methods',
        'Engineering oversight for architectural finishing'
      ]
    },
    image: finishingImg,
  },
];
