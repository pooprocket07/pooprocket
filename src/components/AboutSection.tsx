import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-space-dark to-space-darker" id="about">
      {/* Poop emoji background decorations */}
      <div className="absolute top-10 left-10 text-5xl opacity-10 rotate-12 animate-spin-slow">💩</div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-10 -rotate-12 animate-spin-slow" style={{ animationDelay: '2s' }}>💩</div>
      <div className="absolute top-1/2 left-1/4 text-4xl opacity-10 rotate-45 animate-spin-slow" style={{ animationDelay: '3s' }}>💩</div>
      
      <div className="container mx-auto">
        <h2 className="section-title">
          About <span className="gradient-text">$PROCK</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/assets/logo.png"
                alt="Poop Rocket" 
                className="w-40 h-40 md:w-64 md:h-64 animate-bounce-slow"
              />
              <div className="absolute -z-10 w-full h-full rounded-full bg-prock-neon opacity-10 blur-3xl"></div>
            </div>
          </div>
          
          {/* Right side - Text */}
          <div className="bg-space-darker bg-opacity-60 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-prock-pink">
              Spreading toilet humor across the blockchain and pumping bags
            </h3>
            
            <p className="text-lg mb-6 text-gray-300">
              $PROCK is the meme coin you didn't know you needed but can't live without. Born in the depths of crypto twitter jokes and forged in the fiery memes of Reddit, Poop Rocket is ready to flush away the competition.
            </p>
            
            <p className="text-lg mb-6 text-gray-300">
              With zero utility but 100% vibes, we're on a mission to bring bathroom humor to the blockchain and make our holders rich in the process. Because let's be honest - meme coins are all about fun, community, and explosively good returns.
            </p>

            <div className="flex items-center space-x-4 p-4 bg-space-purple bg-opacity-20 rounded-lg border border-space-purple">
              <span className="text-3xl">🚽</span>
              <p className="text-prock-neon font-bold">
                No presale. No team tokens. Just pure, unfiltered $PROCK for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
