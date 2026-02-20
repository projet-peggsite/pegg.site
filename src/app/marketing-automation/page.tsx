import type { Metadata } from 'next';
import MarketingAutomationPage from '@/components/pages/MarketingAutomationPage';

export const metadata: Metadata = {
  title: 'Marketing Automation Solutions - Pegg Site | Croissance Scalable',
  description: 'Solutions d\'automatisation marketing complètes : tunnels de vente, email automation, lead scoring et growth hacking. Transformez vos leads en clients.',
  keywords: 'marketing automation, CRM, email automation, lead nurturing, growth hacking',
};

export default function MarketingAutomation() {
  return <MarketingAutomationPage />;
}
