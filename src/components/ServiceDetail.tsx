'use client';

import { Service } from '@/data/services';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiCode, FiSmartphone, FiZap, FiSearch, FiEdit3, FiTrendingUp, FiRefreshCw, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Markdown from 'react-markdown';

interface ServiceDetailProps {
  service: Service;
}

// Icon mapping
const iconMap: { [key: string]: any } = {
  FiCode,
  FiSmartphone,
  FiZap,
  FiSearch,
  FiEdit3,
  FiTrendingUp,
  FiRefreshCw,
  FiCheckCircle,
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = iconMap[service.icon] || FiCode;

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

  const colorClasses = {
    primary: 'from-primary-500 to-primary-600',
    cyan: 'from-tech-cyan to-primary-500',
    green: 'from-tech-green to-primary-500',
    pink: 'from-tech-pink to-tech-purple',
  };

  const textColorClasses = {
    primary: 'text-primary-400',
    cyan: 'text-tech-cyan',
    green: 'text-tech-green',
    pink: 'text-tech-pink',
  };

  return (
    <article className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-950 to-dark-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -top-40 -left-20" />
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -bottom-40 right-20" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              href="/services"
              className="inline-flex items-center text-gray-400 hover:text-primary-400 transition-colors"
            >
              <span>Services</span>
              <FiArrowRight className="w-4 h-4 mx-2" />
              <span className="text-white">{service.title}</span>
            </Link>
          </motion.div>

          {/* Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <motion.div whileHover={{ scale: 1.1 }} className={`p-4 bg-dark-800 rounded-lg ${textColorClasses[service.color as keyof typeof textColorClasses]}`}>
                <Icon className="w-8 h-8" />
              </motion.div>
              <div>
                <p className={`text-sm font-semibold ${textColorClasses[service.color as keyof typeof textColorClasses]} mb-2`}>
                  Service
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl">
                  {service.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 border-t border-dark-700"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-2"
            >
              <p className={`text-sm font-semibold ${textColorClasses[service.color as keyof typeof textColorClasses]}`}>
                À PROPOS
              </p>
              <p className="text-gray-300">
                {service.description}
              </p>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className={`text-sm font-semibold ${textColorClasses[service.color as keyof typeof textColorClasses]}`}>
                RÉSULTATS TYPIQUES
              </p>
              {service.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">{outcome.metric}</span>
                  <span className={`font-bold ${textColorClasses[service.color as keyof typeof textColorClasses]}`}>
                    {outcome.value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Key Numbers */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-2"
            >
              <p className={`text-sm font-semibold ${textColorClasses[service.color as keyof typeof textColorClasses]}`}>
                DÉMARRER
              </p>
              <Link
                href="/contact"
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]} rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300 group`}
              >
                Discuter ce service
                <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Tous les Bénéfices</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 bg-dark-900 rounded-lg border border-dark-700 hover:border-primary-500/50 transition-colors"
              >
                <FiCheck className={`w-6 h-6 flex-shrink-0 mt-1 ${textColorClasses[service.color as keyof typeof textColorClasses]}`} />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Challenge & Solution */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white">Le Défi</h3>
              <div className="text-gray-300 space-y-2 whitespace-pre-wrap">
                {service.challenge}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className={`text-2xl font-bold ${textColorClasses[service.color as keyof typeof textColorClasses]}`}>
                Notre Solution
              </h3>
              <div className="text-gray-300 space-y-2 whitespace-pre-wrap">
                {service.solution}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">Notre Processus</span>
          </h2>

          <div className="space-y-8">
            {service.process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 md:gap-12 items-start"
              >
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]} flex items-center justify-center text-white font-bold text-xl`}
                  >
                    {step.step}
                  </motion.div>
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>

                  {idx < service.process.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: 80 }}
                      viewport={{ once: true }}
                      className={`mt-8 ml-8 border-l-2 ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[0] === 'from-primary-500' ? 'border-primary-500/30' : 'border-primary-500/20'}`}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Use Cases */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Cas d'Usage</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.useCases.map((usecase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-500/50 transition-colors"
              >
                <h3 className={`text-xl font-semibold ${textColorClasses[service.color as keyof typeof textColorClasses]} mb-3`}>
                  {usecase.title}
                </h3>
                <p className="text-gray-400">
                  {usecase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technologies */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Technologies Utilisées</span>
          </h2>

          <div className="flex flex-wrap gap-3 justify-center">
            {service.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-4 py-2 bg-dark-900 text-primary-300 rounded-lg border border-primary-500/20 font-medium hover:border-primary-500/50 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Questions Fréquentes</span>
          </h2>

          <div className="space-y-4">
            {service.faq.map((faq, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border border-dark-700 rounded-lg p-6 hover:border-primary-500/50 transition-colors cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-white">
                  <span>{faq.question}</span>
                  <span className="text-primary-400 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-r from-dark-800/50 to-dark-900/50`} />
          <div className={`absolute top-20 left-10 w-72 h-72 bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]} rounded-full mix-blend-multiply filter blur-3xl opacity-5`} />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-dark-800/40 backdrop-blur-sm border border-dark-700 rounded-2xl p-10 md:p-16">
            <div className="prose prose-invert max-w-none">
              <Markdown
                components={{
                  h1: ({ node, ...props }) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <h1 className="text-4xl md:text-5xl font-bold text-white mt-8 mb-6 pb-4 border-b border-dark-700/30" {...props} />
                    </motion.div>
                  ),
                  h2: ({ node, ...props }) => (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <h2 className={`text-3xl font-bold ${textColorClasses[service.color as keyof typeof textColorClasses]} mt-10 mb-6 relative pl-4 before:absolute before:left-0 before:w-1 before:h-8 before:bg-gradient-to-b ${colorClasses[service.color as keyof typeof colorClasses]}`} {...props} />
                    </motion.div>
                  ),
                  h3: ({ node, ...props }) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4" {...props} />
                    </motion.div>
                  ),
                  h4: ({ node, ...props }) => (
                    <h4 className="text-lg font-semibold text-white mt-6 mb-3" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-gray-400 mb-5 leading-relaxed text-base md:text-lg" {...props} />
                    </motion.div>
                  ),
                  li: ({ node, ...props }) => (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <li className="text-gray-400 ml-6 mb-3 leading-relaxed" {...props} />
                    </motion.div>
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-none mb-6 space-y-2" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal ml-6 mb-6 space-y-2" {...props} />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className={`${textColorClasses[service.color as keyof typeof textColorClasses]} font-semibold`} {...props} />
                  ),
                  code: ({ node, ...props }) => (
                    <code className={`bg-dark-900 ${textColorClasses[service.color as keyof typeof textColorClasses]} px-3 py-1 rounded-md font-mono text-sm border border-dark-700`} {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote className={`border-l-4 border-${service.color === 'primary' ? 'primary' : 'dark'}-500 pl-6 italic text-gray-500 my-6 py-4 bg-dark-900/50 rounded-r-lg`} {...props} />
                  ),
                }}
              >
                {service.content}
              </Markdown>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Prêt à démarrer?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Contactez-nous pour discuter comment nous pouvons vous aider avec ce service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]} rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300 group`}
            >
              Demander une Consultation
              <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-500/50 text-primary-300 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-200 transition-all duration-300"
            >
              Voir Autres Services
            </Link>
          </div>
        </div>
      </motion.section>
    </article>
  );
}
