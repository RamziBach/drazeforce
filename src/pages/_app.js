import { PriceContextProvider } from '../context/priceContextProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <PriceContextProvider>
      <Component {...pageProps} />
    </PriceContextProvider>
  );
}

export default MyApp;
