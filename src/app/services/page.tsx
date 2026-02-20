import type { Metadata } from 'next';
import ServicesPage from '@/components/pages/ServicesPage';

export const metadata: Metadata = {
  title: 'Nos Services - Pegg Site | 8 Piliers de Réussite Digitale',
  description: 'Découvrez les 8 services d\'excellence de Pegg Site : web, applications, SEO, marketing automation, design, performance et bien plus encore.',
  keywords: 'services digitaux, développement web, SEO, marketing automation, design, branding',
};

export default function Services() {
  return <ServicesPage />;
}
