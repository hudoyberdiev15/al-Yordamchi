/* Al Joʻjacha miyasi: til aniqlash, xatoga chidamli qidiruv, pishirish vaqti hisoblagichi, suhbat kontekstini eslab qolish */
const Engine=(function(){
const norm=s=>s.toLowerCase().replace(/[’‘`ʻʼ´]/g,"'").replace(/ё/g,'е').trim();
const flat=s=>norm(s).replace(/'/g,'');
const toks=s=>flat(s).split(/[^\p{L}\p{N}]+/u).filter(Boolean);
const pick=a=>a[Math.floor(Math.random()*a.length)];

function lev(a,b){const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=[...Array(n+1).keys()];for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c}return p[n]}
function hit(tok,stem){
  if(tok===stem)return true;
  if(stem.length<=3)return false;
  if(tok.startsWith(stem))return true;
  if(stem.length>=5&&tok.length>=stem.length-1)return lev(tok.slice(0,stem.length),stem)<=1;
  return false;
}
function detect(raw){
  const t=norm(raw);
  const cyr=(t.match(/[а-я]/g)||[]).length,lat=(t.match(/[a-z]/g)||[]).length;
  if(cyr>lat)return 'ru';
  const en=(t.match(/\b(the|how|what|which|is|are|do|does|can|chicken|cook|cooking|long|minutes|salad|spice|spices|best|part|parts|tasty|recipe|hello|hi|hey|thanks|thank|you|your|for|with|to|of|and|please|make|meat)\b/g)||[]).length;
  const uz=(t.match(/(tovuq|qanday|necha|nima|uchun|bilan|qaysi|mazali|pishad|salom|rahmat|ziravor|daqiqa|go'sht|gosht|qancha|kerak|yaxshi|bo'ladi|boladi|haqida)/g)||[]).length;
  if(en>uz&&en>0)return 'en';
  if(uz>0)return 'uz';
  if(lat>0)return 'uz';
  return null;
}

/* ---- Pishirish vaqti jadvali (daqiqa) ---- */
const TM={
 breast:{oven:'20–25',pan:'12–15',boil:'15–20',grill:'12–16',air:'15–18'},
 thigh:{oven:'35–45',pan:'20–25',boil:'30–35',grill:'25–30',air:'22–28'},
 leg:{oven:'35–45',pan:'25–30',boil:'30–40',grill:'25–35',air:'20–25'},
 wing:{oven:'35–45',pan:'15–20',boil:'20–25',grill:'20–25',air:'20–25'},
 whole:{oven:'',boil:'60–75'}
};
const PN={breast:{uz:"Ko'krak (fileyi)",ru:'Грудка (филе)',en:'Breast (fillet)'},thigh:{uz:'Son (suyakli)',ru:'Бедро (на кости)',en:'Thigh (bone-in)'},leg:{uz:'Boldir',ru:'Голень',en:'Drumstick'},wing:{uz:'Qanot',ru:'Крылышки',en:'Wings'},whole:{uz:'Butun tovuq',ru:'Целая курица',en:'Whole chicken'}};
const MN={oven:{uz:'Pechda (200°C)',ru:'В духовке (200°C)',en:'Oven (200°C)'},pan:{uz:'Tovada',ru:'На сковороде',en:'Pan-fried'},boil:{uz:'Qaynatib',ru:'Варка',en:'Boiled'},grill:{uz:'Grilda',ru:'На гриле',en:'Grilled'},air:{uz:'Aerogrilda (190–200°C)',ru:'В аэрогриле (190–200°C)',en:'Air fryer (190–200°C)'}};
const MIN={uz:'daqiqa',ru:'мин',en:'min'};
const NOTE={uz:"Vaqt o'rtacha bo'lak uchun taxminiy. Eng ishonchli belgi: ichki harorat 74°C.",ru:'Время приблизительное, для куска среднего размера. Самый надёжный признак: внутри 74°C.',en:'Times are approximate for an average-size piece. The most reliable sign is an internal temperature of 74°C.'};
const ASK={uz:"Qaysi qism (ko'krak, son, boldir, qanot yoki butun tovuq) va qanday usulda (pech, tovada, qaynatish, gril) pishirmoqchisiz? Hozircha pechdagi vaqtlarni aytaman:",ru:'Какую часть (грудка, бедро, голень, крылья или целая курица) и каким способом (духовка, сковорода, варка, гриль) хотите готовить? Пока скажу время для духовки:',en:"Which part (breast, thigh, drumstick, wings or whole chicken) and which method (oven, pan, boiling, grill)? For now, here are oven times:"};
function dur(m,L){if(m<60)return m+' '+MIN[L];const h=Math.floor(m/60),r=m%60;const u={uz:['soat','daqiqa'],ru:['ч','мин'],en:['h','min']}[L];return h+' '+u[0]+(r?' '+r+' '+u[1]:'')}
const INTRO_V={uz:[x=>`${x} bo'yicha tavsiyalarim:`,x=>`${x} haqida batafsil:`,x=>`Mana, ${x} uchun aniq ma'lumot:`,x=>`${x}: kerakli hammasi shu yerda.`],ru:[x=>`Мои рекомендации: ${x}:`,x=>`Подробно: ${x}:`,x=>`Вот точная информация: ${x}:`],en:[x=>`Here are my tips for ${x}:`,x=>`${x}, in detail:`,x=>`Here's exactly what you need for ${x}:`]};
function introT(L,x){return pick(INTRO_V[L])(x)}
const OP={uz:["Albatta! ","Mamnuniyat bilan. ","Mana, aytib beraman. ","Xo'p, tushuntiraman. ","Yaxshi savol! ","Hozir aytaman. ","",""],ru:['Конечно! ','С удовольствием. ','Вот что я знаю. ','Хороший вопрос! ','Сейчас расскажу. ','',''],en:['Sure! ','Happy to help. ',"Here's what I know. ",'Good question! ',"Let me explain. ",'','']};
const CL={uz:[" Yana bilmoqchi bo'lganingiz bo'lsa, so'rayvering."," Boshqa taom yoki savol bo'lsa, ayting."," Yana nima qiziq?"," Davom ettiramizmi?","",""],ru:[' Если есть ещё вопросы, спрашивайте.',' Могу подсказать и другие блюда.',' Что ещё интересует?','',''],en:[' Ask me anything else.',' I can suggest other dishes too.',' What else would you like to know?','','']};
let lo='',lc='';
function vary(t,L){let o=pick(OP[L]),c=pick(CL[L]);if(o===lo)o='';if(c===lc)c='';lo=o;lc=c;return o+t+c}
const EQ=[[/shashlik|шашлык|kebab|kabob/,'chicken kebab'],[/shorva|sho'rva|суп|soup/,'chicken soup'],[/salat|салат|salad/,'chicken salad'],[/tabaka|табака/,'chicken tabaka'],[/kotlet|котлет|cutlet/,'chicken cutlet'],[/shaurma|шаурма|shawarma/,'chicken shawarma'],[/palov|плов|pilaf|plov/,'chicken pilaf'],[/nugget|нагет|naget/,'chicken nuggets'],[/samsa|самса/,'chicken samsa'],[/lagmon|lag'mon|лагман/,'laghman noodles'],[/qanot|крыл|wing/,'chicken wings'],[/kokrak|ko'krak|грудк|breast|fillet|fileli|file/,'chicken breast'],[/boldir|голен|drumstick/,'chicken drumstick'],[/tuxum|яйц|egg/,'chicken egg'],[/joja|jo'ja|цыпл|chick\b/,'chicks'],[/grill|гриль/,'grilled chicken'],[/pech|духов|oven|roast|qovur|жарен|fried/,'roasted chicken']];
function enQuery(raw){const t=norm(raw);for(const x of EQ)if(x[0].test(t))return x[1];return 'chicken meat dish'}
const LB={temp:{uz:'Harorat',ru:'Температура',en:'Temperature'},time:{uz:'Vaqt',ru:'Время',en:'Time'},ing:{uz:'Kerakli masalliqlar',ru:'Ингредиенты',en:'Ingredients'},steps:{uz:'Tayyorlash usuli',ru:'Способ приготовления',en:'Method'},tip:{uz:'Jojacha maslahati',ru:'Совет Jojacha',en:'Jojacha tip'}};
const TEMP={oven:{uz:'200°C',ru:'200°C',en:'200°C'},air:{uz:'190–200°C',ru:'190–200°C',en:'190–200°C'},pan:{uz:"o'rtacha olov",ru:'средний огонь',en:'medium heat'},boil:{uz:'sekin qaynash',ru:'слабое кипение',en:'gentle simmer'},grill:{uz:"o'rtacha-yuqori olov",ru:'средне-сильный огонь',en:'medium-high heat'}};
const OV={uz:'pechda',ru:'в духовке',en:'oven'};
const TIP74={uz:"Pishganini tekshirish uchun go'shtning ichki harorati kamida 74°C bo'lishi kerak. Vaqt o'rtacha bo'lak uchun taxminiy.",ru:'Курица готова, когда внутри не менее 74°C. Время приблизительное, для куска среднего размера.',en:'Chicken is done at an internal temperature of at least 74°C. Times are approximate for an average piece.'};
const INTRO_T={uz:x=>`${x} bo'yicha tavsiyalarim:`,ru:x=>`Мои рекомендации: ${x}:`,en:x=>`Here are my tips for ${x}:`};
function card(L,o){return Object.assign({lb:{temp:LB.temp[L],time:LB.time[L],ing:LB.ing[L],steps:LB.steps[L],tip:LB.tip[L]}},o)}
function timeReply(part,method,kg,L){
  const mk=(title,box,rows,tip)=>({t:introT(L,title),card:card(L,{box,rows,tip:tip||TIP74[L]})});
  if(part==='whole'||(!part&&kg&&kg>=1&&(!method||method==='oven'))){
    if(method==='boil')return mk(PN.whole[L]+', '+MN.boil[L],[[LB.temp[L],TEMP.boil[L]],[LB.time[L],'60–75 '+MIN[L]]]);
    const k=kg||1.5,m=Math.round((k*45+20)/5)*5;
    return mk(PN.whole[L]+' ('+k+' kg), '+OV[L],[[LB.temp[L],'180°C'],[LB.time[L],'~'+dur(m,L)]],null,{uz:'Har 1 kg ga ~45 daqiqa va yana 20 daqiqa hisoblang. '+TIP74.uz,ru:'Считайте ~45 минут на 1 кг плюс 20 минут. '+TIP74.ru,en:'Count ~45 minutes per kg plus 20 minutes. '+TIP74.en}[L]);
  }
  if(part&&method){
    if(!TM[part][method])return timeReply(part,'oven',kg,L);
    return mk(PN[part][L]+', '+MN[method][L],[[LB.temp[L],TEMP[method][L]],[LB.time[L],TM[part][method]+' '+MIN[L]]]);
  }
  if(part)return mk(PN[part][L],null,['oven','pan','boil','grill','air'].map(m=>[MN[m][L],TM[part][m]+' '+MIN[L]]));
  if(method)return mk(MN[method][L],[[LB.temp[L],TEMP[method][L]]],['breast','thigh','leg','wing'].map(p=>[PN[p][L],TM[p][method]+' '+MIN[L]]));
  const OVT={uz:"Tovuq go'shti pishish vaqti qismiga va usuliga bog'liq. Aniq vaqtlar:",ru:'Время готовки курицы зависит от части и способа. Точные цифры:',en:'Cooking time depends on the part and the method. Exact times:'};
  const SH={oven:{uz:'pech',ru:'духовка',en:'oven'},pan:{uz:'tovada',ru:'сковорода',en:'pan'},boil:{uz:'qaynatish',ru:'варка',en:'boil'}};
  const INT={uz:'ichki harorat',ru:'внутри',en:'internal'};
  const TIPQ={uz:' Qism va usulni aytsangiz, aniqroq hisoblab beraman.',ru:' Назовите часть и способ, и я посчитаю точнее.',en:' Tell me the part and method and I will be more precise.'};
  const rows=['breast','thigh','leg','wing'].map(p=>[PN[p][L],['oven','pan','boil'].map(m=>SH[m][L]+' '+TM[p][m]).join(', ')+' '+MIN[L]]);
  rows.push([PN.whole[L]+' (1,5 kg)',SH.oven[L]+' ~'+dur(Math.round((1.5*45+20)/5)*5,L)+', '+SH.boil[L]+' 60–75 '+MIN[L]]);
  return {t:OVT[L],card:card(L,{box:[[LB.temp[L],'74°C ('+INT[L]+')']],rows,tip:TIP74[L]+TIPQ[L]})};
}

/* ---- Aniqlagichlar ---- */
const P_BREAST=/(kokrak|file|fileyi|грудк|филе|breast|fillet)/,P_LEG=/(boldir|голен|ножк|окорочок|drumstick|\bleg)/,P_WING=/(qanot|крыл|wing)/,P_WHOLE=/(butun|целая|целую|целиком|whole)/;
function parts(t,tk){
  if(P_BREAST.test(t))return 'breast';
  if(P_LEG.test(t))return 'leg';
  if(P_WING.test(t))return 'wing';
  if(P_WHOLE.test(t))return 'whole';
  if(tk.some(w=>/^(son|sonni|sonlari|sonlar|sonini|бедро|бедра|бедре|бедер|thigh|thighs)$/.test(w)))return 'thigh';
  return '';
}
function method(t){
  if(/(air ?fryer|aerogril|аэрогриль|аэрофритюр)/.test(t))return 'air';
  if(/(grill|гриль|mangal|мангал|shashlik|шашлык|kabob|kebab|bbq)/.test(t))return 'grill';
  if(/(pech|духов|запек|запеч|oven|bake|roast)/.test(t))return 'oven';
  if(/(qaynat|qaynab|shorva|варк|варит|вариться|сварит|кипят|boil|simmer|soup)/.test(t))return 'boil';
  if(/(qovur|tovada|skovorod|жар|сковород|\bfry|fried|frying|\bpan\b)/.test(t))return 'pan';
  return '';
}
const TIME=/(necha (daqiqa|minut|soat)|qancha (vaqt|pishadi|daqiqa|soat)|pishadi|pishiriladi|qachon pish|pishish vaqti|qancha pishir|сколько|время|минут|how long|minutes|cook(ing)? time|how many min|cook for)/;
const MENU=/(barcha taom|hamma taom|taomlar ro'?yxat|nima taom|qanday taomlar|qanday ovqat|barcha retsept|hamma retsept|retseptlar|nima tayyorla|nimalar tayyorla|все блюда|все рецепт|список блюд|что приготов|что можно приготов|all dishes|all recipes|list of dishes|what dishes|what can i cook|what can i make|what to cook)/;
const HOWC=/(qanday pish|qanday tayyorla|qanday qovur|как готов|как пригот|how to cook|how do i cook|how do you cook)/;
const GREET=/(^|\s)(salom|assalom|assalomu|салом|ассалом|привет|здравствуй|здравствуйте|добрый день|добрый вечер|hello|hi|hey|good morning|good evening)(?=\s|$|[!.,?])|alaykum|aleykum/;
const HOW=/(qalaysiz|qalaysan|yaxshimisiz|yaxshimisan|ahvol|как дела|как ты|how are you|nima gap|nima yangilik)/;
const THX=/(rahmat|raxmat|tashakkur|спасибо|благодар|thank)/;
const BYE=/(xayr|hayr|korishguncha|salomat bol|(^|\s)пока(\s|$|[!.,])|до свидания|bye|goodbye)/;
const WHO=/(isming|kimsan|kimsiz|nima qila olasan|nima qila olasiz|что ты|кто ты|who are you|what can you do)/;
const IMG=/(rasm|chiz|surat|фото|нарису|картин|рисун|picture|draw|image|photo|google|гугл)/;
const CH={
 greet:{uz:'Assalomu alaykum! Al Joʻjacha sizga qanday yordam bera olaman?',ru:'Здравствуйте! Я Al Joʻjacha. Чем могу вам помочь?',en:'Hello! This is Al Joʻjacha. How can I help you?'},
 how:{uz:'Rahmat, yaxshiman! Tovuq go\'shti haqida nimani bilmoqchisiz?',ru:'Спасибо, всё хорошо! Что хотите узнать о курице?',en:"Thanks, I'm doing well! What would you like to know about chicken?"},
 thx:{uz:["Arzimaydi! Yana savolingiz bo'lsa, so'rayvering.","Marhamat! Yana nima qiziq?"],ru:['Пожалуйста! Если будут ещё вопросы, спрашивайте.','Рад помочь! Что ещё интересует?'],en:["You're welcome! Ask me anything else.","Happy to help! What else would you like to know?"]},
 bye:{uz:"Xayr, sog' bo'ling! Yana savol bo'lsa, men shu yerdaman.",ru:'До свидания! Если появятся вопросы, я здесь.',en:"Goodbye! I'm here if you have more questions."},
 who:{uz:"Men Al Joʻjachaman, tovuq go'shti bo'yicha yordamchingiz. Tovuq qancha va qanday pishishi, ziravor, salat, mazali qismlar, retseptlar va nima tanlash haqida gaplashamiz.",ru:'Я Al Joʻjacha, ваш помощник по куриному мясу. Расскажу, сколько и как готовить курицу, какие специи и салаты выбрать, какие части вкуснее, и подскажу рецепты.',en:"I'm Al Joʻjacha, your chicken-meat assistant. I can tell you how long and how to cook chicken, which spices and salads to pick, which parts taste best, and share recipes."},
 off:{uz:["Bu savolga aniq javob topa olmadim. Men tovuq go'shti haqida gapira olaman: qancha pishishi, ziravorlar, salatlar, mazali qismlar, retseptlar. Savolni boshqacha so'rab ko'rasizmi?"],ru:['Не нашёл точного ответа на этот вопрос. Я могу рассказать о курином мясе: сколько готовить, какие специи, салаты, самые вкусные части, рецепты. Попробуете спросить по-другому?'],en:["I couldn't find a precise answer to that. I can talk about chicken meat: cooking times, spices, salads, the tastiest parts and recipes. Could you rephrase your question?"]},
 img:{hen:{uz:'Mana, tovuq 🐔',ru:'Вот курица 🐔',en:'Here is a hen 🐔'},egg:{uz:'Mana, tuxum 🥚',ru:'Вот яйцо 🥚',en:'Here is an egg 🥚'},chick:{uz:"Mana, yoqimtoy jo'ja 🐥",ru:'Вот милый цыплёнок 🐥',en:'Here is a cute chick 🐥'},salad:{uz:'Mana, tovuqli salat 🥗',ru:'Вот салат с курицей 🥗',en:'Here is a chicken salad 🥗'},roast:{uz:'Mana, pishgan tovuq taomi 🍗',ru:'Вот запечённая курица 🍗',en:'Here is roast chicken 🍗'},parts:{uz:"Tovuq go'shtining asosiy bo'laklari mana bunday:",ru:'Основные части курицы выглядят так:',en:'The main chicken cuts look like this:'}}
};

function reply(raw,ctx,ui){
  ctx=ctx||{};
  const f=flat(raw),tk=toks(raw);
  const L=detect(raw)||ctx.lang||ui||'uz';
  const rcOut=(rb)=>{const c=rb.c[L];const box=[];if(c.temp)box.push([LB.temp[L],c.temp]);if(c.time)box.push([LB.time[L],c.time]);return out(introT(L,c.title),{intent:'kb',part:'',method:''},card(L,{box:box.length?box:null,ing:c.ing,steps:c.steps,rows:c.rows,tip:c.tip}))};
  const out=(t,extra,cd)=>{const r={t,lang:L,ctx:Object.assign({},ctx,{lang:L},extra||{})};if(cd)r.card=cd;return r};
  if(GREET.test(f)&&tk.length<=6)return out(CH.greet[L],{intent:''});
  if(HOW.test(f))return out(CH.how[L],{intent:''});
  if(THX.test(f))return out(pick(CH.thx[L]),{intent:''});
  if(BYE.test(f))return out(CH.bye[L],{intent:''});
  if(WHO.test(f))return out(CH.who[L],{intent:''});
  if(IMG.test(f)){
    let k='hen';
    if(/(salat|салат|salad)/.test(f))k='salad';else if(/(taom|блюд|dish|roast|pech|духов|qovur|жарен)/.test(f))k='roast';else if(/(tuxum|egg|яйц)/.test(f))k='egg';else if(/(joja|chick|цыпл)/.test(f))k='chick';else if(/(bolak|anatom|qism|kokrak|части|cuts|parts)/.test(f))k='parts';
    const r=out(CH.img[k][L],{intent:''});r.i=k;r.photoQ=enQuery(raw);return r;
  }
  const part=parts(f,tk),meth=method(f);
  const wm=f.match(/(\d+(?:[.,]\d+)?)\s*(kg|kilo|кг|килограмм|kilogram)/);
  const kg=wm?parseFloat(wm[1].replace(',','.')):0;
  const isTime=TIME.test(f)||(/(^|\s)(qancha|necha|сколько|how long|how many|how much)(\s|$)/.test(f)&&!!(part||meth));
  const follow=ctx.intent==='time'&&!isTime&&!kg&&tk.length<=6&&(part||meth);
  /* bilimlar bazasi: kalit so'zlar bo'yicha baholash */
  let best=null,bs=0;
  for(const e of KB){
    let s=0;
    for(const k of e.k){
      const kk=flat(k);
      if(kk.includes(' ')){if(f.includes(kk))s+=kk.length*1.2}
      else if(tk.some(w=>hit(w,kk)))s+=kk.length;
    }
    if(s>bs){bs=s;best=e}
  }
  let rb=null,rs=0;
  for(const e of RC){
    let s2=0;
    for(const k of e.k){
      const kk=flat(k);
      if(kk.includes(' ')){if(f.includes(kk))s2+=kk.length*1.2}
      else if(tk.some(w=>hit(w,kk)))s2+=kk.length;
    }
    s2*=2;if(s2>rs){rs=s2;rb=e}
  }
  const strong=(rb&&rs>=6)||(best&&bs>=4);
  if(MENU.test(f)){const rows=RC.filter(x=>x.c&&x.c[L]&&x.c[L].time&&x.k[0]!=='__howto').map(x=>[x.c[L].title,x.c[L].time]);const MT={uz:"Tovuq go'shtidan tayyorlanadigan taomlar va tayyorlash vaqti. Istalganining nomini yozing, aniq retseptini beraman:",ru:'Блюда из курицы и время приготовления. Напишите название любого, и я дам точный рецепт:',en:'Chicken dishes and their cooking times. Type the name of any dish and I will give you the exact recipe:'};return out(MT[L],{intent:'menu'},card(L,{rows:rows,tip:TIP74[L]}))}
  if(HOWC.test(f)&&!part&&!meth&&!kg&&!strong){const h=RC.find(x=>x.k[0]==='__howto');if(h)return rcOut(h)}
  if((isTime&&!(strong&&!part&&!meth))||follow){
    const p=part||(follow?ctx.part:'')||'',m=meth||(follow?ctx.method:'')||'';
    const tr=timeReply(p,m,kg,L);return out(tr.t,{intent:'time',part:p,method:m},tr.card);
  }
  if(rb&&rs>=6&&rs>=bs)return rcOut(rb);
  if(best&&bs>=4)return out(vary(best.a[L],L),{intent:'kb',part:'',method:''});
  if(rb&&rs>=2&&rs>=bs)return rcOut(rb);
  const NEAR={uz:"Bu mavzuga eng yaqin ma'lumot: ",ru:'Ближе всего к вашему вопросу вот что: ',en:'The closest information to your question: '};
  if(best&&bs>=2)return out(NEAR[L]+best.a[L],{intent:'kb',part:'',method:''});
  if(part||meth){const tr=timeReply(part,meth,kg,L);return out(tr.t,{intent:'time',part:part,method:meth},tr.card)}
  const ab=KB.find(x=>x.k[0]==='__about');
  if(/(tovuq|кур(иц|ин)|цыпл|chicken|go'?sht|мясо|meat|taom|блюд|dish|ovqat|еда|food)/.test(norm(raw)))return out(vary(ab.a[L],L),{intent:'kb'});
  const RD={uz:["Men tovuq go'shti mavzusida ishlayman, shuning uchun shu yo'nalishda eng aniq javob beraman: tovuq qancha pishadi, qanday ziravorlar va salatlar mos, yoki istalgan tovuq taomining retsepti."],ru:['Я специализируюсь на курином мясе и лучше всего отвечаю на такие вопросы: сколько готовить курицу, какие специи и салаты подойдут, рецепт любого блюда из курицы.'],en:["I specialize in chicken meat, so that's where my answers are strongest: how long to cook chicken, which spices and salads work, or the recipe for any chicken dish."]};
  return out(vary(pick(RD[L]),L),{intent:''});
}
return {reply,detect};
})();
if(typeof module!=='undefined')module.exports=Engine;
