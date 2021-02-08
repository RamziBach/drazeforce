import Seo from '../components/global/seo/Seo';
import Header from '../components/global/header/Header';
import Index from '../components/store/index/Index';

const Store = ({ price }) => {
  return (
    <>
      <Seo title="DRAZE - STORE" />
      <Header price={price} />
      <main>
        <Index />
      </main>
    </>
  );
};

export default Store;

export async function getServerSideProps() {
  const response = await fetch(
    'https://api.rally.io/v1/creator_coins/DRAZE/price'
  );
  const data = await response.json();
  const price = data.priceInUSD.slice(0, 5);

  return {
    props: { price },
  };
}
