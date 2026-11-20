# Appyapp — site

Site vitrine d'Appyapp (Sunory, AquaShot), construit avec [Astro](https://astro.build) et publié
sur GitHub Pages : https://michi75-coder.github.io/appyapp/

## Travailler sur le site

```
yarn install
yarn dev        # le site en local, rechargé à chaque modification
yarn build      # le site final dans dist/
yarn preview    # dist/ servi en local, comme en ligne
```

## Organisation

- `src/pages/` : une page = un fichier. Le français à la racine (`/`, `/sunory/`, `/aquashot/`),
  l'anglais sous `/en/`. Chaque page ne fait qu'appeler son composant avec la langue.
- `src/i18n/fr.ts` et `en.ts` : **tous les textes**, dans les deux langues, même structure.
- `src/components/` : l'accueil (`HomePage`, avec la scène du soleil `SkyHero`, les chapitres
  `Chapter` et la montée de l'eau `WaterBridge`) et la page d'une app (`AppPage`).
- `src/data/apps.ts` : liens des stores, icônes, liste des images de chaque app.
- `src/assets/<app>/` : icône, captures brutes (`screens/<langue>/`, dans le téléphone) et images
  des stores (`store/<langue>/`, la galerie). Reprises de `sunory-store` et `aqua-shot-store`,
  en WebP 900 px ; Astro en tire les tailles servies.
- `src/scripts/page.ts` : les effets de défilement (soleil, ombres, eau, écrans des chapitres).
- Polices auto-hébergées (`@fontsource-variable`) : aucune requête vers un service de polices.

## Publication

`.github/workflows/deploy.yml` construit et publie le site à chaque push sur `main`. Réglage
GitHub : Settings → Pages → Source : **GitHub Actions**.

Un domaine à soi : `site` dans `astro.config.mjs` devient ce domaine, `base` disparaît, et un
fichier `public/CNAME` le déclare à GitHub Pages.
