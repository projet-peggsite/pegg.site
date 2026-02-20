'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCheck, FiArrowRight, FiHelpCircle } from 'react-icons/fi';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Pour les projets simples et PME',
    price: '2,999',
    period: 'par projet',
    highlighted: false,
    features: [
      { text: 'Site web jusqu\'à 5 pages', included: true },
      { text: 'Design personnalisé', included: true },
      { text: 'Responsive & Mobile-first', included: true },
      { text: 'SEO basique', included: true },
      { text: 'Formulaires de contact', included: true },
      { text: 'Hébergement 1 an', included: true },
      { text: 'Support email', included: true },
      { text: 'Analytics avancé', included: false },
      { text: 'CMS intégré', included: false },
      { text: 'Support prioritaire', included: false },
    ],
    cta: 'Démarrer',
    color: 'from-primary-500 to-primary-600',
  },
  {
    name: 'Professional',
    description: 'Pour les agences et PME ambitieuses',
    price: '7,999',
    period: 'par projet',
    highlighted: true,
    badge: 'Populaire',
    features: [
      { text: 'Site web illimité', included: true },
      { text: 'Design premium & UX avancé', included: true },
      { text: 'Responsive & Performance optimisée', included: true },
      { text: 'SEO technique complet', included: true },
      { text: 'CMS headless intégré', included: true },
      { text: 'Email marketing intégration', included: true },
      { text: 'Support téléphone', included: true },
      { text: 'Analytics + BI Dashboard', included: true },
      { text: '3 mois de support inclus', included: true },
      { text: 'Optimisation continue', included: false },
    ],
    cta: 'Choisir ce plan',
    color: 'from-tech-purple to-tech-pink',
  },
  {
    name: 'Enterprise',
    description: 'Pour les transformations digitales complètes',
    price: 'Sur devis',
    period: 'consulter',
    highlighted: false,
    features: [
      { text: 'Architecture scalable illimitée', included: true },
      { text: 'Design système personnalisé', included: true },
      { text: 'Performance Web Vitals optimisée', included: true },
      { text: 'SEO stratégique & Marketing automation', included: true },
      { text: 'Applications mobiles natives', included: true },
      { text: 'Intégrations API custom', included: true },
      { text: 'Support 24/7 dédié', included: true },
      { text: 'Data analytics avancé & ML', included: true },
      { text: 'Support continu 12 mois', included: true },
      { text: 'Optimisation & croissance continue', included: true },
    ],
    cta: 'Discuter du projet',
    color: 'from-accent-500 to-primary-500',
  },
];

const addOns = [
  {
    name: 'SEO Avancé',
    price: '1,500',
    description: 'Audit SEO, stratégie contenu, link building',
  },
  {
    name: 'Marketing Automation',
    price: '2,500',
    description: 'Mise en place complète et configuration',
  },
  {
    name: 'Application Mobile',
    price: '5,000',
    description: 'App iOS et Android custom',
  },
  {
    name: 'Support Annuel',
    price: '2,000',
    description: 'Support + maintenance + optimisation',
  },
  {
    name: 'Formation Équipe',
    price: '1,200',
    description: '3 sessions de formation complètes',
  },
  {
    name: 'Refonte Design',
    price: '3,500',
    description: 'Redesign complet de votre site',
  },
];

const faqs = [
  {
    question: 'Quels sont les délais de livraison?',
    answer: 'Les délais varient selon la complexité: Starter (4-6 semaines), Professional (8-12 semaines), Enterprise (projet custom). Nous affichons un planning détaillé dès le démarrage.',
  },
  {
    question: 'Puis-je modifier mon plan après le démarrage?',
    answer: 'Oui, absolument. Les plans sont flexibles et peuvent être ajustés selon l\'évolution de vos besoins. Les modifications sont proratisées.',
  },
  {
    question: 'Le support après livraison est-il inclus?',
    answer: 'Un support basique est inclus. Pour un support continu plus approfondi, consultez nos services de support annuel ou Enterprise.',
  },
  {
    question: 'Acceptez-vous les paiements échelonnés?',
    answer: 'Oui, nous proposons plusieurs options de paiement dont l\'échelonnement sur le projet. Contactez-nous pour en discuter.',
  },
];

export default function PricingPage() {
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
              <span className="gradient-text">Tarification Transparente</span>
              <br />
              <span className="text-white">Pas de surprise</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Plans flexibles adaptés à votre budget et vos ambitions. ROI garanti ou remboursement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative rounded-2xl overflow-hidden transition duration-300 ${
                  plan.highlighted
                    ? 'border-2 border-primary-500 md:scale-105'
                    : 'border border-primary-500/20'
                }`}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-dark-800/50 backdrop-blur-xl"></div>

                {/* Gradient Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-10 transition`}
                ></div>

                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-6 right-6">
                    <span className={`px-4 py-1 bg-gradient-to-r ${plan.color} text-white text-sm font-semibold rounded-full`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="relative p-8">
                  {/* Plan Header */}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      {plan.period !== 'consulter' && (
                        <span className="text-gray-400 ml-2">€</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mt-2">{plan.period}</p>
                  </div>

                  {/* CTA Button */}
                  <Link href="/contact" className="relative inline-flex w-full items-center justify-center px-6 py-3 font-semibold text-white overflow-hidden rounded-lg group mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-80 group-hover:opacity-100 transition`}></div>
                    <span className="relative flex items-center gap-2">
                      {plan.cta}
                      <FiArrowRight className="w-4 h-4" />
                    </span>
                  </Link>

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.features.map((feature, fidx) => (
                      <div
                        key={fidx}
                        className={`flex items-start gap-3 ${
                          feature.included ? 'text-gray-200' : 'text-gray-500'
                        }`}
                      >
                        <FiCheck
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            feature.included ? 'text-primary-400' : 'text-gray-600'
                          }`}
                        />
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Services Additionnels</span>
            </h2>
            <p className="text-xl text-gray-400">
              Complétez votre projet avec nos services spécialisés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-dark-800/50 border border-primary-500/20 rounded-xl p-6 hover:border-primary-500/50 transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white">{addon.name}</h3>
                  <span className="text-primary-400 font-semibold">{addon.price}€</span>
                </div>
                <p className="text-gray-400 text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary-500/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Questions Fréquentes</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-dark-800/50 border border-primary-500/10 rounded-xl p-6"
              >
                <div className="flex gap-4">
                  <FiHelpCircle className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Pas sûr du plan idéal?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Parlons de votre projet. Une consultation gratuite pour déterminer la meilleure approche.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-tech-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition">
              Consultation Gratuite
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
