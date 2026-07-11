import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'project', label: 'Project' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setTheme('light');
      document.documentElement.classList.add('light-theme');
      document.body.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light-theme');
      document.body.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
      document.body.classList.remove('light-theme');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Find the current section based on scroll position
      const scrollPosition = window.scrollY + 150; // Add offset for the navbar

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update pill position when active section changes
  useEffect(() => {
    if (!navRef.current) return;
    
    // Slight delay to ensure DOM is fully rendered for accurate measurements
    const timeout = setTimeout(() => {
      const activeItem = navRef.current.querySelector(`[data-id="${activeSection}"]`);
      if (activeItem) {
        setPillStyle({
          left: activeItem.offsetLeft,
          width: activeItem.offsetWidth,
          opacity: 1
        });
      }
    }, 50);
    
    return () => clearTimeout(timeout);
  }, [activeSection]);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full px-6 md:px-12 py-4 flex justify-between md:justify-center items-center z-50 bg-theme-4/80 backdrop-blur-md border-b border-theme-5/10">
      
      {/* Logo */}
      <div 
        className="text-2xl font-bold tracking-widest text-theme-2 cursor-pointer md:absolute md:left-12 transition-transform hover:scale-105 z-50" 
        onClick={() => scrollToSection('home')}
      >
        NIRAJ
      </div>
      
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex bg-theme-1/80 rounded-full px-4 py-2 border border-theme-5/10 shadow-lg relative">
        <ul ref={navRef} className="flex items-center gap-2 text-sm font-medium tracking-wide relative">
          
          {/* Sliding Pill Background */}
          <div 
            className="absolute top-0 bottom-0 my-auto h-full bg-theme-3/50 backdrop-blur-md border border-theme-2/50 rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] z-0 shadow-[0_0_10px_rgba(116,140,171,0.2)]"
            style={pillStyle}
          />

          {navLinks.map(({ id, label }) => (
            <li 
              key={id}
              data-id={id}
              className={`cursor-pointer px-5 py-2.5 transition-colors duration-300 relative z-10 ${
                activeSection === id 
                  ? 'text-theme-5 font-bold' 
                  : 'text-theme-5/70 hover:text-theme-5'
              }`}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Actions: Hire Me, Theme Toggle & Mobile Menu */}
      <div className="absolute right-6 md:right-12 z-[100] flex items-center gap-4">
        {/* Hire Me Link */}
       <Link
  to="/engage"
  className="
    hidden sm:flex items-center gap-2
    px-6 py-3
    rounded-full
    bg-theme-5/10
    backdrop-blur-xl
    border border-theme-5/20
    text-theme-5
    font-semibold
    text-sm
    shadow-[0_8px_32px_rgba(0,0,0,0.1)]
    hover:bg-theme-5/15
    hover:border-theme-2/40
    hover:shadow-[0_8px_40px_rgba(59,130,246,0.3)]
    transition-all duration-300
    hover:-translate-y-1
    hover:scale-105
    active:scale-95
    relative overflow-hidden
    before:absolute before:inset-0
    before:bg-gradient-to-r
    before:from-transparent
    before:via-theme-5/20
    before:to-transparent
    before:-translate-x-full
    hover:before:translate-x-full
    before:transition-transform
    fa-bounce
    
    before:duration-700
  "
>
  <i className="fa-solid fa-handshake relative z-10 text-theme-2"></i>
  <span className="relative z-10 ">Engage Me</span>
</Link>
        
        {/* Theme Toggle Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleTheme();
          }}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-theme-1 border border-theme-5/20 text-theme-5 hover:text-theme-2 hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer pointer-events-auto"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? (
            <i className="fa-solid fa-moon text-lg pointer-events-none"></i>
          ) : (
            <i className="fa-solid fa-sun text-lg pointer-events-none"></i>
          )}
        </button>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-theme-1 border border-theme-5/20 text-theme-5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-theme-1/95 backdrop-blur-xl border-b border-theme-5/10 shadow-2xl py-6 flex flex-col items-center gap-6 md:hidden">
         <Link
  to="/engage"
  onClick={() => setMobileMenuOpen(false)}
  className="
    flex items-center justify-center gap-2
    px-8 py-3
    rounded-full
    bg-white/10
    backdrop-blur-xl
    border border-white/20
    text-white
    text-lg
    font-semibold
    shadow-[0_8px_32px_rgba(0,0,0,0.25)]
    transition-all duration-300
    hover:bg-white/15
    hover:border-cyan-400/40
    hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
    hover:-translate-y-1
    active:scale-95
    relative overflow-hidden
    before:absolute before:inset-0
    before:bg-gradient-to-r
    before:from-transparent
    before:via-white/20
    before:to-transparent
    before:-translate-x-full
    hover:before:translate-x-full
    before:transition-transform
    before:duration-700
  "
>
  <i className="fa-solid fa-briefcase relative z-10 text-cyan-300"></i>
  <span className="relative z-10">To Hire Me</span>
</Link>
          <div className="w-1/2 h-px bg-theme-5/10 my-2"></div>
          {navLinks.map(({ id, label }) => (
            <div 
              key={id}
              className={`text-lg cursor-pointer transition-colors ${
                activeSection === id ? 'text-theme-2 font-bold scale-110' : 'text-theme-5 hover:text-theme-2'
              }`}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </div>
          ))}
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
