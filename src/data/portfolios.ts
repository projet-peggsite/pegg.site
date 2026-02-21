export interface Portfolio {
  id: number;
  title: string;
  category: string;
  client: string;
  slug: string;
  excerpt: string;
  description: string;
  image: string;
  roi: string;
  traffic: string;
  tags: string[];
  results: Array<{
    metric: string;
    value: string;
  }>;
  content: string;
  challenge: string;
  solution: string;
  technologies: string[];
  timeline: string;
  teamSize: number;
  goals: string[];
  achievements: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
    company: string;
  };
  nextSteps?: string;
}

export const portfolios: Portfolio[] = [
  {
    id: 1,
    title: 'TechFlow - Platform SaaS',
    category: 'SaaS',
    client: 'TechFlow Inc',
    slug: 'techflow-saas-platform',
    excerpt: 'Plateforme SaaS complète avec dashboard analytics avancé',
    description: 'Plateforme SaaS complète avec dashboard analytics avancé permettant aux entreprises de gérer leurs opérations en temps réel',
    image: 'bg-gradient-to-br from-primary-500 to-primary-600',
    roi: '+320%',
    traffic: '+180%',
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
    results: [
      { metric: 'Utilisateurs actifs', value: '45K+' },
      { metric: 'Taux conversion', value: '12.5%' },
      { metric: 'Croissance MoM', value: '+28%' },
    ],
    challenge: `TechFlow cherchait à créer une plateforme SaaS moderne et scalable pour offrir à ses clients une solution complète de gestion opérationnelle. Les défis principaux étaient:
- Besoin d'une architecture robuste capable de gérer 45K+ utilisateurs
- Dashboard temps réel avec données complexes et volumineuses
- Intégration avec plusieurs services tiers
- Performance critique pour la satisfaction utilisateur`,
    solution: `Nous avons développé une solution full-stack moderne:
- Architecture Next.js 14 avec App Router pour les meilleures performances
- PostgreSQL pour une gestion fiable des données
- Real-time updates avec WebSockets
- Dashboard interactif avec Recharts et animations Framer Motion
- API RESTful robuste avec authentification JWT
- Système de notifications en temps réel`,
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe', 'Auth0', 'Recharts'],
    timeline: '4 mois',
    teamSize: 5,
    goals: [
      'Créer une plateforme scalable',
      'Atteindre 45K utilisateurs actifs',
      'Générer 12.5% taux de conversion',
      'Assurer la croissance de 28% MoM'
    ],
    achievements: [
      'Lancement réussi avec 5K utilisateurs le premier mois',
      'Atteinte de 45K utilisateurs en 8 mois',
      'Score NPS de 65 (excellent)',
      'Réduction de 40% du coût d\'infrastructure grace à l\'optimisation',
      'Uptime de 99.95%',
      'Temps de chargement moyen: 1.2s'
    ],
    content: `# TechFlow - Platform SaaS

## Vue d'ensemble du Projet

TechFlow Inc. est un leader en solutions de gestion opérationnelle. Ils cherchaient à moderniser leur offre existante en créant une plateforme SaaS nouvelle génération capable de gérer les opérations complexes de milliers d'entreprises simultanément.

## Défis Identifiés

### Performance à l'Échelle
- Nécessité de gérer 45K+ utilisateurs concurrents
- Dashboard en temps réel avec millions de points de données
- Latence critique pour l'expérience utilisateur

### Complexité Technique
- Intégrations avec 8 services externes différents
- Synchronisation de données temps réel
- Gestion de fichiers volumineux (rapports, exports)

## Stack Technique
- **Frontend**: Next.js 14 avec App Router
- **Backend**: Node.js + Express
- **Database**: PostgreSQL + Redis
- **Infrastructure**: AWS, GitHub Actions

## Résultats
- Utilisateurs actifs: 45K+
- Score NPS: 65
- Uptime: 99.95%`,
    testimonial: {
      text: "La plateforme dépasse nos attentes. L'équipe a livré une solution scalable, performante et qui plaît à nos utilisateurs.",
      author: 'Marc Dubois',
      position: 'CTO',
      company: 'TechFlow Inc.'
    }
  },

  {
    id: 2,
    title: 'EcoShop - E-commerce',
    category: 'E-commerce',
    client: 'EcoShop',
    slug: 'ecoshop-ecommerce-platform',
    excerpt: 'Plateforme e-commerce durable avec intégration paiement',
    description: 'Plateforme e-commerce premium dédiée aux produits durables et écologiques avec système de paiement complet',
    image: 'bg-gradient-to-br from-tech-green to-tech-cyan',
    roi: '+450%',
    traffic: '+240%',
    tags: ['Next.js', 'Stripe', 'Inventory', 'Analytics'],
    results: [
      { metric: 'Transactions/mois', value: '8.2K' },
      { metric: 'AOV', value: '+35%' },
      { metric: 'Retention', value: '68%' },
    ],
    challenge: `EcoShop avait besoin de transformer sa présence online pour rivaliser avec les grands e-commerces, tout en maintenant l'authenticité écologique. Les défis:
- Complexité d'inventaire pour 5000+ produits
- Système de paiement secure et diversifié
- Experience mobile-first pour génération consciente
- Marketing automation pour retention clients`,
    solution: `Solution e-commerce haute performance:
- Architecture Next.js avec optimisation images
- Intégration Stripe pour paiements sécurisés
- Système inventory temps réel
- Personalisations basées IA
- Email marketing automation
- Analytics avancé des ventes`,
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'MongoDB', 'Stripe', 'Sendgrid', 'Cloudinary', 'Segment'],
    timeline: '3.5 mois',
    teamSize: 6,
    goals: [
      'Doubler le chiffre d\'affaires',
      'Atteindre 8000+ transactions/mois',
      'Augmenter AOV de 30%+',
      'Réduire cart abandonment'
    ],
    achievements: [
      'Augmentation revenue: +450%',
      'Transactions mensuelles: 8200',
      'AOV: +35% (82€ → 110€)',
      'Cart abandonment réduit à 45% (-25%)',
      'Customer retention: 68%',
      'Site speed: 1.8s (Lighthouse 94)',
      'Conversions: 4.2% (secteur: 2.8%)'
    ],
    content: `# EcoShop - Platform E-commerce Durable

## À Propos du Projet

EcoShop est un e-commerce spécialisé dans les produits durables et écologiques. L'entreprise a connu une croissance rapide mais nécessitait une plateforme moderne capable de gérer la complexité d'un inventaire étendu.

## Situation Initiale

- Plateforme legacy non-mobile friendly
- Taux de conversion faible (2.1%)
- Perte de 65% des paniers au checkout
- AOV moyen: 82€

## Stack Technique
- **Frontend**: Next.js 14 avec App Router
- **Backend**: API REST Node.js/Express
- **Database**: MongoDB
- **Paiement**: Stripe
- **Images**: Cloudinary

## Résultats
- Revenue: +450%
- Transactions: 8200/mois
- AOV: +35%
- Retention: 68%`,
    testimonial: {
      text: "Résultats exceptionnels! +450% ROI, c'est au-delà de nos attentes. L'équipe a compris notre vision éco-responsable.",
      author: 'Sophie Martin',
      position: 'CEO',
      company: 'EcoShop'
    }
  },

  {
    id: 3,
    title: 'DigitalHub - Marketing Site',
    category: 'Marketing',
    client: 'DigitalHub Agency',
    slug: 'digitalhub-marketing-site',
    excerpt: 'Site marketing haute conversion avec animations fluides',
    description: 'Site de marketing agency moderne avec focus sur conversion et expérience utilisateur fluide',
    image: 'bg-gradient-to-br from-tech-purple to-tech-pink',
    roi: '+280%',
    traffic: '+156%',
    tags: ['React', 'Framer Motion', 'Tailwind', 'CMS'],
    results: [
      { metric: 'Conversion rate', value: '8.3%' },
      { metric: 'Leads/mois', value: '1.2K' },
      { metric: 'CLTV', value: '+180%' },
    ],
    challenge: `DigitalHub Agency cherchait à se repositionner en tant qu'expert digital premium. Les défis:
- Différenciation dans un marché saturé
- Générer leads qualifiés (pas juste traffic)
- Démonstrateur de capability en design/UX
- Animation et interactions advanced`,
    solution: `Solution marketing haute-impact:
- Site design premium avec animations Framer Motion
- Copy high-conversion optimisé
- Lead capture avec segmentation intelligente
- Case studies interactifs
- Chatbot IA pour qualification leads
- Analytics avancé pour optimization`,
    technologies: ['Next.js 14', 'React', 'TypeScript', 'Framer Motion', 'Tailwind', 'Supabase', 'Anthropic', 'Segment'],
    timeline: '2.5 mois',
    teamSize: 4,
    goals: [
      'Augmenter les leads de 300%',
      'Atteindre 8%+ taux de conversion',
      'Générer 1000+ leads qualifiés/mois',
      'Augmenter CLTV'
    ],
    achievements: [
      'Leads mensuels: 1200 (vs 300 avant)',
      'Taux conversion: 8.3% (vs 2.1%)',
      'CLTV: +180%',
      'Bounce rate: 32% (-55%)',
      'Time on site: 3m 45s (+240%)',
      'Design awards: 2 nominations',
      'Traffic: +156%'
    ],
    content: `# DigitalHub - Marketing Site

## Objectif du Projet

DigitalHub Agency, une agency digital créative, cherchait à transformer son site web en machine à générer des leads qualifiés tout en démonstrateur de sa capability en design et développement.

## État Initial

- Site statique, peu engageant
- Taux conversion: 2.1%
- 300 leads/mois (qualité basse)
- Bounce rate: 70%

## Stratégie de Solution

### 1. Brand Repositioning
- Positionned comme "expert en digital transformation"
- Niche focus sur SaaS et marketech
- Premium positioning

### 2. Design & Copy Optimization
- Premium visual design modern
- Headline highly specific
- Social proof abundant
- CTAs compelling

## Stack Technique
- **Frontend**: Next.js 14
- **Animations**: Framer Motion
- **Backend**: Supabase
- **AI**: Anthropic Claude

## Résultats
- Leads: +300%
- Conversion: 8.3%
- CLTV: +180%
- Sales cycle réduit de 35%`,
    testimonial: {
      text: "La transformation est remarquable. Non seulement le site est beau, mais il génère des leads qualifiés. Notre équipe sales est impressionnée.",
      author: 'Patrick Lefèvre',
      position: 'Founder',
      company: 'DigitalHub Agency'
    }
  },

  {
    id: 4,
    title: 'FitApp - Mobile App',
    category: 'Application',
    client: 'FitApp',
    slug: 'fitapp-mobile-fitness',
    excerpt: 'Application fitness avec suivi d\'performances',
    description: 'Application mobile fitness complète avec tracking d\'entraînement, nutrition et communauté',
    image: 'bg-gradient-to-br from-primary-400 to-primary-500',
    roi: '+380%',
    traffic: '+195%',
    tags: ['React Native', 'Firebase', 'Notifications', 'Analytics'],
    results: [
      { metric: 'Downloads', value: '125K+' },
      { metric: 'User retention', value: '42%' },
      { metric: 'Rating', value: '4.8 ⭐' },
    ],
    challenge: `FitApp cherchait à dominer le marché du fitness. Défis:
- Compétition féroce (Fitbit, Strava, MyFitnessPal)
- Besoin d'engagement utilisateur élevé
- Données biométriques complexes à intégrer
- Community features pour rétention`,
    solution: `Application complète multi-plateforme:
- React Native pour iOS et Android
- Firebase pour backend scalable
- Wearable integration (Apple Watch, Fitbit)
- Push notifications intelligentes
- Community gamification
- Nutrition tracking avancé`,
    technologies: ['React Native', 'Firebase', 'Cloud Functions', 'Realtime Database', 'TypeScript', 'Redux', 'Apple Health API'],
    timeline: '5 mois',
    teamSize: 7,
    goals: [
      'Atteindre 100K+ downloads',
      'Taux de retention 40%+',
      'Rating 4.7+/5',
      'Active users: 50K+'
    ],
    achievements: [
      'Downloads: 125,340 (dépassé de 25%)',
      'Rating: 4.8/5 (2,450+ reviews)',
      'Monthly active users: 52,100',
      'Retention D30: 42%',
      'Engagement: 28 min/jour moyenne',
      'Community posts: 8,200/jour',
      'Integration partners: 12'
    ],
    content: `# FitApp - Mobile Fitness Application

## Vision du Projet

FitApp voulait créer l'application fitness ultime - pas juste tracking d'exercices, mais un ecosystem complet de fitness avec communauté, coaching et intégration wearables.

## Situation Initiale

- MVP basique avec ~5K utilisateurs
- App crashes régulières
- Pauvre rétention (12%)
- Fonctionnalités basiques uniquement
- Pas de intégrations wearables

## Marché & Opportunité

Le marché du fitness mobile est compétitif:
- Fitbit Dominate: 50M+ users
- Strava: 95M+ users
- MyFitnessPal: 340M+ users

## Stack Technique

Frontend Mobile: React Native
- iOS: Native modules pour Health Kit
- Android: Google Fit integration
- TypeScript, Redux state management

Backend: Firebase
- Realtime Database pour scores live
- Firestore pour user profiles
- Cloud Functions pour logic

Wearables:
- Apple Watch App (WatchKit)
- Fitbit API Integration
- Garmin Connect API

## Features Principales

1. **Workout Tracking**
   - 500+ exercises avec video
   - Auto-detection via accelerometer
   - Wearable real-time sync

2. **Nutrition System**
   - Barcode scanner
   - 500K food database
   - Macro tracking

3. **Community**
   - Daily/weekly challenges
   - Leaderboards
   - Group training

4. **Analytics**
   - Progress charts
   - Weekly/monthly reports
   - Goal tracking

## Résultats

- **Downloads**: 125,340
- **Rating**: 4.8/5
- **Monthly Active**: 52,100
- **Retention D30**: 42%
- **Engagement**: 28 min/jour`,
    testimonial: {
      text: "FitApp dépasse toutes nos attentes. L'app est magnifique, l'engagement utilisateur est incroyable. Top 10 des meilleures décisions technologiques.",
      author: 'Jean Martin',
      position: 'Founder',
      company: 'FitApp'
    }
  },
];
