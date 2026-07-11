import React from 'react';
import { Link } from 'react-router-dom';

const EngageNav = () => {
  return (
      <nav className="fixed top-0 w-full px-6 md:px-12 py-4 flex justify-between items-center z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-[#27272a]">
        <Link to="/" className="text-2xl font-bold font-mono tracking-widest text-[#eab308] transition-transform hover:scale-105 z-50">
          NIRAJ<span className="animate-pulse">_</span>
        </Link>
        <Link to="/" className="px-5 py-2 bg-[#18181b] border border-[#3f3f46] rounded-md font-mono text-zinc-300 hover:text-[#eab308] hover:border-[#eab308]/50 transition-colors flex items-center gap-2">
           \cd..
        </Link>
      </nav>
  );
};
export default EngageNav;
