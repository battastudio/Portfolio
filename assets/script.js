/* ===== BATTA STUDIO — public site script ===== */

const I18N = {
  "nav.about":{ar:"من نحن",en:"About"},
  "nav.games":{ar:"الألعاب",en:"Games"},
  "nav.follow":{ar:"تابعنا",en:"Follow"},

  "hero.pill":{ar:"▶ استوديو ألعاب مستقل",en:"▶ Indie game studio"},
  "hero.tag":{ar:"نصنع ألعاباً وبرامج صغيرة، ذكية، وممتعة — بروح المطوّر المستقل. وبطلنا بطة اسمها Batta.",en:"We build small, smart, delightful games and software — with an indie maker's spirit. Our hero is a duck named Batta."},
  "hero.cta1":{ar:"شوف ألعابنا",en:"See our games"},
  "hero.cta2":{ar:"تابعنا",en:"Follow us"},

  "about.h":{ar:"نبذة عن الاستوديو",en:"About the studio"},
  "about.p":{ar:"Batta Studio استوديو مستقل نبني فيه ألعاباً وبرامج بروح اللعب. نبدأ صغير، نصقل التفاصيل، ونطلع بتجارب تُلعب وتُحَب. هاي البداية — والقادم أحلى.",en:"Batta Studio is an indie studio building games and software with a playful spirit. We start small, polish the details, and ship experiences made to be loved. This is just the beginning."},
  "v1.h":{ar:"ألعاب أولاً",en:"Games first"},
  "v1.p":{ar:"نصمّم اللعب قبل أي شي — متعة بسيطة تنمسك من أول دقيقة.",en:"We design the play before anything else — simple fun you feel from minute one."},
  "v2.h":{ar:"بساطة مصقولة",en:"Polished simplicity"},
  "v2.p":{ar:"فيكتور نظيف + لمسة بكسل. كل تفصيل مدروس، بلا زحمة.",en:"Clean vector + a pixel touch. Every detail intentional, nothing cluttered."},
  "v3.h":{ar:"مستقلّون",en:"Independent"},
  "v3.p":{ar:"حرية إبداعية كاملة، ونشحن بسرعة، ونسمع من اللاعبين.",en:"Full creative freedom, we ship fast, and we listen to players."},

  "games.h":{ar:"ألعابنا ومشاريعنا",en:"Games & projects"},
  "games.p":{ar:"مجموعة من المشاريع اللي نشتغل عليها. القائمة بتكبر مع الوقت.",en:"A selection of what we're working on. The list keeps growing."},
  "games.more":{ar:"🚧 مشاريع جديدة قيد الطبخ — تابعنا عشان أول ما تنزل.",en:"🚧 New projects in the oven — follow us to catch them first."},

  "follow.h":{ar:"تابع رحلة Batta",en:"Follow Batta's journey"},
  "follow.p":{ar:"صار جاهز لأول لعبة؟ تابعنا على المنصّات وكن أول من يجرّب.",en:"Ready for the first game? Follow us and be the first to play."},
  "s.li":{ar:"LinkedIn",en:"LinkedIn"},"s.ig":{ar:"Instagram",en:"Instagram"},
  "s.x":{ar:"X / Twitter",en:"X / Twitter"},"s.gh":{ar:"GitHub",en:"GitHub"},
  "s.itch":{ar:"itch.io",en:"itch.io"},"s.dc":{ar:"Discord",en:"Discord"},

  "foot.rights":{ar:"جميع الحقوق محفوظة.",en:"All rights reserved."}
};

const STATUS = {
  released:    {ar:"متوفّرة",   en:"Released"},
  development: {ar:"قيد التطوير",en:"In dev"},
  prototype:   {ar:"نموذج أولي", en:"Prototype"},
  soon:        {ar:"قريباً",     en:"Coming soon"}
};

let LANG = "ar";

function setLang(l){
  LANG = l;
  const html = document.documentElement;
  html.lang = l; html.dir = (l === "ar") ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if (I18N[k]) el.textContent = I18N[k][l];
  });
  document.getElementById("langToggle").textContent = (l === "ar") ? "EN" : "عربي";
  renderGames();
}

function renderGames(){
  const grid = document.getElementById("gamesGrid");
  const games = window.BATTA_GAMES || [];
  grid.innerHTML = games.map(g=>{
    const title = LANG === "ar" ? (g.titleAr || g.title) : g.title;
    const tag   = LANG === "ar" ? (g.taglineAr || g.tagline) : g.tagline;
    const st    = STATUS[g.status] || STATUS.soon;
    const accent = g.accent || "#1E5F65";
    const tags  = (g.tags || []).map(t=>`<span class="gtag">${t}</span>`).join("");
    return `<a class="gcard reveal in" href="${g.link || '#'}">
      <div class="gcard-top" style="background:${accent}">
        <span class="badge ${g.status}">${st[LANG]}</span>
        <span class="gcard-emoji">${g.emoji || "🎮"}</span>
      </div>
      <div class="gcard-body">
        <div class="gcard-title">${title}</div>
        <div class="gcard-tag">${tag}</div>
        <div class="gtags">${tags}</div>
      </div></a>`;
  }).join("");
}

/* mobile nav */
const hamb = document.getElementById("hamb");
const links = document.getElementById("links");
hamb.addEventListener("click", ()=> links.classList.toggle("open"));
links.querySelectorAll("a").forEach(a=> a.addEventListener("click", ()=> links.classList.remove("open")));

/* lang toggle */
document.getElementById("langToggle").addEventListener("click", ()=> setLang(LANG === "ar" ? "en" : "ar"));

/* scroll reveal */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} });
},{threshold:.14});
document.querySelectorAll(".reveal").forEach(el=> io.observe(el));

/* year + init */
document.getElementById("year").textContent = new Date().getFullYear();
setLang("ar");
