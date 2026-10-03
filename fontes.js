// Opções de fonte para o nome do casal (usadas em index.html e fontes.html).
// `scale` compensa o tamanho visual de cada fonte; `upper` aplica caixa-alta.
window.NAME_FONTS = [
  { id: "cinzel",       name: "Cinzel",           family: "Cinzel",           google: "Cinzel:wght@400",              note: "Atual · clássica, caixa-alta", upper: true, scale: 1 },
  { id: "great-vibes",  name: "Great Vibes",      family: "Great Vibes",      google: "Great+Vibes",                  note: "Caligrafia elegante",          scale: 1.7 },
  { id: "parisienne",   name: "Parisienne",       family: "Parisienne",       google: "Parisienne",                   note: "Script leve, toque francês",   scale: 1.55 },
  { id: "dancing",      name: "Dancing Script",   family: "Dancing Script",   google: "Dancing+Script:wght@500",      note: "Cursiva descontraída",         scale: 1.4 },
  { id: "sacramento",   name: "Sacramento",       family: "Sacramento",       google: "Sacramento",                   note: "Traço fino e delicado",        scale: 1.95 },
  { id: "allura",       name: "Allura",           family: "Allura",           google: "Allura",                       note: "Romântica, bem fluida",        scale: 1.8 },
  { id: "satisfy",      name: "Satisfy",          family: "Satisfy",          google: "Satisfy",                      note: "Pincel, mais solta",           scale: 1.45 },
  { id: "playfair",     name: "Playfair Display", family: "Playfair Display", google: "Playfair+Display:ital@1",      note: "Serifa itálica moderna",       italic: true, scale: 1.15 },
  { id: "caveat",       name: "Caveat",           family: "Caveat",           google: "Caveat:wght@500",              note: "Manuscrita casual",            scale: 1.6 }
];

window.loadNameFont = function (f) {
  if (document.querySelector(`link[data-font="${f.id}"]`)) return;
  const l = document.createElement("link");
  l.rel = "stylesheet"; l.dataset.font = f.id;
  l.href = `https://fonts.googleapis.com/css2?family=${f.google}&display=swap`;
  document.head.appendChild(l);
};

window.applyNameFont = function (el, f) {
  window.loadNameFont(f);
  el.style.fontFamily = `"${f.family}", cursive`;
  el.style.fontStyle = f.italic ? "italic" : "normal";
  el.style.textTransform = f.upper ? "uppercase" : "none";
  el.style.letterSpacing = f.upper ? ".1em" : "normal";
  el.style.setProperty("--name-scale", f.scale);
};
