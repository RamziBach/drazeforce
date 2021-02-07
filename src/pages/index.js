import Seo from '../components/global/seo/Seo';
import Header from '../components/global/header/Header';

const Home = ({ price }) => {
  return (
    <>
      <Seo title="Draze - Home" />
      <Header price={price} />
    </>
  );
};

export default Home;

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
