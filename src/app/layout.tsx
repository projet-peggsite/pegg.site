import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SupportWidget from '@/components/SupportWidget';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Pegg Site - Agence Digitale Spécialisée en Web & Marketing',
  description: 'Pegg Site : Conception web, développement applications, SEO technique, marketing automation et stratégies digitales orientées ROI. Experts en digital depuis 2020.',
  keywords: 'agence digitale, développement web, application mobile, SEO, marketing automation, branding, digital strategy',
  openGraph: {
    title: 'Pegg Site - Agence Digitale',
    description: 'Transformez votre présence digitale avec Pegg Site',
    url: 'https://pegg-site.com',
    siteName: 'Pegg Site',
    type: 'website',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/header.png" sizes="any" type="image/png" />
      </head>
      <body className="bg-dark-900 text-gray-100">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* LiveChat temporarily disabled — re-enable by restoring the import and component */}
        <SupportWidget />
      </body>
    </html>
  );
}
