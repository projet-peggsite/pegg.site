# 🚀 Pegg Site - Agence Digitale

Site web complet et moderne pour **Pegg Site**, une agence digitale spécialisée dans la transformation digitale complète.

## ✨ Caractéristiques

- ✅ **8 Services d'Excellence** : Web, App, Performance, SEO, Design, ROI, Marketing Automation, Support
- ✅ **Design Dark Tech Moderne** : Thème sombre futuriste avec animations fluides
- ✅ **Pages Complètes** : Accueil, Services, Portfolio, À Propos, Contact, Marketing Automation
- ✅ **Animations Fluides** : Utilisation de Framer Motion pour des transitions élégantes
- ✅ **Portfolio Filtrable** : Galerie de projets avec filtres par catégorie
- ✅ **Formulaire Multi-Étapes** : Contact avec qualification de prospects
- ✅ **SEO Optimisé** : Metadata complètes sur chaque page
- ✅ **Responsive Design** : Parfait sur tous les appareils
- ✅ **Performance** : Optimisé pour Core Web Vitals

## 🛠️ Stack Technologique

- **Framework** : Next.js 14 avec App Router
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icons** : React Icons
- **Database Ready** : Configuration pour PostgreSQL
- **Deployment** : Optimisé pour Vercel

## 📋 Pages du Site

### 1. **Accueil** (/)
- Hero futuriste avec animations 3D-like
- Section des 8 services clés
- Statistiques avec compteurs animés
- Processus méthodologique
- CTA opportuniste

### 2. **Services** (/services)
- Détail complet de chaque service
- Bénéfices et technologies
- Cas d'usage réels
- CTA individuels

### 3. **Portfolio** (/portfolio)
- Galerie de 6+ projets de référence
- Filtres par catégorie (SaaS, E-commerce, etc.)
- Résultats mesurables (ROI, Traffic, Conversions)
- Animations fluides au survol

### 4. **À Propos** (/about)
- Mission et vision
- 6 valeurs cœur (Excellence, Résultats, Data-Driven, Innovation, Collaboration, Craftsmanship)
- Méthodologie agile transparente
- Équipe d'experts

### 5. **Contact & Devis** (/contact)
- Formulaire multi-étapes (4 étapes)
- Qualification intelligente des prospects
- Intégration email prête
- Support immédiat via phone/email

### 6. **Marketing Automation** (/marketing-automation)
- Page de destination complète
- Bénéfices clés du service
- Système 6 étapes (Lead Capture → Analytics)
- Tunnel de conversion visuel
- Intégrations compatibles

## 🚀 Installation & Démarrage

### Prérequis
- Node.js 18+ 
- npm ou pnpm

### Installation

```bash
# Cloner le répertoire (si applicable)
git clone <repo-url>
cd pegg-site

# Installer les dépendances
npm install

# Ou avec pnpm
pnpm install

# Ou avec yarn
yarn install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev

# Accéder à : http://localhost:3000
```

### Build Production

```bash
# Créer la build
npm run build

# Lancer le serveur production
npm run start

# Ou déployer directement sur Vercel
vercel deploy
```

## 📁 Structure du Projet

```
pegg-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Accueil
│   │   ├── globals.css         # Styles globaux
│   │   ├── services/
│   │   │   └── page.tsx        # Page Services
│   │   ├── portfolio/
│   │   │   └── page.tsx        # Page Portfolio
│   │   ├── about/
│   │   │   └── page.tsx        # Page À Propos
│   │   ├── contact/
│   │   │   └── page.tsx        # Page Contact
│   │   └── marketing-automation/
│   │       └── page.tsx        # Page Marketing Automation
│   └── components/
│       ├── Header.tsx          # Navigation
│       ├── Footer.tsx          # Pied de page
│       ├── home/
│       │   ├── Hero.tsx        # Section héros
│       │   ├── Services.tsx    # Services Overview
│       │   ├── Stats.tsx       # Statistiques
│       │   ├── ProcessSection.tsx # Méthodologie
│       │   └── CTA.tsx         # Call to Action
│       └── pages/
│           ├── ServicesPage.tsx     # Détail Services
│           ├── PortfolioPage.tsx    # Portfolio
│           ├── AboutPage.tsx        # À Propos
│           ├── ContactPage.tsx      # Contact
│           └── MarketingAutomationPage.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## 🎨 Design & Thème

### Palette de Couleurs
- **Primary** : Bleu cyan (#0ea5e9)
- **Secondary** : Purple gradient (#a855f7)
- **Accent** : Rose (#ec4899)
- **Tech Green** : (#10b981)
- **Background** : Noir profond (#000000)
- **Dark** : #1a1a2e

### Typographie
- **Sans-serif** : Inter (Google Fonts)
- **Monospace** : Fira Code (Code/Tech)

### Animations
- Framer Motion pour les transitions
- Tailwind animations personnalisées
- Scroll animations avec `whileInView`
- Hover effects élégants

## 📊 SEO & Métadonnées

Chaque page inclut :
- Title et description optimisés
- Keywords pertinents
- Open Graph data
- Canonical URLs
- JSON-LD Schema (prêt pour ajout)

## 🔧 Configuration

### Environment Variables
Aucune variable d'environnement requise pour démarrage. Pour production, ajouter :

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://pegg-site.com
NEXT_PUBLIC_API_URL=https://api.pegg-site.com
```

### Tailwind Configuration
Couleurs, animations et effects customisés dans `tailwind.config.js`

## 📱 Responsive Design

- Mobile First approach
- Breakpoints : sm (640px), md (768px), lg (1024px)
- Navigation responsif avec menu mobile
- Toutes les composantes optimisées pour mobile

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel deploy
```

### Docker
```bash
docker build -t pegg-site .
docker run -p 3000:3000 pegg-site
```

## 📞 Support & Contact

- **Phone** : +242 06 989 9982
- **Email** : contact@pegg.site
- **Adresse** : Pointe-Noire, Congo

## 📝 Licence

Copyright © 2024 Pegg Site. Tous droits réservés.

## 🙌 Crédits

Créé avec Next.js, React, TypeScript, Tailwind CSS et Framer Motion.

---

**Transformez votre présence digitale avec Pegg Site** 🚀

## Pousser vers github

git add .
git commit -m "update"
git push