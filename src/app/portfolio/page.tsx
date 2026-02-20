import type { Metadata } from 'next';
import PortfolioPage from '@/components/pages/PortfolioPage';

export const metadata: Metadata = {
  title: 'Portfolio - Pegg Site | Projets & Résultats',
  description: 'Découvrez nos projets réalisés avec résultats mesurables et ROI concrets pour nos clients.',
  keywords: 'portfolio, projets web, case studies, ROI, résultats',
};

export default function Portfolio() {
  return <PortfolioPage />;
}
