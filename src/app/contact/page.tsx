import type { Metadata } from 'next';
import ContactPage from '@/components/pages/ContactPage';

export const metadata: Metadata = {
  title: 'Contact & Devis - Pegg Site | Démarrez Votre Projet',
  description: 'Contactez Pegg Site pour une consultation gratuite et reçoivre un devis personnalisé pour votre projet digitale.',
  keywords: 'contact, devis, consultation, formulaire',
};

export default function Contact() {
  return <ContactPage />;
}
