import PortfolioDetail from '@/components/PortfolioDetail';
import { portfolios } from '@/data/portfolios';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return portfolios.map((portfolio) => ({
    slug: portfolio.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const portfolio = portfolios.find((p) => p.slug === params.slug);
  
  if (!portfolio) {
    return {
      title: 'Portfolio non trouvé',
    };
  }

  return {
    title: `${portfolio.title} | PESI - Portfolio`,
    description: portfolio.description,
    openGraph: {
      title: portfolio.title,
      description: portfolio.description,
      url: `https://pegg-site.com/portfolio/${portfolio.slug}`,
      type: 'article',
      images: [
        {
          url: `/og-portfolio-${portfolio.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: portfolio.title,
        },
      ],
    },
    keywords: [portfolio.category, ...portfolio.tags, portfolio.client],
  };
}

export default function Page({ params }: PageProps) {
  const portfolio = portfolios.find((p) => p.slug === params.slug);

  if (!portfolio) {
    notFound();
  }

  return <PortfolioDetail portfolio={portfolio} />;
}
