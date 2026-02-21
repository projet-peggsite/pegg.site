'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    chatwootSettings?: {
      hideMessageBubble?: boolean;
      position?: string;
      locale?: string;
    };
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

export default function LiveChat() {
  useEffect(() => {
    // Initialize Chatwoot Chat
    // Sign up at https://app.chatwoot.com and get your WEBSITE_TOKEN

    // Ajouter du CSS pour cacher le bubble Chatwoot par défaut
    const style = document.createElement('style');
    style.textContent = `
      .chatwoot-bubble-launcher { display: none !important; }
    `;
    document.head.appendChild(style);

    window.chatwootSettings = {
      hideMessageBubble: true,
      position: 'right',
      locale: 'fr',
    };

    const script = document.createElement('script');
    script.src = 'https://app.chatwoot.com/packs/js/sdk.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (typeof window !== 'undefined' && window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: 'YOUR_CHATWOOT_WEBSITE_TOKEN', // Replace with your token
          baseUrl: 'https://app.chatwoot.com',
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // Chatwoot widget is injected globally
}
