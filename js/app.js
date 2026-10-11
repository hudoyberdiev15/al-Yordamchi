(function(){
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const LS='aljo4:';
const load=(k,d)=>{try{const v=localStorage.getItem(LS+k);return v===null?d:JSON.parse(v)}catch(e){return d}};
const save=(k,v)=>{try{localStorage.setItem(LS+k,JSON.stringify(v))}catch(e){}};

/* ---------- Rasmlar: maskot, logo, hero ---------- */
const MI='<ellipse cx="100" cy="224" rx="56" ry="6" fill="#00000014"/><path d="M56 160q-14 40-2 62h92q12-22-2-62z" fill="#fff" stroke="#eadada" stroke-width="2"/><path d="M62 170h76q8 28 4 52H58q-4-24 4-52z" fill="#d8101f"/><path d="M80 160l8 16M120 160l-8 16" stroke="#fff" stroke-width="5" stroke-linecap="round"/><text x="100" y="205" text-anchor="middle" font-size="12" font-weight="800" fill="#fff" font-family="Arial,sans-serif">Al Jojacha</text><ellipse cx="48" cy="188" rx="13" ry="24" fill="#fff" stroke="#eadada" stroke-width="2"/><ellipse cx="152" cy="188" rx="13" ry="24" fill="#fff" stroke="#eadada" stroke-width="2"/><circle cx="100" cy="108" r="54" fill="#fff" stroke="#eadada" stroke-width="2"/><g fill="#fff" stroke="#eadada" stroke-width="2"><circle cx="72" cy="54" r="22"/><circle cx="100" cy="42" r="26"/><circle cx="128" cy="54" r="22"/></g><rect x="68" y="56" width="64" height="26" rx="8" fill="#fff" stroke="#eadada" stroke-width="2"/><rect x="70" y="52" width="60" height="8" fill="#fff"/><g fill="#e3192a"><circle cx="90" cy="24" r="9"/><circle cx="103" cy="17" r="11"/><circle cx="116" cy="25" r="8"/></g><ellipse cx="81" cy="106" rx="12" ry="15" fill="#fff" stroke="#e6d4cf" stroke-width="2"/><ellipse cx="119" cy="106" rx="12" ry="15" fill="#fff" stroke="#e6d4cf" stroke-width="2"/><circle cx="83" cy="108" r="9" fill="#6b3b22"/><circle cx="117" cy="108" r="9" fill="#6b3b22"/><circle cx="83" cy="108" r="5" fill="#111"/><circle cx="117" cy="108" r="5" fill="#111"/><circle cx="86" cy="103" r="3" fill="#fff"/><circle cx="120" cy="103" r="3" fill="#fff"/><circle cx="64" cy="124" r="7" fill="#ffb3b3" opacity=".7"/><circle cx="136" cy="124" r="7" fill="#ffb3b3" opacity=".7"/><path d="M87 122Q100 113 113 122Q115 138 100 142Q85 138 87 122z" fill="#ffb300"/><path d="M96 142q4 14 8 0z" fill="#e3192a"/>';
const MASCOT='<svg viewBox="0 0 200 232">'+MI+'</svg>';
const LOGO='<svg viewBox="40 8 120 136">'+MI+'</svg>';
function hero(lines){
  const sp=lines.map((l,i)=>'<tspan x="330" dy="'+(i?22:0)+'">'+l.replace(/&/g,'&amp;')+'</tspan>').join('');
  return '<svg viewBox="0 0 580 310" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ee2a3a"/><stop offset="1" stop-color="#a50b17"/></linearGradient></defs><path d="M250 0H580V310H170Q300 160 250 0z" fill="url(#rd)"/><path d="M262 0Q310 150 190 310" stroke="#fff" stroke-opacity=".25" stroke-width="3" fill="none"/><ellipse cx="450" cy="215" rx="120" ry="70" fill="#7a4a22"/><ellipse cx="450" cy="208" rx="108" ry="60" fill="#9b6330"/><ellipse cx="420" cy="190" rx="50" ry="32" fill="#f7b9a9"/><ellipse cx="420" cy="184" rx="40" ry="22" fill="#fbd0c4"/><ellipse cx="488" cy="205" rx="46" ry="30" fill="#f5b3a2"/><ellipse cx="488" cy="199" rx="36" ry="20" fill="#fbd0c4"/><ellipse cx="455" cy="160" rx="42" ry="26" fill="#f7b9a9"/><g fill="#3e8e41"><ellipse cx="380" cy="215" rx="16" ry="7" transform="rotate(-30 380 215)"/><ellipse cx="520" cy="190" rx="16" ry="7" transform="rotate(30 520 190)"/><ellipse cx="470" cy="248" rx="16" ry="7"/></g><circle cx="395" cy="240" r="9" fill="#fff"/><circle cx="515" cy="235" r="9" fill="#f3e6d3"/><g fill="#2b2b2b"><circle cx="440" cy="236" r="3"/><circle cx="500" cy="238" r="3"/><circle cx="405" cy="170" r="3"/></g><svg x="120" y="20" width="220" height="290" viewBox="0 0 200 232">'+MI+'</svg><text x="330" y="52" font-size="19" fill="currentColor" font-family="\'Segoe Script\',\'Brush Script MT\',cursive" transform="rotate(-8 330 52)">'+sp+'</text></svg>';
}
const ICO=[
'<svg viewBox="0 0 48 48"><defs><linearGradient id="a1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffc15a"/><stop offset=".55" stop-color="#e2711d"/><stop offset="1" stop-color="#9c3f0c"/></linearGradient><linearGradient id="a2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fffdf6"/><stop offset="1" stop-color="#dccbb0"/></linearGradient></defs><path d="M27 28L38 39" stroke="url(#a2)" stroke-width="5" stroke-linecap="round"/><circle cx="40" cy="36.5" r="3.4" fill="url(#a2)"/><circle cx="36.5" cy="41" r="3.4" fill="url(#a2)"/><path d="M6 20C6 11 13 5 22 6c9 1 15 8 13 17-1 6-6 10-11 10-6 1-9-1-12-5-3-3-6-4-6-8z" fill="url(#a1)"/><ellipse cx="15" cy="12.5" rx="6.5" ry="3.4" transform="rotate(-30 15 12.5)" fill="#fff" opacity=".4"/><g fill="#7a3408" opacity=".45"><circle cx="20" cy="20" r="1.2"/><circle cx="27" cy="15" r="1.1"/><circle cx="24" cy="26" r="1.2"/><circle cx="13" cy="22" r="1"/></g></svg>',
'<svg viewBox="0 0 48 48"><defs><linearGradient id="b1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#b9bdc9"/></linearGradient><linearGradient id="b2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd877"/><stop offset="1" stop-color="#ef9f2a"/></linearGradient></defs><path d="M14 13c-3-3 3-5 0-9M24 13c-3-3 3-5 0-9M34 13c-3-3 3-5 0-9" stroke="#aeb4c2" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M5 22h38c0 11-8 19-19 19S5 33 5 22z" fill="url(#b1)" stroke="#d3d6e0"/><ellipse cx="24" cy="22" rx="19" ry="4.6" fill="url(#b2)" stroke="#fff" stroke-width="1.5"/><circle cx="15" cy="22" r="2.4" fill="#f27a1a"/><circle cx="30" cy="21" r="2.4" fill="#f27a1a"/><ellipse cx="23" cy="23" rx="3.2" ry="1.3" fill="#58b368"/><circle cx="36" cy="23" r="1.6" fill="#58b368"/></svg>',
'<svg viewBox="0 0 48 48"><defs><linearGradient id="c1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffc15a"/><stop offset="1" stop-color="#b0500f"/></linearGradient><linearGradient id="c2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff6b6b"/><stop offset="1" stop-color="#c21f2b"/></linearGradient><linearGradient id="c3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8ee28f"/><stop offset="1" stop-color="#2f9d4a"/></linearGradient></defs><g transform="rotate(-45 24 24)"><line x1="2" y1="24" x2="46" y2="24" stroke="#b98a52" stroke-width="2.6" stroke-linecap="round"/><rect x="7" y="17.5" width="9.5" height="13" rx="4.5" fill="url(#c1)"/><rect x="17.5" y="18.5" width="7" height="11" rx="3" fill="url(#c2)"/><rect x="25.5" y="17.5" width="9.5" height="13" rx="4.5" fill="url(#c1)"/><rect x="36" y="18.5" width="6" height="11" rx="3" fill="url(#c3)"/></g></svg>',
'<svg viewBox="0 0 48 48"><defs><linearGradient id="d1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#b9bdc9"/></linearGradient><linearGradient id="d2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8ee28f"/><stop offset="1" stop-color="#2f9d4a"/></linearGradient><linearGradient id="d3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7a7a"/><stop offset="1" stop-color="#c21f2b"/></linearGradient></defs><ellipse cx="14" cy="21" rx="9" ry="7" fill="url(#d2)"/><ellipse cx="25" cy="16" rx="10" ry="8" fill="#43a853"/><ellipse cx="35" cy="21" rx="9" ry="7" fill="url(#d2)"/><circle cx="19" cy="15" r="4.6" fill="url(#d3)"/><circle cx="31" cy="14" r="4.6" fill="url(#d3)"/><circle cx="17.6" cy="13.6" r="1.3" fill="#fff" opacity=".6"/><circle cx="24" cy="23" r="4" fill="#e9f7c8" stroke="#8ee28f" stroke-width="1.2"/><path d="M5 24h38c0 10-8 17-19 17S5 34 5 24z" fill="url(#d1)" stroke="#d3d6e0"/></svg>'];
const THERM='<svg class="i" viewBox="0 0 24 24"><path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z"/></svg>';
const CLOCK='<svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
const BULB='<svg class="i" viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/></svg>';
const NAVI=['<path d="M3 12l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>','<path d="M7 3v8a2 2 0 0 0 4 0V3M9 11v10M17 3c-2 2-3 5-3 8h3v10"/>','<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>','<path d="M4 14c0-5 5-9 11-9 3 0 5 2 5 5 0 5-5 9-11 9-3 0-5-2-5-5z"/>','<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h0"/>','<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/>','<path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.2A8 8 0 1 1 21 12z"/>'];

/* ---------- Matnlar ---------- */
const T={
uz:{tag:"Tovuq go'shti haqida hamma narsa!",navHome:'Bosh sahifa',navHist:'Tarix',navSet:'Sozlamalar',h1a:'Savol bering –',h1c:'javob beradi!',desc:"Tovuq go'shti qachon tayyor bo'lishi, qanday ziravorlar kerakligi, retseptlar va qanday taomlar qilish mumkinligi – barchasi bitta aqlli maslahatchida!",start:'Boshlash',quick:'Tezkor savollar',secF:'Funksiyalar',gateT:'Xush kelibsiz!',gateD:'Davom etish uchun taxallusingizni kiriting',gateP:'Taxallusingiz',gateB:'Kirish',themeL:'Mavzu',micT:'Mikrofon',micB:'Mikrofonga ruxsat berish',micOk:'Ruxsat berilgan ✓',micNo:'Ruxsat berilmagan',vDenied:"Mikrofonga ruxsat berilmagan. Brauzer manzil satridagi qulf belgisini bosib, Mikrofonni «Ruxsat»ga o'zgartiring",vBlocked:"Bu oynada mikrofon bloklangan. Ovozli xabar uchun saytni brauzerda (yoki WebStorm orqali) alohida oching",vNone:'Mikrofon topilmadi',rateT:'Sahifani baholang',rateD:'Fikringiz biz uchun muhim',rateB:'Yuborish',rateS:'Baholamasdan chiqish',rateTy:'Rahmat! Bahoyingiz qabul qilindi',rateP:'Fikringiz (ixtiyoriy)',rateN:"Baho va taxallusingiz sahifa egasiga ko'rinadi",rateL:['Yomon','Qoniqarsiz','Yaxshi','Juda yaxshi',"A'lo!"],exit:'Chiqish',byeT:'Xayr!',byeD:'Yana kutib qolamiz',byeB:'Qaytish',vRec:'Eshitayapman, gapiring...',vNo:'Mikrofonga ruxsat berilmadi',vUnsup:'Bu brauzer ovozni tanimaydi',vEmpty:"Ovoz tushunarsiz bo'ldi, qayta urinib ko'ring",welH:'Salom! Men Al Jojacha',welS:'Savolingizni yozing yoki ovozli xabar yuboring',tiles:['Pishirish vaqti','Retseptlar','Ziravorlar','Salatlar'],light:"Yorug'",dark:"Qorong'u",hist:'Suhbatlar tarixi',care:"Sizning sog'lig'ingiz biz uchun muhim!",care2:"Faqat tovuq go'shti haqida ishlaymiz",ph:'Savolingizni yozing...',imgT:'Rasm yaratish',imgD:"Tovuq taomlari uchun chiroyli rasmlar chizib beraman!",imgB:'Rasm yaratish',popT:'Ommabop retseptlar',benT:'Tovuqning foydalari',ctaT:'Tovuq haqida savol bering, Al Jojacha javob beradi!',ctaB:'Savol berish',ftag:"Tovuq go'shti – sog'lom hayot!",f1:'Tezkor javob',f2:"Aniq ma'lumotlar",f3:'Rasm yaratish',f4:'Doim siz bilan',fs:'Tovuq bilan hayot mazali!',menu:'Menyu',chats:'Suhbatlar',profile:'Profil',settings:'Sozlamalar',newChat:'Yangi suhbat',noChats:"Hali suhbat yo'q. Birinchi savolingiz shu yerda saqlanadi.",nickL:'Taxallus',nickP:'Masalan: Jasur',avL:'Avatar tanlang',langL:'Til',clear:"Barcha suhbatlarni o'chirish",confirm:"Barcha suhbatlar o'chirilsinmi?",guest:'Mehmon',pcHint:'Profilingizni sozlang',msgs:'xabar',chatWord:'Suhbat',
 nav:['Asosiy','Retseptlar','Pishirish vaqti','Tovuq qismlari',"Foydali ma'lumotlar",'Rasmlar yaratish','Savol berish'],
 chips:['Tovuq qancha pishadi?','Qanday ziravorlar kerak?',"Qanday taomlar qilsa bo'ladi?",'Qanday salatlar mos keladi?','Tovuq qismlari va xususiyatlari'],
 pop:[{ic:'🍗',n:'Pechda tovuq',m:'35–45 daqiqa'},{ic:'🍲',n:"Tovuq sho'rva",m:'50–70 daqiqa'},{ic:'🍢',n:'Tovuq shashlik',m:'10–15 daqiqa'},{ic:'🥗',n:'Tovuqli salat',m:'15–20 daqiqa'}],
 ben:['Oqsilga boy','B guruhi vitaminlari','Mushaklar uchun foydali','Rux va selen manbai'],
 q:{rec:"Qanday taomlar qilsa bo'ladi?",info:"Tovuq go'shtining foydasi nima?",img:'Tovuq taomi rasmini chiz'},
 sp:["Men sizning tovuq","go'shti bo'yicha aqlli","yordamchingizman!"],greet:'Assalomu alaykum! Al Joʻjacha sizga qanday yordam bera olaman?'},
ru:{tag:'Всё о курином мясе!',navHome:'Главная',navHist:'История',navSet:'Настройки',h1a:'Задайте вопрос –',h1c:'ответит!',desc:'Когда готово куриное мясо, какие специи нужны, рецепты и что можно приготовить — всё в одном умном помощнике!',start:'Начать',quick:'Быстрые вопросы',secF:'Функции',gateT:'Добро пожаловать!',gateD:'Введите псевдоним, чтобы продолжить',gateP:'Ваш псевдоним',gateB:'Войти',themeL:'Тема',micT:'Микрофон',micB:'Разрешить микрофон',micOk:'Доступ разрешён ✓',micNo:'Доступ не разрешён',vDenied:'Доступ к микрофону запрещён. Нажмите на замок в адресной строке и разрешите микрофон',vBlocked:'В этом окне микрофон заблокирован. Откройте сайт отдельно в браузере (или через WebStorm)',vNone:'Микрофон не найден',rateT:'Оцените страницу',rateD:'Ваше мнение важно для нас',rateB:'Отправить',rateS:'Уйти без оценки',rateTy:'Спасибо! Ваша оценка принята',rateP:'Ваш отзыв (необязательно)',rateN:'Оценка и псевдоним будут видны владельцу страницы',rateL:['Плохо','Не очень','Хорошо','Очень хорошо','Отлично!'],exit:'Выйти',byeT:'До свидания!',byeD:'Будем ждать вас снова',byeB:'Вернуться',vRec:'Слушаю, говорите...',vNo:'Нет доступа к микрофону',vUnsup:'Браузер не распознаёт голос',vEmpty:'Не удалось разобрать голос, попробуйте ещё раз',welH:'Здравствуйте! Я Al Jojacha',welS:'Напишите вопрос или отправьте голосовое сообщение',tiles:['Время готовки','Рецепты','Специи','Салаты'],light:'Светлая',dark:'Тёмная',hist:'История чатов',care:'Ваше здоровье важно для нас!',care2:'Мы работаем только с куриным мясом',ph:'Напишите свой вопрос...',imgT:'Создание картинок',imgD:'Нарисую красивые картинки куриных блюд!',imgB:'Нарисовать',popT:'Популярные рецепты',benT:'Польза курицы',ctaT:'Задайте вопрос о курице, Al Jojacha ответит!',ctaB:'Задать вопрос',ftag:'Куриное мясо — здоровая жизнь!',f1:'Быстрый ответ',f2:'Точные сведения',f3:'Картинки',f4:'Всегда с вами',fs:'С курицей жизнь вкуснее!',menu:'Меню',chats:'Чаты',profile:'Профиль',settings:'Настройки',newChat:'Новый чат',noChats:'Чатов пока нет. Ваш первый вопрос сохранится здесь.',nickL:'Псевдоним',nickP:'Например: Джасур',avL:'Выберите аватар',langL:'Язык',clear:'Удалить все чаты',confirm:'Удалить все чаты?',guest:'Гость',pcHint:'Настройте свой профиль',msgs:'сообщ.',chatWord:'Чат',
 nav:['Главная','Рецепты','Время готовки','Части курицы','Полезная информация','Картинки','Задать вопрос'],
 chips:['Сколько готовится курица?','Какие нужны специи?','Что можно приготовить?','Какие салаты подойдут?','Части курицы и их особенности'],
 pop:[{ic:'🍗',n:'Курица в духовке',m:'35–45 минут'},{ic:'🍲',n:'Куриный суп',m:'50–70 минут'},{ic:'🍢',n:'Куриный шашлык',m:'10–15 минут'},{ic:'🥗',n:'Салат с курицей',m:'15–20 минут'}],
 ben:['Богата белком','Витамины группы B','Полезна для мышц','Источник цинка и селена'],
 q:{rec:'Что можно приготовить?',info:'Какая польза от куриного мяса?',img:'Нарисуй блюдо из курицы'},
 sp:['Я ваш умный помощник','по куриному мясу!'],greet:'Здравствуйте! Я Al Joʻjacha. Чем могу вам помочь?'},
en:{tag:'Everything about chicken meat!',navHome:'Home',navHist:'History',navSet:'Settings',h1a:'Ask a question –',h1c:'will answer!',desc:'When chicken is done, which spices to use, recipes and what you can cook — all in one smart advisor!',start:'Start',quick:'Quick questions',secF:'Features',gateT:'Welcome!',gateD:'Enter a nickname to continue',gateP:'Your nickname',gateB:'Enter',themeL:'Theme',micT:'Microphone',micB:'Allow microphone',micOk:'Access granted ✓',micNo:'Access not granted',vDenied:'Microphone access is denied. Click the lock icon in the address bar and allow the microphone',vBlocked:'The microphone is blocked in this window. Open the site separately in a browser (or via WebStorm)',vNone:'No microphone found',rateT:'Rate this page',rateD:'Your opinion matters to us',rateB:'Submit',rateS:'Leave without rating',rateTy:'Thank you! Your rating was received',rateP:'Your feedback (optional)',rateN:'Your rating and nickname are visible to the page owner',rateL:['Poor','Fair','Good','Very good','Excellent!'],exit:'Exit',byeT:'Goodbye!',byeD:'We will be waiting for you',byeB:'Come back',vRec:'Listening, speak now...',vNo:'Microphone access was denied',vUnsup:"This browser can't recognize speech",vEmpty:"Couldn't make out the voice, please try again",welH:"Hello! I'm Al Jojacha",welS:'Type a question or send a voice message',tiles:['Cooking time','Recipes','Spices','Salads'],light:'Light',dark:'Dark',hist:'Chat history',care:'Your health matters to us!',care2:'We only talk about chicken meat',ph:'Type your question...',imgT:'Image creation',imgD:'I will draw nice pictures of chicken dishes!',imgB:'Draw',popT:'Popular recipes',benT:'Benefits of chicken',ctaT:'Ask about chicken, Al Jojacha will answer!',ctaB:'Ask a question',ftag:'Chicken meat – healthy life!',f1:'Fast answers',f2:'Accurate info',f3:'Pictures',f4:'Always with you',fs:'Life is tastier with chicken!',menu:'Menu',chats:'Chats',profile:'Profile',settings:'Settings',newChat:'New chat',noChats:'No chats yet. Your first question will be saved here.',nickL:'Nickname',nickP:'e.g. Alex',avL:'Choose an avatar',langL:'Language',clear:'Delete all chats',confirm:'Delete all chats?',guest:'Guest',pcHint:'Set up your profile',msgs:'msgs',chatWord:'Chat',
 nav:['Home','Recipes','Cooking time','Chicken parts','Useful info','Pictures','Ask a question'],
 chips:['How long to cook chicken?','Which spices to use?','What can I cook?','Which salads go well?','Chicken parts and their features'],
 pop:[{ic:'🍗',n:'Oven chicken',m:'35–45 minutes'},{ic:'🍲',n:'Chicken soup',m:'50–70 minutes'},{ic:'🍢',n:'Chicken kebab',m:'10–15 minutes'},{ic:'🥗',n:'Chicken salad',m:'15–20 minutes'}],
 ben:['High in protein','B vitamins','Good for muscles','Source of zinc and selenium'],
 q:{rec:'What can I cook?',info:'What are the benefits of chicken meat?',img:'Draw a chicken dish'},
 sp:["I'm your smart","chicken-meat","assistant!"],greet:'Hello! This is Al Joʻjacha. How can I help you?'}
};
const DISC={uz:"Menga ishonib qolmasligingizni tavsiya beraman: ma'lumotlarni qo'shimcha manbalardan ham tekshirib oling.",ru:'Советую не слишком полагаться на меня: проверяйте информацию и в других источниках.',en:'I recommend not trusting me blindly: please double-check the information with other sources too.'};
let P=load('profile',{nick:''}),S=load('settings',{lang:'uz',theme:'dark'}),C=load('chats',[]),cur=load('cur',null),busy=false,ctx={};
const chat=$('#chat'),q=$('#q'),drawer=$('#drawer'),scrim=$('#scrim');
const t=k=>T[S.lang][k];
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const svgUrl=s=>'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(s);
const hm=ts=>{const d=new Date(ts||Date.now());return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')};

/* ---------- Chat ---------- */
function cardHTML(c){
  let h='';
  if(c.box&&c.box.length)h+='<div class="box">'+c.box.map(r=>'<div>'+(r[0]===c.lb.time?CLOCK:THERM)+'<span><b>'+esc(r[0])+':</b> '+esc(r[1])+'</span></div>').join('')+'</div>';
  if(c.rows&&c.rows.length)h+='<div class="rows">'+c.rows.map(r=>'<div><span>'+esc(r[0])+'</span><span>'+esc(r[1])+'</span></div>').join('')+'</div>';
  if(c.ing)h+='<h4>'+esc(c.lb.ing)+':</h4><ul class="ing">'+c.ing.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>';
  if(c.steps)h+='<h4>'+esc(c.lb.steps)+':</h4><ol class="st">'+c.steps.map(x=>'<li><span>'+esc(x)+'</span></li>').join('')+'</ol>';
  if(c.tip)h+='<div class="tip">'+BULB+'<div><b>'+esc(c.lb.tip)+':</b> '+esc(c.tip)+'</div></div>';
  return h;
}
function bubble(m,anim){
  const r=document.createElement('div');r.className='row '+m.r;if(!anim)r.style.animation='none';
  const a=document.createElement('div');a.className='av';
  if(m.r==='u')a.textContent=ini();else a.innerHTML=LOGO;
  const col=document.createElement('div');col.className='col';
  if(m.r==='b')col.innerHTML='<div class="who">Al Jojacha</div>';
  const b=document.createElement('div');b.className='m';
  b.innerHTML=esc(m.t).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\n/g,'<br>')+(m.card?cardHTML(m.card):'');
  if(m.i&&SVG[m.i]){const im=document.createElement('img');im.alt=m.t;im.src=svgUrl(SVG[m.i]);b.appendChild(im)}
  if(m.v)b.insertAdjacentHTML('afterbegin',voiceHTML(m.v));
  if(m.photos&&m.photos.length)b.insertAdjacentHTML('beforeend',photoHTML(m.photos));
  if(m.d){const d=document.createElement('div');d.className='disc';d.textContent=DISC[m.lang||S.lang]||DISC.uz;b.appendChild(d)}
  const ts=document.createElement('div');ts.className='ts';ts.textContent=hm(m.ts);
  col.append(b,ts);r.append(a,col);chat.appendChild(r);chat.scrollTop=chat.scrollHeight;return r;
}
function store(m){
  let c=C.find(x=>x.id===cur);
  if(!c){c={id:Date.now(),title:'',ts:0,m:[]};C.unshift(c);cur=c.id;save('cur',cur)}
  if(!c.title&&m.r==='u')c.title=m.t.slice(0,42);
  c.m.push(m);c.ts=Date.now();C.sort((a,b)=>b.ts-a.ts);C=C.slice(0,40);save('chats',C);
}
function welcomeCard(){const L=T[S.lang],d=document.createElement('div');d.className='wel';d.innerHTML='<div class="mas">'+MASCOT+'</div><h2>'+esc(L.welH)+'</h2><p>'+esc(L.welS)+'</p><div class="tiles"></div>';const qs=[L.chips[0],L.q.rec,L.chips[1],L.chips[3]];L.tiles.forEach((n,i)=>{const b=document.createElement('button');b.className='tile';b.innerHTML='<span class="ph">'+ICO[i]+'</span><span>'+esc(n)+'</span>';b.onclick=()=>ask(qs[i]);d.querySelector('.tiles').appendChild(b)});chat.appendChild(d);chat.scrollTop=chat.scrollHeight}
function welcome(){bubble({r:'b',t:t('greet'),ts:Date.now()},true);welcomeCard()}
function voiceHTML(sec){let w='';for(let i=0;i<28;i++)w+='<i style="--i:'+i+'"></i>';return '<div class="vmsg"><svg class="i" viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg><div class="wv">'+w+'</div><span>'+Math.floor(sec/60)+':'+String(sec%60).padStart(2,'0')+'</span></div>'}
function fresh(){cur=null;save('cur',null);ctx={};chat.innerHTML='';welcome()}
function open(id){const c=C.find(x=>x.id===id);if(!c)return;cur=id;save('cur',cur);ctx={};chat.innerHTML='';c.m.forEach(m=>bubble(m,false));closeMenu()}
async function findPhotos(qr){
  try{
    const u='https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url&iiurlwidth=360&gsrsearch='+encodeURIComponent('filetype:bitmap '+qr);
    const r=await fetch(u);const j=await r.json();
    return Object.values((j.query||{}).pages||{}).map(p=>p.imageinfo&&p.imageinfo[0]).filter(Boolean).slice(0,6).map(i=>({src:i.thumburl||i.url,page:i.descriptionurl}));
  }catch(e){return[]}
}
function photoHTML(a){return '<div class="pg">'+a.map(p=>{try{const x=new URL(p.src),g=new URL(p.page||p.src);if(x.protocol!=='https:'||g.protocol!=='https:')return '';return '<a href="'+g.href.replace(/"/g,'%22')+'" target="_blank" rel="noopener noreferrer"><img loading="lazy" referrerpolicy="no-referrer" alt="" src="'+x.href.replace(/"/g,'%22')+'"></a>'}catch(e){return ''}}).join('')+'</div>'}
async function ask(txt,opts){
  txt=(txt||'').trim();if(!txt||busy)return;busy=true;q.value='';
  const wl=$('.wel');if(wl)wl.remove();
  const um={r:'u',t:txt,ts:Date.now()};if(opts&&opts.v)um.v=opts.v;bubble(um,true);store(um);
  const d=bubble({r:'b',t:'',ts:Date.now()},true);d.querySelector('.m').innerHTML='<span class="dots"><span></span><span></span><span></span></span>';
  let r;try{r=Engine.reply(txt,ctx,S.lang);ctx=r.ctx}catch(e){r={t:'',lang:S.lang}}
  await new Promise(res=>setTimeout(res,240+Math.min((r.t||'').length,260)));
  d.remove();
  const bm={r:'b',t:r.t,ts:Date.now(),d:1,lang:r.lang};if(r.card)bm.card=r.card;if(r.i)bm.i=r.i;
  const row=bubble(bm,true);store(bm);busy=false;
  if(r.photoQ){const ph=await findPhotos(r.photoQ);if(ph.length){bm.photos=ph;const dd=row.querySelector('.disc');if(dd)dd.insertAdjacentHTML('beforebegin',photoHTML(ph));save('chats',C);chat.scrollTop=chat.scrollHeight}}
}
function focusChat(){}

/* ---------- Sahifa qismlari ---------- */
function paintStatic(){
  $$('[data-svg="logo"]').forEach(e=>e.innerHTML=LOGO);
  $$('[data-svg="mascot"]').forEach(e=>e.innerHTML=MASCOT);
  $$('[data-svg="hero"]').forEach(e=>e.innerHTML=hero(t('sp')));
}
function paintLists(){
  const sn=$('#sn');sn.innerHTML='';
  const L=T[S.lang],qs=[null,L.q.rec,L.chips[0],L.chips[4],L.q.info,L.q.img,null];
  L.nav.forEach((n,i)=>{
    const b=document.createElement('button');if(i===0)b.className='on';
    b.innerHTML='<svg class="i" viewBox="0 0 24 24">'+NAVI[i]+'</svg><span>'+esc(n)+'</span>';
    b.onclick=()=>{$$('#sn button').forEach(x=>x.classList.remove('on'));b.classList.add('on');closeMenu();
      if(i===0)window.scrollTo({top:0,behavior:'smooth'});else if(qs[i]){focusChat();ask(qs[i])}else focusChat()};
    sn.appendChild(b);
  });
  const ch=$('#chips');ch.innerHTML='';
  L.chips.forEach(c=>{const b=document.createElement('button');b.textContent=c;b.onclick=()=>{closeMenu();focusChat();ask(c)};ch.appendChild(b)});
  const pp=$('#pop');pp.innerHTML='';
  L.pop.forEach((p,i)=>{const b=document.createElement('button');b.className='pi';b.innerHTML='<span class="ph">'+ICO[i]+'</span><span><b>'+esc(p.n)+'</b><small>'+esc(p.m)+'</small></span>';b.onclick=()=>{closeMenu();focusChat();ask(p.n)};pp.appendChild(b)});
}
function paintLang(){
  document.documentElement.lang=S.lang;
  $$('[data-i]').forEach(e=>e.textContent=t(e.dataset.i));
  $$('[data-p]').forEach(e=>e.placeholder=t(e.dataset.p));
  $$('#seg button,#gseg button').forEach(b=>b.classList.toggle('on',b.dataset.l===S.lang));
  $('#pcName').textContent=P.nick||t('guest');
  paintStatic();paintLists();renderList();
}
const ini=()=>(P.nick||'?').trim().charAt(0).toUpperCase();
function paintProfile(){const n=ini();$('#avBtn').textContent=n;$('#bigAv').textContent=n;$('#pcName').textContent=P.nick||t('guest');$('#nick').value=P.nick;$$('.row.u .av').forEach(x=>x.textContent=n)}
function applyTheme(){document.documentElement.dataset.theme=S.theme||'dark';$$('#tseg button').forEach(b=>b.classList.toggle('on',b.dataset.th===(S.theme||'dark')))}

/* ---------- Menyu (tarix, profil, sozlamalar) ---------- */
function openMenu(sec){try{paintMic()}catch(e){}drawer.classList.add('on');scrim.classList.add('on');renderList();const sc=drawer.querySelector('.scroll');if(sec){const el=document.getElementById(sec);if(el)setTimeout(()=>sc.scrollTo({top:el.offsetTop-10,behavior:'smooth'}),60)}else sc.scrollTop=0}
function closeMenu(){drawer.classList.remove('on');scrim.classList.remove('on')}
function renderList(){
  const l=$('#list');l.innerHTML='';
  if(!C.length){l.innerHTML='<p class="empty">'+esc(t('noChats'))+'</p>';return}
  const loc={uz:'uz-UZ',ru:'ru-RU',en:'en-GB'}[S.lang];
  C.forEach(c=>{
    const w=document.createElement('div');w.className='card'+(c.id===cur?' on':'');
    const d=new Date(c.ts).toLocaleDateString(loc,{day:'numeric',month:'short'});
    w.innerHTML='<div class="tx"><b></b><small>'+d+' · '+c.m.length+' '+esc(t('msgs'))+'</small></div>';
    w.querySelector('b').textContent=c.title||t('chatWord');
    w.onclick=()=>open(c.id);
    const x=document.createElement('button');x.className='d';x.setAttribute('aria-label','Delete');
    x.innerHTML='<svg class="i" viewBox="0 0 24 24" style="width:15px;height:15px"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>';
    x.onclick=e=>{e.stopPropagation();C=C.filter(y=>y.id!==c.id);save('chats',C);if(cur===c.id)fresh();renderList()};
    w.appendChild(x);l.appendChild(w);
  });
}

/* ---------- Ulash ---------- */
$('#nick').addEventListener('input',e=>{const v=e.target.value.trim().slice(0,20);if(v){P.nick=v;save('profile',P);paintProfile()}});
$$('#tseg button').forEach(b=>b.onclick=()=>{S.theme=b.dataset.th;save('settings',S);applyTheme()});
const gate=$('#gate');
function enter(){const v=$('#gnick').value.trim().slice(0,20);if(!v){$('#gnick').classList.add('err');return}P.nick=v;save('profile',P);gate.classList.remove('on');paintProfile()}
$('#gok').onclick=enter;$('#gnick').addEventListener('keydown',e=>{if(e.key==='Enter')enter()});$('#gnick').addEventListener('input',e=>e.target.classList.remove('err'));
$('#menuBtn').onclick=()=>openMenu();
$('#avBtn').onclick=()=>openMenu('sec-profile');
$('#close').onclick=closeMenu;scrim.onclick=closeMenu;
$('#newChat').onclick=()=>{fresh();closeMenu();focusChat()};
function setLang(l){S.lang=l;save('settings',S);paintLang()}
$$('#seg button,#gseg button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));
$('#clearAll').onclick=()=>{if(confirm(t('confirm'))){C=[];save('chats',C);fresh();renderList()}};
$('#start').onclick=focusChat;
$('#imgBtn').onclick=()=>{focusChat();ask(T[S.lang].q.img)};
$('#send').onclick=()=>ask(q.value);
q.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();ask(q.value)}});


