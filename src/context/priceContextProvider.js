import { createContext, useState, useEffect } from 'react';

const priceContext = createContext();

const PriceContextProvider = ({ children }) => {
  const [price, setPrice] = useState('');

  const getPrice = async () => {
    try {
      const response = await fetch(
        'https://api.rally.io/v1/creator_coins/DRAZE/price'
      );
      const data = await response.json();
      const priceData = data.priceInUSD.toString().slice(0, 5);
      setPrice(priceData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrice();
  }, []);

  return (
    <priceContext.Provider value={{ price }}>{children}</priceContext.Provider>
  );
};

export { PriceContextProvider, priceContext };
