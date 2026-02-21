import type { Metadata } from 'next';
import SimpleContactPage from '@/components/pages/SimpleContactPage';

export const metadata: Metadata = {
  title: 'Contact - Pegg Site | Nous Contacter',
  description: 'Contactez Pegg Site avec vos questions et demandes. Notre équipe vous répondra rapidement.',
  keywords: 'contact, support, nous contacter',
};

export default function Contact() {
  return <SimpleContactPage />;
}
