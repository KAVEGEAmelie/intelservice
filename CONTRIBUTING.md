# Guide de contribution

Merci de contribuer au projet **In-Tel Services**.

## Workflow Git recommandé

1. Forker ou cloner le dépôt
2. Créer une branche dédiée à votre changement
3. Développer de petites modifications ciblées
4. Lancer `npm run lint`, `npm run typecheck` et `npm run build`
5. Ouvrir une Pull Request claire et concise

## Convention de commits

Le projet suit **Conventional Commits** :

- `feat:` nouvelle fonctionnalité
- `fix:` correction de bug
- `docs:` documentation
- `style:` mise en forme sans impact logique
- `refactor:` refactorisation sans changement fonctionnel
- `test:` ajout ou modification de tests
- `chore:` maintenance ou configuration

Exemple :

```bash
git commit -m "docs: ajouter le guide de déploiement Vercel"
```

## Checklist Pull Request

Avant d'ouvrir une PR :

- Vérifier que le changement est ciblé et minimal
- Vérifier le lint
- Vérifier le typage TypeScript
- Vérifier le build de production
- Relire les textes en français
- Décrire clairement l'objectif de la PR

## Conventions de code

- Respecter l'indentation à 2 espaces dans les fichiers JSON/YAML
- Conserver la structure existante du projet
- Ne pas modifier les contenus métier centralisés sans mettre à jour `lib/site.ts`
- Réutiliser les dépendances déjà présentes avant d'en ajouter de nouvelles
- Éviter les changements hors périmètre dans les Pull Requests
