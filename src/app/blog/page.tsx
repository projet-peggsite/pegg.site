import BlogPage from '@/components/pages/BlogPage';

export const metadata = {
  title: 'Blog & Ressources | Pegg Site',
  description: 'Découvrez les dernières tendances digitales, techniques de développement web, stratégies SEO et marketing automation avec Pegg Site.',
  openGraph: {
    title: 'Blog & Ressources | Pegg Site',
    description: 'Insights et stratégies digitales pour transformer votre présence en ligne',
    url: 'https://pegg-site.com/blog',
  },
};

export default function Blog() {
  return <BlogPage />;
}
