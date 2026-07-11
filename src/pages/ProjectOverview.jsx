import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from '../components/Carousel';
import TerminalLoader from '../components/Engage/TerminalLoader';
import { projectsData } from '../data/projectsData';

const ProjectOverview = () => {
  const { id } = useParams();
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showBootMessage, setShowBootMessage] = useState(false);

  // Auto-scroll to top and trigger loader when navigating to a new project
  useEffect(() => {
    setIsLoading(true);
    setShowBootMessage(false);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (showBootMessage) {
      const timer = setTimeout(() => {
        setShowBootMessage(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showBootMessage]);

  const projectData = projectsData.find(p => p.id === id);

  if (!projectData) {
    return (
      <div className="bg-[#09090b] min-h-screen flex flex-col items-center justify-center font-mono text-zinc-100">
        <h1 className="text-4xl text-[#eab308] mb-4">404_PROJECT_NOT_FOUND</h1>
        <Link to="/" className="px-6 py-3 bg-[#22c55e] text-black font-bold rounded hover:bg-[#16a34a] transition-all">RETURN_HOME</Link>
      </div>
    );
  }

  const openLightbox = (imgSrc) => {
    setLightboxImg(imgSrc);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
  };
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const currentIndex = projectsData.findIndex(p => p.id === id);
  const nextProject = currentIndex !== -1 ? projectsData[(currentIndex + 1) % projectsData.length] : null;

  return (
    <div className="bg-[#09090b] min-h-screen text-zinc-100 font-sans selection:bg-[#22c55e]/30 overflow-x-hidden">
      
      <AnimatePresence>
        {isLoading && <TerminalLoader onComplete={() => { setIsLoading(false); setShowBootMessage(true); }} />}
      </AnimatePresence>

      {/* Navbar Minimal */}
      <nav className="fixed top-0 w-full px-4 md:px-12 py-3 md:py-4 flex justify-between items-center z-50 bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a]">
        <Link to="/" className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] rounded hover:bg-[#22c55e]/20 transition-colors font-mono text-xs md:text-sm">
          <i className="fa-solid fa-chevron-left"></i> cd ..
        </Link>
        {nextProject && (
          <Link to={`/project/${nextProject.id}`} className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#eab308]/10 border border-[#eab308]/30 text-[#eab308] rounded hover:bg-[#eab308]/20 transition-colors font-mono text-xs md:text-sm">
            ./next <i className="fa-solid fa-chevron-right"></i>
          </Link>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Animated Background Gradients & Icons */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22c55e]/10 blur-[100px] rounded-full mix-blend-screen animate-pulse"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#eab308]/10 blur-[100px] rounded-full mix-blend-screen animate-pulse delay-1000"></div>
        </div>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="z-10 max-w-5xl relative">
          <div className="inline-block py-1 px-4 rounded-md bg-[#22c55e]/10 text-[#22c55e] font-mono text-sm border border-[#22c55e]/30 mb-8 backdrop-blur-sm">
            CASE STUDY
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
            {projectData.title}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto font-light">
            {projectData.tagline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 font-mono">
            <a href={projectData.links.demo} className="px-6 py-3 bg-[#22c55e] text-black font-bold rounded hover:bg-[#16a34a] transition-all">[ Live Demo ]</a>
            <a href={projectData.links.github} className="px-6 py-3 bg-[#18181b] border border-[#27272a] hover:border-[#eab308] text-zinc-300 font-bold rounded transition-all">[ GitHub ]</a>
            <a href="#case-study" className="px-6 py-3 bg-[#18181b] border border-[#27272a] hover:border-[#22c55e] text-zinc-300 font-bold rounded transition-all">[ Case Study ]</a>
          </div>
        </motion.div>
      </section>

      <div id="case-study" className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        {/* 3. Image Gallery */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-3xl font-bold font-mono text-[#eab308] mb-8">&gt; Project.Gallery</h2>
          <Carousel images={projectData.images} onImageClick={openLightbox} />
        </motion.section>

        {/* 4. Project Overview */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-3xl font-bold font-mono text-[#22c55e] mb-6">&gt; Project.Overview</h2>
          <p className="text-lg text-zinc-400 leading-relaxed border-l-2 border-[#22c55e] pl-6">{projectData.overview}</p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* 5. Problem Statement */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
             <h2 className="text-3xl font-bold font-mono text-[#eab308] mb-6">&gt; Problem.Statement</h2>
             <div className="bg-[#eab308]/10 border border-[#eab308]/20 p-6 rounded-lg h-full">
                <p className="text-zinc-300 leading-relaxed">{projectData.problem}</p>
             </div>
          </motion.section>

          {/* 6. Solution */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
             <h2 className="text-3xl font-bold font-mono text-[#22c55e] mb-6">&gt; My.Solution</h2>
             <div className="bg-[#22c55e]/10 border border-[#22c55e]/20 p-6 rounded-lg h-full">
                <p className="text-zinc-300 leading-relaxed">{projectData.solution}</p>
             </div>
          </motion.section>
        </div>

        {/* 7. Features */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <h2 className="text-3xl font-bold font-mono text-[#eab308] mb-8">&gt; Core.Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectData.features.map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3 bg-[#18181b] border border-[#27272a] p-4 rounded-lg">
                <i className="fa-solid fa-check text-[#22c55e]"></i>
                <span className="text-zinc-200 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 8. Tech Stack */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <h2 className="text-3xl font-bold font-mono text-[#22c55e] mb-8">&gt; Tech.Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(projectData.techStack).map(([category, items], idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-[#0a0a0a] border border-[#27272a] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 font-mono text-zinc-100 border-b border-[#27272a] pb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-[#18181b] border border-[#27272a] text-zinc-300 rounded text-sm hover:border-[#22c55e] transition-colors">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 9. System Architecture */}
        {projectData.architecture && projectData.architecture.length > 0 && (
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl font-bold font-mono text-[#eab308] mb-8">&gt; System.Architecture</h2>
            <div className="bg-[#18181b] border border-[#27272a] p-8 rounded-lg font-mono text-center overflow-x-auto text-sm sm:text-base text-zinc-400">
              <div className="flex flex-col items-center justify-center space-y-4">
                {projectData.architecture.map((step, idx) => {
                  const isFirst = idx === 0;
                  const isLast = idx === projectData.architecture.length - 1;
                  const colorClass = idx % 2 === 1 
                    ? "border-[#22c55e] text-[#22c55e] bg-[#22c55e]/10" 
                    : "border-[#eab308] text-[#eab308] bg-[#eab308]/10";
                  
                  const finalClass = isFirst 
                    ? "border-[#27272a] text-zinc-300 bg-[#09090b]" 
                    : colorClass;
                    
                  return (
                    <React.Fragment key={idx}>
                      <div className={`px-6 py-3 border rounded w-64 text-center ${finalClass}`}>
                        {step}
                      </div>
                      {!isLast && <div className="h-6 w-px bg-[#27272a]"></div>}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </motion.section>
        )}

        {/* 10. Challenges & Solutions */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <h2 className="text-3xl font-bold font-mono text-[#22c55e] mb-8">&gt; Challenges_&_Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectData.challenges.map((challenge, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-[#18181b] border border-[#27272a] p-6 rounded-lg flex flex-col h-full">
                <div className="mb-4">
                  <span className="text-xs text-[#eab308] uppercase font-bold tracking-wider">Challenge</span>
                  <p className="mt-1 text-zinc-300">{challenge.issue}</p>
                </div>
                <div className="text-zinc-600 text-center my-2"><i className="fa-solid fa-arrow-down"></i></div>
                <div className="mb-4">
                  <span className="text-xs text-[#22c55e] uppercase font-bold tracking-wider">Solution</span>
                  <p className="mt-1 text-zinc-300">{challenge.solution}</p>
                </div>
                <div className="text-zinc-600 text-center my-2"><i className="fa-solid fa-arrow-down"></i></div>
                <div className="mt-auto">
                  <span className="text-xs text-[#22c55e] uppercase font-bold tracking-wider">Result</span>
                  <p className="mt-1 text-zinc-100 font-bold">{challenge.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 11. Performance & Results */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-3xl font-bold font-mono text-[#eab308] mb-8">&gt; Performance.Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-[#0a0a0a] border border-[#27272a] p-6 rounded-lg text-center flex flex-col justify-center items-center">
              <span className="text-3xl font-black text-[#22c55e]">{projectData.performance.lighthouse}</span>
              <span className="text-xs text-zinc-500 mt-2 uppercase">Lighthouse</span>
            </div>
            <div className="bg-[#0a0a0a] border border-[#27272a] p-6 rounded-lg text-center flex flex-col justify-center items-center">
              <span className="text-3xl font-black text-[#eab308]">{projectData.performance.loading}</span>
              <span className="text-xs text-zinc-500 mt-2 uppercase">Loading</span>
            </div>
            <div className="bg-[#0a0a0a] border border-[#27272a] p-6 rounded-lg text-center flex flex-col justify-center items-center">
              <span className="text-3xl font-black text-[#22c55e]">{projectData.performance.accessibility}</span>
              <span className="text-xs text-zinc-500 mt-2 uppercase">Accessiblity</span>
            </div>
            <div className="bg-[#0a0a0a] border border-[#27272a] p-6 rounded-lg text-center flex flex-col justify-center items-center">
              <span className="text-3xl font-black text-[#eab308]">{projectData.performance.seo}</span>
              <span className="text-xs text-zinc-500 mt-2 uppercase">SEO</span>
            </div>
            <div className="bg-[#0a0a0a] border border-[#27272a] p-6 rounded-lg text-center flex flex-col justify-center items-center">
              <span className="text-3xl font-black text-[#22c55e]">{projectData.performance.performance}</span>
              <span className="text-xs text-zinc-500 mt-2 uppercase">Performance</span>
            </div>
          </div>
        </motion.section>

        {/* 12. Development Process */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-3xl font-bold font-mono text-[#eab308] mb-8">&gt; Dev.Process</h2>
          <div className="flex flex-col md:flex-row items-center justify-between bg-[#18181b] border border-[#27272a] p-8 rounded-lg font-mono">
            {["Planning", "Design", "Development", "Testing", "Deployment"].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center my-4 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] flex items-center justify-center font-bold mb-2">
                    0{idx + 1}
                  </div>
                  <span className="text-zinc-300 text-sm">{step}</span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden md:block w-16 h-px bg-zinc-700"></div>
                )}
                {idx < arr.length - 1 && (
                  <div className="md:hidden h-8 w-px bg-zinc-700"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.section>

        {/* 13. Future Improvements */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-3xl font-bold font-mono text-zinc-300 mb-8">&gt; Future.Improvements</h2>
          <div className="bg-[#0a0a0a] border border-dashed border-[#27272a] p-8 rounded-lg">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectData.future.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-400">
                  <i className="fa-regular fa-clock text-zinc-600"></i> {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* 14. Live Links */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center pb-20">
          <h2 className="text-4xl font-black mb-10 tracking-tight">Experience it live.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-mono">
            <a href={projectData.links.demo} className="w-full sm:w-auto px-8 py-4 bg-[#22c55e] hover:bg-[#16a34a] text-black text-lg font-bold rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:scale-105">
              <i className="fa-solid fa-globe mr-2"></i> Live Demo
            </a>
            <a href={projectData.links.github} className="w-full sm:w-auto px-8 py-4 bg-[#18181b] border-2 border-[#27272a] hover:border-[#eab308] text-zinc-300 text-lg font-bold rounded-lg transition-all hover:scale-105">
              <i className="fa-brands fa-github mr-2"></i> GitHub Repo
            </a>
            <a href={projectData.links.docs} className="w-full sm:w-auto px-8 py-4 bg-[#18181b] border-2 border-[#27272a] hover:border-[#22c55e] text-zinc-300 text-lg font-bold rounded-lg transition-all hover:scale-105">
              <i className="fa-solid fa-file-lines mr-2"></i> Documentation
            </a>
          </div>
        </motion.section>

      </div>

      {/* Engage CTA */}
      <section className="border-t border-[#27272a] bg-[#0a0a0a] py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#eab308]/5 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-zinc-100 mb-4 tracking-tight">Need a developer like this?</h2>
          <p className="text-zinc-400 mb-8 font-mono">Let's collaborate and build something exceptional together.</p>
          <Link to="/engage" className="inline-flex items-center gap-3 px-8 py-4 bg-[#eab308] text-black text-lg font-bold font-mono rounded-lg hover:bg-[#ca8a04] transition-all hover:scale-105 shadow-[0_0_25px_rgba(234,179,8,0.4)]">
            <i className="fa-solid fa-terminal"></i>To.Hire.Me
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#09090b] py-10 border-t border-[#27272a] text-center">
        <p className="text-zinc-600 font-mono text-sm">© {new Date().getFullYear()} Niraj Jhapate. Project Overview Terminated.</p>
      </footer>

      <AnimatePresence>
        {showBootMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
            className="fixed top-24 left-4 right-4 md:left-auto md:top-auto md:bottom-6 md:right-6 z-[200] bg-[#18181b] border border-[#22c55e]/50 shadow-[0_0_20px_rgba(34,197,94,0.3)] rounded-lg p-4 flex items-center gap-4 font-mono"
          >
            <div className="w-10 h-10 rounded bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center shrink-0 border border-[#22c55e]/30">
              <i className="fa-solid fa-terminal"></i>
            </div>
            <div>
              <p className="text-xs text-zinc-400 m-0 mb-1 leading-none uppercase">Status_Update</p>
              <p className="text-[#22c55e] font-bold text-sm m-0 leading-none">System boot successfully</p>
            </div>
            <button 
              onClick={() => setShowBootMessage(false)}
              className="ml-2 text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[200] bg-[#09090b]/90 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
          onClick={closeLightbox}
        >
          <span className="absolute top-6 right-8 text-zinc-100 text-5xl cursor-pointer hover:text-[#22c55e] transition-colors">&times;</span>
          <img 
            src={lightboxImg} 
            alt="Expanded Project" 
            className="max-w-[95%] max-h-[95vh] object-contain rounded-xl shadow-2xl animate-[zoomIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
};

export default ProjectOverview;
