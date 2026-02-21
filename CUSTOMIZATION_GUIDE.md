🎨 GUIDE DE PERSONNALISATION - Pegg Site
═══════════════════════════════════════════════════════════════════════════════

Ce guide vous aide à personnaliser le site de Pegg Site à vos besoins spécifiques.

📝 1. INFORMATIONS DE CONTACT
────────────────────────────────────────────────────────────────────────────

Mettez à jour votre numéro de téléphone, email et adresse dans ces fichiers :

📄 src/components/Footer.tsx (Ligne ~45-65)
```javascript
<span>+242 06 989 9982</span>            // ← Votre numéro
<span>contact@pegg.site</span>           // ← Votre email
<span>Pointe-Noire, Congo</span>         // ← Votre adresse
```

📄 src/components/home/CTA.tsx (Ligne ~65-75)
```javascript
<a href="tel:+24206989982">...</a>      // ← Votre téléphone
<a href="mailto:contact@pegg.site">...</a>  // ← Votre email
```

📄 src/components/pages/ContactPage.tsx (Ligne ~185-195)
```javascript
<p>+242 06 989 9982</p>                 // ← Votre téléphone
<p>contact@pegg.site</p>                // ← Votre email
```

🎯 2. LOGO & BRANDING
────────────────────────────────────────────────────────────────────────────

📄 src/components/Header.tsx (Ligne ~30-35)

Option 1 : Remplacer le texte du logo
```javascript
<span className="font-bold text-xl ...">
  YOUR_LOGO_TEXT  // ← Changez ici
</span>
```

Option 2 : Ajouter une image logo
```javascript
import Image from 'next/image';

<Image src="/logo.svg" alt="Logo" width={40} height={40} />
```

Mettez votre logo dans : `public/logo.svg` ou `public/logo.png`

🎨 3. COULEURS & THÈME
────────────────────────────────────────────────────────────────────────────

📄 tailwind.config.js (Ligne ~10-50)

Modifier la palette de couleurs :
```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // ← Couleur primaire (changer ici)
  },
  tech: {
    purple: '#a855f7',  // ← Couleur secondaire
    pink: '#ec4899',    // ← Couleur tertaire
    cyan: '#06b6d4',
    green: '#10b981',
  },
  dark: {
    900: '#000000',     // ← Fond très foncé
    800: '#101010',     // ← Fond foncé
  },
},
```

💡 Conseil : Explorez https://tailwindcss.com/docs/customization/colors

📱 4. CONTENU DU PORTFOLIO
────────────────────────────────────────────────────────────────────────────

📄 src/components/pages/PortfolioPage.tsx (Ligne ~10-70)

Remplacer les projets d'exemple :
```javascript
const portfolioProjects = [
  {
    id: 1,
    title: 'Votre Projet 1',              // ← Titre
    category: 'SaaS',                     // ← Catégorie
    client: 'Client Name',                // ← Nom du client
    roi: '+320%',                         // ← ROI du projet
    description: 'Description...',        // ← Description courte
    results: [
      { metric: 'Metric', value: '45K+' },  // ← Résultats
    ],
  },
  // Ajouter d'autres projets...
];
```

🏢 5. À PROPOS & ÉQUIPE
────────────────────────────────────────────────────────────────────────────

📄 src/components/pages/AboutPage.tsx

Ligne ~45-55 : Mission & Vision
```javascript
<p>... votre mission personnalisée ...</p>
<p>... votre vision personnalisée ...</p>
```

Ligne ~85-100 : Valeurs cœur
Personnalisez les 6 valeurs (`coreValues` array)

Ligne ~180-195 : Équipe
Remplacer les noms et rôles d'équipe

📝 6. CONTENU DES SERVICES
────────────────────────────────────────────────────────────────────────────

📄 src/components/pages/ServicesPage.tsx (Ligne ~10-80)

Personnaliser les 8 services :
```javascript
const servicesDetail = [
  {
    title: 'Votre Service',       // ← Titre
    description: 'Votre description...', // ← Description
    benefits: [
      'Bénéfice 1',               // ← Vos bénéfices
      'Bénéfice 2',
    ],
    technologies: ['Tech1', 'Tech2'],  // ← Vos technologies
  },
];
```

