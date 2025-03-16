import { motion } from 'framer-motion';
import { FaCoins, FaGamepad, FaMobileAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-display text-primary mb-4">
          Welcome to Prancerian
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          The Next Generation of Cryptocurrency Gaming
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<FaCoins className="text-4xl text-secondary" />}
          title="Prancerian Coin"
          description="Revolutionary cryptocurrency with advanced mining capabilities"
        />
        <FeatureCard
          icon={<FaGamepad className="text-4xl text-secondary" />}
          title="Lord Prancler's Journey"
          description="Immersive RPG experience with NFT rewards"
        />
        <FeatureCard
          icon={<FaMobileAlt className="text-4xl text-secondary" />}
          title="Cross-Platform"
          description="Available on all devices with innovative mining features"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
  >
    <div className="flex flex-col items-center text-center">
      {icon}
      <h3 className="text-xl font-display mt-4 mb-2 text-primary">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </motion.div>
);

export default Home;