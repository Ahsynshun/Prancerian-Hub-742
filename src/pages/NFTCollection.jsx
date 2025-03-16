import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaLock, FaExchangeAlt } from 'react-icons/fa';
import { useCurrency } from '../contexts/CurrencyContext';
import NFTTradeModal from '../components/NFTTradeModal';

const nftCollection = [
  {
    id: 1,
    name: "Golden Prancer",
    rarity: "Legendary",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500",
    description: "The rarest NFT in the Prancerian universe",
    owned: false,
    price: 5000,
    tradeable: true
  },
  {
    id: 2,
    name: "Crystal Bell",
    rarity: "Epic",
    image: "https://images.unsplash.com/photo-1610847499832-918a1c3c6811?w=500",
    description: "A mystical bell with ethereal properties",
    owned: false,
    price: 3000,
    tradeable: true
  },
  {
    id: 3,
    name: "Ancient Scroll",
    rarity: "Rare",
    image: "https://images.unsplash.com/photo-1598714805247-5dd440d87124?w=500",
    description: "Contains secrets of the Prancerian realm",
    owned: false,
    price: 2000,
    tradeable: true
  }
];

const NFTCollection = () => {
  const { balance, spendCoins } = useCurrency();
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);

  const handlePurchase = (nft) => {
    if (spendCoins(nft.price, `Purchased NFT: ${nft.name}`)) {
      // Handle successful purchase
      setSelectedNFT(null);
      setIsTradeModalOpen(false);
    }
  };

  const handleTradeClick = (nft) => {
    setSelectedNFT(nft);
    setIsTradeModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <FaCrown className="text-4xl text-yellow-500 mr-3" />
            <h2 className="text-3xl font-display text-primary">NFT Collection</h2>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg">
            <span className="font-display text-primary">{balance} PRC</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {nftCollection.map((nft) => (
            <NFTCard
              key={nft.id}
              nft={nft}
              onPurchase={handlePurchase}
              onTradeClick={handleTradeClick}
              canAfford={balance >= nft.price}
            />
          ))}
        </div>

        <NFTTradeModal
          nft={selectedNFT}
          isOpen={isTradeModalOpen}
          onClose={() => {
            setSelectedNFT(null);
            setIsTradeModalOpen(false);
          }}
          onConfirm={handlePurchase}
        />
      </motion.div>
    </div>
  );
};

const NFTCard = ({ nft, onPurchase, onTradeClick, canAfford }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative">
        <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover" />
        <div
          className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm ${
            nft.rarity === 'Legendary'
              ? 'bg-yellow-500'
              : nft.rarity === 'Epic'
              ? 'bg-purple-500'
              : 'bg-blue-500'
          } text-white`}
        >
          {nft.rarity}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-display text-primary mb-2">{nft.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {nft.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-lg font-display text-secondary">
            {nft.price} PRC
          </span>
          <div className="flex gap-2">
            {nft.tradeable && (
              <button
                onClick={() => onTradeClick(nft)}
                className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary-dark text-white"
              >
                <FaExchangeAlt />
              </button>
            )}
            <button
              onClick={() => onPurchase(nft)}
              disabled={!canAfford}
              className={`px-4 py-2 rounded-lg flex items-center ${
                canAfford
                  ? 'bg-primary hover:bg-primary-dark text-white'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              <FaLock className="mr-2" />
              {canAfford ? 'Purchase' : 'Insufficient PRC'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NFTCollection;