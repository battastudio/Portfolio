# Batta Studio — Website · موقع بطة ستوديو

الموقع الرسمي لاستوديو Batta. مبني بـ HTML / CSS / JS عادي بدون أي build step،
جاهز للرفع مباشرة على GitHub Pages أو أي استضافة ثابتة.

The official Batta Studio site. Plain HTML/CSS/JS, no build step, ready for GitHub Pages.

---

## 📁 الملفات / Files
```
index.html            الصفحة الرئيسية / main page
assets/
  styles.css          التنسيقات / styles
  script.js           تبديل اللغة + عرض الألعاب + التأثيرات
  games.js            ← بيانات الألعاب (عدّلها لإضافة مشاريع)
  logo.svg            شعار البطة كامل / full mascot
  logo-head.svg       رأس البطة (أيقونة) / head icon
  og-image.png        صورة المشاركة / social preview
```

---

## 🚀 الرفع على GitHub Pages / Deploy

1. أنشئ مستودع جديد (مثلاً `battastudio-site`) على GitHub، وارفع كل الملفات لجذر المستودع.
   ```bash
   git init
   git add .
   git commit -m "Batta Studio site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
2. من صفحة المستودع: **Settings → Pages**.
3. تحت **Build and deployment → Source** اختر **Deploy from a branch**.
4. اختر الفرع `main` والمجلد `/ (root)` ثم **Save**.
5. بعد دقيقة، الموقع بيكون شغّال على:
   `https://<username>.github.io/<repo>/`

> نصيحة: إذا بدك دومين خاص (battastudio.com)، ضيفه من **Settings → Pages → Custom domain**،
> وأضف ملف `CNAME` فيه اسم الدومين.

الملف `.nojekyll` موجود عشان GitHub Pages يرفع الملفات كما هي بدون معالجة.

---

## ➕ إضافة لعبة جديدة / Add a game

افتح `assets/games.js` وأضف بلوك جديد داخل القائمة:

```js
{
  title: "My New Game",
  titleAr: "لعبتي الجديدة",
  tagline: "One-line pitch in English.",
  taglineAr: "جملة تعريفية بالعربي.",
  status: "development",          // released | development | prototype | soon
  tags: ["Puzzle", "PC"],
  accent: "#E87A2C",              // لون رأس البطاقة
  emoji: "🎮",
  link: "https://store-link..."   // أو "#"
}
```

يظهر تلقائياً في قسم الألعاب — ما في داعي تعدّل أي شي ثاني.
It renders automatically in the Games section — nothing else to change.

---

## 🎨 الهوية / Brand
الألوان والخطوط مأخوذة من دليل هوية Batta Studio:
Teal `#1E5F65` · Orange `#E87A2C` · Yellow `#F5C518` · Cream `#FBEFD9` · Ink `#0F2A2E`.
الخطوط: Space Grotesk (EN) · Cairo (AR) · Press Start 2P (pixel).

الروابط الاجتماعية في قسم "تابعنا" حالياً `#` — بدّلها بروابطك الحقيقية داخل `index.html`.
