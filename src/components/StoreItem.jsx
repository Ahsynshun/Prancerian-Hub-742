import { motion } from 'framer-motion';
import { FaCoins, FaLock } from 'react-icons/fa';

const StoreItem = ({ item, onPurchase }) => {
  const { name, price, image, description, owned } = item;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        {owned && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
            Owned
          </div>
        )}
      </div>
      <h3 className="text-xl font-display text-primary mb-2">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-secondary">
          <FaCoins className="mr-1" />
          <span>{price} PRC</span>
        </div>
        <button
          onClick={() => onPurchase(item)}
          disabled={owned}
          className={`px-4 py-2 rounded-lg flex items-center ${
            owned
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-primary hover:bg-primary-dark text-white'
          }`}
        >
          {owned ? (
            'Purchased'
          ) : (
            <>
              <FaLock className="mr-2" /> Buy Now
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default StoreItem;