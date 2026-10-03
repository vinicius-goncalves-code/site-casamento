// Opções de fonte para o nome do casal (usadas em index.html e fontes.html).
// `scale` compensa o tamanho visual de cada fonte em relação à escolhida (Cormorant Garamond light).
window.NAME_FONTS = [
  { id: "amour",        name: "Cormorant Garamond", family: "Cormorant Garamond", google: "Cormorant+Garamond:wght@300", note: "Escolhida · estilo “Amour”",   weight: 300, scale: 1 },
  { id: "cinzel",       name: "Cinzel",           family: "Cinzel",           google: "Cinzel:wght@400",              note: "Clássica, caixa-alta",          upper: true, scale: .62 },
  { id: "great-vibes",  name: "Great Vibes",      family: "Great Vibes",      google: "Great+Vibes",                  note: "Caligrafia elegante",          scale: 1.05 },
  { id: "parisienne",   name: "Parisienne",       family: "Parisienne",       google: "Parisienne",                   note: "Script leve, toque francês",   scale: .95 },
  { id: "dancing",      name: "Dancing Script",   family: "Dancing Script",   google: "Dancing+Script:wght@500",      note: "Cursiva descontraída",         scale: .87 },
  { id: "sacramento",   name: "Sacramento",       family: "Sacramento",       google: "Sacramento",                   note: "Traço fino e delicado",        scale: 1.2 },
  { id: "allura",       name: "Allura",           family: "Allura",           google: "Allura",                       note: "Romântica, bem fluida",        scale: 1.1 },
  { id: "playfair",     name: "Playfair Display", family: "Playfair Display", google: "Playfair+Display:ital@1",      note: "Serifa itálica moderna",       italic: true, scale: .72 },
  { id: "caveat",       name: "Caveat",           family: "Caveat",           google: "Caveat:wght@500",              note: "Manuscrita casual",            scale: 1 }
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
  el.style.fontWeight = f.weight || 400;
  el.style.fontStyle = f.italic ? "italic" : "normal";
  el.style.textTransform = f.upper ? "uppercase" : "none";
  el.style.letterSpacing = f.upper ? ".1em" : "normal";
  el.style.setProperty("--name-scale", f.scale);
};
