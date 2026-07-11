import React from 'react';
import { motion } from 'framer-motion';

const EngageServices = ({ staggerContainer, fadeInUp }) => {
  const services = [
    { title: "Frontend Development", desc: "Building responsive, beautiful, and interactive user interfaces using modern frameworks like React and Tailwind CSS.", icon: "fa-desktop" },
    { title: "Backend Architecture", desc: "Designing robust APIs and scalable server-side logic using Node.js, Express, and secure authentication.", icon: "fa-server" },
       { title: "Debugging",desc: "Quickly diagnose issues, resolve errors, and optimize application performance.",icon: "fa-bug"},
        {
    title: "Bug Fixing",
    desc: "Fix existing application issues without affecting current functionality.",
    icon: "fa-screwdriver-wrench"
  },

    { title: "UI/UX Design", desc: "Crafting intuitive and engaging user experiences with a focus on accessibility and modern aesthetics.", icon: "fa-pen-nib" },
     {
    title: "AI Integration",
    desc: "Integrate AI features such as chatbots, content generation, and automation using modern AI APIs.",
    icon: "fa-robot"
  },  
    { title: "API Integration",desc: "Integrate third-party APIs including payment gateways, AI services, maps, and social logins.",icon: "fa-plug"},
    { title: "Cloud Deployment", desc: "Deploying applications to the cloud with proper CI/CD pipelines, ensuring high availability and performance.", icon: "fa-cloud" }
    
  ];

  return (
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-[#27272a] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSI+PC9jaXJjbGU+Cjwvc3ZnPg==')] z-0"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">Core <span className="text-[#eab308]">Modules/Services</span></h2>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-[#09090b] p-8 rounded-lg border border-[#27272a] hover:border-[#eab308]/50 transition-all group shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#eab308]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <i className={`fa-solid ${service.icon} text-4xl text-[#22c55e] group-hover:text-[#eab308] transition-colors mb-6 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)] group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]`}></i>
                <h3 className="text-2xl font-bold mb-4 font-mono">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};
export default EngageServices;
