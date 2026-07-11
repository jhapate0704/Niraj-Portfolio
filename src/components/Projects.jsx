import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const getIconForTag = (tag) => {
  const t = tag.toLowerCase();
  if (t.includes('react')) return <i className="fa-brands fa-react text-[#61DAFB]"></i>;
  if (t.includes('node') || t.includes('express')) return <i className="fa-brands fa-node-js text-[#339933]"></i>;
  if (t.includes('mongo') || t.includes('postgres') || t.includes('sql')) return <i className="fa-solid fa-database text-[#47A248]"></i>;
  if (t.includes('docker')) return <i className="fa-brands fa-docker text-[#2496ED]"></i>;
  if (t.includes('python') || t.includes('fastapi')) return <i className="fa-brands fa-python text-[#3776AB]"></i>;
  if (t.includes('javascript')) return <i className="fa-brands fa-js text-[#F7DF1E]"></i>;
  if (t.includes('html')) return <i className="fa-brands fa-html5 text-[#E34F26]"></i>;
  if (t.includes('css') || t.includes('tailwind')) return <i className="fa-brands fa-css3-alt text-[#1572B6]"></i>;
  if (t.includes('vite')) return <i className="fa-solid fa-bolt text-[#646CFF]"></i>;
  if (t.includes('socket')) return <i className="fa-solid fa-plug text-zinc-300"></i>;
  if (t.includes('jwt')) return <i className="fa-solid fa-key text-yellow-500"></i>;
  if (t.includes('cloudinary') || t.includes('api')) return <i className="fa-solid fa-cloud text-blue-400"></i>;
  return <i className="fa-solid fa-code text-theme-5"></i>;
};

const Projects = () => {
  return (
    <section id="project" className="py-24 max-w-6xl mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-16 uppercase tracking-widest text-theme-5">
        <span className="text-theme-2">P</span>rojects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <div 
            key={idx} 
            className="bg-theme-1/40 rounded-[2rem] p-8 md:p-10 border border-theme-5/10 shadow-xl backdrop-blur-sm relative overflow-hidden flex flex-col h-full hover:border-theme-2/50 transition-all duration-300 group"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-theme-2/20 to-transparent group-hover:via-theme-2 transition-all duration-500"></div>

            <h3 className="text-3xl font-bold mb-4 text-theme-5 group-hover:text-theme-2 transition-colors">{project.title}</h3>
            
            <p className="text-theme-5/70 text-base mb-8 flex-grow leading-relaxed">
              {project.tagline || "An exceptional project built with modern technologies."}
            </p>
            
            <div className="mb-10">
              <p className="text-sm uppercase text-theme-5/50 mb-4 tracking-widest font-semibold">Used Tech Stack</p>
              <div className="flex -space-x-3">
                {project.tags.slice(0, 4).map((tag, tagIdx) => (
                  <div 
                    key={tagIdx}
                    title={tag}
                    className="w-10 h-10 rounded-full border-2 border-theme-1 bg-theme-3/80 flex items-center justify-center text-lg shadow-sm hover:z-20 hover:-translate-y-1 transition-all relative group/icon cursor-help"
                    style={{ zIndex: 10 - tagIdx }}
                  >
                    {getIconForTag(tag)}
                    {/* Tooltip on hover */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-theme-1 text-theme-5 text-xs rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {tag}
                    </span>
                  </div>
                ))}
                {project.tags.length > 4 && (
                  <div 
                    className="w-10 h-10 rounded-full border-2 border-theme-1 bg-theme-1 flex items-center justify-center text-sm font-bold text-theme-5 shadow-sm"
                    style={{ zIndex: 0 }}
                  >
                    +{project.tags.length - 4}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center justify-center mt-auto pt-6 border-t border-theme-5/10">
              <Link 
                to={`/project/${project.id}`}
                className="flex items-center gap-2 text-theme-2 font-bold text-sm tracking-wider hover:text-theme-5 transition-colors uppercase group/btn"
              >
                View Full Project Overview 
                <i className="fa-solid fa-arrow-right transform group-hover/btn:translate-x-2 transition-transform duration-300"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
