import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ContractSection = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "5Nr2cd5YvM9PXGeqUiUbLQea1eZuNhWzF4azCJzpump"; // Replace with actual contract address

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="py-16 bg-space-darker relative" id="contract">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-prock-pink opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-prock-neon opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Contract Address</span>
          </h2>
          
          <div 
            className="bg-space-dark border border-gray-800 rounded-xl p-4 flex items-center justify-between gap-4 hover:border-prock-neon transition-colors group cursor-pointer"
            onClick={copyToClipboard}
          >
            <div className="flex-1 font-mono text-sm md:text-base text-gray-300 break-all">
              {contractAddress}
            </div>
            
            <button 
              className="p-2 rounded-lg bg-space-darker border border-gray-800 hover:border-prock-neon transition-all"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5 text-prock-neon" />
              )}
            </button>
          </div>
          
          <p className="text-center text-gray-400 text-sm mt-4">
            Click to copy contract address
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContractSection; 
