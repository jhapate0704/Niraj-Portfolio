import React from 'react';
import { motion } from 'framer-motion';

const EngageCta = ({ fadeInUp }) => {
  return (
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSI+PC9jaXJjbGU+Cjwvc3ZnPg==')] opacity-50 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#eab308]/5 pointer-events-none"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Have a project in mind?</h2>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 font-mono">Let's compile your ideas into reality.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-mono">
            <a href="mailto:nirajjhapate1@gmail.com" className="px-10 py-5 bg-[#eab308] hover:bg-[#ca8a04] text-black rounded-md text-xl font-bold shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all hover:scale-105">
              &gt; Execute_Hire() 
            </a>
            <span className="text-zinc-600 font-bold">||</span>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nirajjhapate1@gmail.com" className="text-xl font-bold text-[#22c55e] hover:text-[#4ade80] transition-colors border-b-2 border-transparent hover:border-[#22c55e] pb-1">
              nirajjhapate1@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/niraj-jhapate-669474299" target="_blank" rel="noreferrer" className="text-3xl hover:text-blue-500 blackhover:text-theme-2 transition-colors">
            <i className="fa-brands fa-linkedin fa-bounce"></i>
          </a>
          <a href="https://github.com/jhapate0704" target="_blank" rel="noreferrer" className="text-3xl color transition-colors">
            <i className="fa-brands fa-github fa-shake"></i>
          </a>
          </div>
        </motion.div>
        
      </section>
  );
};
export default EngageCta;
