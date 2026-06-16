# Déploiement de In-Tel Services sur Vercel

Ce guide explique comment mettre en ligne le site **In-Tel Services** sur **Vercel** avec le domaine `intel-services.tg`.

## 1. Préparer le projet en local

```bash
git clone https://github.com/KAVEGEAmelie/intelservice.git
cd intelservice
npm install
npm run lint
npm run typecheck
RESEND_API_KEY='' CONTACT_TO_EMAIL='test@example.com' npm run build
```

Avant le déploiement, vérifiez que le projet compile correctement sur votre machine et que le formulaire dispose de variables d'environnement cohérentes.

## 2. Configurer Resend

1. Créez un compte sur [Resend](https://resend.com/) (offre gratuite disponible).
2. Dans **API Keys**, créez une clé nommée `intel-services-production`.
3. Copiez la clé et conservez-la pour Vercel dans `RESEND_API_KEY`.
4. Définissez `CONTACT_TO_EMAIL` avec l'adresse de réception souhaitée.
5. Optionnel : vérifiez le domaine d'envoi pour utiliser `contact@intel-services.tg` comme expéditeur.

## 3. Déployer sur Vercel

1. Connectez-vous à [Vercel](https://vercel.com/).
2. Cliquez sur **Add New Project** puis importez le dépôt GitHub `KAVEGEAmelie/intelservice`.
3. Vérifiez que le framework détecté est **Next.js**.
4. Ajoutez les variables d'environnement :
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
5. Lancez le premier déploiement avec **Deploy**.

## 4. Connecter le domaine `intel-services.tg`

Dans le tableau de bord Vercel, ouvrez **Settings > Domains** puis ajoutez :

- Domaine racine : `intel-services.tg`
- Sous-domaine : `www.intel-services.tg`

Configurez ensuite le DNS chez votre registrar :

| Type | Nom | Valeur |
| --- | --- | --- |
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

Attendez la propagation DNS puis confirmez le domaine dans Vercel.

## 5. Checklist post-déploiement

- Vérifier l'ouverture du site sur `https://intel-services.tg`
- Vérifier la version `www`
- Contrôler `https://intel-services.tg/sitemap.xml`
- Contrôler `https://intel-services.tg/robots.txt`
- Tester le formulaire de contact
- Vérifier la réception email
- Tester le bouton WhatsApp
- Vérifier les headers de sécurité
- Mesurer les performances avec PageSpeed Insights
- Tester les données structurées avec Rich Results Test

## 6. Workflow de déploiement continu

Workflow recommandé :

1. Créer une branche de travail
2. Ouvrir une Pull Request
3. Vérifier la preview Vercel générée automatiquement
4. Valider la CI GitHub Actions
5. Fusionner vers `main`
6. Laisser Vercel redéployer la production

## 7. Référencement

Après mise en ligne :

1. Ajoutez le site à **Google Search Console**
2. Soumettez le sitemap
3. Créez ou mettez à jour la fiche **Google Business Profile**
4. Vérifiez les informations NAP (Name, Address, Phone) partout de façon cohérente

## Dépannage

### Le formulaire ne marche pas

- Vérifiez `RESEND_API_KEY`
- Vérifiez `CONTACT_TO_EMAIL`
- Contrôlez les logs Vercel
- Vérifiez que la clé Resend est active

### Le site est lent

- Vérifiez les scores PageSpeed
- Compressez davantage les médias lourds
- Contrôlez les performances réseau et cache Vercel

### Le déploiement échoue

- Relancez `npm run lint`
- Relancez `npm run typecheck`
- Relancez `npm run build`
- Vérifiez les variables d'environnement dans Vercel
- Consultez les logs du build Vercel

## Coûts estimés

| Service | Estimation |
| --- | --- |
| Vercel Hobby | Gratuit |
| Resend | Gratuit pour démarrer |
| Domaine `.tg` | Environ 30 €/an |

## Pour aller plus loin

- Ajouter Vercel Analytics
- Prévoir une version multilingue
- Ajouter un blog SEO
- Connecter un module e-commerce ou catalogue
