'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCode, FiZap, FiTarget } from 'react-icons/fi';

export default function Hero() {
  const floatingItems = [
    { icon: FiCode, delay: 0 },
    { icon: FiZap, delay: 0.2 },
    { icon: FiTarget, delay: 0.4 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-40 right-10 w-72 h-72 bg-tech-purple rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{
            y: [0, -100, 0],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-tech-cyan rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{
            y: [0, 50, 0],
            x: [0, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* 3D Grid Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <svg className="w-full h-full opacity-5" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="url(#gradient)" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9"/>
                <stop offset="100%" stopColor="#a855f7"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-8"
        >
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-tech-green animate-pulse"></span>
            <span className="text-primary-400 text-sm font-medium">Innovation Digitale depuis 2020</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Transformez</span>
          <br />
          <span className="text-white">Votre Présence Digitale</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Pegg Site transforme vos ambitions digitales en réalité. Conception web, applications innovantes, SEO performant et marketing automation pour une croissance mesurable.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-tech-purple rounded-lg opacity-100 group-hover:opacity-110 transition-opacity duration-300"></div>
            <span className="relative flex items-center text-white">
              Démarrer Votre Projet
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link href="/portfolio" className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-lg border-2 border-primary-500 text-primary-400 rounded-lg hover:bg-primary-500/10 transition-colors duration-300">
            Voir Notre Portfolio
          </Link>
        </motion.div>

        {/* Floating Icons */}
        <div className="relative h-64 md:h-96 mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Center Circle */}
            <motion.div
              className="absolute w-40 h-40 rounded-full border-2 border-primary-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute inset-0 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-tech-purple flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </motion.div>

            {/* Orbiting Items */}
            {floatingItems.map((item, index) => {
              const Icon = item.icon;
              const angle = (360 / floatingItems.length) * index;
              return (
                <motion.div
                  key={index}
                  className="absolute w-16 h-16 rounded-full bg-dark-800 border border-primary-500/50 flex items-center justify-center"
                  initial={{
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    x: Math.cos((angle * Math.PI) / 180) * 120,
                    y: Math.sin((angle * Math.PI) / 180) * 120,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    <Icon className="w-8 h-8 text-primary-400" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-500 text-sm"
        >
          <p>Trusted by 50+ companies | Résultats garantis | ROI mesurable</p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-500 text-sm">Découvrez nos services</span>
          <div className="w-6 h-10 border-2 border-primary-500/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-primary-500 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
