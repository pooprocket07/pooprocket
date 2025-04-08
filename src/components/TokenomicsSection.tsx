import React from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Legend, 
  Tooltip 
} from 'recharts';

const TokenomicsSection = () => {
  // Tokenomics data
  const data = [
    { name: '💩 Liquidity', value: 30, color: '#39FF14' },
    { name: '🧻 Marketing', value: 25, color: '#FF69B4' },
    { name: '🚀 Dev + Future', value: 25, color: '#8B5CF6' },
    { name: '🔥 Burn', value: 10, color: '#F97316' },
    { name: '🧑‍🤝‍🧑 Community', value: 10, color: '#60A5FA' },
  ];

  const TokenInfoCard = ({ emoji, title, description }: { emoji: string, title: string, description: string }) => (
    <div className="bg-space-darker bg-opacity-60 p-6 rounded-xl border border-gray-800 backdrop-blur-sm hover:border-prock-neon transition-all hover:-translate-y-1">
      <div className="text-4xl mb-3">{emoji}</div>
      <h4 className="text-xl font-bold mb-2 text-white">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );

  return (
    <section className="py-24 relative bg-space-dark" id="tokenomics">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-prock-pink opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-prock-neon opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">$PROCK</span> Tokenomics 
          <span className="ml-2">💩</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Pie Chart */}
          <div className="bg-space-darker bg-opacity-60 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-center text-white">
              Token Distribution
            </h3>
            
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-lg text-gray-300">
                Total Supply: <span className="font-bold text-white">1,000,000,000 $PROCK</span>
              </p>
              <p className="text-prock-neon mt-2">
                1% tax on all transactions - 0.5% to liquidity, 0.5% to marketing
              </p>
            </div>
          </div>
          
          {/* Right side - Token Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TokenInfoCard 
              emoji="💰"
              title="Community Driven"
              description="$PROCK is owned by its community, with no team tokens or presale."
            />
            <TokenInfoCard 
              emoji="🔒"
              title="Liquidity Locked"
              description="Initial liquidity locked for 6 months to ensure stability."
            />
            <TokenInfoCard 
              emoji="🔥"
              title="Regular Burns"
              description="Scheduled token burns to reduce supply and increase value."
            />
            <TokenInfoCard 
              emoji="🚀"
              title="Meme Power"
              description="Leveraging the power of memes to reach the moon and beyond."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
