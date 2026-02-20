'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight, FiCalendar, FiUser, FiSearch, FiTag } from 'react-icons/fi';

const blogPosts = [
  {
    id: 1,
    title: 'Les 5 Tendances SEO à Maîtriser en 2026',
    excerpt: 'Découvrez les évolutions majeures du SEO et comment les intégrer à votre stratégie digitale pour rester compétitif.',
    category: 'SEO',
    author: 'Thomas Martin',
    date: '19 Feb 2026',
    image: 'bg-gradient-to-br from-primary-500 to-primary-600',
    readTime: '8 min',
    slug: 'seo-trends-2026',
    content: 'Contenu complet de l\'article...',
  },
  {
    id: 2,
    title: 'Next.js 14 vs Remix: Quel Framework Choisir?',
    excerpt: 'Analyse comparative détaillée pour vous aider à choisir le meilleur framework pour votre prochain projet web.',
    category: 'Développement',
    author: 'Sophie Leclerc',
    date: '15 Feb 2026',
    image: 'bg-gradient-to-br from-tech-purple to-tech-pink',
    readTime: '12 min',
    slug: 'nextjs-vs-remix',
    content: 'Contenu complet de l\'article...',
  },
  {
    id: 3,
    title: 'ROI du Marketing Automation: Cas Concrets',
    excerpt: 'Comment 5 entreprises ont multiplié leur ROI par 3 en automatisant leur marketing automation. Méthodologies éprouvées.',
    category: 'Marketing',
    author: 'Jean Dupont',
    date: '12 Feb 2026',
    image: 'bg-gradient-to-br from-tech-green to-tech-cyan',
    readTime: '10 min',
    slug: 'marketing-automation-roi',
    content: 'Contenu complet de l\'article...',
  },
  {
    id: 4,
    title: 'Web Performance: Guide Complet Core Web Vitals',
    excerpt: 'Optimisez la performance de votre site avec notre guide complet sur les Core Web Vitals et les meilleures pratiques.',
    category: 'Performance',
    author: 'Thomas Martin',
    date: '8 Feb 2026',
    image: 'bg-gradient-to-br from-accent-500 to-primary-500',
    readTime: '15 min',
    slug: 'core-web-vitals-guide',
    content: 'Contenu complet de l\'article...',
  },
  {
    id: 5,
    title: 'Design System: Fondations d\'une UI Scalable',
    excerpt: 'Créez un design system robuste et réutilisable pour accélérer votre workflow de design et développement.',
    category: 'Design',
    author: 'Marie Rousseau',
    date: '5 Feb 2026',
    image: 'bg-gradient-to-br from-tech-pink to-tech-purple',
    readTime: '11 min',
    slug: 'design-system-guide',
    content: 'Contenu complet de l\'article...',
  },
  {
    id: 6,
    title: 'Analytics Avancé: Suivi du Customer Journey',
    excerpt: 'Maîtrisez l\'analytics avancé pour suivre chaque interaction et optimiser votre tunnel de conversion.',
    category: 'Analytics',
    author: 'David Chen',
    date: '1 Feb 2026',
    image: 'bg-gradient-to-br from-primary-400 to-primary-500',
    readTime: '9 min',
    slug: 'advanced-analytics',
    content: 'Contenu complet de l\'article...',
  },
];

const categories = ['Tous', 'SEO', 'Développement', 'Marketing', 'Performance', 'Design', 'Analytics'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch = selectedCategory === 'Tous' || post.category === selectedCategory;
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Blog & Ressources</span>
              <br />
              <span className="text-white">Insights Digitales</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Découvrez les dernières tendances, techniques et stratégies pour transformer votre présence digitale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-primary-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="relative">
              <FiSearch className="absolute left-4 top-4 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-primary-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-tech-purple text-white'
                    : 'bg-dark-800 text-gray-300 hover:text-white border border-primary-500/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-dark-800/50 border border-primary-500/10 rounded-xl overflow-hidden hover:border-primary-500/30 transition group cursor-pointer"
              >
                {/* Post Image */}
                <div className={`h-48 ${post.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-500/80 text-white text-sm rounded-full flex items-center gap-1">
                      <FiTag className="w-3 h-3" /> {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Post Meta */}
                  <div className="space-y-3 mb-4 pb-4 border-b border-primary-500/10">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" /> {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <FiUser className="w-4 h-4" /> {post.author}
                    </div>
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition font-semibold"
                  >
                    Lire l'article
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Aucun article trouvé pour ces critères.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary-500/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/10 to-tech-purple/10 border border-primary-500/20 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Recevez nos meilleurs articles</h2>
            <p className="text-gray-400 mb-6">
              Abonnez-vous à notre newsletter pour recevoir les dernières insights digitales directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 bg-dark-900 border border-primary-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-tech-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition">
                S'abonner
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
