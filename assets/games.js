/* ============================================================
   BATTA STUDIO — Games / Projects data
   ------------------------------------------------------------
   لإضافة لعبة أو مشروع جديد: انسخ بلوك { ... } وعدّل القيم.
   To add a new game/project: copy a { ... } block and edit it.

   status options / خيارات الحالة:
     "released"     → متوفّرة / Released      (أخضر)
     "development"  → قيد التطوير / In dev     (برتقالي)
     "prototype"    → نموذج أولي / Prototype   (أصفر)
     "soon"         → قريباً / Coming soon     (رمادي)

   accent: أي لون hex للبطاقة العلوية (اختياري)
   emoji : أي إيموجي يمثّل اللعبة (يظهر فوق البطاقة)
   link  : رابط الصفحة/المتجر (اختياري، افتراضي "#")
   ============================================================ */

window.BATTA_GAMES = [
  {
    title: "Duck Dash",
    titleAr: "دَك داش",
    tagline: "A fast, one-tap runner. Dodge, dive, and beat your best.",
    taglineAr: "لعبة جري سريعة بلمسة واحدة. تفادَ، انطلق، واكسر رقمك القياسي.",
    status: "development",
    tags: ["Arcade", "Mobile", "Single-player"],
    accent: "#F98C40",
    emoji: "🏃",
    link: "#"
  },
  {
    title: "Pixel Pond",
    titleAr: "بركة البكسل",
    tagline: "A cozy puzzle about growing a little pixel pond, one duck at a time.",
    taglineAr: "لعبة ألغاز هادئة عن تكبير بركة بكسل صغيرة، بطة بطة.",
    status: "prototype",
    tags: ["Puzzle", "Cozy", "PC"],
    accent: "#2E505E",
    emoji: "🧩",
    link: "#"
  },
  {
    title: "Quack Quest",
    titleAr: "كواك كويست",
    tagline: "A tiny top-down adventure. Explore, collect, and help the flock.",
    taglineAr: "مغامرة صغيرة من الأعلى. استكشف، اجمع، وساعد السرب.",
    status: "soon",
    tags: ["Adventure", "Pixel-art", "PC"],
    accent: "#FFD65B",
    emoji: "🗺️",
    link: "#"
  }
];
