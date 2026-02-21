'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'À Propos', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Marketing Automation', href: '/marketing-automation' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img src="/header.png" alt="Pegg Site" className="h-20 w-auto rounded-md" />
            <img src="/pegg.png" alt="Pegg Logo" className="h-20 w-auto rounded-md" />
            <span className="sr-only">Pegg Site</span>
          </Link>

          {/* CTA Button and Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Social Media Links */}
            <div className="hidden sm:flex items-center space-x-3 pl-4 border-l border-primary-500/20">
              <a
                href="https://wa.me/1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>

            <Link href="/demarrer-projet" className="hidden sm:inline-flex relative items-center px-6 py-2 font-semibold text-white overflow-hidden rounded-lg group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-tech-purple opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <span className="relative">Démarrer Projet</span>
            </Link>

            {/* Dropdown Menu Button */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-dark-700 transition duration-300"
              >
                {isOpen ? (
                  <FiX className="w-6 h-6 text-primary-400" />
                ) : (
                  <FiMenu className="w-6 h-6 text-gray-300" />
                )}
              </button>

              {/* Dropdown Navigation */}
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute right-0 mt-2 w-48 bg-dark-800 border border-primary-500/20 rounded-lg shadow-2xl overflow-hidden"
                >
                  <motion.div
                    className="py-2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          className={`block px-4 py-2 transition duration-300 relative group ${
                            pathname === item.href
                              ? 'bg-primary-500/20 text-primary-400'
                              : 'text-gray-300 hover:bg-dark-700 hover:text-primary-400'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="relative z-10">{item.label}</span>
                          <motion.div
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary-500/10 to-transparent rounded-lg"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                          />
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      className="border-t border-primary-500/20 my-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.35 }}
                    />
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href="/demarrer-projet"
                        className="block px-4 py-2 bg-gradient-to-r from-primary-500 to-tech-purple text-white font-semibold text-center mx-2 rounded-lg transition duration-300 hover:shadow-lg hover:shadow-primary-500/50"
                        onClick={() => setIsOpen(false)}
                      >
                        Démarrer Projet
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
