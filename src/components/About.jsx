import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-2 px-4 max-w-6xl mx-auto scroll-mt-28">
      <div className="flex flex-col md:flex-row items-center gap-12 bg-theme-1/40 p-4 md:p-12 rounded-3xl border border-theme-5/10 shadow-2xl backdrop-blur-sm">
        
        <div className="w-full md:w-2/5 flex justify-center perspective-1000">
          <div className="relative group w-full max-w-sm">
            {/* Glowing background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-theme-2 to-theme-3 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Editor Window */}
            <div className="relative rounded-xl bg-theme-1 border border-theme-5/20 shadow-2xl overflow-hidden flex flex-col h-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
              {/* Mac Window Controls */}
              <div className="bg-theme-4/80 px-4 py-3 flex items-center gap-2 border-b border-theme-5/10">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_5px_rgba(250,204,21,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                <span className="ml-4 text-xs text-theme-5/50 font-mono tracking-widest">profile.js</span>
              </div>
              
              {/* Code Editor Content */}
              <div className="p-6 font-mono text-sm md:text-base leading-loose text-left">
                <div className="text-theme-5">
                  <span className="text-pink-400 font-bold">const</span> <span className="text-blue-400">developer</span> <span className="text-theme-5">=</span> {'{'}
                </div>
                <div className="pl-6">
                  <span className="text-theme-2">name</span>: <span className="text-green-400">"Niraj Jhapate"</span>,
                </div>
                <div className="pl-6">
                  <span className="text-theme-2">role</span>: <span className="text-green-400">"Full Stack Developer"</span>,
                </div>
                <div className="pl-6">
                  <span className="text-theme-2">skills In</span>: [
                  <div className="pl-6 text-green-400">"Infrastructure", "Debugging", "System Design", "Problem Solving"</div>
                  ],
                </div>
                <div className="pl-6">
                  <span className="text-theme-2">hardWorker</span>: <span className="text-yellow-400 font-bold">true</span>,
                </div>
                <div className="pl-6">
                  <span className="text-theme-2">problemSolver</span>: <span className="text-yellow-400 font-bold">true</span>
                </div>
                <div className="text-theme-5">
                  {'}'};
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-theme-5">
            A Bit About <span className="text-theme-2">Me</span>
          </h2>
          
          <div className="space-y-6 text-theme-5/80 text-lg leading-relaxed">
            <p className="border-l-4 border-theme-2 pl-4 bg-theme-1/60 py-2 rounded-r-lg">
              I'm a Full Stack Developer passionate about building scalable web applications, AI-powered tools, and modern user experiences. I enjoy solving real-world problems through technology and continuously learning new technologies. 
              <br /><br />
              My interests include Web Development, Artificial Intelligence, Open Source, and Cloud Computing. Currently exploring advanced React ecosystems, backend architectures, and AI-driven applications.
            </p>
            
            <p className="pl-4">
              I am a curious and motivated individual who enjoys learning new things and taking on challenges. I believe in continuous growth, teamwork, and creating meaningful impact through dedication and hard work. I enjoy exploring new ideas, solving problems, and turning opportunities into achievements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
