'use client';

import { useEffect } from 'react';

export default function LiveChat() {
  useEffect(() => {
    // Initialize Crisp Chat
    // Sign up at https://crisp.chat and get your WEBSITE_ID
    
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = 'YOUR_CRISP_WEBSITE_ID'; // Replace with your ID
    
    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // Crisp widget is injected globally
}
