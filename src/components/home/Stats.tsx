'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { label: 'Projets Livrés', value: 150, suffix: '+' },
  { label: 'Clients Satisfaits', value: 98, suffix: '%' },
  { label: 'Années d\'Expertise', value: 8, suffix: '' },
  { label: 'ROI Moyen Généré', value: 340, suffix: '%' },
];

const Counter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 50);

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        return next >= end ? end : next;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {Math.floor(count)}
      {suffix}
    </span>
  );
};

export default function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tech-purple/5 rounded-full blur-3xl"></div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Résultats Mesurables</span>
          </h2>
          <p className="text-xl text-gray-400">
            Nos chiffres parlent pour nous : impact réel, croissance durable, satisfaction client maximale
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative group"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-tech-purple/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card Content */}
              <div className="relative z-10 bg-dark-800/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/10 text-center transition-all duration-300 group-hover:border-primary-500/30">
                {/* Value */}
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: 'spring' }}
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-400 to-tech-purple bg-clip-text text-transparent mb-2"
                >
                  <Counter end={stat.value} suffix={stat.suffix} />
                </motion.div>

                {/* Label */}
                <p className="text-gray-400 text-lg">{stat.label}</p>

                {/* Icon */}
                <div className="mt-4 h-1 bg-gradient-to-r from-primary-500 to-tech-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            Chaque projet est un partenariat où votre succès devient notre succès
          </p>
        </motion.div>
      </div>
    </section>
  );
}
