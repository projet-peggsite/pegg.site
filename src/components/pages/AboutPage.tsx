'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiTrendingUp, FiTarget, FiUsers, FiCode, FiZap, FiAward } from 'react-icons/fi';

const coreValues = [
  {
    icon: FiAward,
    title: 'Excellence',
    description: 'Pas de compromis sur la qualité. Chaque pixel, chaque ligne de code doit être parfait.',
  },
  {
    icon: FiTrendingUp,
    title: 'Résultats & ROI',
    description: 'Chaque action doit générer du ROI mesurable. Transparence totale sur les résultats.',
  },
  {
    icon: FiTarget,
    title: 'Data-Driven',
    description: 'Décisions basées sur les données, pas sur les suppositions. Analytics à chaque étape.',
  },
  {
    icon: FiZap,
    title: 'Innovation',
    description: 'Toujours à la pointe des technologies et méthodologies digitales.',
  },
  {
    icon: FiUsers,
    title: 'Collaboration',
    description: 'Transparence totale. Vous intégrez l\'équipe Pegg Site pendant toute la durée du projet.',
  },
  {
    icon: FiCode,
    title: 'Craft & Craftsmanship',
    description: 'Code clean, scalable, et maintenable. Architecture pensée pour croître avec vous.',
  },
];

const team = [
  {
    role: 'Directeur Technique',
    expertise: 'Architecture scalable, Full-Stack',
    experience: '12+ ans',
  },
  {
    role: 'Lead Designer',
    expertise: 'UX/UI, Brand Strategy',
    experience: '10+ ans',
  },
  {
    role: 'Growth Manager',
    expertise: 'SEO, Marketing Automation',
    experience: '8+ ans',
  },
  {
    role: 'Product Manager',
    expertise: 'Product Strategy, Analytics',
    experience: '9+ ans',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">À Propos de Pegg Site</span>
              <br />
              <span className="text-white">Expertise, Transparence, Résultats</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Depuis 2020, nous transformons les ambitions digitales en croissance réelle pour les entreprises ambitieuses
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: 'Années d\'expérience', value: '8+' },
              { label: 'Projets livrés', value: '150+' },
              { label: 'Clients satisfaits', value: '98%' },
              { label: 'ROI moyen généré', value: '340%' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-primary-400 mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-dark-800 border border-primary-500/20 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Notre Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Transformer votre présence digitale en moteur de croissance. Nous croyons que la technologie et la stratégie, lorsqu'elles sont alignées, créent de la magie digitale qui convertit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-dark-800 border border-primary-500/20 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Notre Vision</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Être le partenaire de confiance des entreprises ambitieuses. Un monde où chaque business, peu importe sa taille, a accès à une expertise digitale de classe mondiale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="gradient-text">Notre ADN</span>
            <br />
            <span className="text-white">Les Valeurs qui Nous Définissent</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-dark-800 border border-primary-500/10 rounded-xl p-8 hover:border-primary-500/30 transition-all duration-300"
                >
                  <div className="text-4xl text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="gradient-text">Notre Approche</span>
          </motion.h2>
          <p className="text-center text-gray-400 text-xl mb-16 max-w-2xl mx-auto">
            Une méthodologie éprouvée qui place la transparence et le ROI au cœur de chaque projet
          </p>

          <div className="bg-dark-800 border border-primary-500/20 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h3 className="text-3xl font-bold text-white mb-8">Processus Agile & Transparent</h3>
                <ul className="space-y-4">
                  {[
                    'Sprints bi-hebdomadaires avec délivrables tangibles',
                    'Reporting en temps réel et transparence totale',
                    'Tests continus et optimisation itérative',
                    'Adaptation rapide aux feedback et changements',
                    'Finalisation avec audit complet et documentation',
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start space-x-3 text-gray-300"
                    >
                      <span className="text-primary-400 text-xl font-bold">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="bg-gradient-to-br from-primary-500/20 to-tech-purple/20 rounded-xl p-8 border border-primary-500/30">
                  <div className="text-center">
                    <p className="text-6xl font-bold text-primary-400 mb-4">5</p>
                    <p className="text-gray-300 text-lg">Étapes stratégiques</p>
                    <p className="text-gray-500 text-sm mt-2">de la découverte à la croissance continue</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="gradient-text">Notre Équipe</span>
            <br />
            <span className="text-white">Experts en Digital</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-dark-800 border border-primary-500/10 rounded-xl p-8 text-center hover:border-primary-500/30 transition-all"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-tech-purple rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold text-white mb-2">{member.role}</h3>
                <p className="text-primary-400 text-sm mb-3">{member.expertise}</p>
                <p className="text-gray-500 text-sm">{member.experience} d'expérience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Parlons de Votre Projet</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Rencontrez notre équipe et découvrez comment nous pouvons transformer votre vision digitale
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-tech-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              Planifier une Consultation
              <FiArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
