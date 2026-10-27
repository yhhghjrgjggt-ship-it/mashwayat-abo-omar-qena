export interface MenuItem {
  id: string;
  name: string;
  category: 'grills' | 'tajines' | 'sandwiches' | 'appetizers' | 'desserts';
  categoryName: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
  weightOrPortion?: string;
  spicy?: boolean;
  popular?: boolean;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  orderedItem?: string;
  verified: boolean;
}

export const RESTAURANT_INFO = {
  name: 'مشويات أبو عمر - قنا',
  tagline: 'أصل المشويات على الفحم البلدي في قلب قنا',
  address: 'قنا - الشؤون - شارع اليافطة',
  city: 'قنا، جمهورية مصر العربية',
  workingHours: 'يومياً من 12:00 ظهراً حتى 03:00 فجراً',
  phone: '01095577062',
  altPhone: '01095577062',
  defaultWhatsapp: '201095577062',
  freeDeliveryNote: 'التوصيل مجاني داخل قنا - الشؤون والمساكن',
  googleMapsUrl: 'https://maps.google.com/?q=Qena+Al+Shoon+Egypt',
  deliveryZones: [
    'حي الشؤون والمساكن (توصيل فوري)',
    'شارع اليافطة وتفرعاته',
    'وسط البلد وميدان الساعة',
    'منطقة الجامعة (جنوب الوادي)',
    'ميدان المحطة',
    'مساكن عثمان',
    'الحصواية',
    'المعنا',
    'الحميدات',
    'الصالحية',
    'شارع النحال ومدينة العمال'
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'kebab-baladi',
    name: 'كباب لحم بلدي عالفحم',
    category: 'grills',
    categoryName: 'مشويات على الفحم',
    price: 480,
    weightOrPortion: 'نصف كيلو (يقدم مع سلطات وعيش بلدي)',
    description: 'أجود قطع اللحم البقري البلدي الطازج متبل بخلطة أبو عمر السرية ومشوي على الفحم الطبيعي.',
    image: '/src/assets/images/food_kebab_charcoal_1793089291104.jpg',
    badge: 'الأكثر طلباً',
    popular: true
  },
  {
    id: 'kofta-hati',
    name: 'كفتة الحاتي الملوكي',
    category: 'grills',
    categoryName: 'مشويات على الفحم',
    price: 380,
    weightOrPortion: 'نصف كيلو (مع طحينة وعيش ساخن)',
    description: 'كفتة لحم بلدي طازج مع لمسة لية ضاني فلاحي، طرية ودايبة على الفحم وتتبيلة متوارثة.',
    image: '/src/assets/images/food_kofta_skewers_1793089290196.jpg',
    badge: 'تخصص أبو عمر',
    popular: true
  },
  {
    id: 'mix-grill-feast',
    name: 'سرفيس ميكس جريل أبو عمر الفاخر',
    category: 'grills',
    categoryName: 'مشويات على الفحم',
    price: 590,
    weightOrPortion: 'وجبة تكفي 2-3 أفراد (1 كجم مشكل)',
    description: 'تشكيلة مشويات فاخرة: كباب بلدي، كفتة حاتي، ريش ضاني، شيش طاووق، مع أرز بسمتي بالمكسرات وسلطات مشكلة.',
    image: '/src/assets/images/hero_grill_feast_1793089289064.jpg',
    badge: 'سرفيس العائلة',
    popular: true
  },
  {
    id: 'lamb-chops',
    name: 'ريش ضاني بلدي مشوية',
    category: 'grills',
    categoryName: 'مشويات على الفحم',
    price: 540,
    weightOrPortion: 'نصف كيلو (متبلة بالأعشاب والليمون)',
    description: 'ريش لحم ضاني بلدي طازج متبلة بالزعتر الجبلي والليمون والفلفل الأسود مشوية على نار هادئة.',
    image: '/src/assets/images/food_lamb_chops_1793089292361.jpg',
    badge: 'لحوم طازجة 100%'
  },
  {
    id: 'charcoal-chicken',
    name: 'فرخة مشوية عالفحم مع أرز بسمتي',
    category: 'grills',
    categoryName: 'مشويات على الفحم',
    price: 260,
    weightOrPortion: 'دجاجة كاملة + سرفيس أرز + ثومية وطحينة',
    description: 'دجاجة متبلة ومحمّرة على الفحم بالكامل بجلد مقرمش ولحم طري ومتبل حتى العظم، تقدم مع أرز أصفر.',
    image: '/src/assets/images/food_shish_tawook_1793089291176.jpg',
    badge: 'وجبة التوفير'
  },
  {
    id: 'hawawshi-super',
    name: 'حواوشي فحم سوبر بالجبنة',
    category: 'sandwiches',
    categoryName: 'سندوتشات وحواوشي',
    price: 70,
    weightOrPortion: 'رغيف كبير محمص عالفحم',
    description: 'عيش بلدي طازج محشو لحم بلدي مفروم بتوابل الحواوشي الخاصة مع فلفل حار وجبنة موزاريلا دايبة.',
    image: '/src/assets/images/food_hawawshi_crisp_1793089291557.jpg',
    badge: 'مقرمش وحار',
    spicy: true,
    popular: true
  },
  {
    id: 'tarb-baladi',
    name: 'طرب مشوي على الفحم',
    category: 'grills',
    categoryName: 'مشويات على الفحم',
    price: 420,
    weightOrPortion: 'نصف كيلو',
    description: 'كفتة لحم بلدي ملفوفة في منديل ضاني مقرمش ومحمر على الفحم لعشاق الطعم الصعيدي الأصيل.',
    image: '/src/assets/images/food_kofta_skewers_1793089290196.jpg',
    badge: 'عشاق الطرب'
  },
  {
    id: 'shish-tawook',
    name: 'وجبة شيش طاووق فحم',
    category: 'grills',
    categoryName: 'مشويات على الفحم',
    price: 240,
    weightOrPortion: 'شيش طاووق متبل + بطاطس وأرز',
    description: 'قطع أوراك وصدور دجاج متبلة بالزبادي والليمون والأعشاب، مشوية مع بصل وفلفل ألوان.',
    image: '/src/assets/images/food_shish_tawook_1793089291176.jpg'
  },
  {
    id: 'tajine-bamia',
    name: 'طاجن بامية باللحم الضاني',
    category: 'tajines',
    categoryName: 'طواجن ومحاشي',
    price: 185,
    weightOrPortion: 'طاجن فخار كبير لشخصين',
    description: 'بامية صعيدي فلاحي مطبوخة في صلصة طماطم بلدي مسبكة مع قطع لحم ضاني وطشة ثوم بالسمن البلدي.',
    image: '/src/assets/images/hero_grill_feast_1793089289064.jpg',
    badge: 'بالسمن البلدي'
  },
  {
    id: 'tajine-waraq-enab',
    name: 'طاجن ورق عنب بالكوارع المحمرة',
    category: 'tajines',
    categoryName: 'طواجن ومحاشي',
    price: 210,
    weightOrPortion: 'طاجن فخاري غني',
    description: 'أصابع ورق عنب متبلة بالنعناع والليمون مع قطع كوارع مسلوقة ومحمرة بالسمن في الفرن.',
    image: '/src/assets/images/food_kebab_charcoal_1793089291104.jpg',
    badge: 'مخصوص'
  },
  {
    id: 'molokhia-baladi',
    name: 'طاسة ملوخية أبو عمر الفلاحي',
    category: 'tajines',
    categoryName: 'طواجن ومحاشي',
    price: 60,
    weightOrPortion: 'طاسة تكفي فردين',
    description: 'ملوخية خضراء طازجة مخروطة يومياً مع طشة الكزبرة والثوم والسمن البلدي الفلاحي.',
    image: '/src/assets/images/food_shish_tawook_1793089291176.jpg'
  },
  {
    id: 'sandwich-kebab',
    name: 'ساندوتش كباب بلدي كبير',
    category: 'sandwiches',
    categoryName: 'سندوتشات وحواوشي',
    price: 85,
    weightOrPortion: 'ساندوتش عيش بلدي أو فينو كبير',
    description: 'قطع كباب مشوية عالفحم مع سلطة بقدونس وبصل وطحينة أبو عمر المميزة.',
    image: '/src/assets/images/food_kebab_charcoal_1793089291104.jpg'
  },
  {
    id: 'sandwich-kofta',
    name: 'ساندوتش كفتة حاتي كبير',
    category: 'sandwiches',
    categoryName: 'سندوتشات وحواوشي',
    price: 60,
    weightOrPortion: 'ساندوتش مشبع',
    description: 'أصابع كفتة حاتي مشوية مع طحينة سمسم وسلطة خضراء في خبز بلدي طازج.',
    image: '/src/assets/images/food_kofta_skewers_1793089290196.jpg'
  },
  {
    id: 'salads-platter',
    name: 'مجموعة سلطات ومقبلات بلدي مشكلة',
    category: 'appetizers',
    categoryName: 'مقبلات وسلطات',
    price: 45,
    weightOrPortion: '4 أطباق مقبلات وسلطات',
    description: 'طحينة خام بالخل والليمون، بابا غنوج مشوي بالثوم، سلطة خضراء بلدي بالكمون، مخلل مشكل.',
    image: '/src/assets/images/food_kofta_skewers_1793089290196.jpg'
  },
  {
    id: 'om-ali',
    name: 'طاجن أم علي بالمكسرات والقشطة',
    category: 'desserts',
    categoryName: 'حلويات ومشروبات',
    price: 65,
    weightOrPortion: 'طاجن فرن ساخن',
    description: 'رقائق ميلفاي هشة مع حليب بلدي وقشطة طبيعية، محمصة في الفرن مع فستق ولوز وزبيب.',
    image: '/src/assets/images/hero_grill_feast_1793089289064.jpg',
    badge: 'حلو السهرة'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'د. أحمد عبد الرحيم',
    location: 'قنا - حي الجامعة',
    rating: 5,
    date: 'أمس',
    comment: 'أفضل مشويات جربتها في قنا بلا منازع! الكفتة طرية ومش ناشفة واللحمة بلدي طازة بجد مش مجرد كلام. التوصيل وصل في 35 دقيقة والأكل كان بيطلع بخار.',
    orderedItem: 'كفتة الحاتي وسرفيس الميكس جريل',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'م. محمود الصعيدي',
    location: 'قنا - منطقة الشؤون',
    rating: 5,
    date: 'منذ يومين',
    comment: 'جيران المطعم في الشؤون وكل أهل المنطقة بيشهدوا بنظافة المكان وأمانة أصحابه. طلبنا عزومة مكتب 12 فرد التغليف ممتاز وكمية الأرز والسلطات كريمة جداً.',
    orderedItem: 'ميكس جريل عائلي وطواجن بامية',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'أستاذة سارة مصطفى',
    location: 'قنا - وسط البلد',
    rating: 5,
    date: 'منذ 3 أيام',
    comment: 'الحواوشي عالفحم حكاية لوحده والجبنة سايحة ومقرمش من برة! وسرعة الرد على الواتساب ممتازة، الطلب جه مضبوط بالظبط زي ما طلبت والتوصيل كان مجاني.',
    orderedItem: 'حواوشي سوبر + ريش ضاني',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'الحاج جمال القناوي',
    location: 'قنا - ميدان المحطة',
    rating: 5,
    date: 'منذ أسبوع',
    comment: 'الريش الضاني تتبيلتها مضبوطة بالمللي ومفيش فيها ريحة زفارة نهائي، لحمة صعيدي أصيلة. تسلم إيدك يا أبو عمر ودايماً مشرفنا في قنا.',
    orderedItem: 'كيلو ريش ضاني وكباب',
    verified: true
  }
];

export const KHAMSAT_GIG_DATA = {
  title: 'سأصمم لك موقع احترافي بالذكاء الاصطناعي في 24 ساعة + دومين مجاني',
  description: `طالب في حاسبات ومعلومات، أصمم مواقع سريعة واحترافية بالـ AI تظهر في جوجل وتجيب عملاء من الواتساب

• تسليم في 24 ساعة
• تصميم متجاوب موبايل 100%
• زر واتساب وخرائط جوجل
• تعديلات مجانية

شوف أعمالي (مثال حي لمطعم مشويات متكامل):
{APP_URL}`
};
