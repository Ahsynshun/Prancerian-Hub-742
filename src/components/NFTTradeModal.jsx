import { motion } from 'framer-motion';
import { FaExchangeAlt, FaTimes } from 'react-icons/fa';
import { useCurrency } from '../contexts/CurrencyContext';

const NFTTradeModal = ({ nft, isOpen, onClose, onConfirm }) => {
  const { balance } = useCurrency();
  
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-display text-primary">Trade NFT</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>

        <div className="mb-6">
          <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h4 className="font-display text-lg mb-2">{nft.name}</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{nft.description}</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Your Balance</p>
            <p className="font-display text-primary">{balance} PRC</p>
          </div>
          <FaExchangeAlt className="text-2xl text-secondary" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">NFT Price</p>
            <p className="font-display text-primary">{nft.price} PRC</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(nft)}
            className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
          >
            Confirm Trade
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NFTTradeModal;