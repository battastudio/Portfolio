# Batta Studio — Website · موقع بطة ستوديو

الموقع الرسمي لاستوديو Batta.

The official Batta Studio site. Plain HTML/CSS/JS, no build step, ready for GitHub Pages.


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
