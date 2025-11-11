const i18n = {
  'nav-home': {'ru':'Главная','en':'Home'},
  'nav-about': {'ru':'Обо мне','en':'About'},
  'nav-contact': {'ru':'Контакты','en':'Contact'},
  'hero-title': {'ru':'ASTRA — экспериментальная электронная музыка','en':'Astra — experimental electronic music'},
  'hero-text': {'ru':'Глитч, IDM, атмосферные саундскейпы и бит-эксперименты для фильмов, игр и релизов.','en':'Glitch, IDM, atmospheric soundscapes and beat experiments for films, games and releases.'},
};

const langBtn = document.getElementById('lang-toggle');

function setLang(lang){
  localStorage.setItem('siteLang', lang);
  updateLang(lang);
}

function updateLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(i18n[key] && i18n[key][lang]) el.textContent = i18n[key][lang];
  });
  langBtn.textContent = (lang==='ru')?'RU':'EN';
}

langBtn.addEventListener('click', ()=>{
  const current = localStorage.getItem('siteLang') || 'ru';
  const next = (current==='ru')?'en':'ru';
  setLang(next);
});

document.addEventListener('DOMContentLoaded', ()=>{
  const lang = localStorage.getItem('siteLang') || 'ru';
  updateLang(lang);
});

