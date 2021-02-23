import Seo from '../components/global/seo/Seo';
import Header from '../components/global/header/Header';
import Landing from '../components/draze/landing/Landing';
import Services from '../components/draze/services/Services';
import Footer from '../components/global/footer/Footer';

const Draze = ({ price }) => {
  return (
    <>
      <Seo title="DRAZE - $DRAZE" />
      <Header price={price} />
      <Landing />
      <Services />
      <Footer />
    </>
  );
};

export default Draze;

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
