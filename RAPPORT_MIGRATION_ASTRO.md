# RAPPORT DE MIGRATION KABIN — REACT/VITE → ASTRO

**Date de finalisation :** 13 août 2026

**Branche :** `dev`

**Statut :** ✅ Migration terminée et validée localement

## Résumé

Le site Kabin est désormais construit avec Astro 7, React 18 et Tailwind CSS. Les 16 routes espagnoles et anglaises sont prérendues en HTML statique, puis le composant React est hydraté côté navigateur pour conserver les animations, formulaires, calculateurs et interactions.

Le blocage `ReferenceError: window is not defined` est résolu sans passer le composant en `client:only` : les pages restent donc rendues côté serveur et indexables.

## État final

| Élément | Statut |
|---|---|
| Build Astro statique | ✅ 16 pages générées |
| Rendu serveur React | ✅ Aucun accès à `window` pendant le prérendu |
| Hydratation initiale | ✅ État fourni par les props des pages Astro |
| Styles Tailwind | ✅ Feuille globale importée et CSS généré |
| Pages ES / EN | ✅ Routes et contenu vérifiés |
| SEO technique | ✅ Canonical, hreflang, Open Graph, Twitter et JSON-LD |
| Sitemap | ✅ Généré automatiquement par Astro |
| Routage Vercel | ✅ Anciens rewrites SPA supprimés |
| Dépendances | ✅ Astro 7.2.1, aucune vulnérabilité npm connue |
| Fichiers Vite obsolètes | ✅ Supprimés |

## Cause et correction du blocage SSR

Le composant `KabinConsultoriaMockup` déterminait la page active avec `window.location.pathname` dans les initialiseurs de `useState`. Astro exécute ces initialiseurs pendant le prérendu statique, où `window` n’existe pas.

La correction apporte trois changements :

1. Chaque page `.astro` transmet maintenant son identifiant de page et sa langue au composant React.
2. Le premier rendu utilise exclusivement ces props, aussi bien sur le serveur que dans le navigateur.
3. La lecture de l’URL reste disponible après hydratation pour les anciennes ancres et la navigation navigateur, avec une garde SSR.

Cette approche évite un HTML vide et préserve le SEO, contrairement à un passage global en `client:only`.

## Architecture finale

- `src/layouts/Base.astro` : layout commun, CSS global et métadonnées SEO.
- `src/pages/` : 16 pages statiques ES/EN.
- `src/components/KabinConsultoriaMockup.jsx` : interface React interactive.
- `api/kabin-quote.js` : fonction Vercel existante pour les demandes de devis.
- `astro.config.mjs` : React, sitemap, URL du site et URLs avec slash final.

Les anciens fichiers d’entrée Vite (`index.html`, `en/index.html`, `src/main.jsx`) ont été retirés. Les fichiers générés `.astro/` ne sont plus versionnés.

## SEO et bilingue

Le layout commun produit pour chaque route :

- URL canonique absolue ;
- alternates `es-MX`, `en` et `x-default` ;
- association explicite des slugs traduits des trois articles ;
- balises Open Graph et Twitter ;
- image d’article dédiée ;
- schéma JSON-LD `ProfessionalService`, complété par `Article` sur les articles.

Les libellés qui restaient en espagnol sur les pages anglaises (assurance et formulaires) ont également été traduits.

## Validation effectuée

```text
npm run build
→ 16 page(s) built
→ sitemap-index.xml créé

npm audit --audit-level=high
→ found 0 vulnerabilities
```

La prévisualisation locale a ensuite été contrôlée route par route : code HTTP 200, langue, canonical, hreflang, CSS, JSON-LD et contenu attendu. Une URL inconnue retourne bien 404 au lieu de l’ancienne page d’accueil SPA.

## Déploiement

La branche `main` reste inchangée. Une fois le commit final poussé sur `dev`, Vercel peut construire la branche avec la commande standard `npm run build`. Le projet exige Node.js `>=22.12.0`, conformément à Astro 7.
