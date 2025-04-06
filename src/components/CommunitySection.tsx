
import React from 'react';
import { Twitter, MessageCircle, Github } from 'lucide-react';

const CommunitySection = () => {
  // Social media links data
  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: "#",
      color: "bg-gradient-to-br from-blue-400 to-blue-500",
      label: "Follow us on Twitter",
      emoji: "🐦"
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      url: "#",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      label: "Join our Telegram",
      emoji: "💬"
    },
    {
      name: "Discord",
      icon: Github, // Using Github as a substitute for Discord in lucide-react
      url: "#",
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
      label: "Join our Discord",
      emoji: "🎮"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
        
        {/* Newsletter Subscription */}
        <div className="max-w-2xl mx-auto mt-16 p-8 rounded-xl bg-space-darker border border-gray-800">
          <h3 className="text-2xl font-bold mb-4 text-white text-center">
            Get $PROCK Updates 📬
          </h3>
          
          <p className="text-gray-300 mb-6 text-center">
            Stay up to date with the latest news, memes, and updates from the $PROCK team.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg bg-space-dark border border-gray-700 focus:outline-none focus:ring-2 focus:ring-prock-neon text-white"
              required
            />
            <button 
              type="submit"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-prock-neon to-green-400 text-space-dark font-bold hover:shadow-[0_0_15px_rgba(57,255,20,0.4)] transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
