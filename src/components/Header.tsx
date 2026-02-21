'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
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
            <span className="sr-only">Pegg Site</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg transition duration-300 relative group ${
                  pathname === item.href
                    ? 'text-primary-400'
                    : 'text-gray-300 hover:text-primary-400'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-tech-purple rounded-full transition duration-300 ${
                  pathname === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="relative inline-flex items-center px-6 py-2 font-semibold text-white overflow-hidden rounded-lg group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-tech-purple opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <span className="relative">Démarrer Projet</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-dark-700 transition duration-300"
          >
            {isOpen ? (
              <FiX className="w-6 h-6 text-primary-400" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition duration-300 ${
                  pathname === item.href
                    ? 'bg-primary-500/20 text-primary-400'
                    : 'text-gray-300 hover:bg-dark-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-tech-purple text-white font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Démarrer Projet
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  );
}
