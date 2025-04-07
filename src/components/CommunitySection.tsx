import React from 'react';
import { Twitter, MessageCircle } from 'lucide-react';

const CommunitySection = () => {
  // Social media links data
  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/PoopRocket07",
      color: "bg-gradient-to-br from-blue-400 to-blue-500",
      label: "Follow us on Twitter",
      emoji: "🐦"
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      url: "https://t.me/poop_rocket",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      label: "Join our Telegram",
      emoji: "💬"
    }
  ];

  return (
    <section className="py-20 bg-space-dark relative" id="community">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-prock-pink opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-prock-neon opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">
          Join the <span className="gradient-text">Poop Troop</span>
          <span className="ml-2">💩🚀</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300">
            Connect with our growing community of $PROCK enthusiasts. Share memes, get updates, and be part of the next big meme coin revolution!
          </p>
        </div>
        
        {/* Social Media Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            
            return (
              <a 
                key={index}
                href={social.url}
                className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-prock-neon transition-all duration-300 hover:-translate-y-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`${social.color} absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-space-darker mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {social.name} {social.emoji}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">{social.label}</p>
                  
                  <span className="text-prock-neon font-bold group-hover:underline">
                    Connect Now
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
