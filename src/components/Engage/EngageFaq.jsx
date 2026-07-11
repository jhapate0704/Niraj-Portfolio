import React, { useState } from 'react';

const EngageFaq = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const faqs = [
    { q: "What is your pricing structure?", a: "My pricing is project-based, depending on the scope, complexity, and timeline. I offer competitive rates for premium quality." },
    { q: "How long does a typical project take?", a: "A standard landing page might take 1-2 weeks, while a full-stack application can take 4-8 weeks. We'll set a clear timeline during the planning phase." },
    { q: "Do you provide maintenance after launch?", a: "Yes! Every project comes with 10 days of free support. I also offer long-term maintenance retainers if you need ongoing help." },
    { q: "What if I need changes during development?", a: "I work iteratively and provide regular updates. Minor tweaks are included, but major feature additions may require a scope adjustment." }
  ];

  return (
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-[#27272a] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSI+PC9jaXJjbGU+Cjwvc3ZnPg==')] z-0"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight font-mono">FAQ <span className="text-[#eab308] animate-pulse">_</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#27272a] bg-[#09090b] rounded-lg overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-[#18181b] transition-colors"
                >
                  <span className="font-bold text-lg font-mono text-zinc-300">? {faq.q}</span>
                  <i className={`fa-solid fa-chevron-down transition-transform duration-300 text-[#eab308] ${activeFaq === i ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out bg-[#18181b] ${activeFaq === i ? 'max-h-40 py-5 opacity-100 border-t border-[#27272a]' : 'max-h-0 opacity-0'}`}>
                  <p className="text-zinc-400 font-mono text-sm leading-relaxed">&gt; {faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};
export default EngageFaq;
