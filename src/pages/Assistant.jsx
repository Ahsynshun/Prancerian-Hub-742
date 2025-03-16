import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';

const Assistant = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle message submission
    setMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <div className="flex items-center mb-6">
          <FaRobot className="text-3xl text-primary mr-3" />
          <h2 className="text-2xl font-display">AlteredDimension Assistant</h2>
        </div>

        <div className="h-96 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6 p-4 overflow-y-auto">
          <div className="flex items-start mb-4">
            <div className="bg-primary text-white rounded-lg py-2 px-4 max-w-3/4">
              Hello! I'm AlteredDimension, your AI assistant. How can I help you today?
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything about Prancerian..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center"
          >
            <FaPaperPlane className="mr-2" />
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Assistant;