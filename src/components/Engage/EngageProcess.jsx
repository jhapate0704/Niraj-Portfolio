import React from 'react';
import { motion } from 'framer-motion';

const EngageProcess = () => {
  const processSteps = [
    { num: "1", title: "Discovery", desc: "Understand your goals, target audience, and project requirements deeply." },
    { num: "2", title: "Planning", desc: "Choose the right tech stack, define the architecture, and map out milestones." },
    { num: "3", title: "Design", desc: "Design a modern, intuitive, and accessible interface tailored to your brand." },
    { num: "4", title: "Development", desc: "Write clean, modular, and scalable code with constant progress updates." },
    { num: "5", title: "Testing", desc: "Ensure everything works perfectly across devices, browsers, and edge cases." },
    { num: "6", title: "Launch", desc: "Deploy the application to production and optimize for speed and SEO." },
    { num: "7", title: "Support", desc: "Provide 10 days of free support to fix bugs and ensure smooth operations." }
  ];

  return (
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-[#27272a] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSI+PC9jaXJjbGU+Cjwvc3ZnPg==')] z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">Execution <span className="text-[#eab308]">/Pipeline</span></h2>
          <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-[#eab308] before:to-[#22c55e]">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active py-6"
              >
                {/* Number Circle */}
                <div className="flex items-center justify-center w-10 h-10 rounded bg-[#09090b] border-2 border-[#eab308] text-[#eab308] font-mono font-bold shadow-[0_0_10px_rgba(234,179,8,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  0{step.num}
                </div>
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#18181b] p-6 rounded-lg border border-[#27272a] shadow-lg group-hover:border-[#eab308]/50 transition-colors">
                  <h3 className="font-bold text-xl mb-2 text-zinc-100 font-mono"><span className="text-[#22c55e]">step</span> = "{step.title}"</h3>
                  <p className="text-zinc-400 font-mono text-sm leading-relaxed">&gt; {step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};
export default EngageProcess;
