import { asset } from "@/lib/basePath";

export interface Project {
  slug: string;
  client: string;
  event: string;
  title: string;
  image: string;
  size: string;
  tags: string[];
  tags_ar?: string[];
  location: string;
  overview: string;
  challenge: string;
  solution: string;
  features: { title: string; description: string }[];
  results: string[];
  stats: { value: number; suffix?: string; label: string }[];
  gallery: string[];
  overview_ar?: string;
  challenge_ar?: string;
  solution_ar?: string;
  features_ar?: { title: string; description: string }[];
  results_ar?: string[];
}

export const projects: Project[] = [
  {
    slug: "microsoft-leap",
    client: "Microsoft",
    event: "LEAP",
    title: "Microsoft LEAP",
    image: asset("/assets/photos/microsoft-leap.jpg"),
    size: "700 sqm",
    tags: ["Double Decker", "Custom Build"],
    tags_ar: ["جناح مزدوج الطوابق", "بناء مخصص"],
    location: "Riyadh, Saudi Arabia",
    overview:
      "A 700 sqm double-decker stand that gave Microsoft a commanding two-level presence at LEAP — Saudi Arabia's largest tech event. The build housed live product demos, executive meeting suites, and a keynote theatre, turning a floor plot into a destination.",
    challenge:
      "Delivering a fully compliant two-storey structure within a 10-day venue access window, while meeting Saudi Civil Defence load and fire safety requirements for upper-deck occupancy. The upper deck needed to support meeting rooms, a hospitality lounge, and continuous foot traffic without any structural compromise. Coordinating AV, lighting, and HVAC across two levels required a power distribution plan that could handle peak demo loads without interruption.",
    solution:
      "The superstructure was pre-fabricated in our Dubai workshop and shipped flat-pack to Riyadh, cutting on-site assembly time in half. A 63A three-phase power distribution system isolated AV, lighting, and HVAC on dedicated circuits to prevent brownouts during peak demo hours. The result: a structure that performed like a permanent installation but was built, used, and dismantled in under three weeks.",
    features: [
      {
        title: "Double-Decker Superstructure",
        description:
          "Steel-framed two-storey build engineered for 350 kg/sqm upper-deck loading — strong enough for meeting rooms, a hospitality lounge, and full foot traffic.",
      },
      {
        title: "320 sqm Printed Graphics",
        description:
          "Modular tension-fabric lightboxes and direct-print panels on flame-retardant substrates, designed for rapid swap-out between event phases.",
      },
      {
        title: "63A Power Distribution",
        description:
          "Three-phase electrical system with isolated circuits for AV, lighting, and climate control — zero brownouts across four days of continuous demos.",
      },
    ],
    results: [
      "Installation completed one day ahead of schedule with a 35-person crew",
      "Zero safety incidents across build, show, and dismantle phases",
      "Over 8,000 visitor interactions logged across the 4-day event",
      "Client signed the next edition's contract before the show closed",
    ],
    stats: [
      { value: 700, suffix: " sqm", label: "Stand Footprint" },
      { value: 35, label: "Installation Crew" },
      { value: 10, suffix: " days", label: "Build Time" },
    ],
    overview_ar:
      "جناح مزدوج الطوابق بمساحة 700 م² منح Microsoft حضوراً مهيمناً على مستويين في LEAP — أكبر حدث تقني في السعودية. استوعب الجناح عروضاً حية للمنتجات وأجنحة اجتماعات تنفيذية ومسرحاً للكلمات الرئيسية، محوّلاً مساحة عرض إلى وجهة بحد ذاتها.",
    challenge_ar:
      "تسليم هيكل من طابقين متوافق بالكامل مع اشتراطات الدفاع المدني السعودي خلال فترة دخول للموقع لا تتجاوز 10 أيام، مع ضمان تحمّل السطح العلوي لغرف الاجتماعات وصالة الضيافة وحركة الزوار المستمرة. تطلّب تنسيق التجهيزات السمعية البصرية والإضاءة والتكييف على مستويين خطة توزيع كهربائي قادرة على تحمّل ذروة التشغيل بلا انقطاع.",
    solution_ar:
      "تم تصنيع الهيكل مسبقاً في ورشتنا بدبي وشُحن مفككاً إلى الرياض، مما قلّص وقت التجميع في الموقع إلى النصف. نظام توزيع كهربائي ثلاثي الأطوار بقدرة 63A فصل التجهيزات السمعية البصرية والإضاءة والتكييف على دوائر مستقلة لمنع أي انخفاض في الجهد أثناء ذروة العروض. النتيجة: هيكل يعمل كمنشأة دائمة لكنه بُني واستُخدم وفُكك في أقل من ثلاثة أسابيع.",
    features_ar: [
      {
        title: "هيكل مزدوج الطوابق",
        description:
          "بناء من طابقين بإطار فولاذي مصمم لتحمّل 350 كجم/م² على السطح العلوي — قوي بما يكفي لغرف الاجتماعات وصالة الضيافة وحركة الزوار الكاملة.",
      },
      {
        title: "رسومات مطبوعة بمساحة 320 م²",
        description:
          "صناديق ضوئية بأقمشة مشدودة ولوحات طباعة مباشرة على أسطح مقاومة للحريق، مصممة للاستبدال السريع بين مراحل الفعالية.",
      },
      {
        title: "توزيع كهربائي 63A",
        description:
          "نظام كهربائي ثلاثي الأطوار بدوائر مستقلة للتجهيزات السمعية البصرية والإضاءة والتكييف — صفر انقطاع طوال أربعة أيام من العروض المتواصلة.",
      },
    ],
    results_ar: [
      "اكتمل التركيب قبل الموعد بيوم كامل بفريق من 35 فنياً",
      "صفر حوادث سلامة خلال مراحل البناء والعرض والتفكيك",
      "أكثر من 8,000 تفاعل مع الزوار خلال أيام الفعالية الأربعة",
      "العميل وقّع عقد النسخة التالية قبل انتهاء المعرض",
    ],
    gallery: [
      asset("/assets/photos/gallery/microsoft-IMG_3408.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3410.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3412.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3413.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3414.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3415.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3416.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3419.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3422.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3424.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3425.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3427.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3430.jpg"),
      asset("/assets/photos/gallery/microsoft-IMG_3433.jpg"),
      asset("/assets/photos/gallery/microsoft-AAA00001.jpg"),
      asset("/assets/photos/gallery/microsoft-AAA00052.jpg"),
      asset("/assets/photos/gallery/microsoft-floorplan-1.jpg"),
    ],
  },
  {
    slug: "absolut-skandic-light-show",
    client: "Absolut Skandic",
    event: "Light Show 2025",
    title: "Absolut Skandic Light Show",
    image: asset("/assets/photos/gallery/absolut-skandic-1.jpg"),
    size: "36 sqm",
    tags: ["Custom Build", "Premium Finish", "Product Showcase"],
    tags_ar: ["بناء مخصص", "تشطيب فاخر", "عرض منتجات"],
    location: "Dubai, UAE",
    overview:
      "A 36 sqm custom-built stand for Absolut Skandic at Light Show 2025, designed to function as a fully immersive lighting showroom on the exhibition floor. The stand combined warm natural materials with precision-engineered product displays, giving buyers a real-world sense of how each fixture performs in architectural settings.",
    challenge:
      "Creating a showroom-quality lighting experience within a compact 36 sqm trade show footprint — where ambient hall lighting and neighbouring stands constantly compete for attention. Every fixture needed to be seen under controlled conditions, not washed out by overhead fluorescents.",
    solution:
      "The design placed the product at the centre of every decision. A full-height wooden slat feature wall with concealed blue LED uplighting served as the visual anchor, drawing visitors from the aisle while demonstrating colour-wash capability in real time. Pendant light displays were suspended at varied heights across the stand, turning the ceiling plane into a working product catalogue. A lounge meeting zone and reception desk with branded signage completed the layout, giving the sales team dedicated spaces for every stage of the conversation — from casual browse to formal specification.",
    features: [
      {
        title: "Wooden Slat Feature Wall with LED Uplighting",
        description:
          "Floor-to-ceiling timber slat wall with concealed blue LED channels — a signature backdrop that demonstrated colour-wash lighting in a real architectural context.",
      },
      {
        title: "Pendant Light Product Display",
        description:
          "Multiple pendant fixtures suspended at staggered heights across the stand, creating a working showroom ceiling that let buyers evaluate each product in situ.",
      },
      {
        title: "Lounge Meeting Zone",
        description:
          "Furnished seating area with a meeting table, positioned away from foot traffic — purpose-built for specification discussions and project briefings.",
      },
      {
        title: "Reception Desk with Branded Signage",
        description:
          "Concrete-effect reception counter with illuminated brand graphics, serving as the first touchpoint and visitor registration hub.",
      },
    ],
    results: [
      "Stand footfall exceeded client projections by 35% across both show days",
      "18 specification meetings hosted with architects and lighting consultants",
      "Product display format adopted by the client for their permanent showroom refresh",
      "Contract renewed for Light Show 2026 within two weeks of event close",
    ],
    stats: [
      { value: 36, suffix: " sqm", label: "Stand Footprint" },
      { value: 12, label: "Products Displayed" },
      { value: 18, label: "Meetings Hosted" },
      { value: 4, suffix: " days", label: "Build Time" },
    ],
    overview_ar:
      "جناح مخصص بمساحة 36 م² لـ Absolut Skandic في Light Show 2025، صُمم ليعمل كصالة عرض إضاءة غامرة بالكامل في أرض المعرض. الجناح جمع بين مواد طبيعية دافئة وعروض منتجات مصممة بدقة، مانحاً المشترين تصوراً واقعياً لأداء كل وحدة إضاءة في بيئات معمارية حقيقية.",
    challenge_ar:
      "ابتكار تجربة صالة عرض إضاءة بجودة احترافية ضمن مساحة معرض مدمجة تبلغ 36 م² — حيث إضاءة القاعة المحيطة والأجنحة المجاورة تتنافس باستمرار على الانتباه. كل وحدة إضاءة كانت بحاجة لأن تُرى في ظروف متحكم بها، لا أن تضيع وسط الإنارة الفلورية العلوية.",
    solution_ar:
      "وضع التصميم المنتج في صميم كل قرار. جدار شرائح خشبية بالارتفاع الكامل مع إضاءة LED زرقاء سفلية مخفية شكّل المحور البصري، يجذب الزوار من الممر ويعرض قدرة الإضاءة اللونية في الوقت الفعلي. وحدات إضاءة معلقة بارتفاعات متفاوتة عبر الجناح حوّلت مستوى السقف إلى كتالوج منتجات عملي. منطقة جلوس للاجتماعات ومكتب استقبال بلافتات مميزة أكملا التخطيط، مانحَين فريق المبيعات مساحات مخصصة لكل مرحلة من الحوار — من التصفح العابر إلى المواصفات الرسمية.",
    features_ar: [
      {
        title: "جدار شرائح خشبية بإضاءة LED سفلية",
        description:
          "جدار شرائح خشبية من الأرض للسقف بقنوات LED زرقاء مخفية — خلفية مميزة عرضت إضاءة الغسل اللوني في سياق معماري حقيقي.",
      },
      {
        title: "عرض منتجات الإضاءة المعلقة",
        description:
          "وحدات إضاءة معلقة متعددة بارتفاعات متدرجة عبر الجناح، أنشأت سقف صالة عرض عملي يتيح للمشترين تقييم كل منتج في موقعه.",
      },
      {
        title: "منطقة جلوس للاجتماعات",
        description:
          "منطقة جلوس مؤثثة بطاولة اجتماعات، بعيدة عن حركة المرور — مصممة لمناقشات المواصفات وإحاطات المشاريع.",
      },
      {
        title: "مكتب استقبال بلافتات مميزة",
        description:
          "كاونتر استقبال بمظهر الخرسانة ورسومات علامة تجارية مضيئة، يشكّل نقطة التواصل الأولى ومركز تسجيل الزوار.",
      },
    ],
    results_ar: [
      "حركة الزوار تجاوزت توقعات العميل بنسبة 35% خلال يومي المعرض",
      "18 اجتماع مواصفات مع مهندسين معماريين واستشاريي إضاءة",
      "تنسيق عرض المنتجات اعتمده العميل لتجديد صالة عرضه الدائمة",
      "تجديد العقد لـ Light Show 2026 خلال أسبوعين من انتهاء الفعالية",
    ],
    gallery: [
      asset("/assets/photos/gallery/absolut-skandic-1.jpg"),
      asset("/assets/photos/gallery/absolut-skandic-2.jpg"),
      asset("/assets/photos/gallery/absolut-skandic-3.jpg"),
      asset("/assets/photos/gallery/absolut-skandic-4.jpg"),
      asset("/assets/photos/gallery/absolut-skandic-5.jpg"),
      asset("/assets/photos/gallery/absolut-skandic-6.jpg"),
    ],
  },
  {
    slug: "nespresso-creatista",
    client: "Nespresso",
    event: "CreatistaPlus Launch",
    title: "Nespresso CreatistaPlus Launch",
    image: asset("/assets/photos/gallery/nespresso-NES-1239.jpg"),
    size: "1200 sqm",
    tags: ["Event Production", "Premium Launch", "Brand Experience"],
    tags_ar: ["إنتاج فعاليات", "إطلاق فاخر", "تجربة علامة تجارية"],
    location: "Dubai, UAE",
    overview:
      "A 1200 sqm product launch experience for Nespresso's CreatistaPlus, staged at Al Serkal Avenue in Dubai. Five distinct zones — from cocktail bar to keynote theatre — guided 200+ VIP guests, media, and influencers through the brand story without a single wall between them.",
    challenge:
      "Turning a raw warehouse venue into a luxury brand world with five seamless zones across 1200 sqm. The space needed to feel exclusive and polished while allowing natural guest flow — no bottlenecks, no dead zones.",
    solution:
      "Illuminated steel archways replaced traditional walls, defining each zone through light and form while keeping full sightlines across the venue. A brushed-copper cocktail bar and 4-metre floral photo wall served as anchor points that drew guests forward. All lighting ran on a pre-programmed DMX timeline synced to the event runsheet, so every phase — welcome, reveal, tasting, networking — hit its mark without manual intervention.",
    features: [
      {
        title: "Freestanding Architectural Framework",
        description:
          "Black steel archways with integrated LED channels that defined zones through light instead of walls — keeping the space open while giving each area its own identity.",
      },
      {
        title: "Copper-Finish Cocktail Bar",
        description:
          "Custom-fabricated bar with brushed copper finish, built-in refrigeration, and backlit branding — the centrepiece for live barista demonstrations.",
      },
      {
        title: "4-Metre Floral Photo Wall",
        description:
          "Premium floral installation with concealed uplighting, purpose-built to generate shareable social content from every guest.",
      },
      {
        title: "DMX-Synced Event Lighting",
        description:
          "Pre-programmed lighting rig that transitioned automatically between event phases, eliminating manual cues and keeping the show on schedule.",
      },
      {
        title: "CNC Steel Framework",
        description:
          "Precision-cut structural elements supporting large-format installations and suspended features across the full 1200 sqm venue footprint.",
      },
    ],
    results: [
      "200+ VIP guests hosted, including top-tier media and influencers",
      "50+ earned media placements within 48 hours of the event",
      "Photo zone content shared over 2,000 times on social media",
      "Nespresso rebooked the production team for their next regional launch",
    ],
    stats: [
      { value: 1200, suffix: " sqm", label: "Event Footprint" },
      { value: 200, suffix: "+", label: "VIP Guests" },
      { value: 2000, suffix: "+", label: "Social Shares" },
      { value: 50, suffix: "+", label: "Media Placements" },
    ],
    overview_ar:
      "تجربة إطلاق منتج بمساحة 1200 م² لـ Nespresso CreatistaPlus أُقيمت في السركال أفينيو بدبي. خمس مناطق متميزة — من بار الكوكتيل إلى مسرح الكلمات الرئيسية — قادت أكثر من 200 ضيف VIP وإعلاميين ومؤثرين عبر قصة العلامة التجارية دون جدار واحد بينها.",
    challenge_ar:
      "تحويل مستودع خام إلى عالم فاخر للعلامة التجارية بخمس مناطق متصلة عبر 1200 م². المساحة كانت بحاجة لأن تبدو حصرية وراقية مع السماح بتدفق طبيعي للضيوف — بلا اختناقات ولا مناطق ميتة.",
    solution_ar:
      "أقواس فولاذية مضيئة حلّت محل الجدران التقليدية، محددةً كل منطقة بالضوء والشكل مع الحفاظ على خطوط رؤية كاملة عبر المكان. بار بتشطيب نحاسي مصقول وجدار زهور للتصوير بارتفاع 4 أمتار شكّلا نقاط جذب دفعت الضيوف للتقدم. جميع الإضاءة عملت على جدول DMX مبرمج مسبقاً ومتزامن مع جدول الفعالية، فكل مرحلة — الاستقبال والكشف والتذوق والتواصل — أصابت هدفها بلا تدخل يدوي.",
    features_ar: [
      {
        title: "إطار معماري قائم بذاته",
        description:
          "أقواس فولاذية سوداء بقنوات LED مدمجة حددت المناطق بالضوء بدلاً من الجدران — مع الحفاظ على انفتاح المساحة ومنح كل منطقة هويتها الخاصة.",
      },
      {
        title: "بار بتشطيب نحاسي",
        description:
          "بار مصنّع خصيصاً بتشطيب نحاسي مصقول وتبريد مدمج وإضاءة خلفية للعلامة — نقطة الارتكاز لعروض الباريستا الحية.",
      },
      {
        title: "جدار زهور للتصوير بارتفاع 4 أمتار",
        description:
          "تركيب زهري فاخر بإضاءة سفلية مخفية، صُمم خصيصاً لتوليد محتوى قابل للمشاركة من كل ضيف.",
      },
      {
        title: "إضاءة متزامنة عبر DMX",
        description:
          "نظام إضاءة مبرمج مسبقاً ينتقل تلقائياً بين مراحل الفعالية، مما ألغى التنبيهات اليدوية وأبقى العرض في موعده.",
      },
      {
        title: "إطار فولاذي CNC",
        description:
          "عناصر إنشائية مقطوعة بدقة تدعم التركيبات الكبيرة والعناصر المعلقة عبر كامل مساحة المكان البالغة 1200 م².",
      },
    ],
    results_ar: [
      "استضافة أكثر من 200 ضيف VIP بما فيهم كبار الإعلاميين والمؤثرين",
      "أكثر من 50 تغطية إعلامية خلال 48 ساعة من الفعالية",
      "محتوى منطقة التصوير شُورك أكثر من 2,000 مرة على وسائل التواصل",
      "Nespresso أعادت حجز فريق الإنتاج لإطلاقهم الإقليمي التالي",
    ],
    gallery: [
      asset("/assets/photos/gallery/nespresso-NES-963.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-1196.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-1207.jpg"),
      asset("/assets/photos/gallery/nespresso-NES-1239.jpg"),
    ],
  },
  {
    slug: "vanderlande-airport",
    client: "Vanderlande",
    event: "Airport Show",
    title: "Vanderlande Airport Show",
    image: asset("/assets/photos/vanderlande-airport.jpg"),
    size: "60 sqm",
    tags: ["Open Concept", "Product Demo", "Architectural"],
    tags_ar: ["مفهوم مفتوح", "عرض منتجات", "تصميم معماري"],
    location: "Dubai, UAE",
    overview:
      "A 60 sqm open-concept stand for Vanderlande at the Dubai Airport Show, built around a working conveyor demonstration that let airport procurement teams see the product in action. Clean architectural lines and open sightlines from all four aisles did the rest.",
    challenge:
      "Fitting a live demonstration system into a compact 60 sqm open-plan stand without sacrificing premium aesthetics. The stand needed to feel inviting from every aisle while accommodating private meeting areas for airline procurement discussions. All structural and electrical work had to comply with Dubai venue regulations within a tight 3-day build window.",
    solution:
      "A raised platform with clean architectural lines anchored the stand and drew attention from multiple aisles. The conveyor demo was integrated at floor level with concealed power connections, running continuously throughout the show. Lightweight partition walls created semi-private meeting areas for procurement conversations without closing off the stand.",
    features: [
      {
        title: "Open-Plan Layout",
        description:
          "Four-sided open design with no visual barriers — visitors could see the product demo from any approach, maximizing walk-up engagement.",
      },
      {
        title: "Integrated Product Display",
        description:
          "Live conveyor demonstration with concealed power and data connections, running uninterrupted across all three show days.",
      },
      {
        title: "Architectural Lighting Design",
        description:
          "Layered lighting combining recessed fixtures, accent spots, and perimeter LEDs to create depth and draw the eye toward demo and meeting zones.",
      },
      {
        title: "Modular Meeting Areas",
        description:
          "Semi-private conversation zones built from lightweight partitions — private enough for procurement discussions, open enough to keep the stand inviting.",
      },
    ],
    results: [
      "Consistent visitor flow maintained across all three show days",
      "Live demo drove the highest engagement rate on the exhibition floor",
      "24 scheduled meetings hosted with airline procurement teams",
      "Client renewed the contract for the following year's Airport Show",
    ],
    stats: [
      { value: 60, suffix: " sqm", label: "Stand Footprint" },
      { value: 24, label: "Meetings Hosted" },
      { value: 3, suffix: " days", label: "Build Time" },
    ],
    overview_ar:
      "جناح مفتوح بمساحة 60 م² لـ Vanderlande في Airport Show دبي، صُمم حول عرض حي لنظام سيور النقل أتاح لفرق المشتريات في المطارات رؤية المنتج أثناء العمل. خطوط معمارية نظيفة ورؤية مفتوحة من الممرات الأربعة أكملت المهمة.",
    challenge_ar:
      "دمج نظام عرض حي في جناح مفتوح مدمج بمساحة 60 م² دون التضحية بالجمالية الراقية. الجناح كان بحاجة لأن يبدو جاذباً من كل ممر مع توفير مناطق اجتماعات خاصة لمناقشات مشتريات شركات الطيران. جميع الأعمال الإنشائية والكهربائية كان لا بد أن تتوافق مع لوائح دبي خلال فترة بناء لا تتجاوز 3 أيام.",
    solution_ar:
      "منصة مرتفعة بخطوط معمارية نظيفة شكّلت محور الجناح ولفتت الأنظار من عدة ممرات. عرض السيور الناقلة دُمج على مستوى الأرض بتوصيلات كهربائية مخفية، وعمل بشكل متواصل طوال المعرض. حواجز خفيفة الوزن وفّرت مناطق اجتماعات شبه خاصة لمحادثات المشتريات دون إغلاق الجناح.",
    features_ar: [
      {
        title: "تصميم مفتوح من أربع جهات",
        description:
          "تصميم مفتوح بلا حواجز بصرية — الزوار يرون العرض الحي من أي اتجاه، مما يعزز التفاعل التلقائي.",
      },
      {
        title: "عرض منتج متكامل",
        description:
          "عرض حي لنظام السيور الناقلة بتوصيلات كهرباء وبيانات مخفية، يعمل بلا انقطاع طوال أيام المعرض الثلاثة.",
      },
      {
        title: "تصميم إضاءة معماري",
        description:
          "إضاءة متعددة الطبقات تجمع بين تجهيزات غائرة وأضواء مركزة وشرائط LED محيطية لخلق عمق وتوجيه النظر نحو مناطق العرض والاجتماعات.",
      },
      {
        title: "مناطق اجتماعات مرنة",
        description:
          "مناطق حوار شبه خاصة بُنيت من حواجز خفيفة — خاصة بما يكفي لمناقشات المشتريات، ومفتوحة بما يكفي للحفاظ على جاذبية الجناح.",
      },
    ],
    results_ar: [
      "تدفق مستمر للزوار طوال أيام المعرض الثلاثة",
      "العرض الحي حقق أعلى معدل تفاعل في أرض المعرض",
      "24 اجتماعاً مجدولاً مع فرق مشتريات شركات الطيران",
      "العميل جدّد العقد لنسخة Airport Show التالية",
    ],
    gallery: [
      asset("/assets/photos/gallery/vanderlande-1.jpg"),
      asset("/assets/photos/gallery/vanderlande-2.jpg"),
    ],
  },
  {
    slug: "spark-breakbulk",
    client: "Spark Logistics",
    event: "Breakbulk Middle East",
    title: "Spark Logistics Breakbulk ME",
    image: asset("/assets/photos/spark-breakbulk.jpg"),
    size: "60 sqm",
    tags: ["Custom Build", "Industrial Design", "Container Concept"],
    tags_ar: ["بناء مخصص", "تصميم صناعي", "مفهوم الحاويات"],
    location: "Dubai, UAE",
    overview:
      "A 60 sqm stand for Spark Logistics at Breakbulk Middle East that turned shipping container architecture into a competitive advantage. The industrial design instantly communicated the client's freight forwarding identity while housing three dedicated meeting zones for deal-making.",
    challenge:
      "Making a container-inspired concept feel authentic without becoming dark, cramped, or gimmicky. The design had to balance raw industrial character with a professional meeting environment across a compact 60 sqm footprint.",
    solution:
      "Corrugated steel panels over lightweight substrates delivered the industrial look at manageable weight. Strategic cutaways and floor-to-ceiling glazed sections broke up the container forms and flooded the interior with natural light. Three meeting zones arranged around a central reception hub gave the sales team dedicated spaces for every conversation on their calendar.",
    features: [
      {
        title: "Corrugated Steel Cladding",
        description:
          "Authentic industrial container look using real corrugated steel on lightweight substrates — striking on the show floor, practical to build and dismantle.",
      },
      {
        title: "Tri-Zone Meeting Layout",
        description:
          "Three acoustically separated meeting areas with power, data, and display screens — purpose-built for back-to-back client conversations.",
      },
      {
        title: "Industrial Material Palette",
        description:
          "Corrugated metal, perforated steel mesh, exposed cable trays, and polished concrete-effect flooring — every surface reinforced the brand's logistics identity.",
      },
      {
        title: "Open-Plan Reception",
        description:
          "Full-width blackened steel reception counter with backlit branding, serving as the first touchpoint for every visitor walking up from the main aisle.",
      },
    ],
    results: [
      "Named a top-5 stand design at Breakbulk ME by event organizers",
      "Visitor footfall exceeded client projections by 40%",
      "All three meeting rooms fully booked across both show days",
      "Design concept reused for four subsequent editions — proving long-term ROI",
    ],
    stats: [
      { value: 60, suffix: " sqm", label: "Stand Footprint" },
      { value: 3, label: "Meeting Zones" },
      { value: 40, suffix: "%", label: "Above Footfall Target" },
      { value: 4, label: "Editions Built" },
    ],
    overview_ar:
      "جناح بمساحة 60 م² لـ Spark Logistics في Breakbulk Middle East حوّل تصميم حاويات الشحن إلى ميزة تنافسية. التصميم الصناعي أوصل هوية الشركة في الشحن فوراً، مع توفير ثلاث مناطق اجتماعات مخصصة لإتمام الصفقات.",
    challenge_ar:
      "جعل مفهوم مستوحى من الحاويات يبدو أصيلاً دون أن يكون مظلماً أو ضيقاً أو مبتذلاً. التصميم كان بحاجة لتحقيق التوازن بين الطابع الصناعي الخام وبيئة اجتماعات احترافية ضمن مساحة مدمجة 60 م².",
    solution_ar:
      "ألواح فولاذية مموجة على أسطح خفيفة الوزن وفّرت المظهر الصناعي بوزن عملي. فتحات استراتيجية وأقسام زجاجية من الأرض للسقف كسرت أشكال الحاوية وأغرقت الداخل بالضوء الطبيعي. ثلاث مناطق اجتماعات حول محور استقبال مركزي منحت فريق المبيعات مساحات مخصصة لكل محادثة في جدولهم.",
    features_ar: [
      {
        title: "كسوة فولاذية مموجة",
        description:
          "مظهر حاوية صناعي أصيل باستخدام فولاذ مموج حقيقي على أسطح خفيفة — لافت في أرض المعرض وعملي في البناء والتفكيك.",
      },
      {
        title: "تخطيط ثلاثي المناطق",
        description:
          "ثلاث مناطق اجتماعات معزولة صوتياً بتجهيزات كهرباء وبيانات وشاشات عرض — مصممة لاجتماعات متتالية مع العملاء.",
      },
      {
        title: "لوحة مواد صناعية",
        description:
          "معدن مموج وشبك فولاذي مثقب ومسارات كابلات مكشوفة وأرضيات بمظهر الخرسانة المصقولة — كل سطح عزّز هوية الشركة اللوجستية.",
      },
      {
        title: "استقبال مفتوح",
        description:
          "كاونتر استقبال بعرض كامل من الفولاذ المطفأ بإضاءة خلفية للعلامة، يشكّل نقطة التواصل الأولى لكل زائر من الممر الرئيسي.",
      },
    ],
    results_ar: [
      "صُنّف ضمن أفضل 5 تصاميم أجنحة في Breakbulk ME من قبل المنظمين",
      "حركة الزوار تجاوزت توقعات العميل بنسبة 40%",
      "جميع غرف الاجتماعات الثلاث كانت محجوزة بالكامل طوال يومي المعرض",
      "أُعيد استخدام التصميم في أربع نسخ متتالية — مما أثبت العائد طويل المدى",
    ],
    gallery: [
      asset("/assets/photos/gallery/spark-build-1.jpg"),
      asset("/assets/photos/gallery/spark-build-2.jpg"),
      asset("/assets/photos/gallery/spark-render-1.jpg"),
    ],
  },
  {
    slug: "hoosh-world-of-vape",
    client: "HOOSH",
    event: "World of Vape",
    title: "HOOSH World of Vape",
    image: asset("/assets/photos/gallery/hoosh-7.jpg"),
    size: "36 sqm",
    tags: ["Retail Design", "LED Signage", "Product Wall"],
    tags_ar: ["تصميم تجزئة", "لافتات LED", "جدار منتجات"],
    location: "Dubai, UAE",
    overview:
      "A 36 sqm stand for HOOSH at World of Vape that broke every convention in the hall. While competitors defaulted to black-and-neon, we built a clean retail boutique that showcased 60+ products and kept visitors browsing three times longer than the hall average.",
    challenge:
      "Every competitor in the vape hall looked the same — dark, loud, generic. HOOSH needed a stand that signalled quality and trust while displaying 60+ SKUs in a way that invited browsing, not overwhelm.",
    solution:
      "We deliberately went the opposite direction: matte white surfaces, brushed brass accents, and warm lighting that made the stand feel like a premium boutique dropped into a trade show. Individually backlit product bays turned the full-width wall into a browsable retail display. A curved tasting counter with built-in USB charging gave visitors a reason to stay — and the longer they stayed, the more deals closed.",
    features: [
      {
        title: "Retail-Style Product Wall",
        description:
          "Full-width modular shelving with individual LED backlighting per bay — 60+ SKUs displayed in a format designed to drive browsing and conversation.",
      },
      {
        title: "LED Lightbox Signage",
        description:
          "Frameless overhead lightbox visible from 25+ metres across the show floor, pulling traffic from competing aisles.",
      },
      {
        title: "Curved Tasting Counter",
        description:
          "Brushed brass counter with USB charging and product testers — built to extend dwell time and convert browsers into buyers.",
      },
      {
        title: "Warm Retail Palette",
        description:
          "Matte white and brushed brass with warm 3000K lighting — a deliberate contrast that made HOOSH the most distinctive stand in the hall.",
      },
    ],
    results: [
      "Highest footfall of any stand in the vape hall across both show days",
      "6-minute average dwell time — triple the hall average",
      "12 new distribution deals signed directly from on-stand meetings",
      "Stand design reused for three subsequent trade shows",
    ],
    stats: [
      { value: 36, suffix: " sqm", label: "Stand Footprint" },
      { value: 60, suffix: "+", label: "Products Displayed" },
      { value: 12, label: "Deals Signed" },
      { value: 6, suffix: " min", label: "Avg Dwell Time" },
    ],
    overview_ar:
      "جناح بمساحة 36 م² لـ HOOSH في World of Vape كسر كل الأنماط السائدة في القاعة. بينما لجأ المنافسون للأسود والنيون، بنينا بوتيك تجزئة أنيق عرض أكثر من 60 منتجاً وأبقى الزوار يتصفحون ثلاثة أضعاف متوسط القاعة.",
    challenge_ar:
      "كل المنافسين في قاعة الفيب بدوا متشابهين — داكنون وصاخبون وعاديون. HOOSH كانت بحاجة لجناح يوحي بالجودة والثقة مع عرض أكثر من 60 منتجاً بطريقة تدعو للتصفح لا للارتباك.",
    solution_ar:
      "اخترنا عمداً الاتجاه المعاكس: أسطح بيضاء مطفأة ولمسات نحاسية مصقولة وإضاءة دافئة جعلت الجناح يبدو كبوتيك فاخر أُسقط في معرض تجاري. خانات عرض بإضاءة خلفية فردية حوّلت الجدار الكامل إلى واجهة تجزئة قابلة للتصفح. كاونتر تذوق منحنٍ بشحن USB مدمج منح الزوار سبباً للبقاء — وكلما طالت إقامتهم، زادت الصفقات المُبرمة.",
    features_ar: [
      {
        title: "جدار منتجات بأسلوب التجزئة",
        description:
          "أرفف معيارية بعرض كامل مع إضاءة LED خلفية فردية لكل خانة — أكثر من 60 منتجاً معروضاً بتنسيق مصمم لتشجيع التصفح والحوار.",
      },
      {
        title: "لافتة LED مضيئة",
        description:
          "صندوق ضوئي علوي بلا إطار مرئي من مسافة 25+ متراً عبر أرض المعرض، يجذب الزوار من الممرات المنافسة.",
      },
      {
        title: "كاونتر تذوق منحنٍ",
        description:
          "كاونتر نحاسي مصقول بشحن USB وعيّنات للتجربة — مصمم لإطالة وقت البقاء وتحويل المتصفحين إلى مشترين.",
      },
      {
        title: "لوحة ألوان تجزئة دافئة",
        description:
          "أبيض مطفأ ونحاس مصقول مع إضاءة دافئة 3000K — تباين مقصود جعل HOOSH الجناح الأكثر تميزاً في القاعة.",
      },
    ],
    results_ar: [
      "أعلى حركة زوار لأي جناح في قاعة الفيب طوال يومي المعرض",
      "متوسط بقاء 6 دقائق — ثلاثة أضعاف متوسط القاعة",
      "12 صفقة توزيع جديدة أُبرمت مباشرة من اجتماعات الجناح",
      "أُعيد استخدام تصميم الجناح في ثلاثة معارض تجارية لاحقة",
    ],
    gallery: [
      // Matched photo comes first — paired with render by index
      asset("/assets/photos/gallery/hoosh-9.jpg"),   // pairs with render-3 (product wall from left)
      // Remaining photos (not paired)
      asset("/assets/photos/gallery/hoosh-2.jpg"),
      asset("/assets/photos/gallery/hoosh-5.jpg"),
      asset("/assets/photos/gallery/hoosh-7.jpg"),
      asset("/assets/photos/gallery/hoosh-8.jpg"),
      asset("/assets/photos/gallery/hoosh-10.jpg"),
      // Only renders with a matching photo
      asset("/assets/photos/gallery/hoosh-render-3.jpg"),
      asset("/assets/photos/gallery/hoosh-floorplan-1.jpg"),
    ],
  },
  {
    slug: "sipchem-adipec",
    client: "Sipchem",
    event: "Middle East Coatings Show",
    title: "Sipchem Middle East Coatings Show",
    image: asset("/assets/photos/gallery/sipchem-3.jpg"),
    size: "100 sqm",
    tags: ["Double Decker", "LED Video Wall", "Premium Finish"],
    tags_ar: ["جناح مزدوج الطوابق", "شاشة LED", "تشطيب فاخر"],
    location: "Dubai, UAE",
    overview:
      "A 100 sqm double-decker stand that positioned Sipchem as the dominant presence at the Middle East Coatings Show. The cantilevered upper deck projected corporate scale, while VIP meeting rooms above and an open reception below gave the sales team the right environment for every conversation.",
    challenge:
      "Projecting the authority of a major specialty chemicals company from a 100 sqm plot surrounded by competitors with significantly larger footprints. The double-decker structure also had to clear both DWTC venue regulations and Dubai Civil Defence requirements.",
    solution:
      "A cantilevered upper deck extending beyond the ground-floor footprint created an imposing silhouette visible from two aisles and added sheltered meeting space below. A 12 sqm LED video wall served as the visual anchor, running facility and product content that drew visitors in from the main thoroughfare. Premium finishes — stone-effect flooring, acoustic panels, brushed stainless steel — closed the gap between the stand and the corporate brand it represented.",
    features: [
      {
        title: "Cantilevered Upper Deck",
        description:
          "Upper level extending 1.5m beyond the ground-floor perimeter — creating a dramatic silhouette and additional covered space below for walk-up meetings.",
      },
      {
        title: "12 sqm LED Video Wall",
        description:
          "High-resolution display running custom content on Sipchem's facilities and product range — the visual anchor that pulled traffic from the main thoroughfare.",
      },
      {
        title: "VIP Meeting Suite",
        description:
          "Upper-level room with acoustic glazing, integrated AV, and seating for 10 — purpose-built for executive-level discussions away from show floor noise.",
      },
      {
        title: "Premium Material Palette",
        description:
          "Stone-effect flooring, fabric-wrapped acoustic panels, brushed stainless steel columns, and white Corian reception desk — every surface matched the corporate positioning.",
      },
    ],
    results: [
      "One of the most photographed stands in the specialty chemicals hall",
      "28 scheduled VIP meetings hosted in the upper-deck suite over four days",
      "Video wall content repurposed by the client for post-show marketing campaigns",
      "Contract renewed for the following year within one month of show close",
    ],
    stats: [
      { value: 100, suffix: " sqm", label: "Stand Footprint" },
      { value: 12, suffix: " sqm", label: "LED Wall" },
      { value: 28, label: "VIP Meetings" },
      { value: 4, suffix: " days", label: "Show Duration" },
    ],
    overview_ar:
      "جناح مزدوج الطوابق بمساحة 100 م² وضع Sipchem كالحضور المهيمن في Middle East Coatings Show. الطابق العلوي البارز أوحى بحجم الشركة، فيما وفّرت غرف اجتماعات VIP في الأعلى واستقبال مفتوح في الأسفل البيئة المناسبة لكل محادثة.",
    challenge_ar:
      "إبراز هيبة شركة كيماويات متخصصة كبرى من مساحة 100 م² محاطة بمنافسين بمساحات أكبر بكثير. الهيكل المزدوج كان يحتاج أيضاً لاجتياز لوائح مركز دبي التجاري العالمي ومتطلبات الدفاع المدني.",
    solution_ar:
      "طابق علوي بارز يمتد خارج محيط الطابق الأرضي صنع صورة ظلية مهيبة مرئية من ممرين وأضاف مساحة اجتماعات مظللة في الأسفل. شاشة LED بمساحة 12 م² شكّلت المحور البصري، تعرض محتوى عن منشآت ومنتجات الشركة وتجذب الزوار من الممر الرئيسي. تشطيبات فاخرة — أرضيات بمظهر الحجر وألواح صوتية وفولاذ مصقول — سدّت الفجوة بين الجناح والعلامة التجارية التي يمثلها.",
    features_ar: [
      {
        title: "طابق علوي بارز",
        description:
          "مستوى علوي يمتد 1.5 متر خارج محيط الطابق الأرضي — يصنع صورة ظلية مثيرة ومساحة مظللة إضافية للاجتماعات السريعة.",
      },
      {
        title: "شاشة LED بمساحة 12 م²",
        description:
          "شاشة عالية الدقة تعرض محتوى مخصصاً عن منشآت Sipchem ومجموعة منتجاتها — المحور البصري الذي جذب الزوار من الممر الرئيسي.",
      },
      {
        title: "جناح اجتماعات VIP",
        description:
          "غرفة في الطابق العلوي بزجاج عازل للصوت وتجهيزات سمعية بصرية مدمجة ومقاعد لـ 10 أشخاص — مصممة لنقاشات تنفيذية بعيداً عن ضوضاء أرض المعرض.",
      },
      {
        title: "لوحة مواد فاخرة",
        description:
          "أرضيات بمظهر الحجر وألواح صوتية مغلفة بالقماش وأعمدة فولاذية مصقولة وكاونتر استقبال Corian أبيض — كل سطح طابق الموقع المؤسسي للشركة.",
      },
    ],
    results_ar: [
      "من أكثر الأجنحة تصويراً في قاعة الكيماويات المتخصصة",
      "28 اجتماع VIP مجدول في جناح الطابق العلوي خلال أربعة أيام",
      "محتوى شاشة LED أُعيد استخدامه من العميل في حملاته التسويقية بعد المعرض",
      "تجديد العقد للعام التالي خلال شهر من انتهاء المعرض",
    ],
    gallery: [
      asset("/assets/photos/gallery/sipchem-3.jpg"),
      asset("/assets/photos/gallery/sipchem-2.jpg"),
      asset("/assets/photos/gallery/sipchem-4.jpg"),
      asset("/assets/photos/gallery/sipchem-5.jpg"),
    ],
  },
  {
    slug: "interfood-gulfood",
    client: "Interfood",
    event: "Gulfood Manufacturing",
    title: "Interfood Gulfood Manufacturing",
    image: asset("/assets/photos/gallery/interfood-1.jpg"),
    size: "54 sqm",
    tags: ["Custom Build", "Hanging Signage", "Interactive Display"],
    tags_ar: ["بناء مخصص", "لافتة معلقة", "عرض تفاعلي"],
    location: "Dubai, UAE",
    overview:
      "A 54 sqm stand for Interfood at Gulfood Manufacturing that punched well above its weight class. A suspended hanging sign gave hall-wide visibility, while interactive kiosks and acoustic meeting pods turned visitor traffic into 340 qualified leads.",
    challenge:
      "Competing for attention in a dense hall where neighbouring stands were two to three times larger. The client also needed quiet spaces for technical product conversations — difficult to achieve on a noisy show floor.",
    solution:
      "A double-height hanging sign suspended from the venue rigging grid made the stand visible from every hall entrance, solving the size disadvantage at ceiling level. At ground level, two acoustically treated meeting pods gave the technical team quiet spaces for detailed conversations. Interactive touchscreen kiosks handled the rest — visitors browsed the product catalogue, requested samples, and left their contact details without a single printed brochure.",
    features: [
      {
        title: "Suspended Hanging Signage",
        description:
          "4-metre-wide illuminated sign suspended from the rigging grid — visible from every entrance, giving a 54 sqm stand the presence of one three times its size.",
      },
      {
        title: "Interactive Product Kiosks",
        description:
          "Touchscreen displays with a custom catalogue app, sample request functionality, and built-in lead capture — replacing brochures with qualified data.",
      },
      {
        title: "Semi-Enclosed Meeting Pods",
        description:
          "Two acoustic meeting pods seating 4 guests each, with integrated power and screens — quiet enough for technical product discussions on a loud show floor.",
      },
      {
        title: "Green Brand Integration",
        description:
          "Full stand wrapped in Interfood's signature green using tension-fabric panels — bold, lightweight, and instantly recognizable from any angle.",
      },
    ],
    results: [
      "Stand visible from every entrance to the hall via suspended signage",
      "340 qualified leads captured through interactive kiosks across three days",
      "Both meeting pods fully booked with back-to-back appointments throughout the show",
      "Client reported their most productive Gulfood Manufacturing participation to date",
    ],
    stats: [
      { value: 54, suffix: " sqm", label: "Stand Footprint" },
      { value: 340, label: "Leads Captured" },
      { value: 4, suffix: "m", label: "Hanging Sign Width" },
      { value: 3, suffix: " days", label: "Build Time" },
    ],
    overview_ar:
      "جناح بمساحة 54 م² لـ Interfood في Gulfood Manufacturing تفوّق على حجمه بمراحل. لافتة معلقة وفّرت رؤية على مستوى القاعة بالكامل، فيما حوّلت الأكشاك التفاعلية وكبائن الاجتماعات الصوتية حركة الزوار إلى 340 عميلاً محتملاً مؤهلاً.",
    challenge_ar:
      "المنافسة على الاهتمام في قاعة مكتظة حيث الأجنحة المجاورة أكبر بمرتين إلى ثلاث مرات. العميل كان يحتاج أيضاً مساحات هادئة لمحادثات تقنية عن المنتجات — أمر صعب التحقيق في أرض معرض صاخبة.",
    solution_ar:
      "لافتة معلقة مزدوجة الارتفاع مثبتة بشبكة التعليق في السقف جعلت الجناح مرئياً من كل مدخل، حالّةً مشكلة الحجم على مستوى السقف. على مستوى الأرض، وفّرت كبينتان صوتيتان مساحات هادئة للفريق التقني لإجراء محادثات مفصلة. أكشاك تفاعلية بشاشات لمس تولّت الباقي — الزوار تصفحوا كتالوج المنتجات وطلبوا عينات وتركوا بياناتهم بلا حاجة لكتيب مطبوع واحد.",
    features_ar: [
      {
        title: "لافتة معلقة مضيئة",
        description:
          "لافتة مضيئة بعرض 4 أمتار معلقة من شبكة السقف — مرئية من كل مدخل، مانحةً جناح 54 م² حضور جناح بثلاثة أضعاف حجمه.",
      },
      {
        title: "أكشاك منتجات تفاعلية",
        description:
          "شاشات لمس بتطبيق كتالوج مخصص وخاصية طلب عينات والتقاط بيانات مدمج — استبدلت الكتيبات ببيانات مؤهلة.",
      },
      {
        title: "كبائن اجتماعات شبه مغلقة",
        description:
          "كبينتان صوتيتان تتسعان لـ 4 ضيوف لكل منهما، بتجهيزات كهرباء وشاشات مدمجة — هادئة بما يكفي لمناقشات المنتجات التقنية في أرض معرض صاخبة.",
      },
      {
        title: "تكامل العلامة التجارية الخضراء",
        description:
          "الجناح بالكامل مغلف بلون Interfood الأخضر المميز باستخدام ألواح أقمشة مشدودة — جريء وخفيف ومميز فوراً من أي زاوية.",
      },
    ],
    results_ar: [
      "الجناح مرئي من كل مدخل للقاعة عبر اللافتة المعلقة",
      "340 عميلاً محتملاً مؤهلاً تم التقاطهم عبر الأكشاك التفاعلية خلال ثلاثة أيام",
      "الكبينتان محجوزتان بالكامل باجتماعات متتالية طوال المعرض",
      "العميل أفاد بأنها أكثر مشاركة منتجة في Gulfood Manufacturing على الإطلاق",
    ],
    gallery: [
      asset("/assets/photos/gallery/interfood-2.jpg"),
      asset("/assets/photos/gallery/interfood-3.jpg"),
      asset("/assets/photos/gallery/interfood-render-1.jpg"),
    ],
  },
  {
    slug: "altronix-intersec",
    client: "Altronix",
    event: "Intersec",
    title: "Altronix Intersec",
    image: asset("/assets/photos/altronix-intersec.jpg"),
    size: "25 sqm",
    tags: ["Compact Design", "Security", "Long-Term Client"],
    tags_ar: ["تصميم مدمج", "أمن وسلامة", "عميل طويل الأمد"],
    location: "Dubai, UAE",
    overview:
      "A 25 sqm stand for Altronix at Intersec that proved you don't need a big footprint to dominate a show floor. Dramatic LED integration turned a compact island plot into a glowing beacon — and delivered a 60% increase in qualified leads over the previous year. This was our sixth consecutive build for Altronix.",
    challenge:
      "Competing against neighbours with triple the space and budget. The product range — power supplies and surge protection for CCTV — is essential but not visually exciting, so the design had to do the heavy lifting.",
    solution:
      "A continuous LED light channel wrapped the full perimeter at fascia height, creating a beacon effect visible from 30+ metres. Edge-lit acrylic panels turned individual products into illuminated display pieces. The entire structure sat on a raised platform with concealed uplighting, giving it a floating appearance that stopped foot traffic. All cabling ran through hollow aluminium extrusions — not a single wire visible anywhere.",
    features: [
      {
        title: "360-Degree LED Light Channel",
        description:
          "Full-perimeter illuminated fascia visible from 30+ metres — turning 25 sqm into the most noticeable stand in the aisle.",
      },
      {
        title: "Edge-Lit Product Displays",
        description:
          "Laser-cut acrylic panels with individual LED backlighting, making each product unit a visual feature rather than a shelf item.",
      },
      {
        title: "Floating Platform Base",
        description:
          "Raised platform with concealed perimeter uplighting — a hovering effect that drew walk-up traffic without requiring overhead signage.",
      },
      {
        title: "Clean Cable Management",
        description:
          "All power and data routed through hollow aluminium extrusions — completely wire-free surfaces that reinforced the brand's precision positioning.",
      },
    ],
    results: [
      "60% increase in qualified lead scans compared to the previous Intersec edition",
      "3x more social media photo shares than the prior year's build",
      "Average visitor dwell time of 4.5 minutes — double the show floor average",
      "Featured in Intersec's official post-show highlights reel",
    ],
    stats: [
      { value: 25, suffix: " sqm", label: "Stand Footprint" },
      { value: 60, suffix: "%", label: "Lead Increase" },
      { value: 3, suffix: "x", label: "Social Shares vs Prior Year" },
      { value: 2, suffix: " days", label: "Build Time" },
    ],
    overview_ar:
      "جناح بمساحة 25 م² لـ Altronix في Intersec أثبت أنك لا تحتاج مساحة كبيرة للسيطرة على أرض المعرض. تكامل LED مثير حوّل مساحة جزيرة مدمجة إلى منارة مضيئة — وحقق زيادة 60% في العملاء المحتملين المؤهلين مقارنة بالعام السابق. هذا كان مشروعنا السادس على التوالي مع Altronix.",
    challenge_ar:
      "المنافسة ضد جيران بثلاثة أضعاف المساحة والميزانية. مجموعة المنتجات — وحدات تغذية كهربائية وحماية من التيار الزائد لكاميرات المراقبة — ضرورية لكنها ليست بصرياً مثيرة، لذا التصميم كان عليه أن يتحمل العبء الأكبر.",
    solution_ar:
      "قناة LED متصلة تلتف حول المحيط الكامل على مستوى اللافتة صنعت تأثير منارة مرئي من مسافة 30+ متراً. ألواح أكريليك بإضاءة حافية حوّلت كل منتج إلى قطعة عرض مضيئة. الهيكل بالكامل جلس على منصة مرتفعة بإضاءة سفلية مخفية، مانحاً إياه مظهراً عائماً أوقف حركة المرور. جميع الكابلات مرّت عبر قضبان ألمنيوم مجوفة — ولا سلك واحد مرئي في أي مكان.",
    features_ar: [
      {
        title: "قناة LED بزاوية 360 درجة",
        description:
          "لافتة محيطية مضيئة بالكامل مرئية من 30+ متراً — تحويل 25 م² إلى الجناح الأكثر لفتاً للانتباه في الممر.",
      },
      {
        title: "عرض منتجات بإضاءة حافية",
        description:
          "ألواح أكريليك مقطوعة بالليزر بإضاءة LED خلفية فردية، تجعل كل وحدة منتج عنصراً بصرياً بدلاً من مجرد قطعة على رف.",
      },
      {
        title: "قاعدة منصة عائمة",
        description:
          "منصة مرتفعة بإضاءة سفلية محيطية مخفية — تأثير طفو جذب الزوار بلا حاجة للافتة علوية.",
      },
      {
        title: "إدارة كابلات نظيفة",
        description:
          "جميع خطوط الكهرباء والبيانات موجّهة عبر قضبان ألمنيوم مجوفة — أسطح خالية تماماً من الأسلاك عززت صورة الدقة للعلامة التجارية.",
      },
    ],
    results_ar: [
      "زيادة 60% في مسح بطاقات العملاء المؤهلين مقارنة بنسخة Intersec السابقة",
      "3 أضعاف مشاركات الصور على وسائل التواصل مقارنة ببناء العام السابق",
      "متوسط بقاء الزائر 4.5 دقائق — ضعف متوسط أرض المعرض",
      "ظهر في فيديو أبرز لحظات Intersec الرسمي بعد المعرض",
    ],
    gallery: [
      asset("/assets/photos/gallery/altronix-1.jpg"),
      asset("/assets/photos/gallery/altronix-2.jpg"),
      asset("/assets/photos/gallery/altronix-3.jpg"),
      asset("/assets/photos/gallery/altronix-render-1.jpg"),
      asset("/assets/photos/gallery/altronix-render-2.jpg"),
      asset("/assets/photos/gallery/altronix-render-3.jpg"),
      asset("/assets/photos/gallery/altronix-render-4.jpg"),
    ],
  },
];
