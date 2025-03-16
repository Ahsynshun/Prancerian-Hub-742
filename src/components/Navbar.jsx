import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWallet, FaGamepad, FaBook, FaRobot, FaTrophy, FaCrown } from 'react-icons/fa';
import CurrencyDisplay from './CurrencyDisplay';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-background-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-display text-primary"
              >
                Prancerian
              </motion.div>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <CurrencyDisplay />
            <NavLink to="/game" icon={<FaGamepad />} text="Game" />
            <NavLink to="/wallet" icon={<FaWallet />} text="Wallet" />
            <NavLink to="/library" icon={<FaBook />} text="Library" />
            <NavLink to="/nft" icon={<FaCrown />} text="NFTs" />
            <NavLink to="/leaderboards" icon={<FaTrophy />} text="Leaderboards" />
            <NavLink to="/assistant" icon={<FaRobot />} text="AI Assistant" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary"
  >
    <motion.div whileHover={{ scale: 1.1 }} className="flex items-center">
      {icon}
      <span className="ml-2">{text}</span>
    </motion.div>
  </Link>
);

export default Navbar;