import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-theme-1 py-10 border-t border-theme-5/20  text-center">
      <div className="max-w-4xl mx-auto px-6">
      
        
        <p className="font-bold text-theme-5/90 tracking-wider mb-4">
        2026 @Niraj Jhapate
        </p>
        
        <div className="flex justify-center items-center gap-8">
          <a href="https://github.com/jhapate0704" target="_blank" rel="noreferrer" className="text-3xl color black hover:text-theme-5 text-theme-5/50 transition-all">
            <i className="fa-brands fa-github fa-shake"></i>
          </a>
         
          <a href="https://www.linkedin.com/in/niraj-jhapate-669474299" target="_blank" rel="noreferrer" className="text-3xl hover:text-blue-500 text-theme-5/50 transition-all">
            <i className="fa-brands fa-linkedin-in fa-bounce"></i>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nirajjhapate1@gmail.com" target="_blank" rel="noreferrer" className="text-3xl hover:text-red-500 text-theme-5/50 transition-all">
            <i className="fa-solid fa-envelope fa-shake"></i>
          </a>
           <a href="https://x.com/NirajJhapate" target="_blank" rel="noreferrer" className="text-3xl color black hover:text-theme-5 text-theme-5/50 transition-all">
            <i className="fa-brands fa-square-x-twitter fa-bounce"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
