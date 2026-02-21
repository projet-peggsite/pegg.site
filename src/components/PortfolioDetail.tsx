'use client';

import { Portfolio } from '@/data/portfolios';
import Link from 'next/link';
import { FiArrowRight, FiClock, FiUsers, FiTarget, FiAward, FiZap, FiTrendingUp, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Markdown from 'react-markdown';

interface PortfolioDetailProps {
  portfolio: Portfolio;
}

// Component pour les images générées
const HeroImage = ({ title }: { title: string }) => {
  const colors = {
    'TechFlow': ['#0ea5e9', '#a855f7', '#ec4899'],
    'EcoShop': ['#10b981', '#0ea5e9', '#6366f1'],
    'Nexus': ['#a855f7', '#ec4899', '#f59e0b'],
    'FinFlow': ['#06b6d4', '#3b82f6', '#8b5cf6'],
  };
  
  const palette = Object.entries(colors).find(([key]) => title.includes(key))?.[1] || ['#0ea5e9', '#a855f7', '#ec4899'];

  return (
    <div className="relative w-full h-56 md:h-80 bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden rounded-xl">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`grad-${title}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette[0]} stopOpacity="0.3" />
            <stop offset="50%" stopColor={palette[1]} stopOpacity="0.2" />
            <stop offset="100%" stopColor={palette[2]} stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Background circles */}
        <circle cx="100" cy="80" r="60" fill={palette[0]} opacity="0.1" filter="url(#glow)" />
        <circle cx="300" cy="200" r="80" fill={palette[1]} opacity="0.1" filter="url(#glow)" />
        <circle cx="200" cy="150" r="100" fill={palette[2]} opacity="0.08" filter="url(#glow)" />
        
        {/* Geometric shapes */}
        <rect x="50" y="50" width="100" height="100" fill={`url(#grad-${title})`} opacity="0.3" transform="rotate(15 100 100)" />
        <polygon points="300,50 350,100 300,150 250,100" fill={palette[1]} opacity="0.2" filter="url(#glow)" />
        
        {/* Grid lines */}
        <line x1="0" y1="75" x2="400" y2="75" stroke={palette[0]} strokeWidth="1" opacity="0.1" />
        <line x1="0" y1="150" x2="400" y2="150" stroke={palette[0]} strokeWidth="1" opacity="0.1" />
        <line x1="0" y1="225" x2="400" y2="225" stroke={palette[0]} strokeWidth="1" opacity="0.1" />
        
        {/* Accent elements */}
        <circle cx="100" cy="250" r="3" fill={palette[0]} opacity="0.6" filter="url(#glow)" />
        <circle cx="150" cy="220" r="2" fill={palette[1]} opacity="0.5" />
        <circle cx="280" cy="260" r="3" fill={palette[2]} opacity="0.6" filter="url(#glow)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
};

export default function PortfolioDetail({ portfolio }: PortfolioDetailProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -top-40 -left-20" />
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -bottom-40 right-20" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 flex items-center gap-2 text-sm"
          >
            <Link href="/portfolio" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Portfolio
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">{portfolio.title}</span>
          </motion.div>

          {/* Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.span variants={itemVariants} className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent rounded-full text-sm font-bold mb-6 border border-cyan-500/30">
              {portfolio.category}
            </motion.span>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {portfolio.title}
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              {portfolio.description}
            </motion.p>

            {/* Key Metrics - Enhanced */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {portfolio.results.map((result, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-lg hover:border-cyan-500/50 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-gray-400 text-sm">{result.metric}</p>
                      <FiTrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <p className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {result.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Hero Image */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              {portfolio.image.endsWith('.svg') ? (
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    className="w-full h-56 md:h-80 object-cover rounded-xl"
                  />
                ) : (
                  <HeroImage title={portfolio.title} />
                )}
            </motion.div>

            {/* Quick Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8 border-b border-slate-700/50"
            >
              <motion.div variants={itemVariants}>
                <p className="text-gray-500 text-sm mb-2">Client</p>
                <p className="font-bold text-white">{portfolio.client}</p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start gap-2">
                <FiClock className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-sm mb-2">Timeline</p>
                  <p className="font-bold text-white">{portfolio.timeline}</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start gap-2">
                <FiUsers className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-sm mb-2">Équipe</p>
                  <p className="font-bold text-white">{portfolio.teamSize} experts</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="text-gray-500 text-sm mb-2">ROI</p>
                <p className="font-bold text-green-400 text-lg">{portfolio.roi}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Main Content */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Challenge Section */}
              <motion.div
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-10 rounded-xl hover:border-cyan-500/50 transition-colors duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-red-500/20 rounded-lg">
                      <FiTarget className="w-6 h-6 text-red-400 flex-shrink-0" />
                    </div>
                    <h2 className="text-3xl font-black text-white pt-1">Défis</h2>
                  </div>
                  <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">{portfolio.challenge}</div>
                </div>
              </motion.div>

              {/* Solution Section */}
              <motion.div
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-10 rounded-xl hover:border-purple-500/50 transition-colors duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-green-500/20 rounded-lg">
                      <FiZap className="w-6 h-6 text-green-400 flex-shrink-0" />
                    </div>
                    <h2 className="text-3xl font-black text-white pt-1">Solution</h2>
                  </div>
                  <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">{portfolio.solution}</div>
                </div>
              </motion.div>

              {/* Content (Detailed case study) */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 p-10 rounded-xl"
              >
                <Markdown
                  components={{
                    h1: ({ ...props }: any) => <h1 className="text-4xl font-black mt-8 mb-6 text-white" {...props} />,
                    h2: ({ ...props }: any) => <h2 className="text-3xl font-bold mt-8 mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" {...props} />,
                    h3: ({ ...props }: any) => <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-100" {...props} />,
                    h4: ({ ...props }: any) => <h4 className="text-xl font-bold mt-4 mb-2 text-gray-200" {...props} />,
                    p: ({ ...props }: any) => <p className="text-gray-300 mb-4 leading-relaxed" {...props} />,
                    ul: ({ ...props }: any) => <ul className="space-y-2 mb-4 text-gray-300" {...props} />,
                    ol: ({ ...props }: any) => <ol className="space-y-2 mb-4 text-gray-300 list-decimal list-inside" {...props} />,
                    li: ({ ...props }: any) => <li className="ml-2 flex items-start gap-2" {...props} />,
                    code: ({ inline, ...props }: any) => 
                      inline ? (
                        <code className="bg-slate-950 px-2 py-1 rounded text-cyan-400 font-mono text-sm border border-slate-700" {...props} />
                      ) : (
                        <code className="block bg-slate-950 p-4 rounded-lg overflow-x-auto mb-4 text-sm border border-slate-700 text-cyan-300" {...props} />
                      ),
                    pre: ({ ...props }: any) => <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto mb-4 border border-slate-700" {...props} />,
                    blockquote: ({ ...props }: any) => <blockquote className="border-l-4 border-purple-500 pl-6 italic text-gray-400 mb-4 bg-slate-800/50 py-4 rounded-r" {...props} />,
                    a: ({ ...props }: any) => <a className="text-cyan-400 hover:text-cyan-300 underline transition-colors" {...props} />,
                    table: ({ ...props }: any) => <table className="w-full border-collapse mb-4 border border-slate-700 rounded overflow-hidden" {...props} />,
                    tr: ({ ...props }: any) => <tr className="border-b border-slate-700" {...props} />,
                    th: ({ ...props }: any) => <th className="border border-slate-700 px-4 py-3 bg-slate-900 font-bold text-left text-cyan-400" {...props} />,
                    td: ({ ...props }: any) => <td className="border border-slate-700 px-4 py-3 text-gray-300" {...props} />,
                  }}
                >
                  {portfolio.content}
                </Markdown>
              </motion.div>

              {/* Testimonial */}
              {portfolio.testimonial && (
                <motion.div
                  variants={itemVariants}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-amber-500/30 p-10 rounded-xl hover:border-amber-400/50 transition-colors duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-amber-500/20 rounded-lg">
                        <FiAward className="w-6 h-6 text-amber-400 flex-shrink-0" />
                      </div>
                      <h3 className="text-xl font-bold text-white pt-1">Témoignage Client</h3>
                    </div>
                    <p className="text-lg italic text-gray-200 mb-6 leading-relaxed">
                      "{portfolio.testimonial.text}"
                    </p>
                    <div className="pl-4 border-l-2 border-amber-500">
                      <p className="font-bold text-white">
                        {portfolio.testimonial.author}
                      </p>
                      <p className="text-sm text-gray-400">
                        {portfolio.testimonial.position} • {portfolio.testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-8"
            >
              {/* Goals */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-xl lg:sticky lg:top-32 hover:border-blue-500/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                  <FiTarget className="w-5 h-5 text-blue-400" />
                  Objectifs
                </h3>
                <ul className="space-y-4">
                  {portfolio.goals.map((goal, idx) => (
                    <motion.li
                      key={idx}
                      variants={itemVariants}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm leading-relaxed">{goal}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Achievements */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-xl hover:border-green-500/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                  <FiCheck className="w-5 h-5 text-green-400" />
                  Résultats
                </h3>
                <ul className="space-y-3">
                  {portfolio.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      variants={itemVariants}
                      className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                    >
                      <span className="text-green-400 font-bold flex-shrink-0 mt-0.5">✓</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Technologies */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-xl hover:border-purple-500/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                  <FiZap className="w-5 h-5 text-purple-400" />
                  Stack Tech
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolio.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-slate-700 to-slate-800 text-gray-300 rounded-full text-xs font-semibold border border-slate-600 hover:border-purple-500 hover:text-purple-300 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Related Portfolios / CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 top-1/2 left-1/4 -translate-y-1/2" />
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 bottom-0 right-1/4" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Prêt à transformer
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                votre projet?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Parlons de comment nous pouvons vous aider à atteindre vos objectifs avec la même excellence que nos clients
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 font-bold text-lg group"
              >
                Commencer maintenant
                <FiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
