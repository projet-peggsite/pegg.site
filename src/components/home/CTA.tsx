'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiMail, FiPhone } from 'react-icons/fi';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Background Effects */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-purple rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-tech-green animate-pulse"></span>
              <span className="text-primary-400 text-sm font-medium">Disponible pour consultation gratuite</span>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Prêt à</span>
            <br />
            <span className="gradient-text">Transformer Votre Présence Digitale?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Laissez-nous analyser votre situation digitale actuelle et proposer une stratégie personnalisée, sans engagement. Parlons de vos ambitions et de comment nous pouvons les concrétiser.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-tech-purple rounded-lg opacity-100 group-hover:opacity-110 transition-opacity duration-300"></div>
              <span className="relative flex items-center text-white">
                Démarrer une Consultation Gratuite
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <button className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-lg border-2 border-primary-500 text-primary-400 rounded-lg hover:bg-primary-500/10 transition-colors duration-300">
              <FiMail className="mr-2 w-5 h-5" />
              Nous Contacter
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <FiPhone className="w-5 h-5 text-primary-400" />
              <a href="tel:+33123456789" className="hover:text-primary-400 transition-colors">
                +33 (0)1 23 45 67 89
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail className="w-5 h-5 text-primary-400" />
              <a href="mailto:contact@pegg-site.com" className="hover:text-primary-400 transition-colors">
                contact@pegg-site.com
              </a>
            </div>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-12 border-t border-primary-500/10"
          >
            <p className="text-gray-500 mb-4">
              Déjà en partnership avec:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              {['Startup Tech', 'E-Commerce Pro', 'Agency+', 'Digital Leaders', 'Growth Co'].map((company, idx) => (
                <span key={idx} className="text-sm font-medium text-gray-400">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
