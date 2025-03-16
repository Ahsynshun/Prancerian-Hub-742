import { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [balance, setBalance] = useState(1000); // Starting balance
  const [transactions, setTransactions] = useState([]);

  const addCoins = (amount, description) => {
    setBalance(prev => prev + amount);
    setTransactions(prev => [...prev, {
      id: Date.now(),
      type: 'credit',
      amount,
      description,
      timestamp: new Date()
    }]);
  };

  const spendCoins = (amount, description) => {
    if (balance >= amount) {
      setBalance(prev => prev - amount);
      setTransactions(prev => [...prev, {
        id: Date.now(),
        type: 'debit',
        amount,
        description,
        timestamp: new Date()
      }]);
      return true;
    }
    return false;
  };

  return (
    <CurrencyContext.Provider value={{ balance, transactions, addCoins, spendCoins }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};