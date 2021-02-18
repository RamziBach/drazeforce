import Seo from '../components/global/seo/Seo';
import Header from '../components/global/header/Header';
import Landing from '../components/draze/landing/Landing';
import Footer from '../components/global/footer/Footer';

const Draze = ({ price }) => {
  return (
    <>
      <Seo title="DRAZE - $DRAZE" />
      <Header price={price} />
      <Landing />
      <Footer isBottom={true} />
    </>
  );
};

export default Draze;

export async function getServerSideProps() {
  const response = await fetch(
    'https://api.rally.io/v1/creator_coins/DRAZE/price'
  );
  const data = await response.json();
  const price = data.priceInUSD.toString().slice(0, 5);

  return {
    props: { price },
  };
}
