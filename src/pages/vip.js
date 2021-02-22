import Seo from '../components/global/seo/Seo';
import Header from '../components/global/header/Header';
import Footer from '../components/global/footer/Footer';

const Vip = ({ price }) => {
  return (
    <>
      <Seo title="DRAZE - VIP" />
      <Header price={price} />
      <Footer isBottom={true} />
    </>
  );
};

export default Vip;

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
