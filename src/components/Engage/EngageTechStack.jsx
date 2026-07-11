import React from 'react';
import { motion } from 'framer-motion';

const EngageTechStack = ({ staggerContainer, fadeInUp }) => {
  const technologies = [
    { category: "Frontend", items: ["React.js", "JavaScript (ES6+)"," TypeScript","Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express.js","Python", "RESTful APIs", "JWT","Socket.io","Authentication"] },
    { category: "Database", items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase" , "Supabase"] },
    { category: "Tools", items: ["Git","GitHub","Docker", "VS Code", "Postman","AWS", "Webpack", "Vite"] }  ];

  return (
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSI+PC9jaXJjbGU+Cjwvc3ZnPg==')] z-0"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">Tech <span className="text-[#22c55e]">/Stack</span></h2>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div key={index} variants={fadeInUp} className={`bg-[#18181b] border border-[#27272a] p-8 rounded-lg shadow-lg hover:border-[#eab308]/50 transition-colors ${index === 3 ? 'lg:col-span-1 lg:col-start-2' : ''} ${index === 4 ? 'lg:col-span-1' : ''}`}>
                <h3 className="text-xl font-bold text-[#22c55e] mb-6 border-b border-[#27272a] pb-4 font-mono">{tech.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {tech.items.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-[#09090b] border border-[#27272a] rounded text-sm font-mono text-zinc-300 hover:border-[#eab308] hover:text-[#eab308] cursor-default transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};
export default EngageTechStack;
