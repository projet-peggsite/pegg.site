export interface Service {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  excerpt: string;
  content: string;
  benefits: string[];
  technologies: string[];
  challenge: string;
  solution: string;
  outcomes: Array<{
    metric: string;
    value: string;
  }>;
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  useCases: Array<{
    title: string;
    description: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Conception & Développement Web',
    subtitle: 'Sites web modernes qui convertissent',
    slug: 'conception-developpement-web',
    excerpt: 'Sites web modernes, responsifs et performants. Architectures scalables pour votre croissance.',
    description: 'Nous créons des sites web exceptionnels qui combinent design moderne, performance optimale et stratégie de conversion. Chaque projet est une architecture scalable conçue pour croître avec votre entreprise.',
    icon: 'FiCode',
    color: 'primary',
    content: `# Conception & Développement Web

## Transformer votre présence digitale

Nous créons des sites web qui ne se contentent pas d'être beaux - ils convertissent. Notre approche combine les meilleures pratiques UX/UI avec une architecture solide et performante.

### Nos Services Web Complets

#### Design Responsive
Vos clients accèdent à votre site depuis tous les appareils. Nous garantissons une expérience parfaite sur mobile, tablette et desktop.

#### Performance Optimale
Chaque milliseconde compte. Nos sites chargent en moins de 2 secondes et obtiennent des scores Google Lighthouse de 90+.

#### SEO Native
L'optimisation SEO ne s'ajoute pas après. Elle est intégrée dès la conception avec:
- Sémantique HTML5 correcte
- Core Web Vitals optimisés
- Sitemaps et schema markup
- Urls canoniques et redirection 301

#### Intégration CMS
Gérez votre contenu facilement sans intervention technique:
- Editeur visuel intuitif
- Gestion des médias
- Planification de publications
- Système de permissions

### Stack Technologique

Nous utilisons les technologies les plus modernes et éprouvées:

- **Next.js 14**: Framework React moderne avec SSR et SSG
- **React 18**: Composants réutilisables et performants
- **TypeScript**: Code type-safe et maintenable
- **Tailwind CSS**: Design system cohérent et responsive
- **PostgreSQL**: Base de données robuste et scalable
- **Stripe/Paypal**: Paiements sécurisés intégrés
- **Auth0**: Authentification et autorisation enterprise

### Processus de Développement

1. **Découverte** - Compréhension de vos objectifs et audience
2. **Design** - Prototypes et validations avec usability testing
3. **Développement** - Code production-ready
4. **Testing** - Tests automatisés et QA manuel complet
5. **Déploiement** - Livraison et optimisation post-launch`,
    benefits: [
      'Architecture scalable et maintenable',
      'Design responsive et moderne',
      'SEO optimisé dès la création',
      'Performance maximale (Core Web Vitals)',
      'Intégration CMS flexible',
      'Support et maintenance inclus',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe', 'Auth0'],
    challenge: `Beaucoup d'entreprises ont des sites web obsolètes qui:
- Chargent lentement et frustrent les visiteurs
- Ne convertissent pas les visiteurs en clients
- Sont impossibles à mettre à jour
- Ne sont pas adaptés aux mobiles
- Ont des failles de sécurité`,
    solution: `Notre approche moderne résout tous ces problèmes:
- Architecture Next.js avec SSR pour la meilleure performance
- Design responsive et mobile-first
- CMS intégré pour la gestion facile du contenu
- SEO native pour la visibilité Google
- Sécurité et HTTPS par défaut
- CDN global pour vitesse maximale
- Monitoring et alertes proactives`,
    outcomes: [
      { metric: 'Temps de chargement', value: '< 2 secondes' },
      { metric: 'Score Lighthouse', value: '95/100' },
      { metric: 'Conversion moyenne', value: '+150%' },
      { metric: 'Satisfaction client', value: '4.9/5' },
    ],
    process: [
      {
        step: 1,
        title: 'Audit & Stratégie',
        description: 'Analyse approfondie de vos objectifs, audience et concurrence. Définition de la stratégie digitale.',
      },
      {
        step: 2,
        title: 'Design & UX',
        description: 'Création de prototypes interactifs, wireframes et design system. Validation par utilisateurs réels.',
      },
      {
        step: 3,
        title: 'Développement',
        description: 'Développement agile avec code reviews et tests continus. Architecture scalable et maintenable.',
      },
      {
        step: 4,
        title: 'Optimisation',
        description: 'Performance tuning, SEO optimization et sécurité. Tests A/B et analytics.',
      },
      {
        step: 5,
        title: 'Maintenance',
        description: 'Support 24/7, mises à jour sécuritaires et optimisations continues post-launch.',
      },
    ],
    useCases: [
      {
        title: 'E-commerce B2C',
        description: 'Boutiques en ligne haute performance avec panier, paiement et gestion d\'inventaire.',
      },
      {
        title: 'SaaS & Applications',
        description: 'Plateformes web complexes avec dashboards, APIs et synchronisation temps réel.',
      },
      {
        title: 'Blogs & Contenus',
        description: 'Sites de contenu optimisés pour SEO avec système de blogs puissant.',
      },
      {
        title: 'Sites Vitrine',
        description: 'Sites professionnels optimisés pour la conversion et le lead generation.',
      },
    ],
    faq: [
      {
        question: 'Quel est le délai de développement?',
        answer: 'Les projets web standards prennent 6-12 semaines selon la complexité. Les applications complexes peuvent prendre 3-6 mois avec une équipe agile.',
      },
      {
        question: 'Pouvez-vous migrer mon ancien site?',
        answer: 'Oui! Nous gérons les migrations complètes avec redirection 301, préservation du SEO et zéro temps d\'arrêt.',
      },
      {
        question: 'Quelle est l\'infrastructure utilisée?',
        answer: 'Nous utilisons Vercel pour l\'hébergement (automate, rapide, sécurisé) et AWS pour les bases de données avec redondance et backups.',
      },
      {
        question: 'Incluez-vous la maintenance?',
        answer: 'Oui, tous nos projets incluent 1 an de maintenance gratuit (mises à jour, bug fixes). Des plans d\'extension sont disponibles.',
      },
    ],
  },
  {
    id: 2,
    title: 'Création d\'Application',
    subtitle: 'Applications performantes cross-platform',
    slug: 'creation-application-mobile',
    excerpt: 'Applications mobiles et web natives. Expériences utilisateur exceptionnelles et engagement maximal.',
    description: 'Applications mobiles natives et cross-platform qui créent de l\'engagement. De la conception à la publication, nous gérons la création d\'applications avec une expertise mobile complète.',
    icon: 'FiSmartphone',
    color: 'cyan',
    content: `# Création d'Application Mobile & Web

## Engager vos utilisateurs partout

Les applications mobiles offrent une connexion directe avec vos utilisateurs. Nous créons des expériences excepcionnelles qui les gardent engagés et revenant pour plus.

### Types d'Applications

#### Applications Natives iOS/Android
Performance maximale et accès complet au hardware de l'appareil. Parfait pour les applications nécessitant:
- Intégration caméra et photos
- Accès géolocalisation avancée
- Notifications push natives
- Synchronisation hors ligne

#### Progressive Web Apps (PWA)
Combinent le meilleur du web et des apps:
- Installation sur l'écran d'accueil
- Fonctionnement hors ligne
- Notifications push
- Pas de dépendance appstore

#### Applications Cross-Platform
React Native pour iOS et Android depuis une base de code unique. Parfait pour:
- MVP rapides
- Budget réduit
- Time to market court

### Fonctionnalités Clés

- **Authentification sécurisée** avec OAuth et biométrie
- **Synchronisation en temps réel** avec WebSockets
- **Notifications push** intelligentes et personnalisées
- **Géolocalisation** intégrée et cartes
- **Paiements mobiles** Apple Pay, Google Pay
- **Analytics** comportement utilisateur détaillé
- **Offline-first** avec cache intelligent

### Stack Technologique

- **React Native**: Applications iOS et Android
- **Flutter**: Applications ultra-performantes
- **Firebase**: Backend-as-a-service avec real-time
- **Redux**: Gestion d'état prévisible
- **Socket.io**: Communication temps réel
- **Stripe/Paypal**: Paiements intégrés`,
    benefits: [
      'Applications mobiles iOS et Android',
      'Progressive Web Apps (PWA)',
      'Synchronisation cloud',
      'Push notifications',
      'Offline functionality',
      'Analytics intégrée',
    ],
    technologies: ['React Native', 'Flutter', 'Firebase', 'Redux', 'Socket.io', 'Stripe'],
    challenge: `Les applications mobiles réussies doivent:
- Maintenir une performance impeccable même en réseau faible
- Gérer les mises à jour d'iOS et Android
- Créer des expériences intuitives sur petit écran
- Implémenter la sécurité et la confidentialité
- Gérer les variétés de devices (tailles, versions)`,
    solution: `Notre approche mobile-first:
- Architecture modulaire et maintenable
- Testing extensif sur appareils réels
- Performance monitoring continu
- Support multilingue intégré
- Push notifications intelligentes
- Synchronisation hors ligne robuste
- App store optimization pour découvrabilité`,
    outcomes: [
      { metric: 'Temps ouverture app', value: '< 2 secondes' },
      { metric: 'Retention rate', value: '+85%' },
      { metric: 'Rating appstore', value: '4.8/5' },
      { metric: 'Daily active users', value: '+200%' },
    ],
    process: [
      {
        step: 1,
        title: 'Découverte & Spécification',
        description: 'Définition complète des features, user flow et architecture technique requise.',
      },
      {
        step: 2,
        title: 'Design UX/UI Mobile',
        description: 'Prototypes interactifs optimisés pour petit écran et interaction tactile.',
      },
      {
        step: 3,
        title: 'Développement Natif',
        description: 'Code production-ready pour iOS et Android avec tests automatisés.',
      },
      {
        step: 4,
        title: 'Beta Testing',
        description: 'Distribution bêta, collecte feedback, ajustements avant launch.',
      },
      {
        step: 5,
        title: 'App Store Submission',
        description: 'Publication sur Apple App Store et Google Play avec optimisation ASO.',
      },
    ],
    useCases: [
      {
        title: 'Applications e-commerce',
        description: 'Boutiques mobiles avec panier persistant et checkout optimisé.',
      },
      {
        title: 'Applications SaaS',
        description: 'Versions mobiles de plateformes web complexes avec synchronisation.',
      },
      {
        title: 'Applications fitness/santé',
        description: 'Suivi de données médicales, notifications et intégration wearables.',
      },
      {
        title: 'Marketplace',
        description: 'Plateformes de service à la demande avec matching et paiements.',
      },
    ],
    faq: [
      {
        question: 'Faut-il faire iOS et Android?',
        answer: 'Cela dépend de votre audience. Généralement, iOS génère plus de revenue, Android plus d\'utilisateurs. Nous recommandons une analyse de votre cible.',
      },
      {
        question: 'Quel est le coût d\'une application?',
        answer: 'Les MVP simples commencent à 20K€. Les applications complexes avec backend peuvent coûter 50-150K€.',
      },
      {
        question: 'Combien de temps pour publier sur les stores?',
        answer: 'Apple prend généralement 24-48h, Google quelques heures. La soumission reste simple si bien structurée.',
      },
      {
        question: 'Proposez-vous la maintenance?',
        answer: 'Oui, nous offrons 1 an de maintenance inclus pour gérer les mises à jour iOS/Android et corriger les bugs.',
      },
    ],
  },
  {
    id: 3,
    title: 'Optimisation de la Performance',
    subtitle: 'Chaque milliseconde compte',
    slug: 'optimisation-performance',
    excerpt: 'Vitesse, Core Web Vitals et UX fluidité. Chaque milliseconde compte pour la conversion.',
    description: 'La performance est un facteur de classement Google et convertisseur majeur. Nous optimisons chaque aspect de votre site pour la vitesse extrême.',
    icon: 'FiZap',
    color: 'green',
    content: `# Optimisation de Performance

## La vitesse génère du ROI

Les sites rapides convertissent mieux, se classent mieux et satisfont les utilisateurs. Chaque 100ms supplémentaire coûte 1% de conversion (source: Google).

### Core Web Vitals

Google mesure la performance avec 3 métriques critiques:

#### Largest Contentful Paint (LCP)
Temps avant que le contenu principal soit visible. Target: < 2.5s
- Optimisation images (WebP, compression)
- Server-side rendering
- Critical CSS inline

#### Interaction to Next Paint (INP)
Latence entre interaction utilisateur et réaction visible. Target: < 200ms
- Event handling optimisé
- Débouncing des event listeners
- Web Workers pour tâches lourdes

#### Cumulative Layout Shift (CLS)
Mouvements inattendus du layout. Target: < 0.1
- Dimensions d'images pré-définies
- Fonts chargées early
- Espacements réservés media dynamiques

### Nos Optimisations

#### Images
- Compression aggressive (JPEG/WebP)
- Lazy loading avec intersection observer
- Responsive images avec srcset
- CDN globale (Cloudflare)

#### Code
- Minification et gzip compression
- Code splitting par route
- Tree-shaking des imports inutiles
- Bundle analysis et optimization

#### Réseau
- HTTP/2 et HTTP/3
- Preconnect et prefetch resources
- DNS prefetch
- Service workers pour cache intelligent

#### Serveur
- Caching multi-layer
- Database query optimization
- Redis pour cache sessions
- Database replication pour scalabilité`,
    benefits: [
      'Amélioration Core Web Vitals',
      'Réduction coût infrastructure',
      'Boost conversion +30%',
      'Ranking Google amélioré',
      'Compression d\'images intelligente',
      'Monitoring continu 24/7',
    ],
    technologies: ['Lighthouse', 'WebP', 'GZIP', 'Service Workers', 'CloudFlare', 'Redis'],
    challenge: `Beaucoup de sites web souffrent de:
- Chargement lent dû à ressources non optimisées
- CLS élevé causant mauvaise UX
- Not responsive au réseau 3G
- Rendus JavaScript coûteux
- Infrastructure indisponible sous charge`,
    solution: `Audit et optimisation complète:
- Analyse de performance avec real user monitoring
- Images optimisées et responsives
- Code splitting et lazy loading
- Caching multi-layer et CDN
- Database optimisation et indexing
- Infrastructure scaling automatique
- Monitoring continu avec alertes`,
    outcomes: [
      { metric: 'Time to First Byte', value: '< 600ms' },
      { metric: 'Lighthouse Score', value: '95-100' },
      { metric: 'Conversion boost', value: '+45%' },
      { metric: 'Bounce rate', value: '-60%' },
    ],
    process: [
      {
        step: 1,
        title: 'Audit Complet',
        description: 'Analyse détaillée avec Lighthouse, WebPageTest, real user monitoring et profiling.',
      },
      {
        step: 2,
        title: 'Identification Goulots',
        description: 'Localisation des problèmes critiques et création de plan d\'action priorisé.',
      },
      {
        step: 3,
        title: 'Optimisations',
        description: 'Implémentation des refactorings: images, code, réseau, serveur.',
      },
      {
        step: 4,
        title: 'Testing & Validation',
        description: 'Vérification des améliorations avec testing sur appareils et connexions réelles.',
      },
      {
        step: 5,
        title: 'Monitoring',
        description: 'Mise en place du monitoring continu pour prévenir dégradation future.',
      },
    ],
    useCases: [
      {
        title: 'E-commerce',
        description: 'Chaque milliseconde améliorant la conversion = plus de revenue directe.',
      },
      {
        title: 'Contenu / Media',
        description: 'Images et vidéos optimisées pour fast loading même sur connexion faible.',
      },
      {
        title: 'Applications web complexes',
        description: 'Dashboards et applications lourdes optimisées pour fluidité UX.',
      },
      {
        title: 'Marchés internationaux',
        description: 'Optimisation pour utilisateurs sur connexions 3G/4G faibles.',
      },
    ],
    faq: [
      {
        question: 'Combien de temps pour optimiser un site?',
        answer: 'Un audit et optimisations de base prennent 2-4 semaines. Optimisations profondes peuvent prendre 2-3 mois.',
      },
      {
        question: 'Quel ROI attendez-vous?',
        answer: 'Typiquement +30-60% sur conversion et +10-20% sur ranking Google. Chaque 100ms = ~1% de conversion.',
      },
      {
        question: 'Est-ce compatible avec mon framework?',
        answer: 'Oui, les optimisations s\'appliquent à tous les frameworks (Next.js, Vue, Angular, etc). Nous adaptons l\'approche.',
      },
      {
        question: 'Comment mesurez-vous les améliorations?',
        answer: 'Monitoring continu avec Datadog, New Relic et custom RUM. Rapports disponibles 24/7.',
      },
    ],
  },
  {
    id: 4,
    title: 'SEO Technique & Contenu',
    subtitle: 'Dominez les résultats de recherche',
    slug: 'seo-technique-contenu',
    excerpt: 'Dominez les résultats de recherche. Stratégies SEO complètes pour une visibilité maximale.',
    description: 'Allez au-delà du contenu: audit technique, stratégie de backlinks et contenu optimisé pour générer traffic organique constant.',
    icon: 'FiSearch',
    color: 'pink',
    content: `# SEO Technique & Contenu

## Dominer Google et bing

Le SEO génère le meilleur ROI marketing (92% des clics vont aux résultats page 1). Nous combinons technique SEO, optimisation on-page et stratégie contenu.

### SEO Technique

Fondations solides pour que Google crawle et indexe correctement votre site.

#### Architecture & Crawlabilité
- Sitemaps XML générés automatiquement
- Robots.txt optimisé
- Structure URL propre et logique
- Pagination et infinite scroll gérés correctement
- Breadcrumb schema markup

#### Core Web Vitals
- LCP < 2.5s (Largest Contentful Paint)
- INP < 200ms (Interaction to Next Paint)
- CLS < 0.1 (Cumulative Layout Shift)
- Mobile-first indexing priorité

#### Schéma Markup
- Schema.org pour enrichissement SERP
- OrganizationSchema pour brand
- ProductSchema pour e-commerce
- LocalBusinessSchema pour géolocalisation
- FAQSchema pour featured snippets

#### Sécurité & HTTPS
- SSL/TLS obligatoire
- HSTS headers
- Pas de contenu mixte HTTP/HTTPS
- Sécurité basique contre XSS/CSRF

#### Indexabilité
- Pas de robots: noindex par erreur
- Redirect chaînes évitées
- Contenu duplicate détecté et nettoyé
- Mobile version facilement crawlable

### Optimisation On-Page

Chaque page optimisée pour conversions et classement.

#### Éléments On-Page
- Titres < 60 chars avec mot-clé principal
- Meta descriptions < 160 chars persuasives
- H1 unique par page
- Images avec alt text descriptif
- Links internes avec anchor text pertinent

#### Contenu
- Longueur optimale (300-2000 mots selon topic)
- Mot-clé principal dans titres et premier paragraphe
- Variations sémantiques du mot-clé
- Contenu original (0% plagiarism)
- Lisibilité facile (Flesch score > 50)

#### International
- hreflang pour versions multilingues
- Localisation URLs et contenu
- Geotargeting Google Search Console

### Stratégie Contenu & Backlinks

#### Audit Competitor
- Analyse des top 10 ranking
- Écart contenu et strategies backlinks
- Opportunités quick wins
- Gap analyse vs competitors

#### Keyword Research
- Volume recherche réaliste
- Difficulté et potentiel ROI
- Intent utilisateur (commercial, informationnel)
- Long-tail keywords moins compétitifs

#### Link Building
- Broken link building
- Guest posting sur sites pertinents
- HARO (Help A Reporter Out)
- Resource page linking
- Partenariats et mentions
- Évite spammy PBN et links schemes`,
    benefits: [
      'Audit SEO technique complet',
      'Optimisation on-page et off-page',
      'Stratégie de contenu data-driven',
      'Link building professionnel',
      'Rankings Top 3 Google',
      'Reporting mensuel détaillé',
    ],
    technologies: ['Google Analytics', 'Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Surfer SEO'],
    challenge: `Beaucoup de sites souffrent de:
- Erreurs technique SEO qui empêchent indexation complète
- Contenu optimisé pour mot-clés mais pas vraiment utile
- Manque de stratégie backlinks
- Concurrence élevée pour keywords rentables
- Changements algorithme ne sont pas gérés`,
    solution: `Stratégie SEO complète 360°:
- Audit technique complet et fix des critiques
- Keyword research avec intent utilisateur
- Contenu optimisé pour classement ET conversions
- Link building éthique et durable
- Monitoring rangement et competitive intelligence
- Adaptation continuée aux changements Google
- Reporting transparent et compréhensible`,
    outcomes: [
      { metric: 'Ranking position', value: 'Top 3 en moyenne' },
      { metric: 'Organic traffic', value: '+300-500%' },
      { metric: 'Durée résultats', value: '6-12 mois' },
      { metric: 'Taux clics', value: '+45%' },
    ],
    process: [
      {
        step: 1,
        title: 'Audit Technique SEO',
        description: 'Scan complet avec Screaming Frog, analyse Google Search Console et audit d\'indexabilité.',
      },
      {
        step: 2,
        title: 'Keyword Research',
        description: 'Identification keywords rentables avec volume et intent, analyse competitor top ranking strategies.',
      },
      {
        step: 3,
        title: 'Optimisation On-Page',
        description: 'Création/optimisation de contenu (meta, headings, structure) et schema markup.',
      },
      {
        step: 4,
        title: 'Link Building Strategy',
        description: 'Stratégie backlink éthique avec guest posting, broken link building et outreach.',
      },
      {
        step: 5,
        title: 'Monitoring & Reporting',
        description: 'Suivi rangement mensuels, analytics organique traffic et ajustements continus.',
      },
    ],
    useCases: [
      {
        title: 'Startup B2B',
        description: 'Générer qualified leads organiques sans budget pub élevé.',
      },
      {
        title: 'E-commerce',
        description: 'Classement pour commercial keywords générant revenus directs.',
      },
      {
        title: 'Blogs & Contenus',
        description: 'Stratégie contenu long-form pour organic traffic durable.',
      },
      {
        title: 'Niches compétitives',
        description: 'SEO avancée pour dominer segments compétitifs.',
      },
    ],
    faq: [
      {
        question: 'Combien de temps avant résultats?',
        answer: 'Résultats rapides (3-6 mois) sur keywords moins compétitifs. Keywords très compétitifs prennent 9-12+ mois.',
      },
      {
        question: 'Garantissez-vous le classement #1?',
        answer: 'Non, personne ne peut garantir le classement (Google change l\'algo régulièrement). Nous garantissons effort professionnel et transparency.',
      },
      {
        question: 'SEO noir vs blanc: différence?',
        answer: 'SEO blanc suit guidelines Google (lent, durable). SEO noir utilise techniques de spam (risques pénalités). Nous faisons SEO blanc = durable.',
      },
      {
        question: 'Combien coûte une stratégie SEO?',
        answer: 'Plans retainer mensuel (2-5K€) ou projets ponctuels. Dépend de compétitivité keywords et ambitions.',
      },
    ],
  },
  {
    id: 5,
    title: 'Design & Branding',
    subtitle: 'Identités visuelles qui marquent',
    slug: 'design-branding',
    excerpt: 'Identités visuelles fortes et cohérentes. Designs qui racontent votre histoire et captent l\'attention.',
    description: 'Une brand forte crée de la confiance et de la reconnaissance. Nous créons des identités visuelles cohérentes et mémorables qui se démarquent.',
    icon: 'FiEdit3',
    color: 'pink',
    content: `# Design & Branding

## Créer une identité mémorable

Votre design n'est pas la décoration - c'est la communication de votre brand. Nous créons des identités visuelles qui communiquent votre valeur et se démarquent de la concurrence.

### Identité Visuelle Complète

#### Logo & Symbol
- Design mémorable et intemporel
- Versions horizontale, verticale, icône
- Palette couleurs et typographie
- Logo responsive pour tous appareils

#### Brand Guidelines
Le document single source of truth pour toute application de votre brand:
- Logo usage et minimum clearspace
- Couleurs primaires et secondaires
- Typographie: familles, tailles, weights
- Iconographie et pattern design
- Tone of voice et messaging guidelines
- Photographie et illustration style
- Examples d'applications

#### Color Palette
- Couleur primaire (main brand color)
- Couleurs secondaires
- Neutres (gris et blancs)
- Sémantique (succès vert, erreur rouge)
- Accessibilité (WCAG AA minimum)

#### Typographie
- Selection 2-3 familles maximum
- Hiérarchie claire (H1-H6)
- Readability sur toutes tailles
- Web fonts optimisées
- Support multilingue

### Design Produit

#### UX/UI Design
- Wireframes et user flows
- Prototypes interactifs
- Componentes réutilisables
- Design system cohérent
- Design responsive

#### Processus Design
1. **Discovery**: User research et personas
2. **Ideation**: Brainstorm et sketches
3. **Prototyping**: Wireframes et mocks
4. **Testing**: User testing et feedback
5. **Polish**: Refinement et finalisation

#### Outils Design
- Figma pour designs collaborativisés
- Adobe XD pour animations
- InVision pour prototypes
- Usertest.com pour usability testing

### Design Digital

#### Web & App Design
- Responsive design pour tous devices
- Micro-interactions et animations
- Accessibility (WCAG 2.1 AA)
- Dark mode support
- Performance optmization

#### Matériel Marketing
- Brochures et collaterals
- Email templates
- Social media templates
- Presentation designs
- Print-ready files`,
    benefits: [
      'Logo et identité visuelle',
      'Brand guidelines complètes',
      'UI/UX design moderne',
      'Design system scalable',
      'Prototypage et user testing',
      'Implémentation pixel-perfect',
    ],
    technologies: ['Figma', 'Adobe Suite', 'Prototyping Tools', 'Design Systems', 'User Testing'],
    challenge: `Beaucoup de startups/PME souffrent de:
- Absence de cohérence visuelle (logo pixelé, couleurs incohérentes)
- Design non-professionnel qui nuit à crédibilité
- Pas de guidelines pour éviter dérive du brand
- Design non-responsive sur mobiles
- Pas d'accessibilité (exclusion utilisateurs)`,
    solution: `Approche design stratégique complète:
- Audit brand et competitive analysis
- Design system scalable et réutilisable
- Guidelines exhaustives pour consistency
- Responsive design pour tous devices
- Accessibility first (WCAG 2.1 AA+)
- Prototyping et user testing itératifs
- Implémentation pixel-perfect
- Documentation complète pour homogénéité`,
    outcomes: [
      { metric: 'Brand recognition', value: '+200%' },
      { metric: 'Design consistency', value: '100%' },
      { metric: 'User satisfaction', value: '+85%' },
      { metric: 'Time-to-launch', value: '-40%' },
    ],
    process: [
      {
        step: 1,
        title: 'Audit & Stratégie',
        description: 'Analyse brand etidentaire actuelle, personas et competitive positioning.',
      },
      {
        step: 2,
        title: 'Design & Ideation',
        description: 'Création concepts multiples, iteration basée feedback et sélection direction.',
      },
      {
        step: 3,
        title: 'Guidelines & System',
        description: 'Documentation complète brand et création design system réutilisable.',
      },
      {
        step: 4,
        title: 'Prototyping',
        description: 'Prototypes interactifs des expériences clés pour validation avant dev.',
      },
      {
        step: 5,
        title: 'Implémentation & Support',
        description: 'Support aux développeurs pour impémentation pixel-perfect et consistency.',
      },
    ],
    useCases: [
      {
        title: 'Rebrand',
        description: 'Moderniser une brand existante tout en maintenant reconnaissance.',
      },
      {
        title: 'Startup Branding',
        description: 'Créer identité de zéro pour nouvelle entreprise.',
      },
      {
        title: 'Product Design',
        description: 'Design de produit complet de l\'UX au marketing.',
      },
      {
        title: 'Design System',
        description: 'Créer système design pour large équipe design/development.',
      },
    ],
    faq: [
      {
        question: 'Combien de révisions incluez-vous?',
        answer: 'Généralement 2-3 rounds de révisions inclus. Révisions supplémentaires à côté horaire standard.',
      },
      {
        question: 'Proposez-vous design web et print?',
        answer: 'Oui, nous avons expertise dans digital et print. Utilisons les mêmes guidelines dans les deux.',
      },
      {
        question: 'Pouvez-vous refaire notre brand?',
        answer: 'Absolument! Nous faisons rebrands complets avec brand audit, redesign et nouvel guidelines.',
      },
      {
        question: 'Est-ce que le design est copyright?',
        answer: 'Oui, vous recevez tous les fichiers sources (Figma, Adobe) avec droits d\'auteur complets.',
      },
    ],
  },
  {
    id: 6,
    title: 'Gestion des Projets Informatiques',
    subtitle: 'Livraison à temps, dans le budget',
    slug: 'gestion-projets-informatiques',
    excerpt: 'Gestion de projets IT avec méthodologie agile. Livraison prévisible et contrôle budgétaire.',
    description: 'Gérez vos projets informatiques avec rigueur: planification, suivi, équipes dédiées et reporting transparent. Une expertise agile pour livrer à temps et dans le budget.',
    icon: 'FiRefreshCw',
    color: 'cyan',
    content: `# Gestion des Projets Informatiques

## Projets livrés à temps et dans le budget

La mauvaise gestion de projet coûte cher: dépassements budgétaires, retards, projets inachevés. Nous apportons discipline, transparence et méthodologie pour des projets réussis.

### Méthodologies Agiles

#### Scrum
- Sprint cycles 2-3 semaines
- Daily standups de 15 minutes
- Sprint reviews et retrospectives
- Burndown charts et velocity tracking
- Backlog prioritization claire

#### Kanban
- Workflow en colonnes (To Do, In Progress, Done)
- Zero backlog de long-term
- Limiting WIP (Work In Progress)
- Continuous flow sans sprints
- Metrics: Lead time et cycle time

#### Hybrid Approach
Scrum + Kanban combiné pour flexibility maximale:
- Sprint goals avec deadlines
- Kanban pour ad-hoc et urgent
- Flexibility sur la demande
- Prévisibilité globale

### Planification & Estimation

#### User Stories & Backlog
- Écriture user stories clairs (As a... I want... So that...)
- Acceptance criteria explicites
- Estimation relative (points, t-shirt sizes)
- Prioritization MoSCoW (Must, Should, Could, Won't)
- Dependency mapping

#### Sprint Planning
- Définition des objectifs sprint
- Estimée de tâches granulaires
- Risk identification
- Resource allocation
- Capacity vs demand planning

#### Risk Management
- Risk identification early
- Mitigation strategies
- Contingency planning
- Regular review & adjustment
- Stakeholder communication

### Team Management

#### Dedicated Teams
- Product Owner pour ownership
- Scrum Master pour facilitation
- Development team avec specialties
- QA testers intégrés
- Designer pour UX/UI

#### Communication
- Daily standups synchrone
- Weekly sync avec stakeholders
- Monthly business reviews
- Escalation path clair
- Documentation updated

#### Skill Development
- Training et onboarding
- Knowledge sharing sessions
- Code reviews et mentoring
- Certifications support
- Career development planning

### Tracking & Reporting

#### Project Metrics
- Velocity (points par sprint)
- Burndown charts
- Sprint completion rate
- Bug escape rate
- Technical debt tracking

#### Dashboards & Reports
- Real-time project dashboard
- Weekly status reports
- Monthly business reviews
- Risk register updates
- Budget vs actual tracking

#### Transparency
- Public backlogs
- Open burn charts
- Incident logging
- Change requests tracking
- Lessons learned documentation

### Quality & Testing

#### Quality Gates
- Code review obligatoire avant merge
- Automated testing (unit, integration)
- QA manual testing
- Performance baselines
- Security scanning

#### Testing Strategy
- TDD (Test-Driven Development)
- Continuous integration (CI)
- Automated regression testing
- Load testing pour performance
- User acceptance testing (UAT)

#### Bug Management
- Severity classification
- Fix prioritization
- Regression prevention
- Release notes clear
- Post-release monitoring`,
    benefits: [
      'Méthodologie agile éprouvée',
      'Transparence complète du projet',
      'Livraison prévisible',
      'Contrôle budgétaire strict',
      'Équipes dédiées et stables',
      'Risques identifiés et mitigés',
    ],
    technologies: ['Jira', 'Confluence', 'GitLab', 'Jenkins', 'Slack', 'Azure DevOps'],
    challenge: `Défis projets informatiques typiques:
- Dépassements budgétaires de 50-100%
- Retards de 30% en moyenne
- Scope creep non contrôlé
- Mauvaise communication equipe/client
- Qualité compromise pour deadline
- Changements dernière minute = chaos`,
    solution: `Gestion de projet structurée et agile:
- Méthodologie agile éprouvée
- Estimation rigoureuse et réaliste
- Planification détaillée et flexible
- Tracking transparent daily
- Risk management proactive
- Change control process strict
- Quality assurance intégrée
- Communication stakeholder continuous`,
    outcomes: [
      { metric: 'On-time delivery', value: '95%' },
      { metric: 'Budget adherence', value: '98%' },
      { metric: 'Quality defects', value: '-70%' },
      { metric: 'Stakeholder satisfaction', value: '4.8/5' },
    ],
    process: [
      {
        step: 1,
        title: 'Initiation & Planning',
        description: 'Définition scope, objectifs, équipe et planification high-level du projet.',
      },
      {
        step: 2,
        title: 'Backlog Refinement',
        description: 'Détail de chaque story, estimation, et prioritization claire du backlog.',
      },
      {
        step: 3,
        title: 'Exécution & Sprints',
        description: 'Sprints iteratifs avec standups daily, livraison increment regulière.',
      },
      {
        step: 4,
        title: 'Testing & QA',
        description: 'QA testing, bug fixing, user acceptance testing, validation complète.',
      },
      {
        step: 5,
        title: 'Livraison & Support',
        description: 'Mise en production, support utilisateur, onboarding et documentation.',
      },
    ],
    useCases: [
      {
        title: 'Développement logiciel',
        description: 'Applications web, mobile ou desktop de complexité variable.',
      },
      {
        title: 'Transformation digitale',
        description: 'Migration systèmes legacy, implémentation ERP ou CRM.',
      },
      {
        title: 'Infrastructure IT',
        description: 'Déploiement data centers, cloud migration, cybersécurité.',
      },
      {
        title: 'Maintenance logicielle',
        description: 'Support continu, bug fixing, feature development itératif.',
      },
    ],
    faq: [
      {
        question: 'Quelle est la différence entre Scrum et Kanban?',
        answer: 'Scrum = sprints avec dates fixes. Kanban = flow continu sans sprints. Scrum pour projets avec deadline, Kanban pour support continu.',
      },
      {
        question: 'Combien de durée pour un projet?',
        answer: 'Dépend scope. MVP: 2-3 mois. Application complète: 6-12 mois. Maintenance continu: indefinite.',
      },
      {
        question: 'Pouvez-vous changer de requirements mid-project?',
        answer: 'Oui! Agile c\'est flexible. Mais changements = impact timeline et budget. Change control process strict.',
      },
      {
        question: 'Comment gérez-vous les équipes remote?',
        answer: 'Standups async, documentation clear, timezone consideration. Outils: Slack, Jira, Zoom. Works as well as co-located.',
      },
    ],
  },
  {
    id: 7,
    title: 'Marketing Automation & Acquisition',
    subtitle: 'Tunnels de vente automatisés',
    slug: 'marketing-automation-acquisition',
    excerpt: 'Tunnels de vente automatisés. Acquisition scalable et nurturing automatique des prospects.',
    description: 'Automatisez votre vente: workflows d\'email intelligents, lead scoring et CRM intégrations pour acquisition scalable de clients qualifiés.',
    icon: 'FiRepeat',
    color: 'cyan',
    content: `# Marketing Automation & Acquisition

## Acquisition scalable et automatisée

Le marketing automation génère leads 24/7 sans effort additionnel. Nous construisons des funnel intelligents qui nurturent, qualifient et convertissent automatiquement.

### Fondations Marketing Automation

#### CRM Central
- HubSpot, Pipedrive ou Salesforce
- Contact management
- Deal tracking
- Task automation
- Reporting et analytics

#### Email Marketing
- Segmentation intelligente
- Personalization tokens
- A/B testing automatique
- Behavioral triggers
- Unsubscribe et compliance (GDPR)

#### Lead Management
- Lead magnet strategy
- Landing pages + forms
- Lead scoring (MQL vs SQL)
- Routing vers sales
- SLA tracking

#### Integration & Data Flow
- CRM ← → Email platform
- CRM ← → Ads platforms
- CRM ← → Analytics
- CRM ← → Helpdesk
- API integrations custom

### Workflows d'Automation

#### Lead Nurture Séquence
- Welcome email (trigger: form submission)
- Value email #1 (24h après)
- Value email #2 (3j après)
- Soft pitch (7j après)
- Last chance email (14j après)
- Suppression ou re-engagement

#### Onboarding Nouveau Client
- Welcome email avec credentials
- Getting started guide
- Feature tutorials
- Support escalation règles
- Upgrade opportunities

#### Re-engagement Campaign
- Identified: inactive users (30+ days no login)
- Trigger: automated email
- Win-back: 3-email sequence
- End: mark for sales follow-up ou suppression

#### Sales Follow-up
- Lead router: automatic assignment
- Task creation: reminders pour sales
- Follow-up escalation: if no reply
- Close lost: lead score adjustment
- Upsell: after purchase automation

### Lead Generation & Acquisition

#### Demand Gen Channels
- Paid ads (Google, LinkedIn, Facebook)
- Organic search (SEO + content)
- Content marketing (blog, whitepapers)
- Partnerships et affiliates
- Events et webinars
- Community (Product Hunt, Indie Hackers)

#### Landing Pages
- Single value prop clear
- Minimal distractions
- Strong CTA above fold
- Social proof prominently
- Mobile optimized
- Fast loading (< 2s)

#### Lead Magnets
- Ebooks et guides
- Templates et checklists
- Checklists scoring (ex: website audit)
- Webinars
- Trial accounts
- Discount codes

#### Lead Scoring
- Engagement score (email opens, clicks, website visits)
- Demographic score (company size, industry, location)
- Behavioral score (use of features, sales interactions)
- MQL threshold: 100 points
- SQL threshold: 150 points

### Analytics & Optimization

#### Funnel Analytics
- Traffic → Landing page (conversion %)
- Landing page → Email (open %)
- Email → Click (CTR %)
- Overall: lead acquisition cost (CAC)

#### Metrics
- Cost Per Lead (CPL)
- Cost Per Acquisition (CPA)
- Lead-to-Customer rate %
- Time-to-deal (velocity)
- LTV / CAC ratio (should be > 3)

#### Continuous Optimization
- Segment audience testing
- Subject line A/B tests
- Copy variation testing
- Send time optimization
- Landing page heat maps
- Conversion funnel analysis`,
    benefits: [
      'Setup et configuration complète',
      'Design des workflows et tunnels',
      'Email template design personnalisé',
      'Lead scoring et qualification',
      'CRM integration seamless',
      'Analytics dashboard personnalisé',
    ],
    technologies: ['HubSpot', 'Zapier', 'Mailchimp', 'Marketo', 'ActiveCampaign', 'Brevo'],
    challenge: `Beaucoup d'entreprises offrent:
- Génération de leads sans qualification
- Manuellement une liste de prospects = coûteux
- Données fragmentées entre outils
- Pas de nurturing après lead capture
- Sales et marketing désalignés
- Pas de measure de ROI`,
    solution: `Plateforme marketing automation complète:
- CRM central avec data unifiée
- Workflows d'automation intelligents
- Lead scoring qualifiant automatiquement
- Landing pages et forms optimisées
- Email sequences personnalisées
- Integration transparent multi-tools
- Reporting ROI transparent
- Sales + marketing alignment`,
    outcomes: [
      { metric: 'Cost per lead', value: '-60%' },
      { metric: 'Lead to customer', value: '+45%' },
      { metric: 'Sales productivity', value: '+200%' },
      { metric: 'Pipeline coverage', value: '4:1' },
    ],
    process: [
      {
        step: 1,
        title: 'CRM & Tool Setup',
        description: 'Implémentation CRM, email platform, forms, et integrations complètement.',
      },
      {
        step: 2,
        title: 'Workflow Design',
        description: 'Mapping du customer journey et création des sequences d\'automation.',
      },
      {
        step: 3,
        title: 'Landing Pages & Forms',
        description: 'Création landing pages optimisées et forms avec progressive profiling.',
      },
      {
        step: 4,
        title: 'Email sequences',
        description: 'Design et testing email templates avec behavioral triggers.',
      },
      {
        step: 5,
        title: 'Launch & Optimization',
        description: 'Lancement campaigns, monitoring, A/B testing continu et scaling.',
      },
    ],
    useCases: [
      {
        title: 'Software SaaS',
        description: 'Signup acquisition, onboarding automation, activation workflows.',
      },
      {
        title: 'B2B Services',
        description: 'Lead generation, lead nurture, sales collaboration, upsells.',
      },
      {
        title: 'E-commerce',
        description: 'Cart abandonment, product recommendations, post-purchase nurture.',
      },
      {
        title: 'Consulting/Agencies',
        description: 'Lead generation, nurture, proposal seguimiento, onboarding projects.',
      },
    ],
    faq: [
      {
        question: 'Est-ce que automation paraît impersonnel?',
        answer: 'Non si bien fait! Personalization + right message timing = feels personal. Most automated = most relevant.',
      },
      {
        question: 'Combien de workflows dois-je avoir?',
        answer: 'Commencez par 3-5 workflows clés. Expand à 10-20 à mesure que scale. Plus = more complexity.',
      },
      {
        question: 'Quel CRM recommandez-vous?',
        answer: 'HubSpot pour SMBs (meilleur rapport qualité/prix). Salesforce pour enterprises. Pipedrive pour sales-first.',
      },
      {
        question: 'Comment gérer l\'unsubscribe et GDPR?',
        answer: 'Double opt-in obligatoire. Suppression facile en 1 click. Consent tracking. List cleaning régulière.',
      },
    ],
  },
  {
    id: 8,
    title: 'Maintenance & Support',
    subtitle: 'Disponible 24/7 pour votre tranquillité',
    slug: 'maintenance-support',
    excerpt: 'Maintenance proactive, mises à jour et support 24/7. Votre infrastructure reste optimale.',
    description: 'Après le lancement, la vraie valeur commence. Nous maintenons votre site sûr, rapide et à jour avec support réactif 24/7 et monitoring continu.',
    icon: 'FiCheckCircle',
    color: 'green',
    content: `# Maintenance & Support

## Excellence post-launch

Le lancement n'est que le début. Nous maintenons votre site sûr, rapide et à jour, vous permettant de vous concentrer sur votre business.

### Monitoring Proactif

#### Uptime Monitoring
- 24/7 monitoring du site/application
- Alert immédiate si downtime
- Response time < 5 minutes si SLA
- Monthly uptime report
- 99.9% uptime SLA garanti

#### Performance Monitoring
- Real User Monitoring (RUM)
- Page speed tracking
- Error rate monitoring
- Database performance
- API response times
- Automatic alerting si dégradation

#### Security Monitoring
- Web application firewall (WAF)
- Intrusion detection
- Malware scanning quotidien
- SSL certificate monitoring
- Vulnerability scanning
- Penetration testing annuel

#### Usage Analytics
- User behavior tracking
- Feature usage analysis
- Conversion rate monitoring
- Cohort analysis
- Revenue trends

### Maintenance & Updates

#### Système Updates
- OS patches automatiques
- Database updates
- Middleware updates
- Dependencies update security

#### Code Updates
- Framework updates (Next.js, React)
- Library updates
- Package vulnerability fixes
- Automated testing dans CI/CD

#### Content Updates
- Blog posts publication
- Product updates
- Marketing changes
- SEO optimization
- Image optimization

#### Features & Improvements
- Backlog management
- Sprint planning
- Feature development
- A/B testing
- Deployment to production

### Support & Incidents

#### Support Tiers
- **Critical**: Response < 15 min, fixed < 1h
- **High**: Response < 1h, fixed < 4h
- **Medium**: Response < 4h, fixed < 1 day
- **Low**: Response < 1 day, fixed < 1 week

#### Support Channels
- Email support
- Slack channel direct
- Phone support (critical)
- Video call for complex issues
- Documentation self-service

#### Incident Management
- Incident detection + alert
- Root cause analysis
- Communication timeline
- Resolution + verification
- Post-incident review

### Escalation & Enhancement

#### Growth Support
- Traffic spike handling
- Database optimization pour scale
- Infrastructure auto-scaling
- International CDN expansion
- Load balancing improvements

#### Feature Requests
- Prioritization avec vous
- Technical feasibility assessment
- Time estimate scoping
- Development + testing
- Rollout strategy

#### Optimization
- Monthly performance reviews
- SEO improvements
- Conversion rate optimization
- Cost reduction opportunities
- Technology modernization`,
    benefits: [
      'Support 24/7 réactif',
      'Mises à jour sécuritaires mensuelles',
      'Monitoring continu',
      'Backup automatiques',
      'Scaling automatique',
      'Rapports mensuels détaillés',
    ],
    technologies: ['Vercel', 'AWS', 'DataDog', 'Sentry', 'New Relic', 'PagerDuty'],
    challenge: `Beaucoup d'entrepreneurs/PME font face à:
- Site down et non averti
- Mise à jour de sécurité manquée = hacked
- Performance degradation non détectée
- Pas de backup = données perdues à jamais
- Changements font casser le site
- Support non disponible en urgence`,
    solution: `Support + maintenance proactive:
- Monitoring 24/7 avec alertes
- Mises à jour sécurité automatiques
- Backups quotidiens avec restore test
- Incident response < 15 minutes
- Change management strict
- Performance optimization continu
- Transparent reporting
- SLA garantie 99.9% uptime`,
    outcomes: [
      { metric: 'Uptime', value: '99.95%' },
      { metric: 'Response time', value: '< 15 minutes' },
      { metric: 'Security incidents', value: '0' },
      { metric: 'Site downtime', value: '< 2h/year' },
    ],
    process: [
      {
        step: 1,
        title: 'Onboarding',
        description: 'Configuration monitoring, alerting, backups et documentation complète.',
      },
      {
        step: 2,
        title: 'Weekly Review',
        description: 'Vérification monitoring, health checks, update planning.',
      },
      {
        step: 3,
        title: 'Monthly Maintenance',
        description: 'Updates sécurité, performance optimization, reporting.',
      },
      {
        step: 4,
        title: 'Incident Response',
        description: 'Detection, root cause analysis, fix, post-mortem',
      },
      {
        step: 5,
        title: 'Quarterly Review',
        description: 'Strategy review, technology trends, improvement opportunities.',
      },
    ],
    useCases: [
      {
        title: 'E-commerce vitrine',
        description: 'Revenue-critical: downtime = lost sales. 24/7 monitoring nécessaire.',
      },
      {
        title: 'SaaS platforms',
        description: 'Utilisateurs dépendent accès. SLA strict. Scaling sous charge.',
      },
      {
        title: 'Blogs & contenus',
        description: 'Maintenance minimal mais important pour SEO et user experience.',
      },
      {
        title: 'Applications mobiles',
        description: 'App store update compatibility, crash reporting, usage analytics.',
      },
    ],
    faq: [
      {
        question: 'Est-ce vraiment nécessaire d\'avoir support 24/7?',
        answer: 'Dépend criticité. E-commerce: oui. Blog: non. Nous offrons tiering pour budget variable.',
      },
      {
        question: 'Qui gère les backups?',
        answer: 'Nous automatisé les backups daily. Test restore mensuels. Ransomware protection intégrée.',
      },
      {
        question: 'Peut-on scale facilement?',
        answer: 'Oui! Infrastructure auto-scaling sur Vercel/AWS. Pas de crainte de traffic spike.',
      },
      {
        question: 'Combien coûte la maintenance mensuelle?',
        answer: 'Plans retainer: 1-3K€ pour small sites, 3-10K€ pour applications. Dépend criticité.',
      },
    ],
  },
];