/* ---------- Ovozli xabar ---------- */
const SR=window.SpeechRecognition||window.webkitSpeechRecognition,mic=$('#mic'),inp=$('.inp');
let rec=null,vtimer=null,vsec=0,vtext='',vact=false;
const fmtT=n=>Math.floor(n/60)+':'+String(n%60).padStart(2,'0');
function toast(m,ms){const e=$('#toast');e.textContent=m;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),ms||2600)}
async function micState(){
  try{const pp=document.permissionsPolicy||document.featurePolicy;if(pp&&pp.allowsFeature&&!pp.allowsFeature('microphone'))return 'blocked'}catch(e){}
  try{if(navigator.permissions){const r=await navigator.permissions.query({name:'microphone'});return r.state}}catch(e){}
  return 'prompt';
}
async function askMic(){
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return 'unsupported';
  try{const m=await navigator.mediaDevices.getUserMedia({audio:true});m.getTracks().forEach(x=>x.stop());return 'granted'}
  catch(e){const n=e&&e.name;if(n==='NotAllowedError'||n==='SecurityError')return (await micState())==='blocked'?'blocked':'denied';if(n==='NotFoundError'||n==='OverconstrainedError')return 'error';return 'denied'}
}
function micMsg(m){return m==='granted'?t('micOk'):m==='blocked'?t('vBlocked'):m==='error'?t('vNone'):m==='unsupported'?t('vUnsup'):t('vDenied')}
async function paintMic(){const m=await micState();$('#micSt').textContent=m==='granted'?t('micOk'):m==='blocked'?t('vBlocked'):m==='denied'?t('micNo'):''}
$('#micBtn').onclick=async()=>{const m=await askMic();$('#micSt').textContent=micMsg(m)};
function endVoice(){vact=false;clearInterval(vtimer);try{rec&&rec.stop()}catch(e){}rec=null;inp.classList.remove('rec')}
async function startVoice(){
  if(!SR){toast(t('vUnsup'));return}
  if(vact)return;
  const mm=await askMic();
  if(mm==='blocked'||mm==='denied'||mm==='error'){toast(micMsg(mm),6000);return}
  vtext='';vsec=0;vact=true;$('#vlive').textContent=t('vRec');$('#vtime').textContent='0:00';
  const w=$('#vwave');w.innerHTML='';for(let i=0;i<28;i++){const b=document.createElement('i');b.style.setProperty('--i',i);w.appendChild(b)}
  inp.classList.add('rec');
  try{
    rec=new SR();rec.lang={uz:'uz-UZ',ru:'ru-RU',en:'en-US'}[S.lang];rec.continuous=true;rec.interimResults=true;
    rec.onresult=e=>{let f='',i='';for(let k=0;k<e.results.length;k++){const r=e.results[k];if(r.isFinal)f+=r[0].transcript+' ';else i+=r[0].transcript}vtext=(f+i).trim();$('#vlive').textContent=vtext||t('vRec')};
    rec.onerror=ev=>{if(ev.error==='not-allowed'||ev.error==='service-not-allowed'){endVoice();toast(t('vNo'))}};
    rec.start();
  }catch(e){endVoice();toast(t('vNo'));return}
  vtimer=setInterval(()=>{vsec++;$('#vtime').textContent=fmtT(vsec);if(vsec>=120)sendVoice()},1000);
}
function sendVoice(){const txt=vtext.trim(),d=vsec;endVoice();if(!txt){toast(t('vEmpty'));return}ask(txt,{v:Math.max(d,1)})}
mic.onclick=startVoice;$('#vcancel').onclick=endVoice;$('#vsend').onclick=sendVoice;

