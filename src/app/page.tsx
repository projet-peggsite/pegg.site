import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Stats from '@/components/home/Stats';
import ProcessSection from '@/components/home/ProcessSection';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Accueil - Pegg Site | Agence Digitale Innovante',
  description: 'Bienvenue chez Pegg Site. Agence digitale spécialisée en développement web, applications mobiles, SEO et marketing automation. Transformez votre présence digitale.',
};

export default function Home() {
  return (
    <div className="overflow-hidden pt-20">
      <Hero />
      <div className="bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <Services />
        <Stats />
        <ProcessSection />
        <CTA />
      </div>
    </div>
  );
}
