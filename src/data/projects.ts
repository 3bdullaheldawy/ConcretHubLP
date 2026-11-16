import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.jpg';
import project3 from '../assets/images/project-3.jpg';
import project4 from '../assets/images/project-4.jpg';
import project5 from '../assets/images/project-5.jpg';
import project6 from '../assets/images/project-6.jpg';
import structuralImg from '../assets/images/structural.jpg';
import architecturalImg from '../assets/images/architectural.jpg';
import supervisionImg from '../assets/images/supervision.jpg';
import finishingImg from '../assets/images/finishing.jpg';

export interface ProjectSpec {
  label: { ar: string; en: string };
  value: { ar: string; en: string };
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: {
    ar: string;
    en: string;
  };
  category: {
    ar: string;
    en: string;
  };
  categorySlug: 'commercial' | 'residential' | 'structural' | 'facade' | 'finishing';
  location: {
    ar: string;
    en: string;
  };
  shortDesc: {
    ar: string;
    en: string;
  };
  overview: {
    ar: string;
    en: string;
  };
  detailedStory: {
    ar: string[];
    en: string[];
  };
  scopeOfWork: {
    ar: string[];
    en: string[];
  };
  specs: ProjectSpec[];
  coverImage: string;
  gallery: string[];
  isIllustrativePlaceholder: boolean;
}

/**
 * Concrete Hub Project Portfolio Data
 * Centralized data store driving both listing and individual dynamic project detail pages.
 * 
 * Note: Visuals represent illustrative conceptual models and engineering scopes.
 * Real completed Concrete Hub projects will be added as data is confirmed.
 */
