import { motion } from 'framer-motion';
import React from 'react';

const Game = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <h2 className="text-3xl font-display text-primary mb-6">
          Lord Prancler's Journey: The Missing Bells
        </h2>
        
        <div className="aspect-w-16 aspect-h-9 bg-gray-900 rounded-lg mb-8">
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">Game Loading...</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-display text-secondary mb-4">
              Game Features
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• RPG-style gameplay inspired by Final Fantasy X</li>
              <li>• Earn Prancerian Coins through achievements</li>
              <li>• Collect unique NFT rewards</li>
              <li>• Engage in strategic battles</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-display text-secondary mb-4">
              Player Stats
            </h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>Level: 1</p>
              <p>Prancerian Coins: 0</p>
              <p>NFTs Collected: 0</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Game;