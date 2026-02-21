'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight, FiExternalLink, FiBarChart2 } from 'react-icons/fi';
import { portfolios } from '@/data/portfolios';

const categories = ['Tous', ...new Set(portfolios.map(p => p.category))];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProjects = activeCategory === 'Tous'
    ? portfolios
    : portfolios.filter(p => p.category === activeCategory);

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
              <span className="gradient-text">Notre Portfolio</span>
              <br />
              <span className="text-white">50+ Projets, 100% Résultats</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez comment nous avons transformé les ambitions digitales en croissance réelle pour nos clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-3 pb-8 overflow-x-auto scrollbar-hide"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-tech-purple text-white shadow-lg shadow-primary-500/50'
                    : 'bg-dark-800 text-gray-400 border border-primary-500/20 hover:border-primary-500/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-2xl overflow-hidden bg-dark-800 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300"
                >
                  {/* Image */}
                  <div className={`h-48 ${project.image} relative overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="absolute inset-0"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category & ROI */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center space-x-1 text-tech-green text-sm font-bold"
                      >
                        <FiBarChart2 className="w-4 h-4" />
                        <span>{project.roi}</span>
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Client */}
                    <p className="text-sm text-gray-400 mb-4">
                      Client: <span className="text-primary-400">{project.client}</span>
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-3 mb-6 pt-6 border-t border-primary-500/10">
                      {project.results.slice(0, 3).map((result, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-primary-400 font-bold text-sm">
                            {result.value}
                          </p>
                          <p className="text-gray-500 text-xs line-clamp-1">
                            {result.metric}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-dark-700 text-gray-400 px-2 py-1 rounded border border-primary-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="text-xs bg-dark-700 text-gray-400 px-2 py-1 rounded border border-primary-500/20">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="w-full"
                    >
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary-500/10 to-tech-purple/10 border border-primary-500/20 rounded-lg text-primary-400 font-semibold text-sm group-hover:border-primary-500/50 group-hover:bg-gradient-to-r group-hover:from-primary-500/20 group-hover:to-tech-purple/20 transition-all duration-300"
                      >
                        Voir le cas {' '}
                        <FiArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Votre Projet Pourrait Être Prochain!</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Parlons de votre vision et comment Pegg Site peut la transformer en résultat mesurable
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-tech-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
            >
              Démarrer Votre Projet
              <FiArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
