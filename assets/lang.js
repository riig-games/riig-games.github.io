/**
 * Sélecteur de langue FR/EN partagé par toutes les pages du site (voir .lang-switch/.lang-btn dans
 * style.css). Un seul script, réutilisé par la page d'accueil, chaque fiche de jeu et chaque
 * politique de confidentialité — évite de dupliquer cette logique dans chaque fichier HTML.
 *
 * Convention : chaque bloc de contenu langue-dépendant porte `data-lang-content="fr"` ou `="en"` ;
 * le bloc non actif est caché via l'attribut `hidden`. Le titre de page peut varier par langue via
 * deux attributs optionnels sur <body> : `data-title-fr`/`data-title-en`.
 *
 * Le choix de langue est mémorisé dans localStorage sous une clé UNIQUE partagée par tout le site
 * (même origine `riig-games.github.io` pour toutes les pages) : choisir l'anglais sur une page le
 * garde en naviguant vers une autre, plutôt que de redemander à chaque page.
 */
(function () {
  var STORAGE_KEY = 'riig-lang';
  var SUPPORTED = ['fr', 'en'];

  var stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    /* localStorage indisponible (navigation privée...) — repli sur la détection navigateur. */
  }

  var initial =
    SUPPORTED.indexOf(stored) !== -1
      ? stored
      : (navigator.language || '').toLowerCase().indexOf('fr') === 0
        ? 'fr'
        : 'en';

  function apply(lang) {
    document.documentElement.lang = lang;
    var titleAttr = document.body.getAttribute('data-title-' + lang);
    if (titleAttr) {
      document.title = titleAttr;
    }
    var blocks = document.querySelectorAll('[data-lang-content]');
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].hidden = blocks[i].getAttribute('data-lang-content') !== lang;
    }
    var buttons = document.querySelectorAll('.lang-btn');
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].setAttribute('aria-pressed', String(buttons[j].getAttribute('data-lang') === lang));
    }
  }

  function init() {
    var buttons = document.querySelectorAll('.lang-btn');
    for (var k = 0; k < buttons.length; k++) {
      buttons[k].addEventListener('click', function (event) {
        var lang = event.currentTarget.getAttribute('data-lang');
        try {
          localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
          /* rien à faire si le stockage est indisponible — le choix ne survit juste pas au rechargement/à la navigation */
        }
        apply(lang);
      });
    }
    apply(initial);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
