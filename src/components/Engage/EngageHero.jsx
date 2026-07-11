import React from 'react';
import { motion } from 'framer-motion';

const EngageHero = ({ fadeInUp }) => {
  const floatingIcons = [
    { icon: "fa-react", top: "15%", left: "10%", delay: 0 },
    { icon: "fa-node-js", top: "70%", left: "15%", delay: 1.5 },
    { icon: "fa-python", top: "25%", left: "85%", delay: 0.8 },
    { icon: "fa-js", top: "60%", left: "80%", delay: 2.2 },
    { icon: "fa-git-alt", top: "40%", left: "5%", delay: 3 },
    { icon: "fa-aws", top: "80%", left: "90%", delay: 1 },
    { icon: "fa-docker", top: "10%", left: "50%", delay: 2.5 }
  ];

  const codeSnippets = [
    { code: "const init = () => {\n  system.boot();\n};", top: "20%", left: "70%", delay: 0.5 },
    { code: "import { Future } from 'now';", top: "85%", left: "40%", delay: 1.2 },
    { code: "function execute() {\n  return success;\n}", top: "50%", left: "20%", delay: 2.5 },
    { code: "<Router>\n  <App />\n</Router>", top: "30%", left: "30%", delay: 3.5 }
  ];

  return (
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden text-center">
        {/* Animated Background: Floating Tech Icons & Code Snippets */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {floatingIcons.map((item, idx) => (
            <motion.div
              key={`icon-${idx}`}
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: [0, -30, 0], 
                rotate: [0, 15, -15, 0],
                opacity: [0, 0.4, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                delay: item.delay,
                ease: "easeInOut"
              }}
              className="absolute text-[#22c55e] text-5xl blur-[2px] z-0"
              style={{ top: item.top, left: item.left }}
            >
              <i className={`fa-brands ${item.icon}`}></i>
            </motion.div>
          ))}

          {codeSnippets.map((item, idx) => (
            <motion.div
              key={`code-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.15, 0] }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                delay: item.delay,
                ease: "linear"
              }}
              className="absolute text-[#eab308] font-mono text-sm whitespace-pre blur-[1px] text-left z-0"
              style={{ top: item.top, left: item.left }}
            >
              {item.code}
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="z-10 max-w-4xl relative">
          <div className="absolute -inset-4 bg-[#eab308]/5 blur-3xl rounded-full"></div>
          <div className="inline-block py-1 px-4 rounded-md bg-[#eab308]/10 text-[#eab308] font-mono text-sm border border-[#eab308]/30 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            <span className="animate-pulse">&gt;</span> SYSTEM.STATUS == "AVAILABLE"
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            Let's Build Something <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] to-[#22c55e] drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">Intelligent Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            I help startups and businesses build fast, modern, and scalable AI-driven web applications that solve real problems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-mono">
            <a href="mailto:nirajjhapate1@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-[#eab308] hover:bg-[#ca8a04] text-black rounded-md font-bold shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all hover:scale-105 hover:-translate-y-1">
              [ INIT_PROJECT ]
            </a>
            <a href="mailto:nirajjhapate1@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-[#09090b] border-2 border-[#27272a] hover:border-[#eab308] hover:text-[#eab308] text-zinc-300 rounded-md font-bold transition-all shadow-xl">
              schedule_appointment()
            </a>
          </div>
        </motion.div>
      </section>
  );
};
export default EngageHero;
