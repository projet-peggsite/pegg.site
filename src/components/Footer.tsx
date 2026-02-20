'use client';

import Link from 'next/link';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const footerLinks = [
  {
    title: 'Produits',
    links: [
      { label: 'Services Web', href: '/services' },
      { label: 'Applications', href: '/services' },
      { label: 'SEO & Marketing', href: '/services' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'À Propos', href: '/about' },
      { label: 'Blog', href: '/' },
      { label: 'Carrières', href: '/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Conditions', href: '/' },
      { label: 'Confidentialité', href: '/' },
      { label: 'Cookies', href: '/' },
    ],
  },
];

const socialLinks = [
  { icon: FiFacebook, href: 'https://facebook.com' },
  { icon: FiTwitter, href: 'https://twitter.com' },
  { icon: FiLinkedin, href: 'https://linkedin.com' },
  { icon: FiInstagram, href: 'https://instagram.com' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-tech-purple rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">P</span>
              </div>
              <span className="font-bold text-lg gradient-text">PEGG SITE</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Transformez votre présence digitale avec expertise, innovation et résultats mesurables.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-primary-400 transition duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start space-x-2">
                <FiPhone className="w-4 h-4 mt-1 text-primary-400 flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-start space-x-2">
                <FiMail className="w-4 h-4 mt-1 text-primary-400 flex-shrink-0" />
                <span>contact@pegg-site.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <FiMapPin className="w-4 h-4 mt-1 text-primary-400 flex-shrink-0" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-500/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Pegg Site. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/" className="hover:text-primary-400 transition duration-300">
                Mentions légales
              </Link>
              <Link href="/" className="hover:text-primary-400 transition duration-300">
                RGPD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
