import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-space-darker py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img 
                src="/assets/logo.png"
                alt="Poop Rocket Logo" 
                className="h-12 mr-3" 
              />
              <span className="text-2xl font-bold gradient-text">$PROCK</span>
            </div>
            <p className="text-gray-400 mt-2">
              From the toilet to the moon since 2025
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-prock-neon">Whitepaper</a></li>
                <li><a href="#" className="text-gray-400 hover:text-prock-neon">Contract</a></li>
                <li><a href="#" className="text-gray-400 hover:text-prock-neon">Audit</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-prock-neon">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-prock-neon">Telegram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-prock-neon">Discord</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-bold mb-4">Trading</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-prock-neon">DEX</a></li>
                <li><a href="#" className="text-gray-400 hover:text-prock-neon">Chart</a></li>
                <li><a href="#" className="text-gray-400 hover:text-prock-neon">CoinMarketCap</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Poop Rocket ($PROCK). All rights reserved.
            </p>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-500 text-xs italic">
              Not financial advice, just bathroom humor. The currency of choice for intergalactic toilet transactions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
