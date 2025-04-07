import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-space-darker bg-opacity-80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src="/assets/logo.png"
            alt="Poop Rocket Logo" 
            className="h-12 mr-3" 
          />
          <span className="font-bold text-xl md:text-2xl text-white">$PROCK</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-prock-neon transition-colors">About</a>
          <a href="#tokenomics" className="text-white hover:text-prock-neon transition-colors">Tokenomics</a>
          <a href="#roadmap" className="text-white hover:text-prock-neon transition-colors">Roadmap</a>
          <a href="#community" className="text-white hover:text-prock-neon transition-colors">Community</a>
          <a 
            href="#" 
            className="px-6 py-2 rounded-full bg-gradient-to-r from-prock-neon to-green-400 text-space-dark font-bold hover:shadow-[0_0_15px_rgba(57,255,20,0.6)] transition-all"
          >
            Buy $PROCK
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-space-darker bg-opacity-95 backdrop-blur-lg p-4">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-white hover:text-prock-neon transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#tokenomics" 
              className="text-white hover:text-prock-neon transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tokenomics
            </a>
            <a 
              href="#roadmap" 
              className="text-white hover:text-prock-neon transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Roadmap
            </a>
            <a 
              href="#community" 
              className="text-white hover:text-prock-neon transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Community
            </a>
            <a 
              href="#" 
              className="px-6 py-3 rounded-full bg-gradient-to-r from-prock-neon to-green-400 text-space-dark font-bold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Buy $PROCK
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