🤖 7. TEXTES DE MARKETING AUTOMATION
────────────────────────────────────────────────────────────────────────────

📄 src/components/pages/MarketingAutomationPage.tsx

Personnaliser les bénéfices et processus selon votre offer

📄 src/components/home/Services.tsx

Mettre à jour les descriptions de services

🎯 8. FORMULAIRE DE CONTACT
────────────────────────────────────────────────────────────────────────────

📄 src/components/pages/ContactPage.tsx

Les 4 étapes peuvent être personnalisées :
```javascript
const steps = [
  {
    id: 1,
    title: 'Étape personnalisée',
    fields: [
      { name: 'customField', label: 'Votre champ' },
      // Ajouter d'autres champs
    ],
  },
];
```

Pour intégrer l'email ou une base de données :
1. Ajouter une route API : `src/app/api/contact/route.ts`
2. Intégrer avec votre service email (SendGrid, Mailgun, etc.)
3. Ou avec un CRM (HubSpot, Pipedrive, etc.)

💌 9. INTÉGRATIONS EMAIL
────────────────────────────────────────────────────────────────────────────

Option 1 : SendGrid
```bash
npm install @sendgrid/mail
```

Option 2 : Mailgun
```bash
npm install mailgun.js
```

Option 3 : Brevo (anciennement Sendinblue)
```bash
npm install sib-api-v3-sdk
```

Option 4 : Service tiers (Zapier, Make)
Via webhook sur votre formulaire

📊 10. TEXTES & STATISTIQUES
────────────────────────────────────────────────────────────────────────────

📄 src/components/home/Stats.tsx (Ligne ~15-25)
```javascript
{ label: 'Projets Livrés', value: 150, suffix: '+' },
{ label: 'Clients Satisfaits', value: 98, suffix: '%' },
```

Changez ces nombres par vos vraies statistiques

📄 src/app/page.tsx

Mettre à jour la description globale du site

📄 src/app/layout.tsx (Ligne ~5-20)

Mettre à jour les métadonnées :
```javascript
export const metadata: Metadata = {
  title: 'Votre Titre | Votre Slogan',
  description: 'Votre description...',
};
```

🌍 11. DOMAINE & DÉPLOIEMENT
────────────────────────────────────────────────────────────────────────────

📄 vercel.json (Ligne ~5-10)
```json
"env": [
  {
    "key": "NEXT_PUBLIC_SITE_URL",
    "value": "https://votre-domaine.com"
  }
]
```

📄 public/sitemap.xml (Ligne ~5-10)
```xml
<loc>https://votre-domaine.com</loc>
```

📄 .env.example
```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

🔐 12. VARIABLES D'ENVIRONNEMENT
────────────────────────────────────────────────────────────────────────────

Créer `.env.local` à la racine :
```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com

# Email Service (si applicable)
NEXT_PUBLIC_CONTACT_EMAIL=contact@votre-domaine.com
SMTP_USER=votre-email@gmail.com
SMTP_PASSWORD=votre-app-password

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# CRM Integration (optionnel)
HUBSPOT_API_KEY=xxxxxxxxx
STRIPE_PUBLIC_KEY=pk_test_...
```

🎨 13. TYPOGRAPHIE PERSONNALISÉE
────────────────────────────────────────────────────────────────────────────

📄 src/app/globals.css (Ligne ~1)
```css
@import url('https://fonts.googleapis.com/css2?family=VotreFont:wght@400;600;700&display=swap');
```

Puis dans `tailwind.config.js` :
```javascript
fontFamily: {
  sans: ['VotreFont', 'sans-serif'],
}
```

🖼️ 14. IMAGES & ASSETS
────────────────────────────────────────────────────────────────────────────

Placer vos assets dans `public/` :

```
public/
├── logo.svg
├── logo.png
├── hero-image.jpg
├── favicon.ico
└── ...
```

Référencer dans les composants :
```javascript
<img src="/logo.svg" alt="Logo" />
```

Ou avec Next.js Image API :
```typescript
import Image from 'next/image';

