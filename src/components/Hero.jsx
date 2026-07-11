import React, { useEffect, useRef } from 'react';

const Hero = () => {

  return (
    <div id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-18 text-theme-5 relative">
      <div className="flex-1 max-w-2xl text-center md:text-left z-10">
        
        {/* Modern Welcome Badge */}

        <div className="inline-block py-1.5 px-5 rounded-full bg-theme-2/10 text-theme-2 font-mono text-sm border border-theme-2/20 mb-8 backdrop-blur-sm relative overflow-hidden group shadow-[0_0_15px_rgba(116,140,171,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-theme-2/30 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
          👋 Welcome to my universe
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-[Poppins] leading-[1.3] tracking-tight mb-6">
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-theme-2 via-blue-400 to-theme-3">
            Turning your ideas
          </span> <br />
          into stunning digital experiences
        </h1>

        <p className="text-theme-5/80 text-2xl md:text-3xl font-medium leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
          From concept to launch, I build Products that deliver results.
        </p>
        
        <div className="flex items-center justify-center md:justify-start gap-6">
          <a href="https://www.linkedin.com/in/niraj-jhapate-669474299" target="_blank" rel="noreferrer" className="text-3xl  hover:text-blue-500 transition-colors">
            <i className="fa-brands fa-linkedin fa-bounce"></i>
          </a>
          <a href="https://github.com/jhapate0704" target="_blank" rel="noreferrer" className="text-3xl color blackhover:text-theme-3 transition-colors">
            <i className="fa-brands fa-github fa-shake"></i>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nirajjhapate1@gmail.com" target="_blank" rel="noreferrer" className="text-3xl  hover:text-red-500 transition-colors ">
            <i className="fa-solid fa-envelope fa-bounce"></i>
          </a>
          
        <a
  href="/profile-resume img/Niraj_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 ml-4 px-7 py-3
             rounded-full border border-white/20
             bg-white/10 backdrop-blur-lg
             text-theme-2 font-semibold
             transition-all duration-300
             hover:bg-theme-2 hover:text-theme-1
             hover:border-theme-2
             hover:scale-105"
>
  <i className="fa-solid fa-file-pdf text-lg group-hover:scale-110 transition-transform"></i>
  Resume
</a>
        </div>
      </div>

      <div className="flex-1 flex justify-center mt-10 md:mt-0 perspective-1000">
        <div className="w-[300px] h-[300px] rounded-full overflow-hidden group border-4 border-theme-2/50 shadow-2xl shadow-theme-1/50 hover:border-theme-2 transition-all duration-500">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front */}
            <div className="absolute inset-0 backface-hidden rounded-full overflow-hidden bg-theme-1">
              <img src="/profile-resume img/Niraj_photo.jpg" alt="Niraj" className="w-full h-full object-cover" />
            </div>
            {/* Back */}
            <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-theme-1 text-theme-5 flex flex-col items-center justify-center p-8 border border-theme-3 rounded-full overflow-hidden">
              <h2 className="text-xl font-bold mb-4 text-theme-2">HOBBIES</h2>
              <ul className="space-y-3 text-base">
                <li className="flex items-center justify-center gap-3"><i className="fa-solid fa-dumbbell"></i> Fitness</li>
                <li className="flex items-center justify-center gap-3"><i className="fa-solid fa-film"></i> Movies</li>
                <li className="flex items-center justify-center gap-3"><i className="fa-solid fa-gamepad"></i> E-Sports</li>
                <li className="flex items-center justify-center gap-3"><i className="fa-solid fa-motorcycle"></i> Bike Riding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
