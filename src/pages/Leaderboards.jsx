import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const leaderboardData = [
  { rank: 1, name: "CryptoKing", score: 15000, achievements: 42 },
  { rank: 2, name: "BlockMaster", score: 12500, achievements: 38 },
  { rank: 3, name: "PranceQueen", score: 11000, achievements: 35 },
  { rank: 4, name: "CoinHunter", score: 9500, achievements: 30 },
  { rank: 5, name: "NFTWizard", score: 8000, achievements: 28 },
  { rank: 6, name: "TokenMaster", score: 7500, achievements: 25 },
  { rank: 7, name: "GameMaster", score: 7000, achievements: 23 },
  { rank: 8, name: "ChainBreaker", score: 6500, achievements: 20 }
];

const Leaderboards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-8">
          <FaTrophy className="text-4xl text-yellow-500 mr-3" />
          <h2 className="text-3xl font-display text-primary">Leaderboards</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <TopPlayers />
          <AchievementStats />
        </div>

        <LeaderboardTable />
      </motion.div>
    </div>
  );
};

const TopPlayers = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-display text-secondary mb-6">Top 3 Players</h3>
    <div className="flex justify-around">
      {leaderboardData.slice(0, 3).map((player, index) => (
        <motion.div
          key={player.rank}
          whileHover={{ scale: 1.05 }}
          className="text-center"
        >
          {index === 0 ? (
            <FaTrophy className="text-4xl text-yellow-500 mx-auto mb-2" />
          ) : index === 1 ? (
            <FaMedal className="text-4xl text-gray-400 mx-auto mb-2" />
          ) : (
            <FaMedal className="text-4xl text-amber-700 mx-auto mb-2" />
          )}
          <div className="font-display text-primary">{player.name}</div>
          <div className="text-gray-600 dark:text-gray-300">{player.score}</div>
        </motion.div>
      ))}
    </div>
  </div>
);

const AchievementStats = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-display text-secondary mb-6">Achievement Stats</h3>
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span>Total Players</span>
        <span className="font-display text-primary">1,234</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Total Achievements</span>
        <span className="font-display text-primary">15,678</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Average Score</span>
        <span className="font-display text-primary">8,765</span>
      </div>
    </div>
  </div>
);

const LeaderboardTable = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-display text-secondary mb-6">Global Rankings</h3>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-gray-200 dark:border-gray-700">
            <th className="pb-4">Rank</th>
            <th className="pb-4">Player</th>
            <th className="pb-4">Score</th>
            <th className="pb-4">Achievements</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player) => (
            <motion.tr
              key={player.rank}
              whileHover={{ scale: 1.01 }}
              className="border-b border-gray-100 dark:border-gray-700"
            >
              <td className="py-4">{player.rank}</td>
              <td className="py-4 font-display text-primary">{player.name}</td>
              <td className="py-4">{player.score}</td>
              <td className="py-4">
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-2" />
                  {player.achievements}
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Leaderboards;