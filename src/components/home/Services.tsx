'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FiCode,
  FiSmartphone,
  FiZap,
  FiSearch,
  FiLayout,
  FiTrendingUp,
  FiRepeat,
  FiCheckCircle,
  FiArrowRight,
} from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'Conception & Développement Web',
    description: 'Sites web modernes, responsifs et performants. Architectures scalables pour votre croissance.',
    icon: FiCode,
    gradient: 'from-primary-500 to-primary-600',
    color: 'text-primary-400',
    features: ['Next.js / React', 'Design Modern', 'SEO Ready'],
  },
  {
    id: 2,
    title: 'Création d\'Application',
    description: 'Applications mobiles et web natives. Expériences utilisateur exceptionnelles et engagement maximal.',
    icon: FiSmartphone,
    gradient: 'from-tech-cyan to-primary-500',
    color: 'text-tech-cyan',
    features: ['iOS/Android', 'Progressive Web App', 'Cloud-ready'],
  },
  {
    id: 3,
    title: 'Optimisation de la Performance',
    description: 'Vitesse, Core Web Vitals et UX fluidité. Chaque milliseconde compte pour la conversion.',
    icon: FiZap,
    gradient: 'from-tech-green to-tech-cyan',
    color: 'text-tech-green',
    features: ['LoadTime < 2s', 'CDN Optimisé', 'Caching Avancé'],
  },
  {
    id: 4,
    title: 'SEO Technique & Contenu',
    description: 'Dominez les résultats de recherche. Stratégies SEO complètes pour une visibilité maximale.',
    icon: FiSearch,
    gradient: 'from-tech-purple to-tech-pink',
    color: 'text-tech-pink',
    features: ['Rankings Top 3', 'Audit Technique', 'Contenu Stratégique'],
  },
  {
    id: 5,
    title: 'Design & Branding',
    description: 'Identités visuelles fortes et cohérentes. Designs qui racontent votre histoire et captent l\'attention.',
    icon: FiLayout,
    gradient: 'from-tech-pink to-tech-purple',
    color: 'text-tech-pink',
    features: ['Logo Design', 'Brand Guidelines', 'UI/UX Strategy'],
  },
  {
    id: 6,
    title: 'Stratégies Digitales Orientées ROI',
    description: 'Chaque action digitale doit générer du ROI. Approche data-driven, résultats mesurables.',
    icon: FiTrendingUp,
    gradient: 'from-accent-500 to-tech-green',
    color: 'text-accent-400',
    features: ['Analytics Setup', 'KPI Tracking', 'Optimization Cycles'],
  },
  {
    id: 7,
    title: 'Marketing Automation & Acquisition',
    description: 'Tunnnels de vente automatisés. Acquisition scalable et nurturing automatique des prospects.',
    icon: FiRepeat,
    gradient: 'from-primary-400 to-tech-cyan',
    color: 'text-primary-400',
    features: ['CRM Integration', 'Email Automation', 'Lead Scoring'],
  },
  {
    id: 8,
    title: 'Maintenance & Support',
    description: 'Maintenance proactive, mises à jour et support 24/7. Votre infrastructure reste optimale.',
    icon: FiCheckCircle,
    gradient: 'from-tech-green to-primary-500',
    color: 'text-tech-green',
    features: ['24/7 Support', 'Security Updates', 'Performance Monitoring'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">8 Piliers d'Excellence</span>
            <br />
            <span className="text-white">pour Votre Réussite Digitale</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Une expertise complète couvrant tous les aspects de votre transformation digitale. De la conception à la croissance, nous vous accompagnons à chaque étape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative rounded-xl overflow-hidden bg-dark-800/50 border border-primary-500/10 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary-500/30"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-3 bg-dark-700 rounded-lg w-fit ${service.color}`}
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary-500/10 text-primary-300 px-2 py-1 rounded border border-primary-500/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 group/link transition-colors"
                  >
                    <span className="text-sm font-medium">En savoir plus</span>
                    <FiArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Border Glow on Hover */}
                <div className={`absolute inset-0 border border-gradient-to-r ${service.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Explorez chaque service en détail et découvrez comment nous pouvons transformer votre vision digitale
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-500 to-tech-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
          >
            Découvrir Tous les Services
            <FiArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
