import { motion } from 'framer-motion';
import { FaCoins } from 'react-icons/fa';
import { useCurrency } from '../contexts/CurrencyContext';

const CurrencyDisplay = () => {
  const { balance } = useCurrency();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg"
    >
      <FaCoins className="text-yellow-500 mr-2" />
      <span className="font-display text-primary">{balance} PRC</span>
    </motion.div>
  );
};

export default CurrencyDisplay;