import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import TerminalLoader from '../components/Engage/TerminalLoader';
import EngageNav from '../components/Engage/EngageNav';
import EngageHero from '../components/Engage/EngageHero';
import EngageServices from '../components/Engage/EngageServices';
import EngageTechStack from '../components/Engage/EngageTechStack';
import EngageProcess from '../components/Engage/EngageProcess';
import EngageFeatures from '../components/Engage/EngageFeatures';
import EngageFaq from '../components/Engage/EngageFaq';
import EngageCta from '../components/Engage/EngageCta';
import EngageFooter from '../components/Engage/EngageFooter';

const Engage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showBootMessage, setShowBootMessage] = useState(false);

  useEffect(() => {
    if (showBootMessage) {
      const timer = setTimeout(() => {
        setShowBootMessage(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showBootMessage]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-[#09090b] min-h-screen text-zinc-100 font-sans selection:bg-[#eab308]/30">
      <AnimatePresence>
        {isLoading && <TerminalLoader onComplete={() => { setIsLoading(false); setShowBootMessage(true); }} />}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#eab308] to-[#22c55e] origin-left z-[100]"
        style={{ scaleX }}
      />
      <EngageNav />
      <EngageHero fadeInUp={fadeInUp} />
      <EngageServices staggerContainer={staggerContainer} fadeInUp={fadeInUp} />
      <EngageTechStack staggerContainer={staggerContainer} fadeInUp={fadeInUp} />
      <EngageProcess />
      <EngageFeatures staggerContainer={staggerContainer} fadeInUp={fadeInUp} />
      <EngageFaq />
      <EngageCta fadeInUp={fadeInUp} />
      <EngageFooter />

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

    </div>
  );
};

export default Engage;
