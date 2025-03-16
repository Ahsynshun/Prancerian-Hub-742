import { motion } from 'framer-motion';
import { FaWallet, FaExchangeAlt, FaChartLine } from 'react-icons/fa';

const Wallet = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <FaWallet className="text-3xl text-primary mr-3" />
            <h2 className="text-2xl font-display">Wallet Balance</h2>
          </div>
          <div className="text-4xl font-display text-primary mb-4">
            0 PRC
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
            Connect Wallet
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <FaExchangeAlt className="text-3xl text-secondary mr-3" />
            <h2 className="text-2xl font-display">Quick Actions</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors">
              Send
            </button>
            <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors">
              Receive
            </button>
          </div>
        </div>

        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <FaChartLine className="text-3xl text-primary mr-3" />
            <h2 className="text-2xl font-display">Market Activity</h2>
          </div>
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg">
            {/* Chart placeholder */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Wallet;