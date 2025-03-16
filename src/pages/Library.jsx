import { motion } from 'framer-motion';
import { FaLock, FaUnlock } from 'react-icons/fa';

const tiers = [
  { level: 1, name: 'Novice', unlocked: true },
  { level: 2, name: 'Apprentice', unlocked: true },
  { level: 3, name: 'Journeyman', unlocked: false },
  { level: 4, name: 'Expert', unlocked: false },
  { level: 5, name: 'Master', unlocked: false },
  { level: 6, name: 'Grandmaster', unlocked: false },
  { level: 7, name: 'Sage', unlocked: false },
  { level: 8, name: 'Elder', unlocked: false },
  { level: 9, name: 'Legend', unlocked: false },
];

const Library = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-display text-primary mb-8">
          Content Library
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <TierCard key={tier.level} {...tier} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const TierCard = ({ level, name, unlocked }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 
      ${unlocked ? 'border-green-500' : 'border-gray-300'} border-2`}
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-display text-primary">Level {level}</h3>
      {unlocked ? (
        <FaUnlock className="text-green-500" />
      ) : (
        <FaLock className="text-gray-400" />
      )}
    </div>
    <h4 className="text-lg font-semibold mb-2">{name}</h4>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      {unlocked
        ? "Access exclusive content and advanced features"
        : "Unlock this tier to access more content"}
    </p>
    <button
      className={`w-full py-2 px-4 rounded-lg transition-colors ${
        unlocked
          ? 'bg-primary text-white hover:bg-primary-dark'
          : 'bg-gray-300 text-gray-600 cursor-not-allowed'
      }`}
    >
      {unlocked ? 'Access Content' : 'Unlock Tier'}
    </button>
  </motion.div>
);

export default Library;