
import React from 'react';

const RoadmapSection = () => {
  // Roadmap data
  const roadmapItems = [
    {
      phase: "🚽 Flush Phase",
      title: "Launch & Setup",
      items: [
        "Contract deployment",
        "Website & socials launch",
        "Initial marketing push",
        "Community building",
        "1,000 holders milestone"
      ]
    },
    {
      phase: "🚀 Launch Phase",
      title: "Growth & Expansion",
      items: [
        "CoinGecko & CoinMarketCap listings",
        "Massive meme campaign",
        "Community contests & airdrops",
        "Influencer partnerships",
        "10,000 holders milestone"
      ]
    },
    {
      phase: "🧻 Wipe Phase",
      title: "Building & Developing",
      items: [
        "CEX listings",
        "Brand partnerships",
        "NFT collection launch",
        "Cross-chain expansion",
        "50,000 holders milestone"
      ]
    },
    {
      phase: "🌕 Full Wipeout",
      title: "Moon Mission",
      items: [
        "Major exchange listings",
        "$PROCK merchandise store",
        "DAO governance implementation",
        "Metaverse integration",
        "100,000+ holders milestone"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-space-darker to-space-dark relative" id="roadmap">
      {/* Background toilet paper decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-[200%] bg-white rotate-45"></div>
        <div className="absolute -top-20 left-1/3 w-40 h-[200%] bg-white rotate-45"></div>
        <div className="absolute -top-20 right-1/4 w-40 h-[200%] bg-white rotate-45"></div>
        <div className="absolute -top-20 -right-20 w-40 h-[200%] bg-white rotate-45"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="section-title">
          Roadmap to the <span className="gradient-text">Toiletverse</span>
          <span className="ml-2">🧻</span>
        </h2>

        <div className="flex flex-col items-center">
          {/* Roadmap styled like toilet paper roll */}
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-prock-neon to-prock-pink rounded-full"></div>

            {/* Roadmap Items */}
            {roadmapItems.map((item, index) => (
              <div 
                key={index}
                className={`mb-16 relative ${index % 2 === 0 ? 'md:pr-10 md:text-right md:ml-auto md:mr-1/2 md:-translate-x-8' : 'md:pl-10 md:ml-1/2 md:translate-x-8'} transition-all hover:-translate-y-1`}
              >
                {/* Toilet Paper Roll */}
                <div 
                  className={`absolute top-0 ${index % 2 === 0 ? 'right-0 md:-right-8' : 'left-0 md:-left-8'} w-16 h-16 bg-white rounded-full border-8 border-gray-200 flex items-center justify-center z-20`}
                >
                  <span className="text-2xl">{item.phase.split(' ')[0]}</span>
                </div>
                
                {/* Content Box */}
                <div className="md:w-[calc(100%-3rem)] bg-space-darker p-6 rounded-xl border border-gray-800 backdrop-blur-sm hover:border-prock-pink">
                  <h3 className="text-2xl font-bold mb-2 text-prock-pink">{item.phase}</h3>
                  <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
                  
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-prock-neon mr-2">→</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
