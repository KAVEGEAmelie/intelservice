# In-Tel Services

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-ready-000000?logo=vercel&logoColor=white)](https://vercel.com/)

Site vitrine one-page de **In-Tel Services**, entreprise togolaise basée à **Lomé** spécialisée en informatique, réseaux, vidéosurveillance, maintenance et développement web.

## Aperçu du site

Le site est structuré autour de 8 sections principales :

1. Hero
2. About
3. Services
4. WhyUs
5. Process
6. Gallery
7. Testimonials
8. Contact

> Tout le contenu textuel métier du site est centralisé dans `lib/site.ts`.

## Stack technique

| Catégorie | Technologie |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Langage | TypeScript 5 strict |
| UI | React 18 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion + Lenis |
| Formulaires | React Hook Form + Zod |
| Thème | next-themes |
| Envoi d'email | Resend |
| Déploiement | Vercel |

## Démarrage rapide

```bash
git clone https://github.com/KAVEGEAmelie/intelservice.git
cd intelservice
npm install
cp .env.example .env.local
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Scripts npm

| Script | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère le build de production |
| `npm run start` | Démarre l'application en mode production |
| `npm run lint` | Vérifie la qualité du code avec ESLint |
| `npm run typecheck` | Vérifie le typage TypeScript sans émission |

## Variables d'environnement

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Clé API Resend utilisée pour envoyer les messages du formulaire de contact |
| `CONTACT_TO_EMAIL` | Adresse de destination qui recevra les messages du site |

### Obtenir une clé Resend gratuitement

1. Créez un compte gratuit sur [resend.com](https://resend.com/).
2. Ouvrez **API Keys** puis créez une clé nommée `intel-services-production`.
3. Copiez la clé dans `RESEND_API_KEY`.
4. Facultatif : vérifiez votre domaine pour envoyer depuis `contact@intel-services.tg`.

## Structure du projet

```text
intelservice/
├── app/
│   ├── api/contact/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── sections/
│   └── *.tsx
├── lib/
│   ├── contact-schema.ts
│   ├── site.ts
│   └── utils.ts
├── public/
│   ├── logo.png
│   └── site.webmanifest
├── .env.example
├── .eslintrc.json
├── next.config.mjs
├── package.json
└── vercel.json
```

## Identité visuelle

| Usage | Couleur |
| --- | --- |
| Brand | `#0A2540` |
| Lime | `#9BE600` |
| Accent | `#06B6D4` |

## SEO & performance

Le projet intègre déjà les éléments clés de production :

- metadata Next.js complètes
- données structurées JSON-LD `LocalBusiness`
- `sitemap.xml`
- `robots.txt`
- headers de sécurité via `next.config.mjs`
- protection anti-spam par honeypot sur le formulaire

## Déploiement

Consultez le guide complet : [DEPLOYMENT.md](./DEPLOYMENT.md)

## Coordonnées

- **Nom** : In-Tel Services
- **Adresse** : 20 Av. du RPT, Face le Grand Collège du Plateau, 04BP452 Lomé-TOGO
- **Téléphones** : (+228) 22 22 14 54, 90 11 66 86, 99 32 98 98
- **WhatsApp** : [22890116686](https://wa.me/22890116686)
- **Email** : [infos_its@yahoo.fr](mailto:infos_its@yahoo.fr)
- **Production** : [https://intel-services.tg](https://intel-services.tg)

---

Fait avec ❤️ à Lomé
