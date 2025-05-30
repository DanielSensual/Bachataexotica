'use client';

import { useEffect } from 'react';

export default function ChatbotWidget() {
  useEffect(() => {
    // Placeholder for your chatbot widget script
  }, []);

  return (
    <button
      aria-label="Chat with Bachata AI"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-white text-[#111] font-bold shadow-lg hover:scale-110 transition-transform"
    >
      AI
    </button>
  );
}