<Image src="/logo.svg" width={40} height={40} alt="Logo" />
```

💻 15. ANIMATIONS PERSONNALISEES
────────────────────────────────────────────────────────────────────────────

📄 src/app/globals.css (keyframes section)

Modifier les durées d'animation :
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);  // Réduire pour plus rapide
  }
  50% {
    transform: translateY(-20px);  // Augmenter pour amplitude
  }
}
```

📄 src/components/home/Hero.tsx

Ajuster les durée Framer Motion :
```javascript
animate={{ rotate: 360 }}
transition={{ duration: 20, repeat: Infinity }}  // ← duration est en secondes
```

📱 16. RESPONSIVE BREAKPOINTS
────────────────────────────────────────────────────────────────────────────

📄 tailwind.config.js

Les breakpoints sont déjà configurés. Les classes Tailwind disponibles :
- `sm:` (640px) - Téléphones
- `md:` (768px) - Tablettes
- `lg:` (1024px) - Ordinateurs
- `xl:` (1280px) - Grands écrans

Exemple :
```html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

📈 17. INTÉGRATION ANALYTICS
────────────────────────────────────────────────────────────────────────────

Google Analytics 4 :

Créer `src/app/layout.tsx` et ajouter :
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      {/* ... */}
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  )
}
```

Puis dans `.env.local` :
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

🚀 18. DEPLOYMENT
────────────────────────────────────────────────────────────────────────────

Vercel (Recommandé) :
```bash
npm install -g vercel
vercel
# Suivre les instructions
```

Docker :
```bash
docker build -t mon-site .
docker run -p 3000:3000 mon-site
```

Standard :
```bash
npm run build
npm run start
```

✅ 19. CHECKLIST PERSONNALISATION
────────────────────────────────────────────────────────────────────────────

□ Informations de contact mises à jour
□ Logo et branding personnalisés
□ Couleurs adaptées à votre marque
□ Portfolio avec vos vrais projets
□ À Propos avec votre histoire
□ Services personnalisés
□ Statistiques correctes
□ Domaine configuré
□ Email intégré
□ Analytics configuré
□ Formulaire de contact fonctionnel
□ Tous les textes dans votre langue/style

🎉 20. COMMANDES ESSENTIELLES
────────────────────────────────────────────────────────────────────────────

```bash
# Installation
npm install

# Développement
npm run dev      # Visiter http://localhost:3000

# Build
npm run build    # Optimiser pour production

# Production
npm run start    # Lancer le serveur production

# Linting
npm run lint     # Vérifier la qualité du code
```

═══════════════════════════════════════════════════════════════════════════════

❓ QUESTIONS COURANTES

Q: Comment ajouter une nouvelle page?
A: Créer un dossier dans `src/app/` avec un `page.tsx`

Q: Comment changer le favicon?
A: Remplacer la image dans `public/favicon.ico`

Q: Comment ajouter un formulaire de newsletter?
A: Intégrer avec Brevo, Mailchimp, ou créer une API personnalisée

Q: Comment ajouter un blog?
A: Utiliser un CMS headless (Contentful, Strapi, Sanity)

Q: Comment ajouter des commentaires?
A: Utiliser Disqus ou créer une solution personnalisée

═══════════════════════════════════════════════════════════════════════════════

💡 CONSEILS GÉNÉRAUX

1. Testez toutes les pages après chaque changement
2. Vérifiez la responsivité sur mobile
3. Mettez à jour le SEO sur chaque page
4. Gardez la cohérence visuelle
5. Testez les formulaires avant deployment
6. Sauvegardez votre code source (Git)
7. Utilisez des images optimisées (WebP)
8. Monitorez les performances (Lighthouse)

═══════════════════════════════════════════════════════════════════════════════

Support: Consultez la documentation Next.js et Tailwind CSS
Date créée: February 19, 2024
Version: 1.0.0