/* ---------- Baholash (chiqishda) ---------- */
const rate=$('#rate'),bye=$('#bye');let stars=0,rmode='';
const st=$('#stars');for(let i=0;i<5;i++){const b=document.createElement('button');b.setAttribute('aria-label',String(i+1));b.innerHTML='<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/></svg>';b.onclick=()=>{stars=i+1;paintStars(stars)};st.appendChild(b)}
const rated=()=>{try{return localStorage.getItem(LS+'rated')==='1'}catch(e){return false}};
const skipped=()=>{try{return sessionStorage.getItem(LS+'skip')==='1'}catch(e){return false}};
function paintStars(n){$$('#stars button').forEach((b,i)=>b.classList.toggle('on',i<n));$('#rlab').textContent=n?T[S.lang].rateL[n-1]:'';$('#rsend').disabled=!n}
function showRate(mode){if(rate.classList.contains('on'))return;rmode=mode;stars=0;paintStars(0);$('#rcom').value='';rate.classList.add('on')}
function leave(){rate.classList.remove('on');if(rmode==='back'){bye.classList.add('on');try{history.back()}catch(e){}}else if(rmode==='exit')bye.classList.add('on')}
async function saveRating(rt){try{if(typeof claude==='undefined')return false;const u=await claude.use('user'),db=await claude.use('db');if(!u||!db)return false;const id=await u.id();await db.doc('ratings/'+id).set(rt);return true}catch(e){return false}}
async function submitRate(){
  const rt={stars:stars,comment:$('#rcom').value.trim().slice(0,300),nick:P.nick||'',lang:S.lang,ts:Date.now()};
  try{const l=JSON.parse(localStorage.getItem(LS+'ratings')||'[]');l.push(rt);localStorage.setItem(LS+'ratings',JSON.stringify(l));localStorage.setItem(LS+'rated','1')}catch(e){}
  $('#rsend').disabled=true;await saveRating(rt);toast(t('rateTy'));setTimeout(leave,700);
}
function skipRate(){try{sessionStorage.setItem(LS+'skip','1')}catch(e){}leave()}
$('#rsend').onclick=submitRate;$('#rskip').onclick=skipRate;$('#rateX').onclick=skipRate;
$('#exitBtn').onclick=()=>{closeMenu();if(rated())bye.classList.add('on');else showRate('exit')};
$('#byeBack').onclick=()=>bye.classList.remove('on');
document.addEventListener('mouseout',e=>{if(!e.relatedTarget&&e.clientY<=0&&!rated()&&!skipped()&&C.length)showRate('intent')});
try{history.pushState({al:1},'',location.href);window.addEventListener('popstate',()=>{if(!rated()&&!skipped()){try{history.pushState({al:1},'',location.href)}catch(e){}showRate('back')}else{try{history.back()}catch(e){}}})}catch(e){}

applyTheme();paintProfile();paintLang();if(!P.nick){gate.classList.add('on');setTimeout(()=>$('#gnick').focus(),300)}
/* eski suhbatni eslab qolish */
const last=C.find(x=>x.id===cur);
if(last){last.m.forEach(m=>bubble(m,false))}else{cur=null;welcome()}
chat.scrollTop=chat.scrollHeight;
})();
