import Seo from '../components/global/seo/Seo';
import Header from '../components/global/header/Header';
import Index from '../components/home/index/Index';
import About from '../components/home/about/About';
import Discography from '../components/home/discography/Discography';
import Footer from '../components/global/footer/Footer';

const Home = ({ price }) => {
  return (
    <>
      <Seo title="DRAZE - HOME" />
      <Header price={price} />
      <main>
        <Index />
        <About />
        <Discography />
      </main>
      <Footer />
    </>
  );
};

export default Home;

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
