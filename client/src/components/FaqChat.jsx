import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { faqData } from '../data/faqData';

const GREETING = "Hi! Ask me a question or pick one below — I can help with our services, coverage area, and availability.";
const FALLBACK = "I don't have an answer for that yet. Please call us at (561) 260-7494 and we'll help directly.";
const STOPWORDS = new Set(['a', 'an', 'the', 'is', 'are', 'do', 'does', 'you', 'your', 'i', 'we', 'to', 'for', 'of', 'in', 'on', 'and', 'or', 'what', 'how', 'can', 'my']);

function findAnswer(input) {
  const words = input.toLowerCase().match(/[a-z0-9']+/g) || [];
  const terms = words.filter((word) => !STOPWORDS.has(word));
  if (!terms.length) return FALLBACK;

  let best = null;
  let bestScore = 0;
  faqData.forEach((faq) => {
    const haystack = `${faq.question} ${faq.answer}`.toLowerCase();
    const score = terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  });
  return best ? best.answer : FALLBACK;
}

export default function FaqChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ from: 'bot', text: GREETING }]);

  const ask = (question, answer) => {
    setMessages((prev) => [...prev, { from: 'user', text: question }, { from: 'bot', text: answer }]);
  };

  const submit = (event) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;
    ask(question, findAnswer(question));
    setInput('');
  };

  return (
    <div className="faq-chat">
      {open && (
        <div className="faq-chat__panel" role="dialog" aria-label="Frequently asked questions">
          <div className="faq-chat__header">
            <span>Front Runner Assistant</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat"><X size={18} /></button>
          </div>
          <div className="faq-chat__messages">
            {messages.map((message, index) => (
              <div key={index} className={`faq-chat__bubble faq-chat__bubble--${message.from}`}>{message.text}</div>
            ))}
            <div className="faq-chat__chips">
              {faqData.filter((faq) => faq.chip !== false).map((faq) => (
                <button key={faq.question} type="button" onClick={() => ask(faq.question, faq.answer)}>{faq.question}</button>
              ))}
            </div>
          </div>
          <form className="faq-chat__form" onSubmit={submit}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your question…"
              aria-label="Type your question"
            />
            <button type="submit" aria-label="Send"><Send size={16} /></button>
          </form>
        </div>
      )}
      <button
        type="button"
        className="faq-chat__toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? 'Close FAQ chat' : 'Open FAQ chat'}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
