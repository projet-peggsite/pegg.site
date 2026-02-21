'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle, FiX, FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * Déclaration globale correcte pour Crisp
 * (NE PAS redéclarer ailleurs dans le projet)
 */
declare global {
  interface Window {
    $crisp?: unknown[];
    CRISP_WEBSITE_ID?: string;
  }
}

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const supportOptions = [
    {
      icon: FiMessageCircle,
      label: 'Live Chat',
      description: 'Chat instantané',
      color: 'from-blue-500 to-cyan-500',
      action: () => {
        if (typeof window !== 'undefined' && window.$crisp) {
          (window.$crisp as unknown[]).push(['do', 'chat:open']);
        }
      },
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      description: 'Message rapide',
      color: 'from-green-500 to-emerald-500',
      href: "https://wa.me/242069899982?text=Bonjour, j'aurais une question...",
    },
    {
      icon: FiPhone,
      label: 'Appeler',
      description: 'Support direct',
      color: 'from-purple-500 to-pink-500',
      href: 'tel:+242069899982',
    },
    {
      icon: FiMail,
      label: 'Email',
      description: 'Message détaillé',
      color: 'from-amber-500 to-orange-500',
      href: 'mailto:contact@pegg.site',
    },
  ];

  return (
    <>
      {/* Support Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-all"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMessageCircle className="w-6 h-6" />
            )}
          </motion.div>
        </motion.button>

        {/* Support Menu */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={
            isOpen
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 20, scale: 0.8, pointerEvents: 'none' }
          }
          transition={{ duration: 0.2 }}
          className="absolute bottom-20 right-0 w-72 bg-dark-800 border border-primary-500/30 rounded-lg shadow-2xl p-4 space-y-3"
        >
          <h3 className="text-white font-semibold text-sm mb-4">
            Comment puis-je vous aider ?
          </h3>

          {supportOptions.map((option, index) => {
            const Icon = option.icon;

            const handleClick = () => {
              option.action?.();

              if (option.href) {
                window.open(option.href, '_blank');
              }

              setIsOpen(false);
            };

            return (
              <motion.button
                key={index}
                onClick={handleClick}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center space-x-3 p-3 rounded-lg bg-dark-900/50 hover:bg-dark-900 border border-primary-500/10 hover:border-primary-500/30 transition-all text-left group"
              >
                <div
                  className={`p-2 rounded-lg bg-gradient-to-br ${option.color} text-white`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1">
                  <p className="text-white font-medium text-sm">
                    {option.label}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {option.description}
                  </p>
                </div>

                <span className="text-primary-400 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </motion.button>
            );
          })}

          <div className="pt-3 border-t border-primary-500/10 mt-3">
            <p className="text-gray-500 text-xs text-center">
              ⏱️ Réponse en moins d'1 heure
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Hint Bubble */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="fixed bottom-28 right-8 z-30 text-xs bg-dark-800 text-gray-300 px-3 py-2 rounded-lg border border-primary-500/20 pointer-events-none"
        >
          💬 Besoin d'aide ?
        </motion.div>
      )}
    </>
  );
}