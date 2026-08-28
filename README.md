# riig-games.github.io

Site public de RIIG (Ralden Idle Incremental Games) — hébergé via GitHub Pages à
l'adresse [riig-games.github.io](https://riig-games.github.io/).

HTML/CSS statique, sans build ni dépendance (pas de Jekyll — voir `.nojekyll`).

## Structure

```
index.html                              Page d'accueil RIIG (liste des jeux)
assets/style.css                        Feuille de style partagée par toutes les pages
assets/riig-logo.png                    Logo RIIG (repris de idle-plant-incremental/src/assets)
games/<slug>/index.html                 Fiche du jeu <slug>
games/<slug>/privacy.html               Politique de confidentialité du jeu <slug>
```

## Ajouter un nouveau jeu

1. Créer `games/<slug>/` avec `index.html` (fiche) et `privacy.html` (politique de
   confidentialité), en copiant la structure de `games/idle-plant-incremental/`.
   `privacy.html` est bilingue FR/EN (deux blocs `[data-lang-content]` + un petit
   script de bascule, voir ce fichier pour le pattern à reprendre tel quel) — les
   deux blocs doivent rester des traductions fidèles l'un de l'autre, contrairement
   au contenu de lore du jeu (Codex) qui, lui, peut être réécrit pour un public
   anglophone.
2. Ajouter une icône dans `assets/` et une carte `.card-link` vers `games/<slug>/`
   dans `index.html`.
3. Une fois l'app publiée sur le Play Store, remplacer le lien "bientôt disponible"
   de la fiche du jeu par le vrai lien Play Store, et lier cette page de politique de
   confidentialité + la fiche depuis le Play Console (App content → Privacy Policy).

## Déploiement

Aucune action manuelle : GitHub Pages sert directement le contenu de la branche
`main` à la racine du repo (Settings → Pages → Source: `main` / `/ (root)`).
