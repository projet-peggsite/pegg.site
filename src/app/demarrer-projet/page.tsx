import type { Metadata } from 'next';
import ContactPage from '@/components/pages/ContactPage';

export const metadata: Metadata = {
  title: 'Démarrer Votre Projet - Pegg Site | Devis Gratuit',
  description: 'Lancez votre projet digital avec Pegg Site. Remplissez notre formulaire pour recevoir un devis personnalisé et une consultation gratuite.',
  keywords: 'démarrer projet, devis, consultation, formulaire projet',
};

export default function DemarrerProjet() {
  return <ContactPage />;
}
