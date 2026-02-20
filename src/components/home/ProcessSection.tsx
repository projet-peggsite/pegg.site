'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    title: 'Découverte & Audit',
    description: 'Analyse approfondie de vos objectifs, défis actuels et opportunités digitales',
    details: ['Audit complet', 'Benchmarking concurrent', 'Définition des KPIs'],
  },
  {
    number: '02',
    title: 'Stratégie & Planification',
    description: 'Création d\'une feuille de route détaillée, alignée sur vos objectifs business',
    details: ['Plan stratégique', 'Timeline optimisée', 'Budget détaillé'],
  },
  {
    number: '03',
    title: 'Design & Développement',
    description: 'Conception moderne et développement robuste, avec tests continus',
    details: ['Prototypage', 'Développement itératif', 'Quality Assurance'],
  },
  {
    number: '04',
    title: 'Lancement & Optimisation',
    description: 'Mise en ligne avec monitoring et optimisations continues basées sur les données',
    details: ['Go live', 'A/B Testing', 'Performance monitoring'],
  },
  {
    number: '05',
    title: 'Croissance Continue',
    description: 'Support proactif et amélioration continue pour maximiser votre ROI',
    details: ['Maintenance 24/7', 'Scaling infrastructure', 'Innovation'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ProcessSection() {
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
            <span className="gradient-text">Notre Méthodologie</span>
            <br />
            <span className="text-white">Processus Éprouvé & Transparent</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un processus structuré qui place la transparence et les résultats au centre de chaque projet
          </p>
        </motion.div>

        {/* Timeline Process */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-12 top-32 w-0.5 h-20 bg-gradient-to-b from-primary-500 to-tech-purple opacity-20"></div>
              )}

              {/* Step Card */}
              <div className="flex gap-8">
                {/* Step Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500/20 to-tech-purple/20 border-2 border-primary-500 flex items-center justify-center sticky top-32">
                    <span className="text-3xl font-bold text-primary-400">
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-2 pb-8">
                  <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/10 rounded-xl p-8 group-hover:border-primary-500/30 transition-all duration-300">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center space-x-2 text-primary-400"
                        >
                          <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
