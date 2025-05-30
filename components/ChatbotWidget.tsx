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
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      max_tokens: 256,
    }),
  });

  const data = await openaiRes.json();
  const reply = data.choices?.[0]?.message?.content || 'Sorry, there was an error.';
  return NextResponse.json({ reply });
}