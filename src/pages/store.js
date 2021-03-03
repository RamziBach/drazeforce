import Seo from '../components/global/seo/Seo';
import Header from '../components/global/header/Header';
import Tip from '../components/store/index/Tip';

const Store = ({ price }) => {
  return (
    <>
      <Seo title="DRAZE - STORE" />
      <Header price={price} />
      <main>
        <Tip />
      </main>
    </>
  );
};

export default Store;

export async function getStaticProps() {
  const response = await fetch(
    'https://api.rally.io/v1/creator_coins/DRAZE/price'
  );
  const data = await response.json();
  const price = data.priceInUSD.toString().slice(0, 5);

  return {
    props: { price },
    revalidate: 30,
  };
}
