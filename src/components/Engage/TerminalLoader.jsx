import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400); // Wait a bit after reaching 100%
          return 100;
        }
        // Random increment between 5 and 15
        return Math.min(prev + Math.floor(Math.random() * 15) + 5, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Generate ASCII progress bar
  const totalBlocks = 25;
  const filledBlocks = Math.floor((progress / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;
  const bar = '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-[200] bg-[#09090b] flex flex-col items-center justify-center font-mono text-[#22c55e]"
    >
      <div className="mb-4 text-xl md:text-2xl font-bold animate-pulse text-[#eab308]">
        &gt; SYSTEM.BOOT()
      </div>
      <div className="text-lg md:text-xl whitespace-pre">
        [{bar}] {progress}%
      </div>
      <div className="mt-4 text-sm text-zinc-500">
        {progress < 100 ? "Loading modules..." : "Access Granted."}
      </div>
    </motion.div>
  );
};

export default TerminalLoader;
