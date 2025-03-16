import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import Wallet from './pages/Wallet';
import Library from './pages/Library';
import Assistant from './pages/Assistant';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/library" element={<Library />} />
            <Route path="/assistant" element={<Assistant />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;