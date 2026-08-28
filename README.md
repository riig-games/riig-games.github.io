# riig-games.github.io

Site public de RIIG (Ralden Idle Incremental Games) — hébergé via GitHub Pages à
l'adresse [riig-games.github.io](https://riig-games.github.io/).

HTML/CSS statique, sans build ni dépendance (pas de Jekyll — voir `.nojekyll`).
**Tout le site est bilingue FR/EN** (page d'accueil, chaque fiche de jeu, chaque
politique de confidentialité) — voir "Pages bilingues" ci-dessous.

## Structure

```
index.html                              Page d'accueil RIIG (liste des jeux)
assets/style.css                        Feuille de style partagée par toutes les pages
assets/lang.js                          Sélecteur de langue FR/EN partagé par toutes les pages
assets/riig-logo.png                    Logo RIIG (repris de idle-plant-incremental/src/assets)
games/<slug>/index.html                 Fiche du jeu <slug>
games/<slug>/privacy.html               Politique de confidentialité du jeu <slug>
```

## Pages bilingues

Chaque page affiche un petit sélecteur de drapeaux 🇫🇷/🇬🇧 en haut (`.lang-switch`/
`.lang-btn` dans `style.css`, `aria-label="Français"`/`"English"` pour
l'accessibilité). Le contenu de la page est dupliqué dans deux blocs `<div data-lang-content="fr">…</div>`
et `<div data-lang-content="en" hidden>…</div>`, et `assets/lang.js` (chargé en bas de
chaque page, `<script src=".../assets/lang.js"></script>`) bascule lequel des deux est
visible. Détecte la langue du navigateur par défaut (repli anglais), mémorise le choix
dans `localStorage` sous une clé UNIQUE (`riig-lang`) partagée par tout le site — même
origine `riig-games.github.io` pour toutes les pages, donc choisir l'anglais sur une
page le garde en naviguant vers une autre. Le titre d'onglet peut varier par langue via
`data-title-fr`/`data-title-en` sur `<body>` (optionnel, lu par `lang.js`).

Les deux blocs doivent rester des **traductions fidèles** l'un de l'autre pour ce site
(légal/vitrine) — contrairement au contenu de lore du jeu lui-même (Codex), qui peut
être réécrit pour un public anglophone quand une notion est propre au français.

## Ajouter un nouveau jeu

1. Créer `games/<slug>/` avec `index.html` (fiche) et `privacy.html` (politique de
   confidentialité), en copiant la structure ET le pattern bilingue (voir "Pages
   bilingues" ci-dessus) de `games/idle-plant-incremental/`.
2. Ajouter une icône dans `assets/` et une carte `.card-link` vers `games/<slug>/`
   dans `index.html` (les deux blocs `data-lang-content`).
3. Une fois l'app publiée sur le Play Store, remplacer le lien "bientôt disponible"
   de la fiche du jeu par le vrai lien Play Store, et lier cette page de politique de
   confidentialité + la fiche depuis le Play Console (App content → Privacy Policy).

## Déploiement

Aucune action manuelle : GitHub Pages sert directement le contenu de la branche
`main` à la racine du repo (Settings → Pages → Source: `main` / `/ (root)`).
