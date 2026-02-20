import type { Metadata } from 'next';
import AboutPage from '@/components/pages/AboutPage';

export const metadata: Metadata = {
  title: 'À Propos - Pegg Site | Expertise Technique & ADN de l\'Agence',
  description: 'Découvrez Pegg Site : expertise technique, méthodologie éprouvée, et culture axée sur les résultats mesurables.',
  keywords: 'à propos, expertise, agence digitale, équipe',
};

export default function About() {
  return <AboutPage />;
}
