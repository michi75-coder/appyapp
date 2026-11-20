# appyapp — contexte pour Claude

Site vitrine d'Appyapp (Astro, GitHub Pages). Le `README.md` décrit l'organisation et les commandes.

- Réponses en français ; code, commentaires et messages de commit en anglais.
- **Commits** : `git -c user.name="Nicolas Coulon" -c user.email="ncoulon75@gmail.com" commit`.
  Jamais de `Co-Authored-By`, de lien de session ni de mention d'un assistant.
- Une branche par sujet, poussée ; le propriétaire dit quand fusionner dans `main` (`--no-ff`).
  Fusionner publie le site.
- Le nom du propriétaire n'apparaît pas sur le site ; le contact est `appyapp.contact@gmail.com`.
- Les promesses (sans compte, sans pub, données) sont propres à chaque app, jamais à la marque :
  une app future peut être différente. Ce qu'une page dit d'une app doit rester vrai pour elle.
- Tout texte s'ajoute en français et en anglais (`src/i18n/`), au tutoiement.
- Aucun service tiers chargé par le site (polices, statistiques, vidéos) sans en parler d'abord.
- `yarn build` doit passer avant de dire qu'une modification est terminée ; vérifier le rendu en
  local (`yarn preview`), sur ordinateur et sur mobile.
