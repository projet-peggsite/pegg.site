'use client';

import Link from 'next/link';
import { FiArrowRight, FiCode, FiSmartphone, FiZap, FiSearch, FiEdit3, FiTrendingUp, FiRefreshCw, FiCheckCircle } from 'react-icons/fi';

const servicesDetail = [
  {
    id: 1,
    title: 'Conception & Développement Web',
    subtitle: 'Sites web modernes qui convertissent',
    description: 'Sites web modernes, responsifs et performants. Architectures scalables pour votre croissance.',
    icon: FiCode,
    color: 'primary',
    benefits: [
      'Architecture scalable et maintenable',
      'Design responsive et moderne',
      'SEO optimisé dès la création',
      'Performance maximale (Core Web Vitals)',
      'Intégration CMS flexible',
      'Support et maintenance inclus',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    videoUrl: '#',
  },
  {
    id: 2,
    title: 'Création d\'Application',
    subtitle: 'Applications performantes cross-platform',
    description: 'Applications mobiles et web natives. Expériences utilisateur exceptionnelles et engagement maximal.',
    icon: FiSmartphone,
    color: 'cyan',
    benefits: [
      'Applications mobiles iOS et Android',
      'Progressive Web Apps (PWA)',
      'Synchronisation cloud',
      'Push notifications',
      'Offline functionality',
      'Analytics intégrée',
    ],
    technologies: ['React Native', 'Flutter', 'Firebase', 'Redux', 'REST APIs'],
    videoUrl: '#',
  },
  {
    id: 3,
    title: 'Optimisation de la Performance',
    subtitle: 'Chaque milliseconde compte',
    description: 'Vitesse, Core Web Vitals et UX fluidité. Chaque milliseconde compte pour la conversion.',
    icon: FiZap,
    color: 'green',
    benefits: [
      'Optimisation de LoadTime',
      'Core Web Vitals optimisés',
      'CDN globale et caching avancé',
      'Compression d\'images intelligente',
      'Code splitting et lazy loading',
      'Monitoring continu',
    ],
    technologies: ['Lighthouse', 'WebP', 'GZIP', 'Service Workers', 'CloudFlare'],
    videoUrl: '#',
  },
  {
    id: 4,
    title: 'SEO Technique & Contenu',
    subtitle: 'Dominez les résultats de recherche',
    description: 'Dominez les résultats de recherche. Stratégies SEO complètes pour une visibilité maximale.',
    icon: FiSearch,
    color: 'pink',
    benefits: [
      'Audit SEO technique complet',
      'Optimisation on-page et off-page',
      'Stratégie de contenu data-driven',
      'Link building professionnel',
      'Rankings Top 3 Google',
      'Reporting mensuel détaillé',
    ],
    technologies: ['Google Analytics', 'Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog'],
    videoUrl: '#',
  },
  {
    id: 5,
    title: 'Design & Branding',
    subtitle: 'Identités visuelles qui marquent',
    description: 'Identités visuelles fortes et cohérentes. Designs qui racontent votre histoire et captent l\'attention.',
    icon: FiEdit3,
    color: 'pink',
    benefits: [
      'Logo et identité visuelle',
      'Brand guidelines complètes',
      'UI/UX design moderne',
      'Design system scalable',
      'Prototypage et user testing',
      'Implémentation pixel-perfect',
    ],
    technologies: ['Figma', 'Adobe Suite', 'Prototyping Tools', 'Design Systems', 'User Testing'],
    videoUrl: '#',
  },
  {
    id: 6,
    title: 'Stratégies Digitales Orientées ROI',
    subtitle: 'Mesurable, transparent et profitable',
    description: 'Chaque action digitale doit générer du ROI. Approche data-driven, résultats mesurables.',
    icon: FiTrendingUp,
    color: 'accent',
    benefits: [
      'Stratégie digitale personnalisée',
      'Setup analytics avancé',
      'KPI tracking et reporting',
      'Optimisation continue (CRO)',
      'A/B testing structuré',
      'Augmentation ROI garantie',
    ],
    technologies: ['Google Analytics 4', 'GTM', 'Looker Studio', 'Hotjar', 'Mixpanel'],
    videoUrl: '#',
  },
  {
    id: 7,
    title: 'Marketing Automation & Acquisition',
    subtitle: 'Croissance automatisée et scalable',
    description: 'Tunnels de vente automatisés. Acquisition scalable et nurturing automatique des prospects.',
    icon: FiRefreshCw,
    color: 'primary',
    benefits: [
      'Intégration CRM complète',
      'Workflows d\'email automation',
      'Lead scoring intelligent',
      'Tunnels de vente optimisés',
      'Nurturing campaigns',
      'Attribution modeling',
    ],
    technologies: ['HubSpot', 'Zapier', 'Mailchimp', 'Marketo', 'Brevo'],
    videoUrl: '#',
  },
  {
    id: 8,
    title: 'Maintenance & Support',
    subtitle: 'Disponible 24/7 pour votre tranquillité',
    description: 'Maintenance proactive, mises à jour et support 24/7. Votre infrastructure reste optimale.',
    icon: FiCheckCircle,
    color: 'green',
    benefits: [
      'Support 24/7 réactif',
      'Mises à jour sécuritaires mensuelles',
      'Monitoring continu',
      'Backup automatiques',
      'Scaling automatique',
      'Rapports mensuels détaillés',
    ],
    technologies: ['Vercel', 'AWS', 'DataDog', 'Sentry', 'New Relic'],
    videoUrl: '#',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">8 Services</span>
              <br />
              <span className="text-white">Une Excellence Complète</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une expertise complète couvrant tous les aspects de votre transformation digitale
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {servicesDetail.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className="relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div
                    className={isEven ? 'md:col-span-1' : 'md:col-span-1 md:order-2'}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className="p-3 bg-primary-500/20 rounded-lg text-primary-400"
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-primary-400 font-semibold text-sm">Service</p>
                        <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                      </div>
                    </div>

                    <p className="text-xl text-gray-300 mb-8">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3 mb-8">
                      <h3 className="text-lg font-semibold text-white">Bénéfices :</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <FiCheckCircle className="w-5 h-5 text-tech-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-white mb-4">Technologies :</h3>
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-primary-500/10 text-primary-300 rounded-lg border border-primary-500/20 text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-tech-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
                    >
                      Discuter de ce service
                      <FiArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>

                  {/* Visual Element */}
                  <div
                    className={isEven ? 'md:col-span-1' : 'md:col-span-1 md:order-1'}
                  >
                    <div className="relative h-96 bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl border border-primary-500/10 overflow-hidden group">
                      {/* Background Animation */}
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-tech-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />

                      {/* Icon Display */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="text-8xl opacity-20 text-primary-500"
                        >
                          <Icon />
                        </div>
                      </div>

                      {/* Gradient Orb */}
                      <div
                        className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-primary-500 to-tech-purple rounded-full filter blur-3xl opacity-30"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div>
          
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Prêt à démarrer?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons transformer votre présence digitale
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-tech-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
            >
              Demander une Consultation
              <FiArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
