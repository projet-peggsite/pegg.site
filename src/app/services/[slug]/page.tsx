import ServiceDetail from '@/components/ServiceDetail';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service non trouvé',
    };
  }

  return {
    title: `${service.title} | Pegg Site - Service Digital`,
    description: service.description,
    keywords: [service.title, service.subtitle, ...service.technologies, 'agence digitale'],
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://pegg-site.com/services/${service.slug}`,
      type: 'website',
      images: [
        {
          url: `/og-service-${service.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default function Page({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