export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    slug: 'commercial-administrative-tower',
    title: {
      ar: 'تصميم مجمع تجاري وإداري متكامل',
      en: 'Commercial & Administrative Complex Design',
    },
    category: {
      ar: 'تصميم إنشائي ومعماري',
      en: 'Structural & Architectural Design',
    },
    categorySlug: 'commercial',
    location: {
      ar: 'محافظة سوهاج، مصر (نموذج استرشادي)',
      en: 'Sohag Governorate, Egypt (Illustrative Model)',
    },
    shortDesc: {
      ar: 'دراسات إنشائية وتصميم هياكل خرسانية للمنشآت متعددة الأدوار مع توفير بحور واسعة ومساحات عمل مفتوحة.',
      en: 'Structural engineering and reinforced concrete designs for multi-story buildings with wide spans.',
    },
    overview: {
      ar: 'يقدم هذا النموذج الهندسي تصورًا إنشائيًا متطورًا لمبنى إداري وتجاري متعدد الطوابق، يجمع بين متانة الهيكل الخرساني والحلول الإنشائية المرنة التي تسمح باستغلال أمثل للمساحات التأجيرية والمكاتب دون عوائق إنشائية كثيفة.',
      en: 'This engineering case demonstrates advanced structural analysis for a multi-level commercial hub, optimizing reinforced concrete frames for maximum column-free floor areas.',
    },
    detailedStory: {
      ar: [
        'اعتمدت الدراسة الإنشائية على نظام الإطارات الخرسانية المقاومة للزلازل والرياح وفق الكود المصري للأحمال، مع تصميم أسقف بنظام البلاطات المسطحة (Flat Slab) لتسهيل مرور التمديدات الكهروميكانيكية.',
        'تم تدقيق توزيع الأعمدة بعناية لتتناسب مع متطلبات مواقف السيارات السفلية والأدوار التجارية المفتوحة، مع تقليل الهدر في حديد التسليح عبر حسابات عزم الانحناء الدقيقة.',
        'تضمنت مخرجات المشروع مخططات تنفيذية شاملة (Shop Drawings) ونوتة حسابية معتمدة وجداول تفصيلية لحصر كميات الخرسانة وحديد التسليح.'
      ],
      en: [
        'The structural study relied on seismic and wind-resistant concrete frames adhering to the Egyptian Building Code, utilizing flat-slab floor systems for flexible MEP routing.',
        'Column layout was meticulously coordinated to accommodate basement parking and open commercial layouts while minimizing rebar wastage through precise moment calculations.',
        'Deliverables encompassed comprehensive executive shop drawings, certified calculation notes, and accurate BOQ takeoff sheets.'
      ]
    },
    scopeOfWork: {
      ar: [
        'النمذجة والتحليل الإنشائي ثلاثي الأبعاد بالأكواد الهندسية',
        'تصميم الأساسات العميقة واللبشة المسلحة مع فحص تفاعل التربة',
        'إعداد اللوحات التنفيذية وتفاصيل التسليح لجميع العناصر الإنشائية',
        'حصر كميات الخرسانات وحديد التسليح وإعداد مقايسة بنود الأعمال'
      ],
      en: [
        '3D Structural modeling and finite element load simulation',
        'Raft foundation design with soil-structure interaction analysis',
        'Preparation of full executive blueprints and rebar schedules',
        'Detailed quantity takeoff for concrete and steel reinforcement'
      ]
    },
    specs: [
      { label: { ar: 'نوع المنشأ', en: 'Building Type' }, value: { ar: 'خرساني هيكلي متطور', en: 'Advanced Reinforced Concrete Frame' } },
      { label: { ar: 'نظام الأسقف', en: 'Slab System' }, value: { ar: 'بلاطات مسطحة (Flat Slab)', en: 'Flat Slab with Drop Panels' } },
      { label: { ar: 'الكود المعتمد', en: 'Applicable Code' }, value: { ar: 'الكود المصري لتصميم الخرسانة', en: 'Egyptian Concrete Code (ECP)' } },
      { label: { ar: 'نطاق الهندسة', en: 'Engineering Scope' }, value: { ar: 'تصميم إنشائي + حصر كميات', en: 'Structural Design + BOQ' } }
    ],
    coverImage: project1,
    gallery: [project1, structuralImg, supervisionImg],
    isIllustrativePlaceholder: true,
  },
  {
    id: 'proj-2',
    slug: 'modern-residential-villa',
    title: {
      ar: 'تصميم وإشراف فيلا سكنية عصرية',
      en: 'Modern Residential Villa Design & Supervision',
    },
    category: {
      ar: 'تصميم معماري وإنشائي وإشراف',
      en: 'Architectural, Structural & Supervision',
    },
    categorySlug: 'residential',
    location: {
      ar: 'سوهاج الجديدة، مصر (نموذج استرشادي)',
      en: 'New Sohag, Egypt (Illustrative Model)',
    },
    shortDesc: {
      ar: 'تخطيط الفراغات السكنية بأسلوب عصري يراعي الخصوصية وكفاءة توزيع المساحات وتصميم الهيكل الإنشائي المريح.',
      en: 'Modern residential planning balancing family privacy, ergonomic space flow, and an optimized structural skeleton.',
    },
    overview: {
      ar: 'نموذج سكني يعكس فلسفة Concrete Hub في الدمج بين الأناقة المعمارية والدقة الإنشائية، حيث تضمن العمل تصميم مخططات معمارية مرنة تستغل الإضاءة الطبيعية مع هيكل خرساني آمن واقتصادي في استهلاك المواد.',
      en: 'A residential model illustrating Concrete Hub’s philosophy of merging architectural elegance with structural safety and economical material consumption.',
    },
    detailedStory: {
      ar: [
        'تم توزيع الفراغات الداخلية لتأمين خصوصية تامة للعائلة، مع فتحات تهوية مدروسة تقلل من استهلاك الطاقة في التكييف والإضاءة.',
        'إنشائيًا، تم اختيار نظام الأسقف المصمتة والمفرغة (Solid & Hollow Core) حسب أبعاد الغرف لتحقيق التوازن بين التكلفة العالية والبحور المطلوبة في صالات الاستقبال الواسعة.',
        'رافق العمل جدول إشراف ميداني لاستلام حديد التسليح ونظافة الشدات الخشبية ومكعبات اختبار الخرسانة قبل وأثناء الصب.'
      ],
      en: [
        'Internal layouts were crafted for complete family privacy with climate-responsive openings reducing HVAC loads.',
        'Structurally, an optimal mix of solid and hollow-block slabs was chosen to accommodate expansive reception spans cost-effectively.',
        'A comprehensive field inspection schedule verified rebar ties, formwork cleanliness, and concrete test cylinder procedures.'
      ]
    },
    scopeOfWork: {
      ar: [
        'التصميم المعماري وتوزيع الفراغات وواجهات الفيلا',
        'التصميم الإنشائي الكامل للأساسات والأعمدة والأسقف',
        'إشراف هندسي مرحلي على صب القواعد والأعمدة والأسقف',
        'مراجعة مطابقة التنفيذ مع الاشتراطات واللوائح الهندسية'
      ],
      en: [
        'Architectural layout, spatial zoning, and facade design',
        'Complete structural design for foundations, columns, and slabs',
        'Phase supervision on footings, vertical columns, and roof pours',
        'Technical compliance audits against building codes'
      ]
    },
    specs: [
      { label: { ar: 'نمط المبنى', en: 'Villa Type' }, value: { ar: 'سكني فاخر طابقين + روف', en: 'Two-Story Villa + Rooftop' } },
      { label: { ar: 'نوع الأساسات', en: 'Foundations' }, value: { ar: 'قواعد منفصلة وميد رابطة', en: 'Isolated Footings & Tie Beams' } },
      { label: { ar: 'الإشراف', en: 'Supervision' }, value: { ar: 'إشراف هندسي دوري معتمد', en: 'Certified Periodic Supervision' } },
      { label: { ar: 'الموقع المقترح', en: 'Location Context' }, value: { ar: 'سوهاج، مصر', en: 'Sohag, Egypt' } }
    ],
    coverImage: project2,
    gallery: [project2, architecturalImg, project4],
    isIllustrativePlaceholder: true,
  },
  {
    id: 'proj-3',
    slug: 'foundation-structural-engineering',
    title: {
      ar: 'هندسة الأساسات العميقة وتدعيم التربة',
      en: 'Deep Foundation & Soil Interaction Engineering',
    },
    category: {
      ar: 'هندسة إنشائية وجيوتقنية',
      en: 'Structural & Geotechnical Engineering',
    },
    categorySlug: 'structural',
    location: {
      ar: 'محافظة سوهاج، مصر (تطبيق تخصصي)',
      en: 'Sohag Governorate, Egypt (Specialized Case)',
    },
    shortDesc: {
      ar: 'حسابات وتصميم الأساسات واللبشات والقواعد المشتركة مع دراسة تفاعل التربة والمنشأ بأعلى درجات الأمان الإنشائي.',
      en: 'Calculations and engineering design of raft and combined footings with soil-structure interaction analysis.',
    },
    overview: {
      ar: 'تعد دراسة الأساسات الركيزة الأساسية لأي مبنى ناجح. يبرز هذا التخصص قدرة Concrete Hub على التعامل مع طبيعة التربة المتغيرة في صعيد مصر وتقديم حلول أساسات مستقرة تمنع الهبوط غير المتماثل.',
      en: 'Foundation design is the bedrock of engineering longevity. This domain demonstrates Concrete Hub’s proficiency in soil dynamics and differential settlement prevention in Upper Egypt.',
    },
    detailedStory: {
      ar: [
        'تضمنت الحسابات فحص تقارير الجسات الجيوتقنية لتحديد قدرة التحمل الصافية للتربة ومنسوب المياه الجوفية وطبقات الإحلال المناسبة.',
        'تمت نمذجة اللبشة الخرسانية المسلحة باستخدام برامج العناصر المحدودة لحساب قوى القص الثاقب (Punching Shear) وعزوم الانحناء تحت الأعمدة بدقة بالغة.',
        'توفير تفاصيل العزل المائي للخرسانة لحماية حديد التسليح من التآكل والرطوبة على المدى الطويل.'
      ],
      en: [
        'Calculations incorporated soil bore-hole data to ascertain safe net bearing capacity, groundwater levels, and replacement fill depths.',
        'The reinforced concrete raft was modeled using finite element software to analyze punching shear and flexural moments beneath column clusters.',
        'Substructure waterproofing specifications were developed to safeguard rebar against corrosion and subterranean moisture.'
      ]
    },
    scopeOfWork: {
      ar: [
        'تحليل تقارير أبحاث التربة وحساب معاملات رد فعل التأسيس',
        'تصميم اللبشات المسلحة والقواعد المشتركة وشبكات الميد',
        'مخططات دقيقة لحديد التسليح والكراسي والفواصل الإنشائية',
        'مواصفات العزل المائي والمواد الخرسانية المقاومة للأملاح'
      ],
      en: [
        'Geotechnical report analysis and subgrade reaction modulus calculation',
        'Raft, combined footing, and grade-beam structural design',
        'Detailed rebar chair, lap splice, and expansion joint schematics',
        'Waterproofing specs and sulfate-resistant concrete formulations'
      ]
    },
    specs: [
      { label: { ar: 'نظام التأسيس', en: 'Foundation Type' }, value: { ar: 'لبشة خرسانية مسلحة (Raft)', en: 'Reinforced Concrete Raft' } },
      { label: { ar: 'مقاومة الخرسانة', en: 'Concrete Grade' }, value: { ar: 'Fcu = 350 kg/cm²', en: 'C30/35 High Performance' } },
      { label: { ar: 'نوع الحديد', en: 'Steel Reinforcement' }, value: { ar: 'حديد عالي المقاومة B500D', en: 'High-Yield Deformed B500D' } },
      { label: { ar: 'مجال التخصص', en: 'Discipline' }, value: { ar: 'هندسة مدنية إنشائية', en: 'Civil Structural Engineering' } }
    ],
    coverImage: project3,
    gallery: [project3, structuralImg, supervisionImg],
    isIllustrativePlaceholder: true,
  },
  {
    id: 'proj-4',
    slug: 'residential-multi-story-building',
    title: {
      ar: 'عمارة سكنية متعددة الطوابق وحصر كميات',
      en: 'Multi-Story Residential Building & BOQ',
    },
    category: {
      ar: 'تصميم إنشائي وحصر كميات',
      en: 'Structural Design & BOQ',
    },
    categorySlug: 'residential',
    location: {
      ar: 'مدينة سوهاج، مصر (نموذج استرشادي)',
      en: 'Sohag City, Egypt (Illustrative Model)',
    },
    shortDesc: {
      ar: 'إعداد مقايسات تفصيلية وضبط كميات مواد البناء ومتابعة مراحل صب الخرسانة وتوزيع الأحمال الإنشائية.',
      en: 'Detailed material quantification, concrete pouring verification, and structural load monitoring.',
    },
    overview: {
      ar: 'يمثل هذا النموذج السكني المنتشر في المدن المصرية التوازن المطلوب بين استغلال كامل المساحة المسموح بها قانونًا وتوفير هيكل إنشائي اقتصادي وسريع التنفيذ يحقق أقصى ربحية وأمان.',
      en: 'A representative urban residential project balancing legal envelope utilization with an economical, rapidly constructible reinforced concrete skeleton.',
    },
    detailedStory: {
      ar: [
        'تم تصميم الأعمدة مع تغيير قطاعاتها تدريجيًا كل طابقين لتوفير الخرسانة والحديد دون الإخلال بحدود الأمان ومعاملات النحافة (Slenderness Ratio).',
        'أعد المكتب دفتر حصر هندسي تفصيلي لبنود الحفر والخرسانة العادية والمسلحة والمباني، مما مكن المالك من التخطيط المالي المحكم ومقارنة عروض المقاولين بشفافية.',
        'متابعة أعمال استلام نجارة وحديد الأسقف لضمان استقامة الكمرات وسلامة التغطية الخرسانية (Concrete Cover).'
      ],
      en: [
        'Columns were engineered with step-down sections every two floors to optimize material quantities within safe slenderness boundaries.',
        'A comprehensive engineering BOQ was drafted covering excavation, plain and reinforced concrete, and masonry, empowering transparent contractor bidding.',
        'On-site shuttering and rebar inspections ensured straight beam alignment and adequate concrete cover.'
      ]
    },
    scopeOfWork: {
      ar: [
        'التصميم الإنشائي الكامل للأدوار السكنية المتكررة',
        'إعداد دفتر حصر كميات دقيق ومقايسة مسعرة تقديرية',
        'مخططات تفصيلية لتوزيع الأعمدة وجداول قطاعات التسليح',
        'استشارات التعاقد مع المقاولين ومراجعة مستخلصات التنفيذ'
      ],
      en: [
        'Full structural design for typical multi-residential floors',
        'Preparation of certified quantity takeoff and pricing estimate',
        'Detailed column schedule and rebar layout drawings',
        'Contractor advisory and progress billing audits'
      ]
    },
    specs: [
      { label: { ar: 'عدد الطوابق', en: 'Floor Count' }, value: { ar: 'أرضي + 5 طوابق متكررة', en: 'Ground + 5 Typical Floors' } },
      { label: { ar: 'مساحة المسطح', en: 'Footprint Area' }, value: { ar: '350 م² تقريبًا', en: 'Approx. 350 m²' } },
      { label: { ar: 'الحصر المالي', en: 'Costing' }, value: { ar: 'مقايسة تفصيلية متكاملة', en: 'Detailed BOQ Provided' } },
      { label: { ar: 'الإشراف', en: 'Oversight' }, value: { ar: 'إشراف استلام مرحلي', en: 'Milestone Inspection' } }
    ],
    coverImage: project4,
    gallery: [project4, project1, supervisionImg],
    isIllustrativePlaceholder: true,
  },
  {
    id: 'proj-5',
    slug: 'engineered-facade-revamp',
    title: {
      ar: 'تصميم الواجهات المعمارية والحلول الإنشائية',
      en: 'Engineered Facade Design & Structural Details',
    },
    category: {
      ar: 'تصميم واجهات وتطوير معماري',
      en: 'Facade Design & Development',
    },
    categorySlug: 'facade',
    location: {
      ar: 'محافظة سوهاج، مصر (نموذج استرشادي)',
      en: 'Sohag Governorate, Egypt (Illustrative Model)',
    },
    shortDesc: {
      ar: 'حلول معمارية وإنشائية لمعالجة الواجهات الخارجية وإعادة إبراز الهوية الجمالية للمباني بأسلوب عصري.',
      en: 'Integrated architectural and structural solutions revitalizing building exterior identities with contemporary elegance.',
    },
    overview: {
      ar: 'تطوير الواجهات لا يقتصر على الشكل الجمالي فقط، بل يتطلب حلولًا إنشائية لتثبيت الكتل البارزة والبروزات الديكورية (Cantilevers) بأمان تام ومقاومة عوامل الطقس الحار.',
      en: 'Facade transformation marries aesthetics with engineering safety, calculating anchorage and cantilever loads for exterior architectural elements under harsh climate conditions.',
    },
    detailedStory: {
      ar: [
        'تم تصميم عناصر الواجهة لتوفير كواسر شمس طبيعية تخفف من وهج الشمس الصعيدية وتضفي طابعًا معماريًا مميزًا.',
        'حساب الأحمال الإضافية للألواح والبروزات على الهيكل الإنشائي القائم والتأكد من عدم توليد عزوم التواء غير محسوبة على كمرات الواجهة.',
        'اختيار مواد تشطيب متينة ومقاومة للأتربة والحرارة العالية مع تفاصيل تثبيت ميكانيكية آمنة.'
      ],
      en: [
        'Facade louvers and shading elements were positioned to mitigate solar radiation while creating a distinct sculptural rhythm.',
        'Additional cladding loads on perimeter beams were evaluated to prevent unwanted torsional moments.',
        'Durable, dust-resistant exterior finishes with certified mechanical anchor systems were specified.'
      ]
    },
    scopeOfWork: {
      ar: [
        'تصميم واجهات معمارية ثلاثية الأبعاد متناسقة مع طبيعة المنشأة',
        'حسابات تثبيت البروزات والألواح والكتل المعمارية إنشائيًا',
        'مخططات تفصيلية لشاسيهات التثبيت المعدنية ونقاط التثبيت',
        'اختيار خامات التشطيب الخارجية المناسبة لمناخ سوهاج'
      ],
      en: [
        '3D architectural facade design reflecting brand identity',
        'Structural calculations for cantilevers and cladding anchors',
        'Detailed framing shop drawings and anchor point layouts',
        'Climate-appropriate exterior material selection'
      ]
    },
    specs: [
      { label: { ar: 'نوع الواجهة', en: 'Facade Type' }, value: { ar: 'معمارية حديثة مع كواسر شمس', en: 'Modern Architectural with Solar Louvers' } },
      { label: { ar: 'نظام التثبيت', en: 'Fixing System' }, value: { ar: 'تثبيت ميكانيكي هندسي', en: 'Engineered Mechanical Anchorage' } },
      { label: { ar: 'مقاومة الطقس', en: 'Weather Resistance' }, value: { ar: 'عالية التحمل للحرارة والأتربة', en: 'High Thermal & UV Resistance' } },
      { label: { ar: 'الجهة المصممة', en: 'Engineering' }, value: { ar: 'Concrete Hub سوهاج', en: 'Concrete Hub Sohag' } }
    ],
    coverImage: project5,
    gallery: [project5, architecturalImg, project2],
    isIllustrativePlaceholder: true,
  },
  {
    id: 'proj-6',
    slug: 'architectural-finishing-supervision',
    title: {
      ar: 'إشراف على التشطيبات المعمارية الدقيقة',
      en: 'Architectural Finishing & Detailing Oversight',
    },
    category: {
      ar: 'إشراف وتنفيذ تشطيبات',
      en: 'Finishing Supervision & Detailing',
    },
    categorySlug: 'finishing',
    location: {
      ar: 'سوهاج، مصر (نموذج تطبيقي)',
      en: 'Sohag, Egypt (Applied Scope)',
    },
    shortDesc: {
      ar: 'إشراف هندسي على تفاصيل التشطيبات وتنسيق تمديدات الخدمات وفق أسس هندسية منتظمة تمنع العيوب.',
      en: 'Engineering supervision of interior architectural finishes and MEP coordination preventing execution defects.',
    },
    overview: {
      ar: 'التشطيبات الهندسية المحترفة تحمي المنشأ وتبرز جمال التصميم. يركز هذا النطاق على ضبط جودة بنود البياض والعزل والأرضيات والكهرباء والسباكة قبل الإغلاق النهائي.',
      en: 'Engineering-grade finishing safeguards structural integrity and showcases architectural quality. This scope audits MEP roughed-in systems, waterproofing, and screeds prior to final handover.',
    },
    detailedStory: {
      ar: [
        'مراجعة واستلام أعمال العزل المائي للحمامات والمطابخ والأسطح وإجراء اختبارات الغمر بالمياه لمدة 48 ساعة.',
        'ضبط مستويات الشيرب (Datum Level) في كامل المبنى لضمان استواء البلاط والأرضيات وتجنب أي ميول عشوائية.',
        'تنسيق مسارات التكييف والكهرباء والسباكة لتجنب تكسير الخرسانات أو الإضرار بالعناصر الإنشائية الحاملة.'
      ],
      en: [
        'Waterproofing inspection for wet areas and roofs with mandatory 48-hour flood testing.',
        'Precise datum level calibration across all rooms ensuring consistent floor slopes and door alignments.',
        'MEP service route coordination to eliminate chasing into load-bearing concrete members.'
      ]
    },
    scopeOfWork: {
      ar: [
        'وضع جدول مواصفات التشطيبات ومراجعة العينات',
        'استلام أعمال العزل المائي والحراري بالاختبارات المعتمدة',
        'إشراف هندسي دقيق على بنود السباكة والكهرباء وتأسيس التكييف',
        'استلام أعمال اللياسة والدهانات والأرضيات بميزان القامة والليزر'
      ],
      en: [
        'Finishing specification schedules and material sample vetting',
        'Thermal and moisture protection testing and handover',
        'Detailed engineering inspection for MEP rough-ins',
        'Laser and optical level checks for plaster, paint, and tiling'
      ]
    },
    specs: [
      { label: { ar: 'مستوى التشطيب', en: 'Finishing Grade' }, value: { ar: 'تشطيب هندسي فاخر عالي الدقة', en: 'Precision Architectural Grade' } },
      { label: { ar: 'اختبارات العزل', en: 'Testing' }, value: { ar: 'اختبار غمر 48 ساعة معتمد', en: 'Certified 48-hr Flood Test' } },
      { label: { ar: 'التنسيق الكهروميكانيكي', en: 'MEP Coordination' }, value: { ar: 'مطابقة تامة دون تكسير خرساني', en: 'No Concrete Structural Chasing' } },
      { label: { ar: 'المكتب المشرف', en: 'Supervising Office' }, value: { ar: 'Concrete Hub المهندس حازم المزلاوي', en: 'Concrete Hub - Eng. Hazem' } }
    ],
    coverImage: project6,
    gallery: [project6, finishingImg, project5],
    isIllustrativePlaceholder: true,
  },
];
