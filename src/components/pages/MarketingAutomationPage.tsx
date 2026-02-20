'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiTrendingUp, FiZap, FiUsers, FiBarChart2, FiCheckCircle } from 'react-icons/fi';

export default function MarketingAutomationPage() {
  const benefits = [
    { icon: FiTrendingUp, label: 'ROI x5', description: 'Croissance exponentielle de vos conversions' },
    { icon: FiZap, label: '70% temps', description: 'Réduction du temps de gestion' },
    { icon: FiUsers, label: '+3 mois', description: 'Délai de fermeture réduit' },
    { icon: FiBarChart2, label: '100% visibility', description: 'Attribution complète des ventes' },
  ];

  const automationSteps = [
    {
      number: '01',
      title: 'Lead Capture',
      description: 'Capture de leads via formulaires intelligents et progressive profiling',
    },
    {
      number: '02',
      title: 'Lead Scoring',
      description: 'Qualification automatique basée sur le comportement et données',
    },
    {
      number: '03',
      title: 'Email Nurturing',
      description: 'Workflows d\'email personnalisés selon le profil et intérêts',
    },
    {
      number: '04',
      title: 'CRM Sync',
      description: 'Intégration bidirectionnelle avec votre CRM',
    },
    {
      number: '05',
      title: 'Sales Alert',
      description: 'Notification automatique des leads chauds au team ventes',
    },
    {
      number: '06',
      title: 'Analytics & Optimization',
      description: 'Reporting détaillé et optimisation continue des funnels',
    },
  ];

  const platforms = [
    'HubSpot',
    'Marketo',
    'Brevo',
    'Zapier',
    'Google Workspace',
    'Slack Integration',
  ];

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-tech-purple rounded-full blur-3xl"
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30">
                <FiZap className="w-4 h-4 text-tech-green animate-pulse" />
                <span className="text-primary-400 font-semibold text-sm">Plus de 10,000 leads qualifiés par mois</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Marketing Automation</span>
              <br />
              <span className="text-white">Croissance Sans Limites</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transformez vos visiteurs en leads, vos leads en clients, et vos clients en ambassadeurs. Automation intelligente = Croissance scalable.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-tech-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              Voir Démonstration Gratuite
              <FiArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="gradient-text">Impact Mesurable</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-dark-800 border border-primary-500/20 rounded-2xl p-8 hover:border-primary-500/50 transition-all"
                >
                  <div className="text-5xl text-primary-400 mb-4">
                    <Icon />
                  </div>
                  <p className="text-lg font-bold text-white mb-2">{benefit.label}</p>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automation Flow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="gradient-text">Comment Ça Fonctionne</span>
          </motion.h2>
          <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Un système automatisé qui travaille 24/7 pour convertir vos visiteurs en clients
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                {/* Connector */}
                {idx < automationSteps.length - 1 && (
                  <div className="absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-transparent hidden lg:block"></div>
                )}

                {/* Card */}
                <div className="bg-dark-800 border border-primary-500/20 rounded-xl p-8 hover:border-primary-500/50 transition-all h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-tech-purple flex items-center justify-center text-white font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="gradient-text">Tunnel de Conversion Complet</span>
          </motion.h2>

          <div className="bg-dark-800 border border-primary-500/20 rounded-2xl p-12 overflow-x-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center justify-between gap-4 min-w-max lg:min-w-full"
            >
              {[
                { stage: 'Awareness', percentage: '100%' },
                { stage: 'Interest', percentage: '45%' },
                { stage: 'Consideration', percentage: '32%' },
                { stage: 'Decision', percentage: '18%' },
                { stage: 'Retention', percentage: '12%' },
              ].map((stage, idx) => (
                <div key={idx} className="flex-1 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-gradient-to-br from-primary-500/20 to-tech-purple/20 rounded-xl p-6 border border-primary-500/30 mb-4"
                  >
                    <p className="text-3xl font-bold text-primary-400 mb-2">{stage.percentage}</p>
                    <p className="text-sm text-gray-400">de votre audience</p>
                  </motion.div>
                  <p className="font-semibold text-white">{stage.stage}</p>
                  {idx < 4 && <div className="text-2xl text-primary-500 mt-2">→</div>}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">Plateforme Compatible</span>
          </motion.h2>
          <p className="text-gray-400 text-lg mb-12">
            Fonctionne avec tous vos outils existants
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-dark-800 border border-primary-500/10 rounded-xl p-6 text-white font-semibold hover:border-primary-500/30 transition-all"
              >
                {platform}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="gradient-text">Services Inclus</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Setup et configuration complète',
              'Design des workflows et tunnels',
              'Email template design personnalisé',
              'Lead scoring et qualification',
              'CRM integration seamless',
              'Analytics dashboard personnalisé',
              'Training équipe complète',
              'Support 24/7 illimité',
              'Optimization et A/B testing',
              'Monthly strategy review',
              'Growth consulting',
              'Reporting détaillé',
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center space-x-4"
              >
                <FiCheckCircle className="w-6 h-6 text-tech-green flex-shrink-0" />
                <span className="text-gray-300 text-lg">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Prêt à Automatiser</span>
              <br />
              <span className="text-white">Votre Growth?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Demandez une consultation gratuite et découvrez le potentiel de votre funnel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-tech-purple rounded-lg text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center"
              >
                Consultation Gratuite
                <FiArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="px-8 py-4 border-2 border-primary-500 text-primary-400 rounded-lg font-semibold hover:bg-primary-500/10 transition-colors">
                Voir Une Démo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
