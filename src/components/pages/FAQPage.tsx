'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiPlus, FiMinus, FiHelpCircle, FiMail, FiPhone } from 'react-icons/fi';

const faqCategories = [
  {
    category: 'Processus & Projet',
    items: [
      {
        question: 'Comment fonctionne votre processus de développement?',
        answer: 'Nous suivons une méthodologie Agile adaptée: Discovery (2 semaines) → Design → Développement par sprints → Tests → Déploiement → Support. Vous avez accès à un tableau Jira en temps réel pour suivre la progression.',
      },
      {
        question: 'Quel est le délai minimum pour un projet?',
        answer: 'Pour un site web simple: 4-6 semaines. Pour une application: 12-16 semaines. Pour une plateforme complète: 20+ semaines. Chaque projet a une timeline détaillée définie en phase Discovery.',
      },
      {
        question: 'Puis-je modifier mon projet après le démarrage?',
        answer: 'Évidemment! Nous gérons les changements via un système de change requests. Les modifications mineures sont incluses, les majeures ajoutées au prochain sprint avec estimation d\'impact.',
      },
      {
        question: 'Qui aura accès au code source?',
        answer: 'Vous possédez 100% de votre code source. Accès complet via GitHub dès le démarrage. Pas de propriété intellecutelle, tout est à vous.',
      },
    ],
  },
  {
    category: 'Tarification & Paiement',
    items: [
      {
        question: 'Pourquoi vos prix sont plus élevés que les freelances?',
        answer: 'Nous ne sommes pas 1 personne, mais une équipe de spécialistes: Dev senior, Designer, QA, Project Manager. Vous bénéficiez de code production-ready, sans dette technique, et d\'une maintenance à long terme.',
      },
      {
        question: 'Y a-t-il des frais cachés?',
        answer: 'Non, jamais. Prix fixes annoncés. Seuls les change requests ou services additionnels sont facturés. Devis transparent avant chaque engagement.',
      },
      {
        question: 'Acceptez-vous les acomptes?',
        answer: 'Oui: 33% à la signature, 33% mi-parcours, 34% à la livraison. Pour les projets Enterprise, nous pouvons discuter de modalités flexibles.',
      },
      {
        question: 'Avez-vous des plans paiement récurrent?',
        answer: 'Non pour le développement, mais oui pour le support/maintenance annuel. Plans Support à partir de 2000€/an incluant updates, fixes et optimisations.',
      },
    ],
  },
  {
    category: 'Support & Maintenance',
    items: [
      {
        question: 'Que se passe-t-il après la livraison?',
        answer: 'Livraison inclut un support gratuit 3 mois (bug fixes, ajustements mineurs). Après, nous proposons des packages Support annuel pour la maintenance continue.',
      },
      {
        question: 'Comment gérez-vous les bugs en production?',
        answer: 'Priorité P1 (site down): réaction immédiate. P2 (fonctionnalité brisée): dans les 4h. P3 (comportement non-optimal): dans les 24h. SLA détaillé dans le contrat Support.',
      },
      {
        question: 'Fournirez-vous du support après mon contrat?',
        answer: 'Bien sûr. Vous pouvez renouveler le support à tout moment. Ou faire appel à nous ponctuellement pour des modifications spécifiques.',
      },
      {
        question: 'Assurez-vous la sécurité et les backups?',
        answer: 'Oui: HTTPS obligatoire, security headers, CSRF protections, pas de dépendances obsolètes. Backups automatiques quotidiens sur 90 jours. Infrastructure sur services cloud sécurisés (AWS/Vercel).',
      },
    ],
  },
  {
    category: 'Technologie & Capacités',
    items: [
      {
        question: 'Quelles technologies utilisez-vous?',
        answer: 'Frontend: Next.js, React, TypeScript, Tailwind CSS. Backend: Node.js, Python, PostgreSQL, Redis. Mobile: React Native, Flutter. Toujours les meilleures pratiques et tech stack modernes.',
      },
      {
        question: 'Pouvez-vous intégrer avec ma tech stack existante?',
        answer: 'Oui! APIs REST, GraphQL, webhooks. Nous travaillons avec n\'importe quelle plateforme tiers: Shopify, Salesforce, HubSpot, Stripe, etc.',
      },
      {
        question: 'Comment assurez-vous la performance de mon site?',
        answer: 'Optimisations Core Web Vitals, CDN global, image compression, lazy loading, code splitting. Monitoring continu. Objectif: LCP<2.5s, FID<100ms, CLS<0.1.',
      },
      {
        question: 'Le site sera-t-il SEO friendly?',
        answer: 'SEO technique optmisé par défaut: sitemaps, structured data, meta tags, liens canoniques, performance optimization. SEO contenu: on-page et stratégie requièrent nos services SEO additionnels.',
      },
    ],
  },
  {
    category: 'Équipe & Collaboration',
    items: [
      {
        question: 'Parlerez-vous français avec nous?',
        answer: 'Oui! Notre équipe parle couramment français. Communications par Slack, meetings async et sync en français.',
      },
      {
        question: 'Puis-je rencontrer mon équipe dédiée?',
        answer: 'Absolument. Kick-off meeting avec l\'équipe complète. Meetings bi-hebdo minimum. Vous connaissez chaque membre assigné à votre projet.',
      },
      {
        question: 'Que se passe-t-il si un membre quitte?',
        answer: 'Nous documentons entièrement chaque projet. Si un changement, la continuité est assurée avec handoff propre. Jamais d\'interruption du service.',
      },
      {
        question: 'Offrez-vous de la formation à notre équipe?',
        answer: 'Oui! Sessions de training complètes sur vos systèmes. Option additionnel à partir de 1200€ pour 3 sessions (administration CMS, déploiement, APIs).',
      },
    ],
  },
  {
    category: 'Garanties & Assurances',
    items: [
      {
        question: 'Avez-vous une garantie de satisfaction?',
        answer: 'Oui: 90 jours de satisfaction garantie. Si vous n\'êtes pas satisfait, nous refondons 50% du montant (bug fixes et ajustements inclus).',
      },
      {
        question: 'Quelle est votre disponibilité en cas d\'urgence?',
        answer: 'Support urgent 24/7 pour les clients Enterprise. Pour autres plans: heures de bureau (9-18h CET) avec escalade possible.',
      },
      {
        question: 'Et si le projet dépasse le budget?',
        answer: 'Budget fixe = pas de dépassement. Si scope additionnel identifié, nous vous demandons approbation avec estimation claire avant proceeding.',
      },
      {
        question: 'Avez-vous une assurance responsabilité civile?',
        answer: 'Oui, RC Pro complète, couverture jusqu\'à 2M€. Tous les projets assurés pour protéger à la fois Pegg Site et nos clients.',
      },
    ],
  },
];

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<{ [key: string]: number | null }>({});

  const toggleExpanded = (category: string, index: number) => {
    setExpandedIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Questions Fréquentes</span>
              <br />
              <span className="text-white">Tout ce que vous devez savoir</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Trouvez des réponses rapides à vos questions. Vous ne trouvez pas votre réponse? Contactez-nous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ by Category */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="mb-16"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">{category.category}</h2>
                <div className="h-1 w-12 bg-gradient-to-r from-primary-500 to-tech-purple rounded-full"></div>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    onClick={() => toggleExpanded(category.category, itemIdx)}
                    className="bg-dark-800/50 border border-primary-500/10 rounded-xl overflow-hidden hover:border-primary-500/30 transition cursor-pointer"
                  >
                    {/* Question */}
                    <div className="p-6 flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <FiHelpCircle className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                        <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {expandedIndex[category.category] === itemIdx ? (
                          <FiMinus className="w-6 h-6 text-primary-400" />
                        ) : (
                          <FiPlus className="w-6 h-6 text-gray-500" />
                        )}
                      </div>
                    </div>

                    {/* Answer */}
                    {expandedIndex[category.category] === itemIdx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-primary-500/10"
                      >
                        <div className="p-6 bg-dark-900/50">
                          <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary-500/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">D'autres questions?</h2>
            <p className="text-xl text-gray-400">Nous sommes là pour vous aider</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiMail,
                title: 'Email',
                value: 'hello@peggsite.com',
                description: 'Réponse dans les 2 heures',
              },
              {
                icon: FiPhone,
                title: 'Téléphone',
                value: '+33 (0)1 23 45 67 89',
                description: 'Disponible 9-18h CET',
              },
              {
                icon: FiHelpCircle,
                title: 'Chat Support',
                value: 'Chat en direct',
                description: 'Accès immédiate',
              },
            ].map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-dark-800/50 border border-primary-500/20 rounded-xl p-6 text-center hover:border-primary-500/50 transition"
                >
                  <Icon className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-primary-400 font-semibold mb-2">{method.value}</p>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
