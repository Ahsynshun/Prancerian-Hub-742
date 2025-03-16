import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useCurrency } from '../contexts/CurrencyContext';
import StoreItem from '../components/StoreItem';

const storeItems = [
  {
    id: 1,
    name: "Legendary Sword",
    price: 1000,
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=500",
    description: "A powerful sword with magical properties",
    owned: false
  },
  {
    id: 2,
    name: "Dragon Mount",
    price: 2500,
    image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=500",
    description: "Ride through the skies on your very own dragon",
    owned: false
  },
  {
    id: 3,
    name: "Royal Armor Set",
    price: 1500,
    image: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?w=500",
    description: "Premium armor fit for a king",
    owned: false
  }
];

const Game = () => {
  const [items, setItems] = useState(storeItems);
  const { balance, spendCoins } = useCurrency();

  const handlePurchase = (item) => {
    if (spendCoins(item.price, `Purchased ${item.name}`)) {
      setItems(items.map(i => i.id === item.id ? { ...i, owned: true } : i));
    }
  };

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
        <div className="grid md:grid-cols-2 gap-8 mb-8">
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
              <p>Prancerian Coins: {balance} PRC</p>
              <p>NFTs Collected: {items.filter(item => item.owned).length}</p>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-display text-primary mb-6">Premium Store</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <StoreItem key={item.id} item={item} onPurchase={handlePurchase} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Game;