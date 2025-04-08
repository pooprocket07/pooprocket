import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isLaunched, setIsLaunched] = useState(false);

  const handleLaunch = () => {
    setIsLaunched(true);
    // Reset animation after it completes
    setTimeout(() => setIsLaunched(false), 5000);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-24 pb-12 relative overflow-hidden" id="hero">
      {/* Stars background */}
      {Array(100).fill(0).map((_, i) => (
        <div
          key={i}
          className="star animate-twinkle"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
      
      {/* Moon */}
      <div className="absolute top-20 md:top-40 right-8 md:right-32 w-20 h-20 md:w-32 md:h-32 bg-gray-200 rounded-full shadow-inner z-10 opacity-80">
        <div className="absolute top-3 left-5 w-5 h-5 bg-gray-300 rounded-full opacity-80"></div>
        <div className="absolute top-12 left-12 w-3 h-3 bg-gray-300 rounded-full opacity-80"></div>
        <div className="absolute top-6 left-16 w-4 h-4 bg-gray-300 rounded-full opacity-80"></div>
      </div>

      <div className="container mx-auto text-center z-20 relative">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-comic">
          <span className="gradient-text">Poop Rocket</span> is{" "}
          <span className="relative inline-block">
            Blasting Off
            <span className="absolute -top-6 -right-6 text-2xl animate-bounce-slow">💩🚀</span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
          Join the $PROCK revolution — from the toilet to the moon. The meme coin that's flushing conventional crypto down the drain.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <button 
            onClick={handleLaunch}
            className="cta-button primary-button group"
          >
            Buy $PROCK Now 
            <span className="ml-2 transition-transform group-hover:rotate-45 inline-block">🚀</span>
          </button>
          
          <a 
            href="https://dexscreener.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button secondary-button group"
          >
            View Chart 
            <span className="ml-2">📈</span>
          </a>
        </div>
      </div>

      {/* Animated rocket */}
      <div className={`absolute bottom-0 left-0 right-0 mx-auto w-fit z-30 transition-all duration-300 ${isLaunched ? 'animate-rocket-fly' : 'animate-float'}`}>
        <div className="relative">
          <img 
            src="/assets/logo.png"
            alt="Poop Rocket" 
            className="w-28 h-28 md:w-40 md:h-40"
          />
          
          {/* Rocket flames */}
          {isLaunched && (
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-12 md:w-16">
              <div className="w-full h-20 md:h-32 bg-gradient-to-t from-yellow-500 via-orange-500 to-transparent rounded-b-full animate-pulse opacity-80"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
