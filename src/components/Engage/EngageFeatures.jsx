import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const AnimatedCheckItem = ({ benefit, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isInView) {
      const delay = index * 200;
      const t1 = setTimeout(() => setStep(1), delay + 300);
      const t2 = setTimeout(() => setStep(2), delay + 1000);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [isInView, index]);

  return (
    <li ref={ref} className="flex items-center gap-4 text-lg">
      <span className="flex items-center justify-center w-6 h-6 rounded bg-[#eab308]/10 text-[#eab308] border border-[#eab308]/30 shrink-0 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="circle" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.5 }} transition={{ duration: 0.2 }}>
              <i className="fa-regular fa-circle text-xs"></i>
            </motion.div>
          )}
          {step === 1 && (
            <motion.div key="spin" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.5 }} transition={{ duration: 0.2 }}>
              <i className="fa-solid fa-circle-notch animate-spin text-xs"></i>
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="check" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 300 }}>
              <i className="fa-solid fa-check text-sm drop-shadow-[0_0_5px_rgba(234,179,8,1)]"></i>
            </motion.div>
          )}
        </AnimatePresence>
      </span>
      <motion.span 
        className={`font-mono text-sm md:text-base transition-colors duration-500 ${step === 2 ? 'text-zinc-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]' : 'text-zinc-500'}`}
      >
        {benefit}
      </motion.span>
    </li>
  );
};

const EngageFeatures = ({ fadeInUp, staggerContainer }) => {
  const benefits = [
    "Fully Responsive Website",
    "Pixel-Perfect UI",
    "Modern & Clean Design",
    "Clean & Scalable Code",
    "Reusable Components",
    "SEO-Friendly Architecture",
    "High Performance Optimization",
    "Cross-Browser Compatibility",
    "Error Handling & Validation",
    "Admin Dashboard",
    "GitHub Source Code",
    "Complete Documentation",
    "Bug-Free Delivery",
    "Version Control with Git",
    "Easy Maintenance",
    "Free Bug Fixes After Delivery",
    "10 Days Free Support"
  ];

  const whyHireMe = [
    { icon: "⚡", title: "Fast Delivery", desc: "Projects delivered on time without compromising quality or performance." },
    { icon: "💯", title: "Clean Code", desc: "Maintainable, scalable, and industry-standard code that's easy to extend." },
    { icon: "🧪", title: "Quality Assurance", desc: "Thorough testing to ensure a stable, bug-free, and reliable product." },
    { icon: "🎨", title: "Modern Design", desc: "Beautiful, intuitive, and user-focused interfaces with modern UI trends." },
    { icon: "🔒", title: "Secure Development", desc: "Authentication, authorization, and security best practices built into every project." },
    { icon: "🛠️", title: "Problem Solver", desc: "I identify issues quickly and deliver reliable, efficient solutions." },
    { icon: "💬", title: "Clear Communication", desc: "Regular updates, transparent progress, and quick responses throughout the project." },
    { icon: "🤝", title: "Long-Term Support", desc: "Ongoing maintenance, updates, and improvements even after project delivery." },
    { icon: "📈", title: "Scalable Solutions", desc: "Applications built to grow with your business and future requirements." }
  ];

  return (
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSI+PC9jaXJjbGU+Cjwvc3ZnPg==')] z-0"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          
          {/* Checklist */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-black mb-8 font-mono tracking-tight text-[#eab308] break-words">&gt; Output.Features</h2>
            <div className="bg-[#18181b] border border-[#27272a] p-8 rounded-lg shadow-lg">
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <AnimatedCheckItem key={i} benefit={benefit} index={i} />
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Why Hire Me */}
          <motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-2xl md:text-3xl font-black mb-8 font-mono tracking-tight text-[#22c55e] break-words">&gt; System.Advantages_OfHireMe</motion.h2>
            <motion.div 
              className="space-y-6"
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.2 }} 
              variants={staggerContainer}
            >
              {whyHireMe.map((reason, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="flex gap-4 p-6 bg-[#0a0a0a] border border-[#27272a] rounded-lg hover:border-[#22c55e] hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:-translate-y-2 transition-all duration-300 group cursor-default"
                >
                  <div className="text-3xl grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 origin-center">{reason.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-mono text-zinc-100">{reason.title}</h3>
                    <p className="text-zinc-400 text-sm font-mono">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </section>
  );
};
export default EngageFeatures;
