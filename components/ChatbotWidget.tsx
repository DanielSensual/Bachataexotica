'use client';

import React, {
  useState,
  useRef,
  useEffect,
  type FormEvent,
} from 'react';

type Sender = 'user' | 'bot';

interface ChatMsg {
  sender: Sender;
  text: string;
}

interface Lead {
  name: string;
  email: string;
}

export default function ChatbotWidget() {
  /* ─────────────────── state ─────────────────── */
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMsg[]>([
    { sender: 'bot', text: "👋 Hi! I'm Bachata AI. Ask me anything about classes, events, or dance." },
  ]);
  const [loading, setLoading] = useState(false);
  const [lead, setLead] = useState<Lead>({ name: '', email: '' });
  const [leadCaptured, setLeadCaptured] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  /* ─────────────────── effects ─────────────────── */
  /* auto-scroll on new message */
  useEffect(() => {
    listRef.current?.scrollTo(0, listRef.current.scrollHeight);
  }, [messages]);

  /* close on ESC */
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  /* ─────────────────── handlers ─────────────────── */
  async function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading || !input.trim()) return;

    const userMsg: ChatMsg = { sender: 'user', text: input.trim() };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg.text,
          history: history.map((m) => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text,
          })),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const { reply } = (await res.json()) as { reply: string };
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: '⚠️ Sorry, a network error occurred.' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  /* ─────────────────── lead-capture view ─────────────────── */
  if (!leadCaptured) {
    return (
      <>
        <button
          aria-label="Chat with Bachata AI"
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-white text-[#111] font-bold shadow-lg hover:scale-110 transition-transform"
          onClick={() => setOpen((x) => !x)}
        >
          AI
        </button>

        {open && (
          <div className="fixed bottom-[calc(6rem+env(safe-area-inset-bottom))] right-6 z-50 w-[90vw] max-w-80 bg-[#111] rounded-2xl shadow-2xl p-4 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-bold">Bachata AI</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white focus:outline-none"
              >
                ✕
              </button>
            </div>

            <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                if (!lead.name || !lead.email) return;
                try {
                  await fetch('/api/lead', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(lead),
                  });
                } catch (err) {
                  console.error('Lead capture failed:', err);
                }
                setLeadCaptured(true);
              }}
            >
              <input
                className="w-full rounded bg-[#222] p-2 text-white border border-white/10"
                placeholder="Your name"
                value={lead.name}
                onChange={(e) =>
                  setLead((l) => ({ ...l, name: e.target.value }))
                }
                required
              />
              <input
                className="w-full rounded bg-[#222] p-2 text-white border border-white/10"
                type="email"
                placeholder="Your email"
                value={lead.email}
                onChange={(e) =>
                  setLead((l) => ({ ...l, email: e.target.value }))
                }
                required
              />
              <button
                type="submit"
                className="w-full rounded bg-yellow-400 px-4 py-2 text-black font-bold"
              >
                Start Chat
              </button>
            </form>
          </div>
        )}
      </>
    );
  }

  /* ─────────────────── chat view ─────────────────── */
  return (
    <>
      <button
        aria-label="Chat with Bachata AI"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-white text-[#111] font-bold shadow-lg hover:scale-110 transition-transform"
        onClick={() => setOpen((x) => !x)}
      >
        AI
      </button>

      {open && (
        <div className="fixed bottom-[calc(6rem+env(safe-area-inset-bottom))] right-6 z-50 w-[90vw] max-w-80 bg-[#111] rounded-2xl shadow-2xl p-4 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-bold">Bachata AI</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white focus:outline-none"
            >
              ✕
            </button>
          </div>

          <div
            ref={listRef}
            role="log"
            aria-live="polite"
            className="flex-1 min-h-[180px] max-h-56 overflow-y-auto space-y-2 mb-3 bg-[#181818] rounded p-2"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm ${
                  m.sender === 'user'
                    ? 'text-yellow-400 text-right'
                    : 'text-white'
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="text-xs text-white/40">Typing…</div>
            )}
          </div>

          <form className="flex gap-2" onSubmit={sendMessage}>
            <input
              type="text"
              className="flex-1 rounded bg-[#222] p-2 text-white border border-white/10"
              placeholder="Type your question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <button
              type="submit"
              className="rounded bg-yellow-400 px-4 py-2 text-black font-bold"
              disabled={loading}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}