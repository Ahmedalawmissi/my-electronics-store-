const products = [
    {
        id: 1,
        name: "سماعة بلوتوث",
        description: "سماعة لاسلكية بجودة عالية وتقنية عزل الضوضاء",
        price: 150,
        image: "https://media.istockphoto.com/id/2060029468/photo/monochromatic-blue-wireless-headphone-on-pink-background-with-copy-space.jpg?s=612x612&w=0&k=20&c=EG6fLEacRNaHnML9zDuLPNSq-m37hcIWuAKmG6p46PI=",
        category: "سماعات"
    },
    {
        id: 2,
        name: "هاتف ذكي",
        description: "هاتف بذاكرة 128 جيجا، كاميرا عالية، وشاشة FHD",
        price: 2500,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
        category: "هواتف"
    },
    {
        id: 3,
        name: "لابتوب",
        description: "حاسوب محمول خفيف، SSD، وRAM 16GB",
        price: 5500,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80.png",
        category: "حاسوب محمول"
    },
    {
        id: 4,
        name: "ساعة ذكية",
        description: "ساعة لمراقبة اللياقة والنوم، متوافقة مع Android و iOS",
        price: 300,
        image: "https://media.istockphoto.com/id/468060542/photo/car-door-lock-and-unlock-by-smart-watch.jpg?s=612x612&w=0&k=20&c=mqo0Qt0VGYAFNr-PRBWsL3GjMEFsicJbU_uKjqArenE=",
        category: "ساعات"
    },
    {
        id: 5,
        name: "لوحة مفاتيح ميكانيكية",
        description: "إضاءة RGB، أزرار صامتة، مناسبة للألعاب والبرمجة",
        price: 220,
        image: "https://media.istockphoto.com/id/923530886/photo/pc-keyboard-covered-with-snow-and-illuminated-with-blue-neon-light-with-copyspace.jpg?s=612x612&w=0&k=20&c=_XNK2MrtamO6Z7GVk6k1sKJh76kym9aJehIOLgYG_S0=",
        category: "ملحقات"
    }
,{
    id: 6,
    name: "سماعة بلوتوث",
    description: "سماعة لاسلكية بجودة عالية وتقنية عزل الضوضاء",
    price: 150,
    image: "https://m.media-amazon.com/images/I/81Qh+J1d5NL._AC_SL1500_.jpg",
    category: "سماعات"
  },
  {
    id: 7,
    name: "هاتف ذكي",
    description: "هاتف بذاكرة 128 جيجا، كاميرا عالية، وشاشة FHD",
    price: 2500,
    image: "https://images.pexels.com/photos/6078126/pexels-photo-6078126.jpeg",
    category: "هواتف"
  },
  {
    id: 8,
    name: "لابتوب",
    description: "حاسوب محمول خفيف، SSD، وRAM 16GB",
    price: 5500,
    image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
    category: "حاسوب محمول"
  },
  {
    id: 9,
    name: "ساعة ذكية",
    description: "ساعة لمراقبة اللياقة والنوم، متوافقة مع Android و iOS",
    price: 300,
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
    category: "ساعات"
  },
  {
    id: 10,
    name: "لوحة مفاتيح ميكانيكية",
    description: "إضاءة RGB، أزرار صامتة، مناسبة للألعاب والبرمجة",
    price: 220,
    image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg",
    category: "ملحقات"
  },
  {
    id: 11,
    name: "ماوس لاسلكي",
    description: "ماوس دقيق وخفيف الوزن مزود بزر تحكم إضافي",
    price: 95,
    image: "https://cdn.pixabay.com/photo/2014/05/02/21/50/mouse-336486_1280.jpg",
    category: "ملحقات"
  },
  {
    id: 12,
    name: "جهاز لوحي",
    description: "تابلت بحجم 10 بوصة مناسب للتصفح والتعلم",
    price: 1600,
    image: "https://cdn.pixabay.com/photo/2015/05/31/12/14/laptop-792585_1280.jpg",
    category: "أجهزة لوحية"
  },
  {
    id: 13,
    name: "سماعة رأس احترافية",
    description: "صوت محيطي عميق مناسب للألعاب والمونتاج",
    price: 480,
    image: "https://images.pexels.com/photos/339465/pexels-photo-339465.jpeg",
    category: "سماعات"
  },
  {
    id: 14,
    name: "شاشة 24 بوصة",
    description: "شاشة بدقة FHD مناسبة للعمل واللعب",
    price: 850,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    category: "شاشات"
  },
  {
    id: 15,
    name: "شاحن سريع",
    description: "شاحن USB-C بقدرة 30 واط",
    price: 65,
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/23/power-bank-1868606_1280.jpg",
    category: "إكسسوارات"
  },
  {
    id: 16,
    name: "كاميرا رقمية",
    description: "كاميرا عالية الدقة مناسبة للمصورين المبتدئين",
    price: 2100,
    image: "https://images.pexels.com/photos/51383/camera-lens-photographer-photography-51383.jpeg",
    category: "كاميرات"
  },
  {
    id: 17,
    name: "مايكروفون USB",
    description: "مايك احترافي للبودكاست والتسجيل الصوتي",
    price: 320,
    image: "https://images.unsplash.com/photo-1512690452354-7f59bcf0df13?auto=format&fit=crop&w=800&q=80",
    category: "إكسسوارات"
  },
  {
    id: 18,
    name: "لوحة رسم إلكترونية",
    description: "لوحة للرسم الرقمي مع قلم حسّاس للضغط",
    price: 600,
    image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/drawing-1994821_1280.jpg",
    category: "أجهزة لوحية"
  },
  {
    id: 19,
    name: "جهاز تخزين SSD 512GB",
    description: "وحدة تخزين سريعة لنظام التشغيل والألعاب",
    price: 370,
    image: "https://images.pexels.com/photos/51383/ssd-solid-state-drive-51383.jpeg",
    category: "ملحقات"
  },
  {
    id: 20,
    name: "سماعة أذن داخلية",
    description: "مناسبة للجوالات وتقدم صوت نقي",
    price: 75,
    image: "https://cdn.pixabay.com/photo/2017/07/31/23/15/earphone-2551832_1280.jpg",
    category: "سماعات"
  },
  {
    id: 21,
    name: "هاتف ذكي متوسط المواصفات",
    description: "هاتف بكاميرا مزدوجة وبطارية تدوم طويلاً",
    price: 1400,
    image: "https://images.pexels.com/photos/6078126/pexels-photo-6078126.jpeg",
    category: "هواتف"
  },
  {
    id: 22,
    name: "حامل لابتوب",
    description: "حامل معدني بزاوية مريحة لزيادة الإنتاجية",
    price: 110,
    image: "https://images.unsplash.com/photo-1567016432779-9cabb3aefa0d?auto=format&fit=crop&w=800&q=80",
    category: "ملحقات"
  },
  {
    id: 23,
    name: "كاميرا ويب HD",
    description: "كاميرا للمكالمات والاجتماعات عبر الإنترنت",
    price: 180,
    image: "https://images.pexels.com/photos/219010/pexels-photo-219010.jpeg",
    category: "كاميرات"
  },
  {
    id: 24,
    name: "شاحن سيارة USB",
    description: "شاحن مزدوج للمسافر العصري",
    price: 45,
    image: "https://cdn.pixabay.com/photo/2017/06/20/21/25/charger-2427810_1280.jpg",
    category: "إكسسوارات"
  },
  {
    id: 25,
    name: "كيبورد ألعاب بإضاءة خلفية",
    description: "لوحة مفاتيح بأزرار صامتة وتصميم مميز",
    price: 270,
    image: "https://images.unsplash.com/photo-1610426781556-d01427994dce?auto=format&fit=crop&w=800&q=80",
    category: "ملحقات"
  }
];
